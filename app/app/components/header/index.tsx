import Image from "next/image";
import Styles from "./styles.module.css";

export default function Header() {
    return (
        <header className="py-[35px]">
            <div className={Styles.logo}>
                <Image src={"/logo.png"} alt="logo" width={30} height={30} />
                <span className="logo">SecretBox</span>
            </div>
        </header>
    );
}