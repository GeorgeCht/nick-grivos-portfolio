import localFont from 'next/font/local';
import Noise from './Noise';
import Header from './Header';
import Footer from './Footer';
import ImageTrail from './ImageTrail';

const vogueNeue =     localFont({ src: '../../public/fonts/VogueNeue_v0.9-VF.ttf' });
const TTTrailers =    localFont({ src: '../../public/fonts/TTTrailersVariable.ttf' });
const PPRightSerif =  localFont({ src: '../../public/fonts/PPRightSerif_Narrow.otf' });

type Props = {
  children: JSX.Element
}

const MainLayout: React.FC<Props> = ({children}) => {
  
  return (
    <>
      <style jsx global>
        {`
          .vogueneue { font-family: ${vogueNeue.style.fontFamily}; }
          .tttrailers { font-family: ${TTTrailers.style.fontFamily}; }
          .pprightserif { font-family: ${PPRightSerif.style.fontFamily}; }
        `}
      </style>
      <div className={'app__wrapper flex flex-col min-h-screen'}>
        
        <Header />
        <main className={'flex-auto flex flex-col'}>
          <ImageTrail />
          {children}
        </main>
        <Footer />
        
      </div>
      <Noise />
    </>
  )
}

export default MainLayout;