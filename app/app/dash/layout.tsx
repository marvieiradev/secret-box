"use client";
import React from "react";
import Styles from "./styles.module.css";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className={Styles.header}>
                <button>
                    <Image src="/icon/logout.svg" alt="logo" width={24} height={24} />
                </button>
                <a href="/">
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                </a>
                <Image src="/avatar/avatar1.png" alt="avatar" width={48} height={48} />
            </header >
            {children}
        </>
    );
}