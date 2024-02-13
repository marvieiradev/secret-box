import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container flex items-center mx-auto max-w-md bg-lime-200 p-4 m-4 rounded">
            {children}
        </div>
    );
}