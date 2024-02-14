"use client"
import Header from "@/app/components/header";
import { useState } from "react";
import Image from "next/image";
import AvatarGenerator from "@/app/components/avatar-generator";

export default function NewAccountPage() {
    const [step, setStep] = useState(1);

    const updateStep = (action: 'next' | 'back') => {
        if (action === 'next') setStep(step + 1);
        if (action === 'back') setStep(step - 1);
    }
    return (
        <>
            <Header />
            <h1 className="mb-[60px]">perguntas e mensagens anônimas</h1>
            <form className="w-full space-y-4" action="">
                {step == 1 && <FormEmail updateStep={updateStep} />}
                {step == 2 && <FormPassword updateStep={updateStep} />}
                {step == 3 && <FormProfile updateStep={updateStep} />}
            </form>
            <Image src={`/step/step-${step}.svg`} alt="" width={50} height={20} />
        </>
    );
}

function FormEmail({ updateStep }: { updateStep: (action: 'next' | 'back') => void }) {
    return (
        <>
            <input type="email" placeholder="informe seu email" />
            <button className="button" type="button" onClick={() => updateStep('next')}>continuar</button>
            <a href="/" className="button-secondary">voltar</a>
        </>
    );
}

function FormPassword({ updateStep }: { updateStep: (action: 'next' | 'back') => void }) {
    return (
        <>
            <input type="password" placeholder="informe sua senha" />
            <button className="button" type="button" onClick={() => updateStep('next')}>continuar</button>
            <button className="button-secondary" onClick={() => updateStep('back')}>voltar</button>
        </>
    );
}

function FormProfile({ updateStep }: { updateStep: (action: 'next' | 'back') => void }) {
    return (
        <>
            <input type="text" placeholder="informe seu nome" />
            <div className="inputGroup items-center flex">
                <span>@</span>
                <input type="text" placeholder="informe seu usuário" />
            </div>
            <AvatarGenerator />
            <button className="button" type="button" onClick={() => updateStep('next')}>continuar</button>
            <button className="button-secondary" onClick={() => updateStep('back')}>voltar</button>
        </>
    );
}
