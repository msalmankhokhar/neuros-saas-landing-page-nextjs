"use client"

import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { useState } from 'react'

const defaultProps = {
    question: 'What is Neuros and how does it differ from other analytics platforms?',
    answer: 'Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes.'
}

export default function Faq({ question = defaultProps.question, answer=defaultProps.answer }) {

    const [open, setOpen] = useState(false);

    function handleClick(){
        setOpen(! open);
    }

    return (
        <div className="max-w-[660px] flex flex-col gap-5 px-3 py-5 border-b">
            <div className="flex items-center gap-3 w-full relative">
                <div className="bg-primary-600 absolute top-0 left-0 bottom-0 min-h-[35px] max-h-full h-full self-stretch w-[3px]"></div>
                <h2 className="ml-5 font-semibold text-base min-454:text-lg">{question}</h2>
                {
                    open ? (
                        <ChevronUpIcon size={20} className="ml-auto" onClick={handleClick} />
                    ) : (
                        <ChevronDownIcon size={20} className="ml-auto" onClick={handleClick} />
                    )
                }
            </div>
            {
                open && (
                <p className="text-secondary-600 text-sm min-454:base">
                    {answer}
                </p>
                )
            }
        </div>
    )
}
