import Image from 'next/image'
import React from 'react'
import Testemonial from '../Testemonial'
import ColoredBox from '../ColoredBox'
import Button from '../Button'
import BrandIcon from '../BrandIcon'
import MotionDiv from '../MotionDiv'

export default function Experience() {
    return (
        <section className='flex flex-col py-10 sm:py-16 gap-8 relative paddingContainer maxContainer'>
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className='font-bold text-3xl xs:text-4xl max-w-4xl text-center text-secondary-1000'>The Neuros Experience</h1>
                <p className='text-secondary-600 text-center'>
                    At Neuros, we pride ourselves on delivering top-notch AI-driven business analytics. But don't just<br />take our word for it. Hear what our satisfied users have to say.
                </p>
            </div>
            <MotionDiv className='flex gap-5 max-w-full items-center justify-center overflow-x-scroll no-scrollbar'>
                <Testemonial />
                <Testemonial />
                <Testemonial />
            </MotionDiv>
            <div className='py-7 sm:py-10'>
                <ColoredBox bg='bg-experience-pattern' aspectRatio={false} padding='px-7 py-7 lg:py-10' center={false}>
                    <div className='self-stretch flex flex-col lg:flex-row gap-12 justify-between'>
                        <div className='flex flex-col items-start gap-8'>
                            <h1 className="font-bold text-2xl min-[370px]:text-3xl min-422:text-4xl xs:text-5xl max-w-[590px] text-white leading-[116%]">
                                Experience the Future of Business Analytics with Neuros
                            </h1>
                            <Button
                                variant={'btn-primary-white'}
                                icon={<BrandIcon/>}
                            >Start your free trial</Button>
                        </div>

                        <div className='flex text-white flex-col gap-3'>

                            <div className='flex flex-col min-422:flex-row lg:w-fit gap-3 py-4 px-3 border border-primary-400 rounded-xl bg-primary-500'>
                                <div className='bg-primary-600 rounded-lg p-3.5 flex items-center'>
                                    <Image
                                        src={'/icons/instant-access.svg'}
                                        alt='icon'
                                        width={22}
                                        height={22}
                                    />
                                </div>
                                <div className="flex flex-col gap-0.5 pr-2">
                                    <h2 className='font-bold'>Instant Access</h2>
                                    <p className='text-sm max-w-[295px]'>Begin exploring Neuros's full suite of features immediately</p>
                                </div>
                            </div>
                            <div className='flex flex-col min-422:flex-row lg:w-fit gap-3 py-4 px-3 border border-primary-400 rounded-xl bg-primary-500'>
                                <div className='bg-primary-600 rounded-lg p-3.5 flex items-center'>
                                    <Image
                                        src={'/icons/instant-access.svg'}
                                        alt='icon'
                                        width={22}
                                        height={22}
                                    />
                                </div>
                                <div className="flex flex-col gap-0.5 pr-2">
                                    <h2 className='font-bold'>Instant Access</h2>
                                    <p className='text-sm max-w-[295px]'>Begin exploring Neuros's full suite of features immediately</p>
                                </div>
                            </div>
                            <div className='flex flex-col min-422:flex-row lg:w-fit gap-3 py-4 px-3 border border-primary-400 rounded-xl bg-primary-500'>
                                <div className='bg-primary-600 rounded-lg p-3.5 flex items-center'>
                                    <Image
                                        src={'/icons/instant-access.svg'}
                                        alt='icon'
                                        width={22}
                                        height={22}
                                    />
                                </div>
                                <div className="flex flex-col gap-0.5 pr-2">
                                    <h2 className='font-bold'>Instant Access</h2>
                                    <p className='text-sm max-w-[295px]'>Begin exploring Neuros's full suite of features immediately</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </ColoredBox>
            </div>
        </section>
    )
}
