import React from 'react';
import {gsap} from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText); //con esto queda habilitado el uso global

const App = () => {
    return (
        <main className="App">
            <Navbar/>
            <Hero/>
        </main>
    );
};

export default App;