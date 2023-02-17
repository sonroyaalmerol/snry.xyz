import PageLayout from '@/components/PageLayout'
import { Box, Heading } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Son Roy Almerol | snry.xyz"
        description="Son Roy Almerol's personal website."
      />
      <PageLayout>
        <Box p={2} mt="80px">
          <Heading>Projects</Heading>
        </Box>
      </PageLayout>
    </>
  )
}
