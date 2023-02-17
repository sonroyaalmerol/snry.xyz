import Landing from '@/components/Home/Landing'
import PageLayout from '@/components/PageLayout'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Son Roy Almerol | snry.xyz"
        description="Son Roy Almerol's personal website."
      />
      <PageLayout>
        <Landing />
      </PageLayout>
    </>
  )
}
