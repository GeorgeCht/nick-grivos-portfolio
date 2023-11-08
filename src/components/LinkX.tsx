import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import clsx from 'clsx';

type Props = {
  href: Url
  text: string
  className?: string
  children: string
}

const LinkX: React.FC<Props> = ({href, text, className, children}) => {
  
  return (
    <Link href={href} className={clsx('linkflip relative inline-block overflow-hidden h-auto cursor-pointer', className)}>
      <span data-text={text}>
        {children}
      </span>
    </Link>
  )
}
// text__paragraph1 vogueneue
export default LinkX;