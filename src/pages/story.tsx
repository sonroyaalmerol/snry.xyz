import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Box, Heading } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

export default function Story() {
  return (
    <>
      <NextSeo
        title="My Story"
        description="Learn about my experience as a Software Engineer and discover how I turned my passion for Full-stack development into a successful career."
        openGraph={{
          title: 'Son Roy Almerol (About) | snry.xyz',
          description: 'Learn about my experience as a Software Engineer and discover how I turned my passion for Full-stack development into a successful career.',
        }}
      />
      <PageLayout>
        <Box p={2} mt="80px">
          <Heading>My Story</Heading>
        </Box>
      </PageLayout>
    </>
  );
}
