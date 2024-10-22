'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import cow from '../public/bull.png'
export default function ClientLayout({ children }: { children: React.ReactNode }) {

    React.useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div>
            <ScrollToTop smooth
                component={
                    <Image
                        src={cow}
                        alt="up-arrow"
                        width={40}
                        height={40}
                    />
                }
                title='Back to top'
                style={{
                    backgroundColor: '#3FAD3D',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    bottom: '50px',
                    right: '50px',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 0 10px rgba(0,0,0,0.2)'
                }} />
            {children}
        </div>
    )
}
