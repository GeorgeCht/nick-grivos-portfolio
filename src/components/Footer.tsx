import Link from 'next/link';
import LinkX from './LinkX';

const Footer = () => {
  return (
    <footer className={'flex relative flex-row w-full justify-center z-[9999] md:p-10 p-5'}>
      <div className={'w-1/3 self-center'}>
        <LinkX href={'#'} text='(LINKEDIN)' className={'text__paragraph1 vogueneue'}>
          (LINKEDIN)
        </LinkX>
      </div>
      <div className={'w-1/3 self-center text-center'}>
        <LinkX href={'#'} text='(INSTAGRAM)' className={'text__paragraph1 text-center vogueneue'}>
          (INSTAGRAM)
        </LinkX>
      </div>
      <div className={'w-1/3 self-center float-right text-right'}>
        <LinkX href={'#'} text='(BEHANCE)' className={'text__paragraph1 vogueneue'}>
          (BEHANCE)
        </LinkX>
      </div>
    </footer>
  )
}

export default Footer;