import PageLayout from '@/components/PageLayout'
import { Box, Heading } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

export default function Resume() {
  return (
    <>
      <NextSeo
        title="Home"
        description="Download my resume and explore my Full-stack development expertise as a Software Engineer on my Resume page."
        openGraph={{
          title: 'Son Roy Almerol (Resume) | snry.xyz',
          description: 'Download my resume and explore my Full-stack development expertise as a Software Engineer on my Resume page.',
        }}
      />
      <PageLayout>
        <Box p={2} mt="80px">
          <Heading>Resume</Heading>
        </Box>
      </PageLayout>
    </>
  )
}
