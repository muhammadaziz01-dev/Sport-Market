"use client";
import Image from "next/image";
import { TerenajorniDaroshka } from "@/assets/images";
import { useRouter } from "next/navigation";
import { SVG1, SVG2, SVG3, SVG4 } from "@/assets/icons";

function Index() {
  const router = useRouter();

  const handelClick = () => {
    router.push("/contacts");
  };

  const handelClickAbout = () => {
    router.push("/about");
  };

  const data = [
    {
      title: "Доставка по всему Узбекистану",
      img: SVG1,
    },
    {
      title: "Доставка по всему Узбекистану",
      img: SVG2,
    },
    {
      title: "Скидки и акции",
      img: SVG3,
    },
    {
      title: "Широкий ассортимент товаров",
      img: SVG4,
    },
  ];

  return (
    <>
      <section className="bg-[#F2F2F2] pb-[80px] ">
        <div className="container mx-autp px-2 5">
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Полезное</h1>
            <div className="flex items-start gap-6">
              <div className="min-w-[608px] w-full min-h-[417px] h-full py-[38px] px-[35px] bg-white rounded-md">
                <h1 className="text-[32px] font-medium mc-[30px]">
                  Как правильно выбрать эллиптический тренажер?
                </h1>
                <p className="text-[16px] leading-[22px]">
                  Эллиптические тренажёры популярны среди людей любого возраста
                  и с разным уровнем физической подготовкb Эллиптические
                  тренажёры популярны среди людей любого возраста и с разным
                  уровнем физической подготовки...
                </p>
                <div className="pt-[130px]">
                  <div className="flex items-center gap-10 ">
                    <p className="text-[12px] flex items-center gap-2">
                      <i className="bi bi-calendar"></i>27.01.2022
                    </p>
                    <p className="text-[12px] flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M14.6124 7.73317C13.2657 4.6065 10.7324 2.6665 7.99907 2.6665C5.26573 2.6665 2.7324 4.6065 1.38573 7.73317C1.34903 7.81728 1.33008 7.90806 1.33008 7.99984C1.33008 8.09161 1.34903 8.18239 1.38573 8.2665C2.7324 11.3932 5.26573 13.3332 7.99907 13.3332C10.7324 13.3332 13.2657 11.3932 14.6124 8.2665C14.6491 8.18239 14.6681 8.09161 14.6681 7.99984C14.6681 7.90806 14.6491 7.81728 14.6124 7.73317ZM7.99907 11.9998C5.88573 11.9998 3.88573 10.4732 2.7324 7.99984C3.88573 5.5265 5.88573 3.99984 7.99907 3.99984C10.1124 3.99984 12.1124 5.5265 13.2657 7.99984C12.1124 10.4732 10.1124 11.9998 7.99907 11.9998ZM7.99907 5.33317C7.47165 5.33317 6.95608 5.48957 6.51755 5.78258C6.07902 6.0756 5.73722 6.49208 5.53539 6.97935C5.33356 7.46662 5.28075 8.0028 5.38364 8.52008C5.48653 9.03736 5.74051 9.51252 6.11345 9.88546C6.48639 10.2584 6.96154 10.5124 7.47883 10.6153C7.99611 10.7182 8.53229 10.6653 9.01956 10.4635C9.50683 10.2617 9.9233 9.91989 10.2163 9.48136C10.5093 9.04283 10.6657 8.52725 10.6657 7.99984C10.6657 7.29259 10.3848 6.61432 9.88469 6.11422C9.38459 5.61412 8.70631 5.33317 7.99907 5.33317ZM7.99907 9.33317C7.73536 9.33317 7.47757 9.25497 7.25831 9.10846C7.03904 8.96195 6.86815 8.75372 6.76723 8.51008C6.66631 8.26645 6.63991 7.99836 6.69135 7.73972C6.7428 7.48108 6.86979 7.2435 7.05626 7.05703C7.24273 6.87056 7.48031 6.74357 7.73895 6.69212C7.99759 6.64068 8.26568 6.66708 8.50931 6.768C8.75295 6.86891 8.96119 7.03981 9.10769 7.25908C9.2542 7.47834 9.3324 7.73613 9.3324 7.99984C9.3324 8.35346 9.19193 8.6926 8.94188 8.94265C8.69183 9.19269 8.35269 9.33317 7.99907 9.33317Z"
                          fill="#333333"
                        />
                      </svg>
                      250
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] ">
                <div className="min-w-[608px] w-full flex items-center justify-center py-[18px] rounded-md bg-white">
                  <Image
                    src={TerenajorniDaroshka}
                    width={318}
                    height={315}
                    alt="Imge "
                  />
                </div>
                <button
                  onClick={handelClick}
                  className="py-[15px] min-w-[608px] w-full bg-white rounded-md text-center "
                >
                  Посмотрет все
                </button>
              </div>
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Полезное</h1>
            <div className="flex items-center justify-between flex-wrap">
              {data.map((el, i) => (
                <div
                  key={i}
                  className="w-[292px] h-[289px] bg-white rounded-lg pl-10 pr-3 py-[60px] flex flex-col items-start gap-[30px] "
                >
                  <Image src={el?.img} width={58} height={52} alt="svg" />
                  <p>{el?.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">О нас</h1>
            <div className="flex flex-col w-full rounded-lg bg-[#1F1D14] py-[70px] px-20">
              <p className="text-[20px] font-medium text-[rgba(255,255,255,0.8)] max-w-[800px]">
                Интернет магазин спортивных товаров{" "}
                <span className="text-[20px] font-normal  text-[rgb(255,255,255)]">
                  7MARKETSPORT.UZ
                </span>{" "}
                предлагает широкий ассортимент продукции с доставкой по
                Ташкенту, области и другим регионам Узбекистана. Ведется работа
                как с розничными покупателями, так и с оптовыми клиентами.
                Разнообразие форм оплаты заметно упрощает процесс приобретения
                товара. Действует гибкая система скидок. Разнообразие форм
                оплаты заметно упрощает процесс приобретения товара. Действует
                гибкая система скидок.{" "}
              </p>
              <div className="flex items-end justify-end">
                <button onClick={handelClickAbout}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="40"
                    viewBox="0 0 85 40"
                    fill="none"
                  >
                    <g opacity="0.78">
                      <path
                        d="M2 19.9087H84C78.0364 20.572 66.1091 17.9189 66.1091 2"
                        stroke="white"
                        stroke-width="4"
                        stroke-linecap="square"
                      />
                      <path
                        d="M2 20.0913H84C78.0364 19.428 66.1091 22.0811 66.1091 38"
                        stroke="white"
                        stroke-width="4"
                        stroke-linecap="square"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
