"use client"
import {useEffect, useState} from "react";
import {useTheme} from "@/contexts/ThemeContext";

export default function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const { theme } = useTheme();

    const handleMove = (e: MouseEvent | TouchEvent) => {
        let clientX;
        let clientY;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }
        else {
            clientX = (e as MouseEvent).clientX;
            clientY = (e as MouseEvent).clientY;
        }
        setMousePosition({
            x: clientX * 100 / window.innerWidth,
            y: clientY * 100 / window.innerHeight
        });
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('touchmove', handleMove);
        return () => {
            document.addEventListener('mousemove', handleMove);
            document.addEventListener('touchmove', handleMove);
        };
    }, []);
    switch (theme) {
        case 'theme1':
            return (
                <div className="absolute w-full h-full z-[-1] bg-gray-800">
                    <div className="w-full h-full bg-[url('/squares.png')] bg-contain" />
                </div>
            )
        case 'theme2':
            return (
                <div className="absolute w-full h-full z-[-1] bg-green-800">
                    <div className="w-full h-full bg-[url('/squares.png')] bg-contain" />
                </div>
            )
        case 'theme3':
            return (
                <div className="absolute w-full h-full z-[-1] bg-red-800">
                    <div className="w-full h-full bg-[url('/squares.png')] bg-contain" />
                </div>
            )
        default:
            return (
                <div className="absolute w-full h-full z-[-1] bg-gray-800"
                     style={{
                         backgroundColor: `hsla(32,0%,100%,1)`,
                         backgroundImage: `radial-gradient(at 52% 14%, hsla(67,100%,64%,1) 0px, transparent 50%),
                 radial-gradient(at ${mousePosition.x}% ${mousePosition.y}%, hsla(184,0%,100%,1) 0px, transparent 50%),
                 radial-gradient(at 100% 0%, hsla(185,65%,53%,1) 0px, transparent 50%),
                 radial-gradient(at 48% 93%, hsla(185,65%,53%,1) 0px, transparent 50%),
                 radial-gradient(at 99% 77%, hsla(67,100%,64%,1) 0px, transparent 50%),
                 radial-gradient(at 7% 7%, hsla(210,100%,58%,1) 0px, transparent 50%),
                 radial-gradient(at 5% 94%, hsla(334,0%,100%,1) 0px, transparent 50%)`
                     }}>
                    <div className="w-full h-full bg-[url('/squares.png')] bg-contain" />
                </div>
            )
    }
}