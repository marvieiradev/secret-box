import Header from "@/app/components/header";

export default function NewAccountPage() {
    return (
        <>
            <Header />
            <h1 className="mb-[60px]">perguntas e mensagens anônimas</h1>
            <form className="w-full" action="">
                <FormEmail />
            </form>
        </>
    );
}

function FormEmail() {
    return (
        <>
            <input type="text" placeholder="informe seu email" />
            <button className="button">continuar</button>
            <a href="/" className="button-secondary">voltar</a>
        </>
    );
}

function FormPassword() {
    return (
        <>
            <input type="text" placeholder="informe sua senha" />
            <button className="button">continuar</button>
            <a href="/" className="button-secondary">voltar</a>
        </>
    );
}

function FormProfile() {
    return (
        <>
            <input type="text" placeholder="informe seu nome" />
            <input type="text" placeholder="informe seu usuário" />
            <button className="button">continuar</button>
            <a href="/" className="button-secondary">voltar</a>
        </>
    );
}

function FormAvatar() {
    return (
        <>
            <ul>
                <li>avatar1</li>
            </ul>
        </>
    )
}
