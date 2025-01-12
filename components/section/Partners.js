import Image from 'next/image'
import React from 'react'
import MotionDiv from '../MotionDiv'
import { motion } from 'framer-motion'

export default function Partners() {
    return (
        <section className='maxContainer paddingContainer py-10 flex flex-col items-center justify-center gap-8'>
            <MotionDiv element={motion.p} className='text-secondary-700 text-sm sm:text-base text-center'>160,000+ customers in over 120 countries grow their businesses with Neuros</MotionDiv>
            <MotionDiv className="grid grid-flow-row grid-cols-2 min-910:grid-cols-4 gap-10">
                <Image src={'/img/partners/1.png'} alt='partner company logo' width={187} height={48} />
                <Image src={'/img/partners/2.png'} alt='partner company logo' width={187} height={48} />
                <Image src={'/img/partners/3.png'} alt='partner company logo' width={187} height={48} />
                <Image src={'/img/partners/4.png'} alt='partner company logo' width={187} height={48} />
                <Image src={'/img/partners/5.png'} alt='partner company logo' width={187} height={48} />
                <Image src={'/img/partners/6.png'} alt='partner company logo' width={187} height={48} />
                <Image src={'/img/partners/7.png'} alt='partner company logo' width={187} height={48} />
                <Image src={'/img/partners/8.png'} alt='partner company logo' width={187} height={48} />
            </MotionDiv>
        </section>
    )
}
