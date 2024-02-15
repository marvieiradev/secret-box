import Card from "@/app/components/card";
import Nav from "@/app/components/nav";

export default function MessagesPage() {
    return (
        <>
            <Nav bt1={false} bt2={true} bt3={false} />
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
