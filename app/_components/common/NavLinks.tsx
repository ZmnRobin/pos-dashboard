'use client'
import {
  UserGroupIcon,
  HomeIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  PrinterIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';


const admin = [
  {name: 'Admin', href: '/admin', icon: UserCircleIcon },
  {name: 'Users', href: '/admin/users',icon: UserGroupIcon,},
  {name: 'Setting', href: '/setting', icon: Cog6ToothIcon },
  {name: 'Pos', href: '/pos', icon: PrinterIcon },
];
const accounts = [
  {name: 'Accounts', href: '/accounts',icon: UserCircleIcon,},
  {name: 'Setting', href: '/setting', icon: Cog6ToothIcon },
];
const seller = [
  {name: 'Seller', href: '/seller',icon: UserCircleIcon,},
  {name: 'Setting', href: '/setting', icon: Cog6ToothIcon },
  {name: 'Pos', href: '/pos', icon: PrinterIcon },
];

export default function NavLinks() {
  const pathname=usePathname();
  const { data:session } = useSession();

  // Define the links based on the user's role using a ternary operator
  const links = session?.user.role === "admin" ? admin : session?.user.role === "accounts" ? accounts : session?.user.role === "seller"? seller : null;
  
  return (
    <>
      {links?.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}