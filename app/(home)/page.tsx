import { format } from "date-fns";
import Image from "next/image";
import Header from "../_components/hearder";
import { de, ptBR } from "date-fns/locale";
import Search from "./_componentes/search";
import BookingItem from "../_components/ui/booking-item";
import BarbershopItem from "./_componentes/barbershop-item";
import { db } from "../_lib/prisma";

export default async function Home() {

  const barbershops = await db.barbershop.findMany({})

  return (
   <div>
    <Header/>

    <div className="px-5 pt-5">
    <h2 className="text-xl font-bold">Olá, Miguel!</h2>
    <p className="capitalize text-sm">
      {format (new Date(), "EEEE',' dd 'de' MMMM", {
        locale: ptBR,
      })} 
    </p>
    </div>
    <div className="px-5 mt-6">
    <Search/>
    </div>
    <div className="px-5 mt-6">
      <h2 className="text-sm uppercase text-gray-400 font-bold mb-3">Agendamentos</h2>
     <BookingItem/>
    </div>
    <div className="mt-6">
    <h2 className=" px-5 text-sm uppercase text-gray-400 font-bold mb-3">Recomendados</h2>
    <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <div key={barbershop.id} className="min-w-[167px] max-w-[167px]">
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            </div>
          ))}
        </div>

    </div>
   </div>
  );
}
