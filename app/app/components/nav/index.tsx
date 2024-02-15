import Image from "next/image";
import Style from "./styles.module.css";
import { Inbox, MessageCircle, Send } from "lucide-react";
import React, { useState } from "react";

export default function Nav({ bt1, bt2, bt3 }: { bt1: boolean, bt2: boolean, bt3: boolean }) {
    const primary = "#FFFFFF";
    const secondary = "#adadad";
    return (
        <nav className="flex w-full justify-center mb-4">
            <ul className="flex justify-between w-full">
                <li>
                    <div className={bt1 ? Style.navButtonActive : Style.navButtonInactive} >
                        <NavButton href="/dash" title="perguntas">
                            <MessageCircle size={18} color={bt1 ? primary : secondary} />
                        </NavButton>
                    </div>
                </li>
                <li>
                    <div className={bt2 ? Style.navButtonActive : Style.navButtonInactive} >
                        <NavButton href="/dash/messages" title="mensagens">
                            <Inbox size={18} color={bt2 ? primary : secondary} />
                        </NavButton>
                    </div>
                </li>
                <li>
                    <div className={bt3 ? Style.navButtonActive : Style.navButtonInactive} >
                        <NavButton href="/dash/answers" title="respostas">
                            <Send size={18} color={bt3 ? primary : secondary} />
                        </NavButton>
                    </div>
                </li>
            </ul >
        </nav >
    );
}

function NavButton({ href, title, children }: { href: string; title: string, children: React.ReactNode }) {
    return (
        <>
            <a className="flex flex-row items-center gap-1" href={href} >
                {children}
                {title}
            </a>
        </>
    );
}