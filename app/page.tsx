

import { Carusel , CaruselCatalog ,  CaruselProduct} from "@/components/ui";
import { Card1 } from "@/components/ui/card";
import {SectionHome} from "@/components/sections"

export default function Home() {
  return (
    <main className="">
      <section  className=" pt-5 pb-[83px] bg-[#F2F2F2]">
        <div className=" container mx-auto px-2.5">
            <div className="flex items-start gap-[24px]">
              <div className=" min-w-[819px] h-[488px]">
                <Carusel />
              </div>
              <div className="">
                  <Card1/> 
              </div>

            </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-2 5">
          <div className="py-[24px]">
            <h1 className="text-[32px] mb-[31px]">Катаолог</h1>
            <div>
              <CaruselCatalog />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F2F2F2] pb-[80px] ">
        <div className="container mx-auto px-2 5">
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Акция</h1>
            <div>
              <CaruselProduct text="Акция" bg="#FF1C1C"/>
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Новинки</h1>
            <div>
              <CaruselProduct text="Новый" bg="#917BFF"/>
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Продукты</h1>
            <div>
              <CaruselProduct />
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">ТОП продажа</h1>
            <div>
              <CaruselProduct text="ТОП" bg="#10DE24" />
            </div>
          </div>
        </div>
      </section>
      <SectionHome/>
    </main>
  );
}
