'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import ColorButton from './ColorButton';

const menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];
export default function Navbar() {
  const path = usePathname();
  return (
    <div className='flex justify-between items-center px-6'>
      <Link href={'/'} className='text-3xl font-bold'>
        Nextagram
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {path === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          <ColorButton text='Sign In' clickFn={() => {}} />
        </ul>
      </nav>
    </div>
  );
}
