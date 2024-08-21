import { Navbar } from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="w-full h-full min-h-screen bg-zinc-100">
      <Navbar />
      <section id="content" className="flex justify-center px-6 py-8">
      <div id="products" className="max-w-5xl w-full flex justify-between items-center">
        <div className="w-full">
        <Tabs defaultValue="all" className="">
          <div className="w-full flex justify-between">
          <TabsList className="bg-transparent gap-10">
            <TabsTrigger value="all" className="tab-button py-1 px-0">
              TODOS OS PRODUTOS
            </TabsTrigger>
            <TabsTrigger value="t-shirts" className="tab-button py-1 px-0">
              CAMISETAS
            </TabsTrigger>
            <TabsTrigger value="sneakers" className="tab-button py-1 px-0">
              SAPATILHAS
            </TabsTrigger>
          </TabsList>
        <div className="flex-col">
          Organizar
          <p>Pagination</p>
        </div>
          </div>
          <TabsContent value="all">Make changes to your account here.</TabsContent>
          <TabsContent value="shirts">Change your password here.</TabsContent>
          <TabsContent value="sneakers">Change your password here.</TabsContent>
        </Tabs>
      </div>
        </div>
      </section>
    </main>
  );
}
