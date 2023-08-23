'use client'
import Link from 'next/link';
import React from 'react'
import {usePathname} from 'next/navigation'
export default function Header() {
    const pathname= usePathname()
    const navItems = [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Faq",
        href: "/about/faq",
      },
      {
        label: "Post",
        href: "/posts",
      },
      {
        label: "Crud",
        href: "/crud",
      },
    ];
  return (
    <div>
      <ul className='flex gap-5 py-5 items-center justify-center'>
        {navItems.map((link, i) => (
          <li className="" key={i}>
            <Link className={pathname=== `${link.href}` ? 'text-white bg-primary px-4 py-2 font-bold rounded-full' : ''} href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
