import React from 'react'
import { Play } from 'lucide-react'
import BrandIcon from '../BrandIcon'
import Button from '../Button'
import ColoredBox from '../ColoredBox'

export default function Hero() {
    return (
        <section className="maxContainer paddingContainer py-20 flex flex-col gap-6 items-center justify-center">

            <div className="font-medium rounded-full text-center min-351:text-right text-base border shadow-md shadow-secondary-200 border-secondary-400 px-4 py-2 flex gap-2 items-center">
                <BrandIcon />
                <span className="text-xs xs:text-sm text-secondary-700">Generative Business Intelligence for Analysts</span>
            </div>

            <h1 className="font-bold text-4xl xs:text-5xl max-w-4xl text-center text-secondary-1000 leading-[116%]">
                Revolutionizing Business Decisions with AI-Powered Analytics
            </h1>

            <p className="text-base text-secondary-600 max-w-2xl text-center">
                Harnesses the power of artificial intelligence to transform your business data into actionable insights, propelling you to new heights of success
            </p>

            <div className="flex flex-col min-351:flex-row self-stretch gap-2 min-351:items-center min-351:justify-center">
                <Button variant={'btn-primary'}>Start your free trial</Button>
                <Button variant={'btn-hollow'} icon={<Play size={16} />}>Watch video</Button>
            </div>

            <ColoredBox >
                <div className="rounded-full size-[110px] xs:size-auto xs:px-10 py-6 bg-white flex gap-6 justify-center items-center border-10 border-blue-300">
                    <Play
                        className="text-primary-600"
                        size={35}
                        fill="#387ff5"
                    />
                    <div className="hidden xs:flex flex-col">
                        <h2 className="font-bold text-lg">Watch introduction video</h2>
                        <div className="flex items-center gap-4 text-sm">
                            <span className="text-secondary-600">5 mins</span>
                            <span className="text-primary-600 font-bold">Play Video</span>
                        </div>
                    </div>
                </div> 
            </ColoredBox>
            
        </section>
    )
}
