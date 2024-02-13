import Card from "@/app/components/card";

export default function MessagesPage() {
    return (
        <>
            <h1>sua caixa secreta</h1>
            <ul>
                <li>
                    <a href="/"><span>Mensagem 1</span></a>
                </li>
                <li>
                    <a href="/"><span>Mensagem 2</span></a>
                </li>
                <li>
                    <a href="/"><span>Mensagem 3</span></a>
                </li>
            </ul>
            <button>voltar</button>
        </>
    );
}
