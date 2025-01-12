import React from 'react'
import Logo from '../Logo'
import Link from 'next/link'
import { Facebook, FacebookIcon, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='flex flex-col maxContainer paddingContainer py-14'>
        <div className="flex gap-5 items-center">
            <Logo />
            <div className='h-[0.1px] flex-1 border-b'></div>
        </div>
        <div className='py-14 flex flex-wrap flex-col sm:grid sm:grid-flow-row sm:grid-cols-2 min-910:flex min-910:flex-row min-910:justify-between gap-y-6 gap-x-20'>

            <div className="flex flex-col gap-4">
                <h1 className='font-bold'>About Neuros</h1>
                <ul className="flex flex-col gap-3 text-sm text-secondary-700">
                    <li><Link href={'#'}>Company Overview</Link></li>
                    <li><Link href={'#'}>Careers</Link></li>
                    <li><Link href={'#'}>Press & Media</Link></li>
                    <li><Link href={'#'}>Testimonials</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h1 className='font-bold'>Resources</h1>
                <ul className="flex flex-col gap-3 text-sm text-secondary-700">
                    <li><Link href={'#'}>Blog</Link></li>
                    <li><Link href={'#'}>Help Center</Link></li>
                    <li><Link href={'#'}>Webinars & Events</Link></li>
                    <li><Link href={'#'}>Case Studies</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h1 className='font-bold'>Support & Contact</h1>
                <ul className="flex flex-col gap-3 text-sm text-secondary-700">
                    <li><Link href={'#'}>Contact Us</Link></li>
                    <li><Link href={'#'}>Technical Support</Link></li>
                    <li><Link href={'#'}>Feedback</Link></li>
                    <li><Link href={'#'}>Community Forum</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h1 className='font-bold'>Connect</h1>
                <ul className="flex flex-col gap-3 text-sm text-secondary-700">
                    <li><Link className='flex items-center gap-3' href={'#'}>
                        <Instagram size={20} />
                        <span>Instagram</span>
                    </Link></li>
                    <li><Link className='flex items-center gap-3' href={'#'}>
                        <Facebook size={20} />
                        <span>Facebook</span>
                    </Link></li>
                    <li><Link className='flex items-center gap-3' href={'#'}>
                        <Twitter size={20} />
                        <span>Twitter</span>
                    </Link></li>
                    <li><Link className='flex items-center gap-3' href={'#'}>
                        <Linkedin size={20} />
                        <span>Linkedin</span>
                    </Link></li>
                </ul>
            </div>

        </div>

        <div className='pt-3 border-t flex items-center justify-between gap-6 text-sm text-secondary-600'>
            <p>&copy; 2023 Salman Khokhar - All Rights Reserved</p>
            <div className='hidden md:flex gap-5 items-center justify-center'>
                <Link href={'#'}>Terms of use</Link>
                <Link href={'#'}>Privacy Policy</Link>
                <Link href={'#'}>Security</Link>
            </div>
        </div>
    </footer>
  )
}
