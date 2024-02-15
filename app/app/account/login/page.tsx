"use client";
import Header from "@/app/components/header";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/dash');
    }
    return (
        <>
            <Header />
            <h1 className="mb-[60px]">perguntas e mensagens anônimas</h1>
            <form className="w-full space-y-4" onSubmit={handleSubmit}>
                <input type="text" placeholder="informe seu email" />
                <input type="password" placeholder="informe sua senha" />
                <button className="button" type="submit">acessar minha conta</button>
                <a href="/" className="button-secondary">voltar</a>
            </form>
        </>
    );
}
