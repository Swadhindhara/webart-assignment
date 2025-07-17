import { Button } from '@/components/ui/button'
import { Facebook02Icon, InstagramIcon, NewTwitterIcon, PinterestIcon, YoutubeIcon } from '@hugeicons/core-free-icons/index'
import { HugeiconsIcon } from '@hugeicons/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className="footer_container px-[4%] bg-[#181818]">
            <div className="container mx-auto">
                <div className="footer py-10 lg:flex lg:items-start lg:justify-between grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div className="box">
                        <p className='text-lg font-medium'>Site map</p>
                        <ul className='flex flex-col gap-1 mt-3'>
                            <li><Link to={'/'} className='text-sm'>Home</Link></li>
                            <li><Link to={'/'} className='text-sm'>Watch video</Link></li>
                            <li><Link to={'/'} className='text-sm'>Artists</Link></li>
                            <li><Link to={'/'} className='text-sm'>Photos</Link></li>
                            <li><Link to={'/'} className='text-sm'>Message</Link></li>
                            <li><Link to={'/'} className='text-sm'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="box">
                        <p className='text-lg font-medium'>Company</p>
                        <ul className='flex flex-col gap-1 mt-3'>
                            <li><Link to={'/'} className='text-sm'>About Us</Link></li>
                            <li><Link to={'/'} className='text-sm'>Media</Link></li>
                            <li><Link to={'/'} className='text-sm'>Careers</Link></li>
                        </ul>
                    </div>
                    <div className="box">
                        <p className='text-lg font-medium'>Join us</p>
                        <div className="icons flex items-center gap-3 mt-3">
                            <HugeiconsIcon icon={Facebook02Icon} />
                            <HugeiconsIcon icon={NewTwitterIcon} />
                            <HugeiconsIcon icon={InstagramIcon} />
                            <HugeiconsIcon icon={YoutubeIcon} />
                            <HugeiconsIcon icon={PinterestIcon} />
                        </div>
                    </div>
                    <div className="box col-span-2 md:col-span-1">
                        <p className='text-lg font-medium'>Legal</p>
                        <ul className='flex flex-col gap-1 mt-3'>
                            <li><Link to={'/'} className='text-sm'>Terms of Conditions</Link></li>
                            <li><Link to={'/'} className='text-sm'>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="box col-span-2 md:col-span-1">
                        <p className='text-lg font-medium'>Sign up for exclusive updates</p>
                        <div className="box border border-gray-300 rounded-full mt-6 flex items-center justify-between">
                            <input type="email" name="" id="" className='border-none w-3/4 outline-none lg:pl-6 text-sm lg:pr-10 border border-red-500'/>
                            <Button className={`text-black py-6  rounded-full rounded-l-none`}>Subscribe Now!</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy bg-[#101010] py-4">
            <p className='text-sm text-center'>© 2025, All rights reserved.</p>
        </div>
    </>
  )
}

export default Footer