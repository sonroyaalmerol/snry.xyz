import PageLayout from '@/components/PageLayout'
import { Box, Heading } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects"
        description="From game-changing applications to innovative web designs, discover the exciting range of dynamic projects I have created as a Full-stack developer."
        openGraph={{
          title: 'Son Roy Almerol (Projects) | snry.xyz',
          description: 'From game-changing applications to innovative web designs, discover the exciting range of dynamic projects I have created as a Full-stack developer.',
        }}
      />
      <PageLayout>
        <Box p={2} mt="80px">
          <Heading>Projects</Heading>
        </Box>
      </PageLayout>
    </>
  )
}
