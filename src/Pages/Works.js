import React from "react";
import ecommercebackend from "../Assests/ecommercebackend.jpeg"
import ecommerce from "../Assests/ecommerce.png"
import gratitude from "../Assests/gratitude.jpeg"
import library from "../Assests/library.jpeg"
import { Footer } from "../Layouts/Footer";

export const Works = () => {
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
            <div className="flex flex-col gap-16 px-[10rem] py-[2rem]">
                <div className="px-10"><p className="text-3xl font-bold">Works</p></div>
                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <div className="flex flex-col">
                            <div key={index} className="flex flex-row gap-8 items-center p-6">
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
                            <div className="flex flex-col justify-center items-center">

                                <hr className="w-full font-bold text-black border border-gray-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />

        </div>
    )
}