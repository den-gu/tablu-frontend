import NavBar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Layout from '@/containers/Layout'
import Link from 'next/link'
import Image from 'next/image'
import FeaturedImage from '../../public/assets/product-img1.png'
import GalleryImage1 from '../../public/assets/card-1-img.png'
import { Slider } from '@/components/Slider'

export default function Product() {
  return (
    <main className="w-full h-full min-h-screen bg-zinc-200/60">
        <NavBar />
        <Layout>
        <div className="navigation">
            <Link href="/">
                <i className="ri-arrow-left-line"></i>
                Voltar
            </Link>
        </div>
        <div className="flex gap-8 mt-5">
            <div className='hidden lg:inline flex-1'>
                <Slider />
            </div>
            <div className='flex-1 lg:px-5'>
                <div className="info py-1">
                    <span className='text-muted-foreground text-sm'>Sapatilha</span> 
                    <h3 className='mt-2 mb-1 text-xl'>Nike Court Vision Low</h3>
                    <b>MT 17.100,00</b>
                    <p className='hidden md:block mt-4 text-muted-foreground text-sm'>* Entrega grátis para compras acima de MT 15000,00.</p>
                    <div className="featured-image lg:hidden mt-7">
                        {/* <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg" alt="" className='w-full md:w-auto' /> */}
                        <Image src={FeaturedImage} objectFit='cover' quality={100} alt='Nike Court Vision Low' className='w-full md:w-auto'></Image>
                    </div>
                    <div className="gallery flex items-center py-2 gap-2 md:gap-5 mt-4">
                    <Image src={GalleryImage1} objectFit='cover' quality={100} alt='Nike Court Vision Low' className='w-[90px] rounded-lg'></Image>
                    <Image src={FeaturedImage} objectFit='cover' quality={100} alt='Nike Court Vision Low' className='w-[90px] rounded-lg'></Image>
                        {/* <div className="w-[100px] h-[100px] bg-zinc-100 rounded-md">IMG 2</div> */}
                    </div>
                    <h5 className='uppercase font-bold text-muted-foreground mt-4'>Tamanho</h5>
                    <div className='flex items-center gap-5 py-2'>
                        <Button variant="outline" className='text-[13px] h-auto py-1'>UK 7</Button>
                        <Button variant="outline" className='text-[13px] h-auto py-1'>UK 8</Button>
                        <Button variant="outline" className='text-[13px] h-auto py-1'>UK 9</Button>
                    </div>
                    <h5 className='uppercase font-bold text-muted-foreground mt-5'>Descrição</h5>
                    <p className='text-muted-foreground text-sm'>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto.</p>

                    <Button variant="default" className='w-full md:w-auto lg:w-full flex gap-3 py-4 uppercase rounded-sm mt-12'>
                        <i className="ri-shopping-bag-3-line text-[22px]"></i>
                        Adicionar ao carrinho
                    </Button>
                </div>
            </div>
        </div>
    </Layout>
    </main>
  )
}