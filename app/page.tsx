import NavBar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card";
import { PageSelector } from "@/components/PageSelector";
import CardImage1 from '../public/assets/card-1-img.png'
import CardImage2 from '../public/assets/sneaker3.png'
import CardImage3 from '../public/assets/sneaker2.png'
import CardImage4 from '../public/assets/sneaker1.png'
import CardImage5 from '../public/assets/tshirt2.png'
import CardImage6 from '../public/assets/cart-hoodie1.png'
import CardImage7 from '../public/assets/cart-tshirt3.png'
import CardImage8 from '../public/assets/tshirt1.png'

export default function Home() {
  return (
    <main className="w-full h-full min-h-screen bg-zinc-200/60">
      <NavBar />
      <section id="content" className="flex justify-center px-6 py-8">
        <div id="products" className="max-w-5xl w-full flex justify-between items-center">
          <div className="w-full">
            <Tabs defaultValue="all" className="">
              <div className="w-full flex flex-col gap-4 md:flex-row md:gap-0 justify-between mb-6">
                <TabsList className="bg-transparent gap-10 p-0 order-2 border-b border-zinc-300 rounded-none md:border-none">
                  <TabsTrigger value="all" className="flex-1 md:inline tab-button py-1 px-0 md:uppercase">
                    Todos<span className="hidden md:inline ml-1">os produtos</span>
                  </TabsTrigger>
                  <TabsTrigger value="t-shirts" className="flex-1 md:inline tab-button py-1 px-0 md:uppercase">
                    Camisetas
                  </TabsTrigger>
                  <TabsTrigger value="sneakers" className="flex-1 md:inline tab-button py-1 px-0 md:uppercase">
                    Sapatilhas
                  </TabsTrigger>
                </TabsList>
                <div className="flex flex-col items-end gap-4 order-1 md:order-3">
                  <Select>
                    <SelectTrigger className="w-fit px-4 bg-transparent bg-white rounded-3xl border-zinc-300 md:bg-transparent md:rounded-none md:border-none">
                      <SelectValue placeholder="Organizar por" />
                    </SelectTrigger>
                    <SelectContent align="end">
                      <SelectGroup className="py-2">
                        <SelectItem value="createdAtDesc" className="py-1">Novidades</SelectItem>
                        <SelectItem value="priceDesc" className="py-1">Preço: Maior - menor</SelectItem>
                        <SelectItem value="priceAsc" className="py-1">Preço: Menor - maior</SelectItem>
                        <SelectItem value="popular" className="py-1">Mais vendidos</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  
                  <PageSelector />
                </div>
              </div>


              <TabsContent value="all" className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  <Card title="Nike Court Vision" img1={CardImage1} img2={CardImage2} price={12000}></Card>
                  <Card title="Nike Court Vision" img1={CardImage2} img2={CardImage2} price={9000}></Card>
                  <Card title="Nike Court Vision" img1={CardImage3} img2={CardImage2} price={10000}></Card>
                  <Card title="Nike Court Vision" img1={CardImage4} img2={CardImage2} price={17100}></Card>
                  <Card title="Nike Court Vision" img1={CardImage5} img2={CardImage2} price={2000}></Card>
                  <Card title="Nike Court Vision" img1={CardImage6} img2={CardImage2} price={3000}></Card>
                  <Card title="Nike Court Vision" img1={CardImage7} img2={CardImage2} price={1700}></Card>
                  <Card title="Nike Court Vision" img1={CardImage8} img2={CardImage2} price={950}></Card>
                </div>
                <div className="w-full flex justify-end pt-14 pb-20">
                  <div className="selector"><PageSelector /></div>
                </div>
              </TabsContent>

              <TabsContent value="t-shirts">Camisetas here.</TabsContent>
              <TabsContent value="sneakers">Sapatilhas here.</TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
}
