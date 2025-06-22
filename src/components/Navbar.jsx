import React from 'react';
import {navLinks} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(()=>{
        const navTwen = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
            }
        });
//animación que permite cambiar el fondo transparente de la navbar por un fondo blur cuando se hace scroll para facilitar lectura
        navTwen.fromTo('nav',
            { backgroundColor: 'transparent',},
            {
                backgroundColor: '#00000050',
                backgroundFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut',
        })
    })
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;