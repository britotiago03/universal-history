import * as React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = "" }: CardProps) {
    return (
        <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}>
            {children}
        </div>
    );
}

Card.Header = function CardHeader({
                                      children,
                                      className = "",
                                  }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`border-b border-gray-200 px-4 py-3 ${className}`}>
            {children}
        </div>
    );
};

Card.Content = function CardContent({
                                        children,
                                        className = "",
                                    }: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={`px-4 py-4 ${className}`}>{children}</div>;
};

Card.Footer = function CardFooter({
                                      children,
                                      className = "",
                                  }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`border-t border-gray-200 px-4 py-3 ${className}`}>
            {children}
        </div>
    );
};