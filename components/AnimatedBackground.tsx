"use client"
import {useEffect, useState} from "react";

export default function AnimatedBackground() {

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    const handleMove = (e: MouseEvent) => {
        setMousePosition({
            x: e.clientX * 100 / window.innerWidth,
            y: e.clientY * 100 / window.innerHeight
        });
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMove);
    }, []);

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
        </div>
    )
}