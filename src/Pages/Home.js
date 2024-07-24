import React from "react";
import profilePhoto from "../Assests/cvphoto.jpg"

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
        </div>
    )
}