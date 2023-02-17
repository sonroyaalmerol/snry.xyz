
import PageLayout from '@/components/PageLayout'
import { Heading } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Son Roy Almerol | snry.xyz"
        description="Son Roy Almerol's personal website."
      />
      <PageLayout>
        <Heading>Projects</Heading>
      </PageLayout>
    </>
  )
}
