import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Logo from '../app/logo.png'
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="flex justify-center h-16 bg-white sticky top-0 left-0 border-b border-slate-200 px-6 z-50">
        <div className="max-w-5xl w-full flex justify-between items-center">
            <Link href="/"><Image src={Logo} width={50} height={50} alt='Logo'></Image></Link>
            <div className='flex items-start gap-3 md:gap-5'>
                <div className="flex items-center bg-zinc-100 rounded-md">
                    <Input type="text" placeholder="Procurando por algo específico?" className='hidden md:flex min-w-[250px] w-full text-[13px] border-none outline-none focus:border-0 focus:outline-none hover:border-none hover:outline-none h-auto bg-zinc-100' />
                    <Button type="submit" variant="outline" className='border-none md:bg-transparent hover:bg-transparent'><i className="ri-search-line text-[22px] text-muted-foreground"></i></Button>
                </div>
                <Link href="/cart" className='flex items-end relative'>
                    <i className="ri-shopping-bag-3-line text-[22px] text-muted-foreground"></i>
                    <div className="absolute right-[-8px] w-[16px] h-[16px] flex justify-center items-center rounded-full bg-red-500"><small className='text-white'>2</small></div>
                </Link>
            </div>
        </div>
    </nav>
  )
}