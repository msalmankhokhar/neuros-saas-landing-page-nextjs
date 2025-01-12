import { ChevronDownIcon } from "lucide-react"
import BrandIcon from "../BrandIcon"
import Faq from "../Faq"

export default function Faqs() {
    return (
        <section className="maxContainer paddingContainer py-20 flex flex-col gap-6 items-center justify-center">

            <div className="font-medium rounded-full text-base border shadow-md shadow-secondary-200 border-secondary-400 px-4 py-2 flex gap-2 items-center">
                <BrandIcon />
                <span className="text-xs xs:text-sm text-secondary-700">FAQs</span>
            </div>

            <h1 className="font-bold text-3xl xs:text-4xl max-w-4xl text-center text-secondary-1000 leading-[116%]">
                Frequently asked questions
            </h1>

            <p className="text-base text-secondary-600 max-w-2xl text-center">
                Explore our frequently asked questions to learn more about Neuros{"'"}s features, security, integration capabilities, and more.
            </p>

            <div className="flex flex-col">

                <Faq />
                <Faq 
                    question="How does the AI-driven predictive analytics feature work?"
                />
                <Faq 
                    question="Is my data secure with Neuros?"
                />
                <Faq 
                    question="Can I integrate Neuros with other tools and platforms I currently use?"
                />
                <Faq 
                    question="How is the pricing structured for Neuros? Are there any hidden fees?"
                />
                <Faq 
                    question="I'm new to business analytics. Does Neuros offer any support or tutorials?"
                />

            </div>

        </section>
    )
}
