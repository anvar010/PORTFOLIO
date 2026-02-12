import { useEffect, useState } from 'react';
import SkillsSphere from './SkillsSphere';
import { ChatIcon, RocketIcon } from './Icons';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'MERN Stack Web Developer';

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i <= fullText.length) {
                setDisplayText(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 60);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">

                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">
                        <span className="gradient-text">Anvarsha</span> KN
                    </h1>
                    <h2 className="hero-title">
                        {displayText}<span style={{
                            borderRight: '2px solid #00cec9',
                            paddingRight: '2px',
                            animation: 'pulse 1s infinite'
                        }}>|</span>
                    </h2>
                    <p className="hero-description">
                        Highly motivated engineering graduate with a passion for innovation and problem solving.
                        Building modern web applications with the MERN Stack — from responsive frontends to robust backend APIs.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn-primary" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                        }}>
                            <ChatIcon size={20} /> Let's Talk
                        </a>
                        <a href="#projects" className="btn-outline" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                        }}>
                            <RocketIcon size={20} /> View Projects
                        </a>

                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">2+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Projects Done</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Technologies</div>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <SkillsSphere />
                </div>
            </div>
        </section>
    );
};

export default Hero;
