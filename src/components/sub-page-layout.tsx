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
    path: string;
    subTabs: SubTab[];
}

const tabs: Tab[] = [

    {
        title: "Posts",
        path: "/dashboard/posts",
        subTabs: [
            { path: "/dashboard/posts/create", title: "Create Post" },
            { path: "/dashboard/posts/list", title: "Post List" },
            { path: "/dashboard/posts/drafts", title: "Drafts" },
            { path: "/dashboard/posts/scheduled", title: "Scheduled Posts" },
            { path: "/dashboard/posts/analytics", title: "Post Analytics" }
        ]
    },
    {
        title: "Settings",
        path: "/dashboard/settings",
        subTabs: [
            { path: "/dashboard/settings/general", title: "General Settings" },
            { path: "/dashboard/settings/seo", title: "SEO Settings" },
            { path: "/dashboard/settings/users", title: "User Management" }
        ]
    },
    {
        title: "Analytics",
        path: "/dashboard/analytics",
        subTabs: [
            { path: "/dashboard/analytics/traffic", title: "Traffic Overview" },
            { path: "/dashboard/analytics/audience", title: "Audience Insights" },
            { path: "/dashboard/analytics/engagement", title: "Engagement Reports" }
        ]
    },
    {
        title: "Support",
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
                <h1 className="text-3xl font-semibold">{activeTab?.title}</h1>
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
