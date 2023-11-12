import Head from 'next/head';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Head>
        <title>
          Nick Grivos Portfolio | © 2023
        </title>
        <meta
          name='description'
          content='Discover the artistry of Nick Grivos, a visionary brand designer weaving narratives into visual identities. Elevate your brand with Nicks expertise, where creativity meets strategy for a timeless and impactful brand presence.'
          key='desc'
        />
      </Head>
      <section className={'intro-page flex flex-col items-center justify-center py-1 px-4 md:px-12 md:py-10 lg:px-16 lg:py-12 flex-auto'}>
        <div className={'flex flex-col items-center justify-center'}>

          <p className={'text__paragraph1 vogueneue text-center'}>
            Full website is coming soon!
          </p>
          <h2 className={'text__header1 tttrailers text-center mt-2'}>
            Your story
          </h2>
          <h2 className={'text__header2 pprightserif text-center md:-mt-10 -mt-4 mb-2 z-[9999]'}>
            Visually told
          </h2>
          <Link href={'mailto:nickgrivos@gmail.com'} className={'button__cta'}>
            <p className={'text__paragraph1 vogueneue text-center'}>
              Let’s work together!
            </p>
          </Link>
          
        </div>
      </section>
    </>
  )
}
