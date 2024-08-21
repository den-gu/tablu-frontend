import Link from 'next/link'
import Image from 'next/image'
import SlideImage1 from '../public/assets/card-1-img.png'
import SlideImage2 from '../public/assets/product-img2.png'
import SlideImage3 from '../public/assets/product-image3.png'
import SlideImage4 from '../public/assets/product-image4.png'
import SlideImage5 from '../public/assets/product-image5.png'

export const Slider: React.FC = () => {
  return (
    <div className="relative flex gap-6">
            <ul className="thumbnails gap-4">
    <li>
      <a href="#slide1">
          <Image src={SlideImage1} objectFit='cover' quality={100} alt='Nike Court Vision Low' className='w-[90px]'></Image>
      </a>
    </li>
    <li>
      <a href="#slide2">
          <Image src={SlideImage2} objectFit='cover' quality={100} alt='Nike Court Vision Low' className='w-[90px]'></Image>
      </a>
    </li>
    <li>
      <a href="#slide3">
          <Image src={SlideImage3} objectFit='cover' quality={100} alt='Nike Court Vision Low' className='w-[90px]'></Image>
      </a>
    </li>
    <li>
      <a href="#slide4">
          <Image src={SlideImage4} objectFit='cover' quality={100} alt='Nike Court Vision Low' className='w-[90px]'></Image>
      </a>
    </li>
    <li>
      <a href="#slide5">
          <Image src={SlideImage5} objectFit='cover' quality={100} alt='Nike Court Vision Low' className='w-[90px]'></Image>
      </a>
    </li>
  </ul>
  <ul className="slides">
    <li id="slide1"><Image src={SlideImage1} objectFit='cover' quality={100} alt='Nike Court Vision Low'></Image></li>
    <li id="slide2"><Image src={SlideImage2} objectFit='cover' quality={100} alt='Nike Court Vision Low'></Image></li>
    <li id="slide3"><Image src={SlideImage3} objectFit='cover' quality={100} alt='Nike Court Vision Low'></Image></li>
    <li id="slide4"><Image src={SlideImage4} objectFit='cover' quality={100} alt='Nike Court Vision Low'></Image></li>
    <li id="slide5"><Image src={SlideImage5} objectFit='cover' quality={100} alt='Nike Court Vision Low'></Image></li>
  </ul>
</div>
  )
}