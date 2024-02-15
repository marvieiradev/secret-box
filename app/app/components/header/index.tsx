import Image from "next/image";
import Styles from "./styles.module.css";

export default function Header() {
    return (
        <header className="py-[35px]">
            <div className={Styles.logo}>
                <a href="/">
                    <Image src={"/logo.png"} alt="logo" width={30} height={30} />
                </a>
                <span className="logo">SecretBox</span>
            </div>
        </header>
    );
}