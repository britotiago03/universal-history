import React from 'react';

export interface TimePeriod {
    id: string;
    name: string;
    startYear: number;
    endYear: number;
}

interface TimePeriodFilterProps {
    timePeriods: TimePeriod[];
    selectedPeriod: string | null;
    onSelectPeriod: (periodId: string | null) => void;
}

export function TimePeriodFilter({
                                     timePeriods,
                                     selectedPeriod,
                                     onSelectPeriod,
                                 }: TimePeriodFilterProps) {
    return (
        <div className="bg-white py-4 border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:space-x-4 sm:items-center">
          <span className="text-sm font-medium text-gray-700 mb-2 sm:mb-0">
            Filter by Time Period:
          </span>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => onSelectPeriod(null)}
                            className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium 
                ${
                                selectedPeriod === null
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                        >
                            All Periods
                        </button>
                        {timePeriods.map((period) => (
                            <button
                                key={period.id}
                                onClick={() => onSelectPeriod(period.id)}
                                className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium 
                  ${
                                    selectedPeriod === period.id
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                            >
                                {period.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}