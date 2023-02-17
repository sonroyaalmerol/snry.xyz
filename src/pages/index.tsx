import Landing from '@/components/Home/Landing'
import PageLayout from '@/components/PageLayout'
import Stats from '@/components/Stats'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home"
        description="As a Software Engineer, my portfolio website showcases my expertise in Full-stack development. Discover my dynamic projects and cutting-edge software solutions today."
        openGraph={{
          title: 'Son Roy Almerol | snry.xyz',
          description: 'As a Software Engineer, my portfolio website showcases my expertise in Full-stack development. Discover my dynamic projects and cutting-edge software solutions today.',
        }}
      />
      <PageLayout>
        <Landing />
        <Stats />
      </PageLayout>
    </>
  )
}
