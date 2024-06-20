import Image from "next/image"

import { Odejdi  } from "@/assets/images"
interface Props {
    text?: string;
    bg?: string;
}
function Index({text, bg}:Props){
  return <>
  <div className="group w-[292px] h-[416px] rounded-md relative overflow-hidden bg-white ">
    {
        bg && <div style={{background:bg}}  className="absolute top-3 left-[-50px]  py-2.5 divide-fuchsia-50 items-center justify-center w-[200px] z-20 r] rotate-[-41deg] ">
        <p className="text-[20px] font-bold text-white text-center">{text}</p>
    </div>
    }
    <button className=" absolute top-3 right-3 cursor-pointer ">
       <i className="bi bi-heart text-[18px] font-bold cursor-pointer"></i>
    </button>
    <div className="mx-auto flex items-center justify-center overflow-hidden ">
        <Image src={Odejdi} width={202} height={174}  alt="Odejdi"  className="group-hover:scale-95 duration-300 h-[228px] w-[270px]"/>
    </div>
    <div className="flex flex-col items-start px-5 "> 
        <h2 className="text-[20px] text-start mt-5">Бутса Nike Mercurial Superfly 8 FG</h2>
        <p className="text-[20px] font-bold text-[#FF1313] text-start ">500 000 uzs</p>
        <del className="text-[16px] text-start text-[#1F1D14] opacity-[0.4]">750 000</del>
    </div>
    <button className="flex w-full items-center justify-center gap-3 py-[15px] bg-[#FBD029] rounded-br-md rounded-bl-md">
    <i className="bi bi-cart3"></i>
       Корзина
    </button>
  </div> 
  </>
}

export default Index