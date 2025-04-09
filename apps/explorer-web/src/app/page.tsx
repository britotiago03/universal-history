'use client';

import React from 'react';
import Link from 'next/link'; // Import Next's Link here
import {
    Navbar,
    Hero,
    FeaturedItems,
    Footer
} from '@universal-history/ui';
import {
    civilizations,
    infrastructures,
    historicalFigures,
    formatYear,
    Civilization,
    Infrastructure,
    HistoricalFigure
} from '@universal-history/data';

export default function HomePage() {
    // Create navigation items
    const navItems = [
        { label: 'Explore Civilizations', href: '/civilizations' },
        { label: 'Explore Infrastructures', href: '/infrastructures' },
        { label: 'Explore Historical Figures', href: '/figures' },
    ];

    // Format featured civilizations
    const featuredCivilizations = civilizations.slice(0, 3).map((civ: Civilization) => ({
        id: civ.id,
        title: civ.name,
        subtitle: `${formatYear(civ.startYear)} - ${civ.endYear ? formatYear(civ.endYear) : 'Present'}`,
        description: civ.description,
        imageSrc: civ.imageUrl,
        link: `/civilizations/${civ.slug}`,
    }));

    // Format featured infrastructures
    const featuredInfrastructures = infrastructures.slice(0, 3).map((infra: Infrastructure) => ({
        id: infra.id,
        title: infra.name,
        description: infra.description,
        imageSrc: infra.iconUrl,
        link: `/infrastructures/${infra.slug}`,
    }));

    // Format featured historical figures
    const featuredFigures = historicalFigures.slice(0, 3).map((figure: HistoricalFigure) => ({
        id: figure.id,
        title: figure.name,
        subtitle: figure.title,
        description: figure.description,
        imageSrc: figure.imageUrl,
        link: `/figures/${figure.slug}`,
    }));

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar
                items={navItems}
                LinkComponent={Link}
            />

            <Hero
                title="Universal History Explorer"
                subtitle="Explore the full story of human civilization through civilizations, infrastructures, and historical figures across time, geography, and influence."
                imageSrc="/mockImages/world-map.jpg"
                ctaText="Start Exploring"
                ctaLink="/civilizations"
                secondaryCtaText="Learn More"
                secondaryCtaLink="/about"
            />

            <FeaturedItems
                title="Explore Civilizations"
                items={featuredCivilizations}
                viewAllLink="/civilizations"
                viewAllText="View All Civilizations"
                LinkComponent={Link}
            />

            <FeaturedItems
                title="Explore Infrastructures"
                items={featuredInfrastructures}
                viewAllLink="/infrastructures"
                viewAllText="View All Infrastructures"
                LinkComponent={Link}
            />

            <FeaturedItems
                title="Explore Historical Figures"
                items={featuredFigures}
                viewAllLink="/figures"
                viewAllText="View All Historical Figures"
                LinkComponent={Link}
            />

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