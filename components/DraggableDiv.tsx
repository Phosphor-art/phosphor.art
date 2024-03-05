"use client"
import {ReactNode, useEffect, useRef, useState} from "react";

type DraggableDivProps = {
    children: ReactNode;
    defaultPosition?: { x: string, y: string };
}
export default function DraggableDiv(Props: DraggableDivProps) {
    const { children, defaultPosition } = Props;
    const element = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(defaultPosition || { x: '0', y: '0' });
    const [dragging, setDragging] = useState(false);
    const [draggingPosition, setDraggingPosition] = useState({ x: 0, y: 0 });

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
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [dragging, position]);

    return (
        <div className={`absolute flex gap-[25px] px-[25px] py-[18px] bg-white whitespace-nowrap shadow-md`}
             style={{top: position.y, left: position.x }}
             onMouseDown={(e) => handleMouseDown(e.nativeEvent)}
             ref={element}>
            {children}
        </div>
    );
};