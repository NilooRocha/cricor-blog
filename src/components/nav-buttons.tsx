'use client'

import { cn } from '@/lib/utils';
import { Handshake, House, LineChart, Newspaper, Settings } from 'lucide-react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from 'react';
import { SheetClose } from './ui/sheet';

interface LinkItem {
    path: string;
    icon: any;
    title: string;
}

const links: LinkItem[] = [
    {
        path: '/dashboard',
        icon: <House className="h-4 w-4 md:h-5 md:w-5" />,
        title: 'Dashboard'
    },
    {
        path: '/analytics',
        icon: <LineChart className="h-4 w-4 md:h-5 md:w-5" />,
        title: 'Analytics'
    },
    {
        path: '/posts',
        icon: <Newspaper className="h-4 w-4 md:h-5 md:w-5" />,
        title: 'Posts'
    },
    {
        path: '/support',
        icon: <Handshake className="h-4 w-4 md:h-5 md:w-5" />,
        title: 'Support'
    },
    {
        path: '/settings',
        icon: <Settings className="h-4 w-4 md:h-5 md:w-5" />,
        title: 'Settings'
    }
];

export default function NavButtons(props: any) {
    const pathname = usePathname();

    const [SheetCloseWrapper, sheetCloseWrapperProps] = props.withSheetClose
        ? [SheetClose, { asChild: true }]
        : [React.Fragment, {}];

    return (
        <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 mt-6">
                {links.map((link: LinkItem, index: number) => {
                    return (
                        <SheetCloseWrapper {...sheetCloseWrapperProps} key={index}>
                            <Link
                                href={link.path === "/dashboard" ? link.path : `/dashboard${link.path}`}
                                className={
                                    cn(pathname === link.path || pathname.startsWith(`/dashboard${link.path}`)
                                        ? "flex items-center mx-[-0.65rem] md:mx-0 md:gap-3 gap-4 md:rounded-lg rounded-xl bg-muted px-3 py-2 md:text-primary text-primary hover:text-foreground transition-all"
                                        : "flex items-center mx-[-0.65rem] md:mx-0 md:gap-3 gap-4 md:rounded-lg rounded-xl px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    )
                                }
                            >
                                {link.icon}
                                {link.title}
                            </Link>
                        </SheetCloseWrapper>
                    );
                })}
            </nav>
        </div>
    );
}
