import React from "react";
import profilePhoto from "../Assests/cvphoto.jpg"
import ecommercebackend from "../Assests/ecommercebackend.jpeg"
import ecommerce from "../Assests/ecommerce.png"
import gratitude from "../Assests/gratitude.jpeg"
import library from "../Assests/library.jpeg"
import { Footer } from "../Layouts/Footer";

export const Home = () => {

    const downloadResume = () => {
        const resumeUrl = process.env.PUBLIC_URL + '/FatihYilmazCv.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'FatihYilmazCv.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const projects = [
        {
            projectName: "E-Commerce Backend",
            img: ecommercebackend,
            date: 2024,
            detail: "I developed the backend of an e-commerce project using Java, Spring Boot and PostgreSQL. In this project, I stored addresses, card information, user roles, products, and product categories in the database.",
            tech: "Java, Spring Boot, PostgreSQL",
            link: "https://github.com/fatihylmz1/E-Commerce-Backend",
        },
        {
            projectName: "E-Commerce",
            img: ecommerce,
            date: 2023,
            detail: "This project is a web application built using React, a popular JavaScript library for building user interfaces. It leverages Redux for state management, providing a predictable state container for managing the application’s data flow. Additionally, Tailwind CSS is utilized for styling, offering a utility-first CSS framework that allows for rapid development and easy customization.",
            tech: "JavaScript, React, Redux, Tailwind, HTML, CSS",
            link: "https://fatihyilmaz-ecommerce.vercel.app/",
        },
        {
            projectName: "Gratitude Journal",
            img: gratitude,
            date: 2023,
            detail: "I developed a gratitude journal project where we can make API requests using redux-thunk and preserve added entries using localStorage. The user interface was built with React.",
            tech: "JavaScript, React, Redux, HTML, CSS",
            link: "https://gratitude-journal-gold.vercel.app/",
        },
        {
            projectName: "Library Application with Java",
            img: library,
            date: 2024,
            detail: "I developed a library system using Java, Spring Boot, and PostgreSQL. This project was designed using Object-Oriented Programming (OOP) principles.I developed a library system using Java, Spring Boot, and PostgreSQL.",
            tech: "Java, Spring Boot, PostgreSQL",
            link: "https://github.com/fatihylmz1/Library-Application",
        },

    ]


    return (
        <div>
            <div className="px-12 py-10 flex flex-row justify-end gap-6">
                <button className="font-bold cursor-pointer">Home</button>
                <button className="font-bold cursor-pointer">Works</button>
                <button className="font-bold cursor-pointer">Contact</button>
            </div>

            <div className="flex flex-row justify-between px-[10rem] gap-24 py-32">
                <div className="flex flex-col gap-8">
                    <p className="text-5xl font-bold">Hi, I am Fatih,<br />Software Developer</p>
                    <p className="text-wrap font-semibold">I’m an enthusiastic and ready software developer looking to embark on a new career in software development. Throughout an intensive six-month software training program, I’ve successfully mastered core technologies such as JavaScript, React, Java, and Spring Boot. During this period, I’ve honed my skills by actively working on over 65 projects, continuously pushing myself to learn and improve.</p>

                    <p className="text-wrap font-semibold">I particularly enjoy utilizing React and JavaScript to create user-friendly and interactive interfaces. Additionally, I have experience developing reliable and scalable backend solutions using technologies like Java and Spring Boot.</p>
                    <div className="items-start">

                        <button className="bg-red-500 rounded-lg w-[15rem] h-16 text-center text-white font-bold" onClick={downloadResume}>Download Resume</button>
                    </div>

                </div>
                <div>
                    <img src={profilePhoto} className="w-[50rem] h-[17rem] rounded-full object-cover object-top " />
                </div>
            </div>

            <div className="flex flex-col gap-16 px-[10rem] py-[2rem]">
                <div><p className="text-2xl font-bold">Featured Works</p></div>
                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-row gap-8 items-center border p-6 rounded-lg shadow-lg">
                            <div className="w-[30rem] h-[20rem]">
                                <img src={project.img} alt={project.projectName} className="w-full h-full object-fill rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <p className="text-2xl font-bold">{project.projectName}</p>
                                <p className="font-semibold text-center text-white bg-sky-800 rounded-full w-[4rem]">{project.date}</p>
                                <p className="font-semibold">{project.detail}</p>
                                <a href={project.link} className="font-semibold underline">Project Link </a>
                                <p className="font-semibold text-sky-800">{project.tech}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}