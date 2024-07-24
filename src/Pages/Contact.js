import { faLetterboxd, faSquareLetterboxd } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import hello from "../Assests/hello.png"
import { Footer } from "../Layouts/Footer";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
    const navigate = useNavigate()

    const homeButton = () => {
        navigate("/")
    }
    const worksButton = () => {
        navigate("/works")
    }
    const contactButton = () => {
        navigate("/contact")
    }
    return (
        <div>
            <div className="px-12 py-10 flex flex-row justify-end gap-6">
                <button onClick={homeButton} className="font-bold cursor-pointer">Home</button>
                <button onClick={worksButton} className="font-bold cursor-pointer">Works</button>
                <button onClick={contactButton} className="font-bold cursor-pointer">Contact</button>
            </div>
            <div className="px-[8rem] pt-[5rem] flex flex-row justify-between">
                <div className="flex flex-col items-start gap-12">
                    <div className="flex flex-col gap-7">
                        <p className="font-semibold text-blue-900 text-xl">How Can I Help You?</p>
                        <p className="text-6xl font-bold">Get in touch<br /> with me</p>
                    </div>
                    <div className="flex flex-row gap-6 items-center">
                        <FontAwesomeIcon icon={faLocation} size="2x" />
                        <p className="font-semibold">Gaziantep,Turkey</p>
                    </div>
                    <div className="flex flex-row gap-6 items-center">
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                        <p className="font-semibold">+90 535 394 1620</p>
                    </div>
                    <div className="flex flex-row gap-6 items-center">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <p className="font-semibold">fatihylmz27@icloud.com</p>
                    </div>
                </div>
                <div>
                    <img src={hello} className="object-cover w-full h-[30rem]" />
                </div>
            </div>
            <Footer />
        </div>
    )
}