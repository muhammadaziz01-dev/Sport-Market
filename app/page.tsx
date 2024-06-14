import Image from "next/image";

import { Carusel } from "@/components/ui";

export default function Home() {
  return (
    <main className="">
      <section  className=" pt-5 pb-[83px] bg-[#F2F2F2]">
        <div className=" container mx-auto px-2.5">
            <div className="flex items-start gap-[24px]">
              <div className=" w-[819px] h-[488px]">
                <Carusel />
              </div>
              <div className="w-[397px] bg-slate-600">
                    <h1>jnjbnlgnsdklmk</h1>
              </div>

            </div>
        </div>
      </section>
    </main>
  );
}
