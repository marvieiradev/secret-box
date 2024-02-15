import { Copy } from "lucide-react";
import Nav from "../components/nav";

export default function DashPage() {
    return (
        <>
            <div className="flex flex-col w-full">
                <Nav bt1={true} bt2={false} bt3={false} />
                <h1>o que você quer (ou não) saber?</h1>
                <p>escolha uma pergunta</p>
                <div>
                    <span>Imagem</span>
                    <p>pergunta1</p>
                    <span>...</span>
                    <button className="button gap-2">
                        <Copy width={18} />
                        criar e copiar link</button>
                </div>
            </div>
            <p>toque aqui para gerar o link</p>
        </>
    );
}
