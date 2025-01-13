import BrandIcon from "../BrandIcon"
import Button from "../Button"
import Image from "next/image"
import ColoredBox from "../ColoredBox"
import ApplicationCard from "./card/ApplicationCard"
import MotionDiv from "../MotionDiv"
import { motion } from "framer-motion"

export default function Applications() {
    return (
        <section className="maxContainer paddingContainer py-20 flex flex-col gap-6 items-center justify-center">

            <MotionDiv className="font-medium rounded-full text-base border shadow-md shadow-secondary-200 border-secondary-400 px-4 py-2 flex gap-2 items-center">
                <BrandIcon />
                <span className="text-xs xs:text-sm text-secondary-700">Applications</span>
            </MotionDiv>

            <MotionDiv element={motion.h1} className="font-bold text-3xl xs:text-4xl max-w-4xl text-center text-secondary-1000 leading-[116%]">
                Insights and predictions made easy
            </MotionDiv>

            <MotionDiv element={motion.h2} className="text-base text-secondary-600 max-w-2xl text-center">
                Advanced business intelligence tools enhance efficiency across your entire operation. By predicting future revenue and dissecting marketing effectiveness, these tools provide you with the critical insights needed for informed decision-making.
            </MotionDiv>

            <div className='flex flex-col flex-wrap min-910:flex-row items-center justify-center gap-5'>

                <ApplicationCard /> 
                <ApplicationCard /> 
                <ApplicationCard /> 
                <ApplicationCard /> 
                <ApplicationCard /> 
                <ApplicationCard /> 
                <ApplicationCard /> 
                <ApplicationCard /> 
                <ApplicationCard /> 

            </div>

            <Button variant={'btn-hollow'}>Explore more applications</Button>

        </section>
    )
}
