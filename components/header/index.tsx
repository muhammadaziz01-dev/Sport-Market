import Image from "next/image";

import logo from "../../assets/icons/logo.svg";
import { title } from "process";
import Link from "next/link";

function Header() {
  const data = [
    { title: "Продукты", path: "/products" },
    { title: "Контакты", path: "/contacts" },
    { title: "Оплата и Доставка", path: "/payment" },
    { title: "Новости", path: "/news" },
    { title: "О нас", path: "/about" },
  ];
  return (
    <>
      <nav>
        <div className="w-full bg-[#1F1D14]">
          <div className="container mx-auto px-[10px]">
            <div className="flex items-center justify-between py-2.5">
              <div className="flex items-center">
                <Link href={"/"}>
                  <Image src={logo} width={189} height={59} alt="logo" />
                </Link>
                <ul className="flex items-center gap-[30px]">
                  {data.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item.path} className=" text-white">
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-[30px]">
                  <p className=" text-white flex items-center gap-2">
                    <i className="bi bi-telephone text-white"></i>+998 (90)
                    565-85-85
                  </p>
                  <p className=" text-white flex items-center gap-2">
                    <i className="bi bi-envelope text-white"></i>info@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-[10px]">
          <div className="py-[15px] flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <button className="flex items-center gap-[10px] px-10 py-[14px] rounded-[5px] bg-black text-white max-w-[184px]">
                <i className="bi bi-stack"></i>
                Каталог
              </button>
              <div className="w-[502px] h-[53px] relative">
                <input type="text" className="w-full h-full py-2 px-10 rounded-[5px] outline-none bg-[#F2F2F2] placeholder:text-black"  placeholder="Поиск"  />
                <i className="bi bi-search absolute top-[30%] right-3"></i>
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
                <button className=" rounded-[5px] bg-[#F2F2F2] text-black p-[15px] ">
                    <i className="bi bi-person"></i>
                </button>
                <button className=" rounded-[5px] bg-[#F2F2F2] text-black p-[15px] ">
                    <i className="bi bi-heart"></i>
                </button>
                <button className="flex items-center gap-[10px] px-[30px] py-[14px] rounded-[5px] bg-[#F2F2F2] text-black">
                  <i className="bi bi-cart3 "></i>
                  Корзина
                </button>
  
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
