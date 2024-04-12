"use client"
import {MouseEventHandler, ReactNode, useEffect, useRef, useState} from "react";
import {useTheme} from "@/contexts/ThemeContext";

type DraggableDivProps = {
    children: ReactNode;
    defaultPosition?: { x: string, y: string };
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    draggable?: boolean;
}
export default function DraggableDiv(Props: DraggableDivProps) {
    const { children, defaultPosition, onClick, className,draggable } = Props;
    const element = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(defaultPosition || { x: '0', y: '0' });
    const [dragging, setDragging] = useState(false);
    const [draggingPosition, setDraggingPosition] = useState({ x: 0, y: 0 });
    const { isMobileDevice } = useTheme();

    const handleMouseDown = (e: MouseEvent) => {
        if(!element.current) return;
        let sizeElement = element.current.getBoundingClientRect();
        setDragging(true);
        setDraggingPosition({
            x: e.clientX - sizeElement.left,
            y: e.clientY - sizeElement.top,
        })
        setPosition({
            x: `calc(${e.clientX * 100 / window.innerWidth}% - ${e.clientX - sizeElement.left}px)`,
            y: `calc(${e.clientY * 100 / window.innerHeight}% - ${e.clientY - sizeElement.top}px)`,
        });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if(!dragging) return;
        if(!element.current) return;
        let sizeElement = element.current.getBoundingClientRect();
        setPosition({
            x: `calc(${e.clientX * 100 / window.innerWidth}% - ${draggingPosition.x}px)`,
            y: `calc(${e.clientY * 100 / window.innerHeight}% - ${draggingPosition.y}px)`,
        });
    };

    useEffect(() => {
        if (!isMobileDevice) {
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('mousemove', handleMouseMove);

            return () => {
                document.removeEventListener('mouseup', handleMouseUp);
                document.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [dragging, position]);

    return (
        <div
            className={`group absolute bg-white shadow-md ${className}`}
            style={{top: position.y, left: position.x}}
            ref={element}>
            <button onClick={onClick} className="whitespace-nowrap flex gap-[25px] px-[25px] py-[18px]">
                {children}
            </button>
            <svg className={`absolute left-full bottom-full ${dragging ? 'cursor-grabbing' : 'cursor-grab'} group-hover:block hidden`}
                 onMouseDown={(e) => handleMouseDown(e.nativeEvent)}
                 xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <g fill="none">
                    <path
                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                    <path fill="currentColor"
                          d="M8.464 6.707a1 1 0 0 1 0-1.414l2.758-2.758a1.1 1.1 0 0 1 1.556 0l2.757 2.758a1 1 0 1 1-1.414 1.414L13 5.586V11h5.414l-1.121-1.121a1 1 0 0 1 1.414-1.415l2.758 2.758a1.1 1.1 0 0 1 0 1.556l-2.758 2.758a1 1 0 0 1-1.414-1.415L18.414 13H13v5.414l1.121-1.121a1 1 0 0 1 1.414 1.414l-2.757 2.758a1.1 1.1 0 0 1-1.556 0l-2.758-2.758a1 1 0 1 1 1.415-1.414l1.12 1.121V13H5.587l1.121 1.121a1 1 0 1 1-1.414 1.415l-2.758-2.758a1.1 1.1 0 0 1 0-1.556l2.758-2.758A1 1 0 0 1 6.707 9.88L5.586 11H11V5.587l-1.121 1.12a1 1 0 0 1-1.415 0"/>
                </g>
            </svg>
        </div>
    );
};