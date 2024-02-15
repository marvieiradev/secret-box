import Card from "@/app/components/card";
import Nav from "@/app/components/nav";

export default function AnswersPage() {
    return (
        <>
            <Nav bt1={false} bt2={false} bt3={true} />
            <h1>suas respostas</h1>
            <Card />
        </>
    );
}
