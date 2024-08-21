import NavBar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Layout from '@/containers/Layout'
import Link from 'next/link'
import Image from 'next/image'
import CartImage1 from '../../public/assets/card-1-img.png'
import CartImage2 from '../../public/assets/cart-sneaker1.png'
import CartImage3 from '../../public/assets/cart-hoodie1.png'
import CartImage4 from '../../public/assets/cart-tshirt3.png'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
  
export default function Cart() {
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
        <div className="flex flex-col lg:flex-row gap-8 mt-5 pb-10">
            <div className='flex-1 order-2'>
                <div className='flex flex-col gap-4'>
                <div>
                <h5 className='hidden lg:block uppercase font-bold text-muted-foreground'>Meu carrinho</h5>
                <span className='hidden lg:block text-sm text-muted-foreground'>Total (3 produtos) <b>MT 33.900,00</b></span>
                </div>
                <div className="cart-card grid grid-cols-6 md:grid-cols-4 rounded-lg overflow-hidden">
                <div className="image col-span-2 md:col-span-1 h-full">
                    <Image src={CartImage1} objectFit='cover' quality={100} alt='Product name' className='h-full'></Image>
                </div>
                    <div className='bg-white col-span-4 md:col-span-3 px-2 md:px-5 py-2'>
                        <div className="header flex justify-between items-center">
                            <h3 className='text-md lg:text-lg'>Nike Court Vision Low</h3>
                            <Button variant="outline" className='p-0 border-none hover:bg-transparent'><i className="ri-delete-bin-line text-red-500 text-[22px]"></i></Button>
                        </div>
                        <p className='line-clamp-2 lg:line-clamp-3 mt-3 leading-relaxed text-muted-foreground text-sm'>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
                        <div className="footer flex justify-between items-center mt-4">
                        <Select>
                    <SelectTrigger className="w-fit px-4 bg-slate-100 border-zinc-300 ">
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent align="end">
                      <SelectGroup className="py-2">
                        <SelectItem value="1" className="py-1">1</SelectItem>
                        <SelectItem value="2" className="py-1">2</SelectItem>
                        <SelectItem value="3" className="py-1">3</SelectItem>
                        <SelectItem value="4" className="py-1">4</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                            <b className='tex-sm'>MT 17.100,00</b>
                        </div>
                    </div>
                </div>
                <div className="cart-card grid grid-cols-6 md:grid-cols-4 rounded-lg overflow-hidden">
                <div className="image col-span-2 md:col-span-1 h-full">
                    <Image src={CartImage2} objectFit='cover' quality={100} alt='Product name' className='h-full'></Image>
                </div>
                    <div className='bg-white col-span-4 md:col-span-3 px-2 md:px-5 py-2'>
                        <div className="header flex justify-between items-center">
                            <h3 className='text-md lg:text-lg'>Nike Court Vision Low</h3>
                            <Button variant="outline" className='p-0 border-none hover:bg-transparent'><i className="ri-delete-bin-line text-red-500 text-[22px]"></i></Button>
                        </div>
                        <p className='line-clamp-2 lg:line-clamp-3 mt-3 leading-relaxed text-muted-foreground text-sm'>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
                        <div className="footer flex justify-between items-center mt-4">
                        <Select>
                    <SelectTrigger className="w-fit px-4 bg-slate-100 border-zinc-300 ">
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent align="end">
                      <SelectGroup className="py-2">
                        <SelectItem value="1" className="py-1">1</SelectItem>
                        <SelectItem value="2" className="py-1">2</SelectItem>
                        <SelectItem value="3" className="py-1">3</SelectItem>
                        <SelectItem value="4" className="py-1">4</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                            <b className='tex-sm'>MT 15.100,00</b>
                        </div>
                    </div>
                </div>

                <div className="cart-card grid grid-cols-6 md:grid-cols-4 rounded-lg overflow-hidden">
                <div className="image col-span-2 md:col-span-1 h-full">
                    <Image src={CartImage3} objectFit='cover' quality={100} alt='Product name' className='h-full'></Image>
                </div>
                    <div className='bg-white col-span-4 md:col-span-3 px-2 md:px-5 py-2'>
                        <div className="header flex justify-between items-center">
                            <h3 className='text-md lg:text-lg'>Camiseta Outcast</h3>
                            <Button variant="outline" className='p-0 border-none hover:bg-transparent'><i className="ri-delete-bin-line text-red-500 text-[22px]"></i></Button>
                        </div>
                        <p className='line-clamp-2 lg:line-clamp-3 mt-3 leading-relaxed text-muted-foreground text-sm'>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
                        <div className="footer flex justify-between items-center mt-4">
                        <Select>
                    <SelectTrigger className="w-fit px-4 bg-slate-100 border-zinc-300 ">
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent align="end">
                      <SelectGroup className="py-2">
                        <SelectItem value="1" className="py-1">1</SelectItem>
                        <SelectItem value="2" className="py-1">2</SelectItem>
                        <SelectItem value="3" className="py-1">3</SelectItem>
                        <SelectItem value="4" className="py-1">4</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                            <b className='tex-sm'>MT 3.000,00</b>
                        </div>
                    </div>
                </div>

                <div className="cart-card grid grid-cols-6 md:grid-cols-4 rounded-lg overflow-hidden">
                <div className="image col-span-2 md:col-span-1 h-full">
                    <Image src={CartImage4} objectFit='cover' quality={100} alt='Product name' className='h-full'></Image>
                </div>
                    <div className='bg-white col-span-4 md:col-span-3 px-2 md:px-5 py-2'>
                        <div className="header flex justify-between items-center">
                            <h3 className='text-md lg:text-lg'>Camiseta Outcast</h3>
                            <Button variant="outline" className='p-0 border-none hover:bg-transparent'><i className="ri-delete-bin-line text-red-500 text-[22px]"></i></Button>
                        </div>
                        <p className='line-clamp-2 lg:line-clamp-3 mt-3 leading-relaxed text-muted-foreground text-sm'>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
                        <div className="footer flex justify-between items-center mt-4">
                        <Select>
                    <SelectTrigger className="w-fit px-4 bg-slate-100 border-zinc-300 ">
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent align="end">
                      <SelectGroup className="py-2">
                        <SelectItem value="1" className="py-1">1</SelectItem>
                        <SelectItem value="2" className="py-1">2</SelectItem>
                        <SelectItem value="3" className="py-1">3</SelectItem>
                        <SelectItem value="4" className="py-1">4</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                            <b className='tex-sm'>MT 3.400,00</b>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className='w-full lg:max-w-[320px] h-auto lg:h-[600px] flex flex-col justify-between px-5 pt-4 pb-6 rounded-lg lg:rounded-none order-1 lg:order-3 bg-white'>
            <div>
            <h5 className='uppercase font-bold text-muted-foreground'>Resumo do pedido</h5>
            <div className="order w-full py-6">
                <div className="flex justify-between">
                    <p className='text-sm'>Subtotal de produtos</p>
                    <span className='text-sm'>MT 33.900,00</span>
                </div>
                <div className="flex justify-between mt-3">
                    <p className='text-sm'>Entrega</p>
                    <span className='text-sm'>MT 0,00</span>
                </div>
                <div className="total flex justify-between mt-6 pt-3 border-t border-zinc-200">
                    <b className='text-sm'>Total</b>
                    <b className='text-sm'>MT 33.900,00</b>
                </div>
            </div>
                    <Button variant="default" className='w-full md:w-auto lg:w-full flex gap-3 py-4 uppercase rounded-sm mt-6'>
                        Finalizar a compra
                    </Button>
            </div>
            <Link href="/" className='hidden lg:inline underline text-muted-foreground'>AJUDA</Link>
            </div>
        </div>
    </Layout>
    </main>
  )
}