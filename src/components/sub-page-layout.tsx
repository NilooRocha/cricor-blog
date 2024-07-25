'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from 'react';

interface SubTab {
    path: string;
    title: string;
}

interface Tab {
    title: string;
    subtitle: string;
    path: string;
    subTabs: SubTab[];
}

const tabs: Tab[] = [

    {
        title: "Posts",
        subtitle: "Manage your Posts and view their  performance.",
        path: "/dashboard/posts",
        subTabs: [
            { path: "/dashboard/posts/add", title: "Add New Post" },
            { path: "/dashboard/posts/list", title: "Post List" },
            { path: "/dashboard/posts/drafts", title: "Drafts" },
            { path: "/dashboard/posts/scheduled", title: "Scheduled Posts" },
            { path: "/dashboard/posts/analytics", title: "Post Analytics" }
        ]
    },
    {
        title: "Settings",
        subtitle: "Manage your Settings",
        path: "/dashboard/settings",
        subTabs: [
            { path: "/dashboard/settings/general", title: "General Settings" },
            { path: "/dashboard/settings/seo", title: "SEO Settings" },
            { path: "/dashboard/settings/users", title: "User Management" }
        ]
    },
    {
        title: "Analytics",
        subtitle: "Manage your Analytics",
        path: "/dashboard/analytics",
        subTabs: [
            { path: "/dashboard/analytics/traffic", title: "Traffic Overview" },
            { path: "/dashboard/analytics/audience", title: "Audience Insights" },
            { path: "/dashboard/analytics/engagement", title: "Engagement Reports" }
        ]
    },
    {
        title: "Support",
        subtitle: "Contact us to help",
        path: "/dashboard/support",
        subTabs: [
            { path: "/dashboard/support/help", title: "Help Center" },
            { path: "/dashboard/support/contact", title: "Contact Support" }
        ]
    }
];

export default function SubPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname()

    const activeTab = tabs.find(tab => pathname.startsWith(tab.path));


    return (
        <>
            <div className="mx-auto grid w-full max-w-6xl gap-2">
                <p className="text-sm text-muted-foreground md:hidden block" >{activeTab?.subtitle}</p>
                <h1 className="text-3xl font-semibold">{activeTab?.title}</h1>
                <p className="text-sm text-muted-foreground hidden md:block" >{activeTab?.subtitle}</p>
            </div>
            <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <nav className="grid gap-4 text-sm text-muted-foreground">
                    {activeTab && activeTab.subTabs.map(subTab => (
                        <Link key={subTab.path} href={subTab.path} className={subTab.path === pathname ? "font-semibold text-primary" : ""}>
                            {subTab.title}
                        </Link>

                    ))}
                </nav>
                <div className="grid gap-6">
                    {children}
                </div>
            </div>
        </>
    );
}
