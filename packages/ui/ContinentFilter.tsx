import React from 'react';

export interface Continent {
    id: string;
    name: string;
}

interface ContinentFilterProps {
    continents: Continent[];
    selectedContinent: string | null;
    onSelectContinent: (continentId: string | null) => void;
}

export function ContinentFilter({
                                    continents,
                                    selectedContinent,
                                    onSelectContinent,
                                }: ContinentFilterProps) {
    return (
        <div className="bg-white py-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:space-x-4 sm:items-center">
          <span className="text-sm font-medium text-gray-700 mb-2 sm:mb-0">
            Filter by Continent:
          </span>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => onSelectContinent(null)}
                            className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium 
                ${
                                selectedContinent === null
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                        >
                            All
                        </button>
                        {continents.map((continent) => (
                            <button
                                key={continent.id}
                                onClick={() => onSelectContinent(continent.id)}
                                className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium 
                  ${
                                    selectedContinent === continent.id
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                            >
                                {continent.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}