"use client";
import { useState, useEffect } from 'react';

export const useScramble = (text: string, trigger: boolean, duration = 1200) => {
    const [display, setDisplay] = useState(text);
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    useEffect(() => {
        if (!trigger) return;
        let iteration = 0;
        const totalFrames = duration / 30;
        const increment = text.length / totalFrames;

        const interval = setInterval(() => {
            setDisplay(
                text
                    .split('')
                    .map((_, idx) => {
                        if (idx < iteration) return text[idx];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );
            if (iteration >= text.length) {
                clearInterval(interval);
                setDisplay(text);
            }
            iteration += increment;
        }, 30);

        return () => clearInterval(interval);
    }, [trigger, text, duration]);

    return display;
};