'use client';

import React, { useState } from 'react';
import {
    Navbar,
    TimePeriodFilter,
    Card,
    Footer,
} from '@universal-history/ui';
import {
    infrastructures,
    timePeriods,
} from '@universal-history/data/mockData';
import Link from 'next/link';

export default function InfrastructuresPage() {
    // Navigation items
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Explore Civilizations', href: '/civilizations' },
        { label: 'Explore Infrastructures', href: '/infrastructures' },
        { label: 'Explore Historical Figures', href: '/figures' },
    ];

    // Filter state
    const [selectedTimePeriod, setSelectedTimePeriod] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar items={navItems} />

            <main>
                <div className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Explore Infrastructures</h1>
                    </div>
                </div>

                {/* Time Period Filter */}
                <TimePeriodFilter
                    timePeriods={timePeriods}
                    selectedPeriod={selectedTimePeriod}
                    onSelectPeriod={setSelectedTimePeriod}
                />

                {/* Infrastructure Grid */}
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {infrastructures.map((infra) => (
                            <Link key={infra.id} href={`/infrastructures/${infra.slug}`} className="block group">
                                <Card className="h-full transition-shadow duration-300 hover:shadow-md">
                                    <Card.Content>
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                                                <img
                                                    src={infra.iconUrl || "/icons/default.svg"}
                                                    alt={infra.name}
                                                    className="w-8 h-8"
                                                />
                                            </div>
                                            <h3 className="ml-4 text-xl font-medium text-gray-900 group-hover:text-blue-600">
                                                {infra.name}
                                            </h3>
                                        </div>
                                        <p className="mt-3 text-base text-gray-500">
                                            {infra.description}
                                        </p>
                                    </Card.Content>
                                </Card>
                            </Link>
                        ))}
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
            />
        </div>
    );
}