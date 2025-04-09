import React from 'react';
import { Button } from './Button';

interface HeroProps {
    title: string;
    subtitle?: string;
    imageSrc?: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

export function Hero({
                         title,
                         subtitle,
                         imageSrc,
                         ctaText,
                         ctaLink,
                         secondaryCtaText,
                         secondaryCtaLink,
                     }: HeroProps) {
    return (
        <div className="relative bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block">{title}</span>
                            </h1>
                            {subtitle && (
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    {subtitle}
                                </p>
                            )}
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                {ctaText && ctaLink && (
                                    <div className="rounded-md shadow">
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            onClick={() => window.location.href = ctaLink}
                                        >
                                            {ctaText}
                                        </Button>
                                    </div>
                                )}
                                {secondaryCtaText && secondaryCtaLink && (
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            onClick={() => window.location.href = secondaryCtaLink}
                                        >
                                            {secondaryCtaText}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            {imageSrc && (
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src={imageSrc}
                        alt="Hero image"
                    />
                </div>
            )}
        </div>
    );
}