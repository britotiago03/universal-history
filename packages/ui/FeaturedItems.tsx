import React, { ReactNode } from 'react';
import { Card } from './Card';

interface FeaturedItem {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    imageSrc?: string;
    link: string;
}

// A generic type for the link component props
type LinkComponentProps = {
    href: string;
    className?: string;
    children: ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;

interface FeaturedItemsProps {
    title: string;
    items: FeaturedItem[];
    viewAllLink?: string;
    viewAllText?: string;
    LinkComponent?: any; // Make LinkComponent type flexible
}

export function FeaturedItems({
                                  title,
                                  items,
                                  viewAllLink,
                                  viewAllText = "View all",
                                  LinkComponent
                              }: FeaturedItemsProps) {
    // Default link component is just a regular anchor tag
    const Link = LinkComponent || (
        ({ href, className, children, ...props }: LinkComponentProps) => (
            <a href={href} className={className} {...props}>
                {children}
            </a>
        )
    );

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-10">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <Link key={item.id} href={item.link} className="block group">
                            <Card className="h-full transition-shadow duration-300 hover:shadow-md">
                                {item.imageSrc && (
                                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                                        <img
                                            src={item.imageSrc}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <Card.Content>
                                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600">
                                        {item.title}
                                    </h3>
                                    {item.subtitle && (
                                        <p className="mt-1 text-sm text-gray-500">{item.subtitle}</p>
                                    )}
                                    <p className="mt-3 text-base text-gray-500 line-clamp-2">
                                        {item.description}
                                    </p>
                                </Card.Content>
                            </Card>
                        </Link>
                    ))}
                </div>

                {viewAllLink && (
                    <div className="mt-10 text-center">
                        <Link
                            href={viewAllLink}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                        >
                            {viewAllText}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}