import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <div className="flex justify-between">
                    <button>Sair</button>
                    <span>Logo</span>
                    <span>Avatar</span>
                </div>
            </header>
            <nav>
                <ul className="flex justify-between">
                    <li><a href="/dash">Perguntas</a></li>
                    <li><a href="/dash/messages">Mensagens</a></li>
                    <li><a href="/dash/answers">Respostas</a></li>
                </ul>
            </nav>
            <div className="container flex items-center mx-auto max-w-md bg-lime-200 p-4 m-4 rounded">
                {children}
            </div>
        </div>
    );
}