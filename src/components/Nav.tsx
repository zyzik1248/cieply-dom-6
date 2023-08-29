'use client'

import Link from 'next/link';
import { usePathname,  useRouter} from 'next/navigation';

interface Props {
    name: string
    url: string
}

const Nav: React.FC<Props> = ({name, url}) =>{
    const pathname = usePathname()
    const isActive =  pathname === url

    return(
        <li className={`${isActive ? "" : ""} text-white text-base relative font-bold py-normal xl:py-normal xl:text-center`}>
            <Link className='py-normal' passHref href={url}>{name}</Link>
        </li>
    )
}

export default Nav