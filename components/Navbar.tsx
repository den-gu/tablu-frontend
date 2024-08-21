import Link from 'next/link'
import React from 'react'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Logo from '../app/logo.png'
import Image from 'next/image'

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center h-16 bg-white sticky border-b border-slate-200 px-6">
        <div className="max-w-5xl w-full flex justify-between items-center">
            <Link href="/"><Image src={Logo} width={50} height={50} alt='Logo'></Image></Link>
            <div className='flex items-start gap-3 md:gap-5'>
                <div className="flex items-center bg-zinc-100 rounded-md">
                    <Input type="text" placeholder="Procurando por algo específico?" className='hidden md:flex min-w-[250px] w-full text-[13px] border-none outline-none focus:border-0 focus:outline-none hover:border-none hover:outline-none h-auto bg-zinc-100' />
                    <Button type="submit" variant="outline" className='border-none md:bg-transparent hover:bg-transparent'><i className="ri-search-line text-[22px] text-muted-foreground"></i></Button>
                </div>
                <Link href="/cart" className='flex items-end relative'>
                    <i className="ri-shopping-bag-3-line text-[22px] text-muted-foreground"></i>
                    {/* <sub><Badge variant="destructive" className='w-[20px] h-[20px]'>2</Badge></sub> */}
                    <div className="absolute right-[-8px] w-[16px] h-[16px] flex justify-center items-center rounded-full bg-red-500"><small className='text-white'>2</small></div>
                    {/* <sub className='grid place-items-center text-white bg-red-600 p-1 rounded-full'>2</sub> */}
                    {/* <i className="ri-shopping-bag-line text-[14px]"></i> */}
                </Link>
            </div>
        </div>
    </nav>
  )
}