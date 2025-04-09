import React from 'react';
import { Card } from './Card';

// Import the formatYear function from your data package
import { formatYear } from '@universal-history/data';

interface CivilizationCardProps {
    name: string;
    slug: string;
    continent: string;
    region: string;
    startYear: number;
    endYear: number | null;
    description: string;
    imageUrl?: string;
}

export function CivilizationCard({
                                     name,
                                     slug,
                                     continent,
                                     region,
                                     startYear,
                                     endYear,
                                     description,
                                     imageUrl,
                                 }: CivilizationCardProps) {
    const timespan = endYear
        ? `${formatYear(startYear)} - ${formatYear(endYear)}`
        : `${formatYear(startYear)} - Present`;

    return (
        <a href={`/civilizations/${slug}`} className="block group">
            <Card className="h-full transition-shadow duration-300 hover:shadow-md">
                {imageUrl && (
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                        <img
                            src={imageUrl || '/mockImages/placeholder.jpg'}
                            alt={name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                )}
                <Card.Content>
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600">
                            {name}
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {continent}
                        </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                        {region} • {timespan}
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-3">
                        {description}
                    </p>
                </Card.Content>
            </Card>
        </a>
    );
}