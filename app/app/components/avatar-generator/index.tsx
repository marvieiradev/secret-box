"use client";
import Image from "next/image";

export default function AvatarGenerator() {
    return (
        <div className="border border-[--gray-light] rounded-md w-full flex flex-col justify-between p-[15px] space-y-[10px]">
            <p className="mb-5">escolha um avatar</p>
            <div className="flex items-center">
                <div className="flex justify-center items-center space-x-[24px]">
                    <Image src="/avatar/avatar1.png" alt="avatar" width={64} height={64} />
                    <Image src="/avatar/avatar2.png" alt="avatar" width={64} height={64} />
                    <Image src="/avatar/avatar3.png" alt="avatar" width={64} height={64} />
                </div>
                <button>
                    <Image src="/icon/refresh.svg" alt="refresh" width={32} height={32} className="stroke-[--primary]" />
                </button>
            </div>
        </div>
    );
}