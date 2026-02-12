import { useEffect, useRef } from 'react';

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
                            setTimeout(() => el.classList.add('active'), i * 200);
                        });
                    }
                });
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const experiences = [
        {
            date: 'Oct 2024 — Present',
            title: 'Web Developer & Digital Marketing Specialist',
            company: 'Al Reem Businessmen Services UAE',
            desc: [
                'Developed and maintained the company\'s website using WordPress, ensuring a responsive and user-friendly design',
                'Implemented SEO best practices and digital marketing strategies to increase website traffic and visibility',
                'Created and managed content for the website, optimizing for user engagement and conversion',
                'Promoted the website via social media, email campaigns, and paid advertising',
            ],
        },
        {
            date: 'Jul 2023 — Jul 2024',
            title: 'Front End Developer',
            company: 'Rawmax Media',
            desc: [
                'Designed and implemented user-friendly interfaces, ensuring a seamless user experience across various devices',
                'Ensured cross-browser compatibility and resolved front-end bugs for consistent user experiences',
                'Utilized HTML, CSS, JavaScript, and frameworks like React.js to develop responsive and dynamic web pages',
            ],
        },
        {
            date: 'Feb 2024 — Mar 2024',
            title: 'MERN Stack Web Developer (Intern)',
            company: 'Synnefo Solutions',
            desc: [
                'Developed an e-commerce platform using MERN Stack fundamentals',
                'Implemented essential e-commerce functionalities, including user registration, login, product catalog, shopping cart, checkout, and payment gateway integration',
                'Focused on creating a user-friendly and responsive UI with MongoDB, Express, React.js, Node.js, and Tailwind CSS',
            ],
        },
        {
            date: 'Sep 2023 — Feb 2024',
            title: 'MERN Stack Web Development Trainee',
            company: 'Synnefo Solutions',
            desc: [
                'Gained proficiency in MongoDB, Express.js, React.js, and Node.js',
                'Developed responsive and dynamic web applications using React.js',
                'Built RESTful APIs and server-side applications with Node.js and Express.js',
                'Implemented and managed databases using MongoDB, including modeling',
            ],
        },
        {
            date: 'Ongoing',
            title: 'Email Server Configuration',
            company: 'Sabha Technologies UAE',
            desc: [
                'Configured and set up a secure, efficient email server ensuring reliable communication',
                'Managed email protocols (SMTP, IMAP, and POP3) for smooth and consistent email operation',
                'Implemented robust security features such as spam filtering, encryption, and authentication',
            ],
        },
    ];

    return (
        <section className="section" id="experience" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Experience</span>
                    <h2 className="section-title">Professional Journey</h2>
                    <p className="section-subtitle">
                        My career path through various roles and companies
                    </p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item reveal" key={index}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{exp.date}</span>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <p className="timeline-company">{exp.company}</p>
                                <ul className="timeline-desc">
                                    {exp.desc.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
