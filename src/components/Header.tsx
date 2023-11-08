import Link from 'next/link';
import GrivosLogo from '@/components/GrivosLogo';
import LinkX from './LinkX';

const Header = () => {
  return (
    <header className={'flex relative flex-row w-full justify-center z-[9999] p-10'}>
      <div className={'w-1/3 self-center'}>
        <Link href={'/'}>
          <GrivosLogo />
        </Link>
      </div>
      <div className={'w-1/3 self-center'}>
        <p className="text__paragraph1 text-center vogueneue cursor-default shake_on_hover">
          Nick Grivos
        </p>
      </div>
      <div className={'w-1/3 self-center float-right text-right'}>
        <LinkX href={'mailto:nickgrivos@gmail.com'} text='(CONTACT)' className={'text__paragraph1 vogueneue'}>
          (CONTACT)
        </LinkX>
      </div>
    </header>
  )
}

export default Header;