// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nlp from 'compromise/three'
import stats, { StatsMethods } from 'compromise-stats'
import { removeStopwords } from 'stopword'
import thesaurus, { TypeOfThesaurus } from 'word-thesaurus'

nlp.plugin(stats)

type Data = {
  results: any
}

const projects = [
  {
    id: 1,
    description: 'A project that basically does nothing.',
  },
  {
    id: 2,
    description: 'This project is a mobile app for tracking expenses and budgeting.',
  },
  {
    id: 3,
    description: 'This project is a social media app similar to Facebook.',
  },
];

const processString = (str: string, withSynonyms = true) => {
  const doc = nlp(removeStopwords(str.split(' ')).join(' '))
  let terms: string[] = doc.normalize().terms().out('array')
  
  if (withSynonyms) {
    terms = terms.reduce((acc, term) => {
      const syns: TypeOfThesaurus[] = thesaurus.find(term) || []
      const words = syns.reduce((arr, syn: TypeOfThesaurus, idx) => {
        if (thesaurus.posName(syn.pos).toLowerCase() === 'noun' && idx < 1) {
          return arr.concat(syn.raw)
        }

        return arr
      }, [] as string[])

      return acc.concat([term, ...words])
    }, [] as string[])
  }

  terms = [...new Set(
    nlp(terms.join(' '))
      .compute('root')
      .text()
      .split(' ').map(term => term.toLowerCase())
  )]

  return terms.join(' ').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
}

const getTfidfArray = (doc: string) => {
  const nlpDoc = nlp<StatsMethods>(doc)
  const stats = nlpDoc.tfidf()

  return stats.map((stat: [string, number]) => {
    return stat[1]
  })
}

// Computes the cosine similarity between two vectors of tf-idf values represented as arrays.
const cosineSimilarity = (a: number[], b: number[]): number => {
  const dotProduct = a.reduce((acc, value, i) => acc + value * b[i], 0);
  const normA = Math.sqrt(a.reduce((acc, value) => acc + value ** 2, 0));
  const normB = Math.sqrt(b.reduce((acc, value) => acc + value ** 2, 0));
  return dotProduct / (normA * normB);
}

// Computes the Jaccard similarity between two sets of terms represented as arrays.
const jaccardSimilarity = (a: string[], b: string[]): number => {
  const intersection = new Set(a.filter(x => b.includes(x)));
  const union = new Set([...a, ...b]);
  return intersection.size / union.size;
}

// Computes the Euclidean distance between two vectors of tf-idf values represented as arrays.
const euclideanDistance = (a: number[], b: number[]): number => {
  const squaredDistances = a.map((value, i) => (value - b[i]) ** 2);
  const sumSquaredDistances = squaredDistances.reduce((acc, value) => acc + value, 0);
  return Math.sqrt(sumSquaredDistances);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req.query as { query: string }

  if (query === undefined) return res.status(400).json({ results: [] })

  const searchTerms = processString(query, false)
  const searchTfidfArray = getTfidfArray(searchTerms)
  console.log(searchTerms)
  
  const projectsWithTfidfStats = projects.map(project => {
    const descriptionTerms = processString(project.description, true)
    console.log(descriptionTerms)
    const descriptionTfidfArray = getTfidfArray(descriptionTerms)

    return {
      ...project,
      relevance: {
        jaccard: jaccardSimilarity(searchTerms.split(' '), descriptionTerms.split(' ')),
        cosine: cosineSimilarity(searchTfidfArray, descriptionTfidfArray),
        euclidean: euclideanDistance(searchTfidfArray, descriptionTfidfArray),
      },
    }
  })

  res.status(200).json({
    results: projectsWithTfidfStats
      .sort((a, b) => b.relevance.cosine - a.relevance.cosine)
      .sort((a, b) => b.relevance.euclidean - a.relevance.euclidean)
      .sort((a, b) => b.relevance.jaccard - a.relevance.jaccard)
  })
}
