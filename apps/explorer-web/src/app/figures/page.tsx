'use client';

import React, { useState, useMemo } from 'react';
import {
    Navbar,
    TimePeriodFilter,
    Card,
    Footer,
} from '@universal-history/ui';
import {
    historicalFigures,
    civilizations,
    timePeriods,
    formatYear,
} from '@universal-history/data/mockData';
import Link from 'next/link';

export default function HistoricalFiguresPage() {
    // Navigation items
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Explore Civilizations', href: '/civilizations' },
        { label: 'Explore Infrastructures', href: '/infrastructures' },
        { label: 'Explore Historical Figures', href: '/figures' },
    ];

    // Filter state
    const [selectedTimePeriod, setSelectedTimePeriod] = useState<string | null>(null);

    // Filter figures based on selected time period
    const filteredFigures = useMemo(() => {
        if (!selectedTimePeriod) {
            return historicalFigures;
        }

        const period = timePeriods.find(p => p.id === selectedTimePeriod);
        if (!period) {
            return historicalFigures;
        }

        return historicalFigures.filter((figure) => {
            const figureEndYear = figure.deathYear || new Date().getFullYear();
            return !(figureEndYear < period.startYear || figure.birthYear > period.endYear);
        });
    }, [selectedTimePeriod]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar items={navItems} />

            <main>
                <div className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Explore Historical Figures</h1>
                    </div>
                </div>

                {/* Time Period Filter */}
                <TimePeriodFilter
                    timePeriods={timePeriods}
                    selectedPeriod={selectedTimePeriod}
                    onSelectPeriod={setSelectedTimePeriod}
                />

                {/* Historical Figures Grid */}
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {filteredFigures.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredFigures.map((figure) => {
                                const civilization = civilizations.find(civ => civ.name === figure.civilization);
                                const lifespan = figure.deathYear
                                    ? `${formatYear(figure.birthYear)} - ${formatYear(figure.deathYear)}`
                                    : `${formatYear(figure.birthYear)} - Present`;

                                return (
                                    <Link key={figure.id} href={`/figures/${figure.slug}`} className="block group">
                                        <Card className="h-full transition-shadow duration-300 hover:shadow-md">
                                            {figure.imageUrl && (
                                                <div className="w-full h-48 overflow-hidden rounded-t-lg">
                                                    <img
                                                        src={figure.imageUrl}
                                                        alt={figure.name}
                                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                            <Card.Content>
                                                <div className="flex justify-between items-start">
                                                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600">
                                                        {figure.name}
                                                    </h3>
                                                    {civilization && (
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {civilization.name}
                            </span>
                                                    )}
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    {figure.title} • {lifespan}
                                                </p>
                                                <p className="mt-3 text-base text-gray-500 line-clamp-3">
                                                    {figure.description}
                                                </p>
                                            </Card.Content>
                                        </Card>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <h3 className="text-lg font-medium text-gray-900">No historical figures found</h3>
                            <p className="mt-2 text-sm text-gray-500">
                                Try adjusting your filters to find what you're looking for.
                            </p>
                        </div>
                    )}
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