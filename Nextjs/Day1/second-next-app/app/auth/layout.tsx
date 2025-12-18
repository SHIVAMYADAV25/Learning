import Navbar from "@/components/navbar/page";

import { ReactNode } from "react";

interface AuthLayoutProps{
    children : ReactNode;
}


export default function AuthLayout({children} : AuthLayoutProps){
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}