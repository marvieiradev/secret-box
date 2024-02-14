import Header from "./components/header";

export default function AcountPage() {
  return (
    <>
      <Header />
      <h1 className="mb-[60px]">perguntas e mensagens anônimas</h1>
      <p className="title mb-[30px]">vamos começar?</p>
      <a className="button" href="/account/new">criar uma conta</a>
      <a className="button" href="/account/login">acessar minha conta</a>
    </>
  );
}
