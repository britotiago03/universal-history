'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar, Footer, Button } from '@universal-history/ui';

export default function NotFound() {
    // Navigation items
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Explore Civilizations', href: '/civilizations' },
        { label: 'Explore Infrastructures', href: '/infrastructures' },
        { label: 'Explore Historical Figures', href: '/figures' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar
                items={navItems}
                LinkComponent={Link}
            />

            <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full text-center">
                    <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
                    <h2 className="mt-4 text-3xl font-bold text-gray-900 tracking-tight">Page not found</h2>
                    <p className="mt-4 text-base text-gray-500">
                        Sorry, we couldn't find the page you're looking for. Perhaps it was lost to history.
                    </p>
                    <div className="mt-8">
                        <Link href="/">
                            <Button variant="primary" size="lg">
                                Return to the timeline
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12">
                        <p className="text-sm text-gray-600">
                            Looking for something specific? Try exploring:
                        </p>
                        <div className="mt-4 flex justify-center space-x-4">
                            <Link href={`/civilizations`} className="text-blue-600 hover:text-blue-800">
                                Civilizations
                            </Link>
                            <Link href={`/infrastructures`} className="text-blue-600 hover:text-blue-800">
                                Infrastructures
                            </Link>
                            <Link href={`/figures`} className="text-blue-600 hover:text-blue-800">
                                Historical Figures
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer
                columns={[
                    {
                        title: 'Explore',
                        links: [
                            { name: 'Civilizations', href: '/civilizations' },
                            { name: 'Infrastructures', href: '/infrastructures' },
                            { name: 'Historical Figures', href: '/figures' },
                        ],
                    },
                    {
                        title: 'About',
                        links: [
                            { name: 'Project', href: '/about' },
                            { name: 'Methodology', href: '/methodology' },
                            { name: 'Contact', href: '/contact' },
                        ],
                    },
                ]}
                LinkComponent={Link}
            />
        </div>
    );
}