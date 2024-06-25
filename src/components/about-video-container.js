"use client";
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'magnific-popup/dist/magnific-popup.css';

export default function AboutVideoContainer() {
    const videoRef = useRef(null);

    useEffect(() => {
        // Function to check if element is in viewport
        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        // Function to handle autoplay when element is in viewport
        const handleAutoplay = () => {
            const video = videoRef.current;
            if (isElementInViewport(video) && video.paused) {
                video.play().catch(error => console.error('Autoplay error:', error));
            }
        };

        // Event listener for scroll to handle autoplay
        const scrollHandler = () => {
            handleAutoplay();
        };

        // Attach scroll event listener
        window.addEventListener('scroll', scrollHandler);

        // Initial check for autoplay when component mounts
        handleAutoplay();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div className="about-video position-relative">
            <video
                ref={videoRef}
                className="w-100 h-100"
                src="assets/video/0624.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />
        </div>
    );
}
