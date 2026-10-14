import { useEffect } from 'react';
import { FRAME_0, FRAME_1 } from '../data/favicon.js';

export const useAnimatedFavicon = () => {
    useEffect(() => {

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if ( prefersReducedMotion ) return;

        let isFrameZero = true;
        let intervalId = null;

        let link = document.querySelector("link[rel~='icon']");
        if ( !link ) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }

        const toggleFavicon = () => {
            link.type = 'image/png';
            link.href = isFrameZero ? FRAME_0 : FRAME_1;
            isFrameZero = !isFrameZero;
        };

        const startAnimation = () => {
            if ( !intervalId ) intervalId = setInterval( toggleFavicon, 500 );
        };

        const stopAnimation = () => {
            if ( intervalId ) {
                clearInterval( intervalId );
                intervalId = null;
            }
        };

        const handleVisibilityChange = () => {
            if ( document.hidden ) stopAnimation();
            else startAnimation();
        };

        startAnimation();
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            stopAnimation();
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);
};
