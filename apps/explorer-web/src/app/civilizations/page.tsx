'use client';

import React, { useState, useMemo } from 'react';
import {
    Navbar,
    ContinentFilter,
    TimePeriodFilter,
    CivilizationCard,
    Footer,
} from '@universal-history/ui';
import {
    civilizations,
    continents,
    timePeriods,
} from '@universal-history/data/mockData';
import Link from "next/link";

export default function CivilizationsPage() {
    // Navigation items
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Explore Civilizations', href: '/civilizations' },
        { label: 'Explore Infrastructures', href: '/infrastructures' },
        { label: 'Explore Historical Figures', href: '/figures' },
    ];

    // Filter state
    const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
    const [selectedTimePeriod, setSelectedTimePeriod] = useState<string | null>(null);

    // Filter civilizations based on selected continent and time period
    const filteredCivilizations = useMemo(() => {
        return civilizations.filter((civ) => {
            // Filter by continent
            if (selectedContinent && civ.continent !== continents.find(c => c.id === selectedContinent)?.name) {
                return false;
            }

            // Filter by time period
            if (selectedTimePeriod) {
                const period = timePeriods.find(p => p.id === selectedTimePeriod);
                if (period) {
                    // Check if civilization existed during this time period
                    const civEndYear = civ.endYear || new Date().getFullYear();
                    const hasOverlap = !(civEndYear < period.startYear || civ.startYear > period.endYear);
                    if (!hasOverlap) {
                        return false;
                    }
                }
            }

            return true;
        });
    }, [selectedContinent, selectedTimePeriod]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar
                items={navItems}
                LinkComponent={Link}
            />

            <main>
                <div className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Explore Civilizations</h1>
                    </div>
                </div>

                {/* Filters */}
                <ContinentFilter
                    continents={continents}
                    selectedContinent={selectedContinent}
                    onSelectContinent={setSelectedContinent}
                />

                <TimePeriodFilter
                    timePeriods={timePeriods}
                    selectedPeriod={selectedTimePeriod}
                    onSelectPeriod={setSelectedTimePeriod}
                />

                {/* Civilization Grid */}
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {filteredCivilizations.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredCivilizations.map((civ) => (
                                <CivilizationCard
                                    key={civ.id}
                                    name={civ.name}
                                    slug={civ.slug}
                                    continent={civ.continent}
                                    region={civ.region}
                                    startYear={civ.startYear}
                                    endYear={civ.endYear}
                                    description={civ.description}
                                    imageUrl={civ.imageUrl}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <h3 className="text-lg font-medium text-gray-900">No civilizations found</h3>
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
                LinkComponent={Link}
            />
        </div>
    );
}