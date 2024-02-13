export default function NewAccountPage() {
    return (
        <div>
            <h1>New Account</h1>
            <p>perguntas e menságens anônimas</p>
            <FormEmail />
        </div>
    );
}

function FormEmail() {
    return (
        <>
            <input type="text" placeholder="informe seu email" />
            <button>continuar</button>
        </>
    );
}

function FormPassword() {
    return (
        <>
            <input type="text" placeholder="informe sua senha" />
            <button>continuar</button>
        </>
    );
}

function FormProfile() {
    return (
        <>
            <input type="text" placeholder="informe seu nome" />
            <input type="text" placeholder="informe seu usuário" />
            <button>continuar</button>
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
