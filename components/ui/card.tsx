import * as React from "react"
import { Button } from "./button"
import Image from 'next/image'
import Link from "next/link";

interface ICard {
  title: string;
  price: number;
  img1: any;
  img2?: any; 
}

const Card = (props: ICard) => {
    return (
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="image bg-zinc-100/80 min-h-[250px] flex justify-center items-center">
          <Image src={props.img1} quality={100} alt='Nike Court Vision Low' className='w-full md:w-full h-[250px] object-cover'></Image>
        </div>
        <div className="gallery flex items-center py-2 px-3 gap-2">
            <div className="w-[50px] h-[50px] bg-zinc-100 rounded-md overflow-hidden">
              <Image src={props.img1} objectFit='cover' quality={100} alt='Nike Court Vision Low' className='w-auto h-auto'></Image>
            </div>
            <div className="w-[50px] h-[50px] bg-zinc-100 rounded-md overflow-hidden">
            <Image src={props?.img2} objectFit='cover' quality={100} alt='Nike Court Vision Low' className='w-auto h-auto'></Image>
            </div>
        </div>
        <div className="card-info py-1 px-3">
            <Link href='/product'><h3>{props.title}</h3></Link>
        </div>
        <div className="card-footer flex items-start justify-between gap-3 pl-3">
            <div className="w-full border-t-2 border-zinc-200 pt-2">
                <b className="self-center place-self-center">{props.price},00 MT</b>
            </div>
            <Button variant="default" className="rounded-none"><i className="ri-add-line text-[18px]"></i></Button>
        </div>
      </div>
    )
  }

export { Card }
