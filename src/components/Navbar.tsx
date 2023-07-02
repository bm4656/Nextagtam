'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';

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
    <div className=''>
      <Link href={'/'}>Nextagram</Link>
      <nav>
        <ul>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {path === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
