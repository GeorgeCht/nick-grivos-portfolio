import { useEffect } from 'react'
import { gsap } from 'gsap';
import Link from 'next/link';

export default function Home() {

  const DOMItems = { 
    title:       '.intro-page h4.title span', 
    subtitle:    '.intro-page p.subtitle',
  }

  // const timeline = gsap.timeline();
  const timeline = gsap.timeline();

  useEffect(() => {

    gsap.set(DOMItems.title, { y: 270 })

    let easing = 'quint.easeInOut'

    setTimeout(() => {

      gsap.to(DOMItems.title, {
        y: 0,
        duration: .875,
        ease: easing,
        delay: .285
      })
      
    }, 100);


  }, []);

  return (
    <>
      <section className={'intro-page flex flex-col items-center justify-center py-1 px-4 md:px-12 md:py-10 lg:px-16 lg:py-12 flex-auto'}>
        <div className={'flex flex-col items-center justify-center'}>
          
          {/* <h4 className="title relative inline-block text-[230px] leading-none overflow-hidden h-auto">
            <span className="title inline-block relative pprightserif text-white uppercase text-center">
              Visually told
            </span>
          </h4> */}

          <p className={'text__paragraph1 vogueneue'}>
            Full website is coming soon!
          </p>
          <h2 className={'text__header1 tttrailers mt-2'}>
            Your story
          </h2>
          <h2 className={'text__header2 pprightserif -mt-10 mb-2 z-[9999]'}>
            Visually told
          </h2>
          <Link href={'/'} className={'button__cta'}>
            <p className={'text__paragraph1 vogueneue'}>
              Having a project in mind?
            </p>
          </Link>
          
        </div>
      </section>
    </>
  )
}
