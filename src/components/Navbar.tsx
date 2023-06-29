'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';

const menu = [
  {
    href: '/',
    icon: <AiOutlineHome />,
    clickedIcon: <AiFillHome />,
  },
  {
    href: '/search',
    icon: <RiSearchLine />,
    clickedIcon: <RiSearchFill />,
  },
  {
    href: '/create',
    icon: <BsPlusSquare />,
    clickedIcon: <BsPlusSquareFill />,
  },
];
export default function Navbar() {
  const path = usePathname();
  return (
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
  );
}
