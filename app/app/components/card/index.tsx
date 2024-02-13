export default function Card() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center space-x-4 float-left z-10">
                <span className="rounded-full w-16 h-16 bg-[--primary]"></span>
                <div>
                    <h3 className="text-sm font-semibold text-[--primary]">Nome</h3>
                    <p className="text-xs font-semibold text-[--gray]">@username</p>
                </div>
            </div>
            <div className="bg-[--secondary] rounded-lg shadow-sm p-[15px] pt-[20px] mt-[-10px]">
                <p className="text-[--primary] text-md">Titulo da pergunta</p>
                <p className="text-[--gray] text-sm">Resposta</p>
            </div>
        </div>
    );
}