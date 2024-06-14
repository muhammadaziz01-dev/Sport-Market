

import { Carusel , CaruselCatalog} from "@/components/ui";
import { Card1 } from "@/components/ui/card";

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
    </main>
  );
}
