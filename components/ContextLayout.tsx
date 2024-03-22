"use client"
import { ThemeProvider } from "@/contexts/ThemeContext";
import {ReactNode} from "react";

type ContextLayoutProps = {
    children: ReactNode;
}
export default function ContextLayout(Props: ContextLayoutProps) {
    const {children} = Props
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}
