import React from 'react'
import { Play } from 'lucide-react'
import BrandIcon from '../BrandIcon'
import Button from '../Button'
import Image from 'next/image'

export default function Strategy() {
    return (
        <section className="maxContainer paddingContainer py-20 flex flex-col gap-6 items-center justify-center">

            <div className="font-medium rounded-full text-base border shadow-md shadow-secondary-200 border-secondary-400 px-4 py-2 flex gap-2 items-center">
                <BrandIcon />
                <span className="text-xs xs:text-sm text-secondary-700">Our Strategies</span>
            </div>

            <h1 className="font-bold text-4xl xs:text-5xl max-w-4xl text-center text-secondary-1000 leading-[116%]">
                Improve your Continuous<br />Design Data workflow
            </h1>

            <p className="text-base text-secondary-600 max-w-2xl text-center">
                Specify helps you gain control of your design system across<br />teams and products.
            </p>

            <div className="flex gap-2 items-center justify-center">
                <Button variant={'btn-primary'}>Get a demo</Button>
                <Button variant={'btn-hollow'}>Research</Button>
            </div>

            <div className='flex flex-col min-910:flex-row items-center justify-center gap-5'>

                <div className="flex flex-col border border-secondary-300 rounded-lg p-5 gap-3">
                    <div className="flex items-center gap-2">
                        <Image alt='icon' src={'/icons/aidrivenforecasts.svg'} width={20} height={20} />
                        <h2 className='font-bold'>AI-Driven Forecasts</h2>
                    </div>
                    <p className='text-sm text-secondary-700'>
                        {'Harness the unmatched power of artificial intelligence with Neuros. Dive deep into predictive analytics, anticipate market trends'}
                    </p>
                </div>
                <div className="flex flex-col border border-secondary-300 rounded-lg p-5 gap-3">
                    <div className="flex items-center gap-2">
                        <Image alt='icon' src={'/icons/connectandstreamline.svg'} width={20} height={20} />
                        <h2 className='font-bold'>Connect & Streamline</h2>
                    </div>
                    <p className='text-sm text-secondary-700'>
                        {'Harness the unmatched power of artificial intelligence with Neuros. Dive deep into predictive analytics, anticipate market trends'}
                    </p>
                </div>
                <div className="flex flex-col border border-secondary-300 rounded-lg p-5 gap-3">
                    <div className="flex items-center gap-2">
                        <Image alt='icon' src={'/icons/instantinsights.svg'} width={20} height={20} />
                        <h2 className='font-bold'>Instant Insights</h2>
                    </div>
                    <p className='text-sm text-secondary-700'>
                        {'Harness the unmatched power of artificial intelligence with Neuros. Dive deep into predictive analytics, anticipate market trends'}
                    </p>
                </div>

            </div>

            <div className="bg-primary-600 aspect-[14/9] sm:aspect-auto sm:py-36 lg:py-40 bg-pattern bg-strategy-pattern rounded-xl flex items-center justify-center self-stretch">
                <div className="relative bottom-10 left-10 rounded-full size-[110px] xs:size-auto px-4 py-2 bg-white flex gap-2 justify-center items-center border-10 border-blue-300">
                    <BrandIcon />
                    <span className="text-sm xs:text-lg text-secondary-1000 font-medium">AI-Driven Forecasts</span>
                </div>
            </div>

        </section>
    )
}
