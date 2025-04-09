import React, { ReactNode } from 'react';

interface FooterLink {
    name: string;
    href: string;
}

interface FooterColumn {
    title: string;
    links: FooterLink[];
}

// Generic Link component props
type LinkComponentProps = {
    href: string;
    className?: string;
    children: ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;

interface FooterProps {
    columns?: FooterColumn[];
    showYear?: boolean;
    copyrightText?: string;
    LinkComponent?: any; // Make LinkComponent type flexible
}

export function Footer({
                           columns = [],
                           showYear = true,
                           copyrightText = 'Universal History Explorer. All rights reserved.',
                           LinkComponent
                       }: FooterProps) {
    // Default link component is just a regular anchor tag
    const Link = LinkComponent || (
        ({ href, className, children, ...props }: LinkComponentProps) => (
            <a href={href} className={className} {...props}>
                {children}
            </a>
        )
    );

    return (
        <footer className="bg-white border-t border-gray-200">
            {columns.length > 0 && (
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {columns.map((column, index) => (
                            <div key={index}>
                                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                                    {column.title}
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                href={link.href}
                                                className="text-base text-gray-500 hover:text-gray-900"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-500">
                    © {showYear ? new Date().getFullYear() + ' ' : ''}
                    {copyrightText}
                </p>
            </div>
        </footer>
    );
}