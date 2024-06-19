import { CaruselProduct } from "@/components/ui";

function Index() {
  return (
    <>
      <section className="bg-[#F2F2F2] pb-[120px] pt-[80px] ">
        <div className="container mx-auto px-2 5">
          <div className="flex items-start gap-6">
            <div className="py-[15px] px-[9px] bg-white rounded-md w-[187px] h-[258px]">
              <div className="flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="26"
                  viewBox="0 0 17 26"
                  fill="none"
                >
                  <rect
                    width="2.28245"
                    height="26.4608"
                    transform="matrix(0.975738 0.218942 -0.266986 0.9637 14.7734 0)"
                    fill="#FBD029"
                  />
                  <rect
                    width="2.28245"
                    height="26.4608"
                    transform="matrix(0.975738 0.218942 -0.266986 0.9637 7.06445 0)"
                    fill="#FBD029"
                  />
                </svg>
                <p>О нас</p>
              </div>
              <p className="px-7 py-2">Вканация</p>
            </div>

            <div className=" bg-white rounded-md w-[714px] h-[677px] py-10 px-12">
              <h1 className="text-[24px] font-medium mb-[17px]">
                7 SPORT MARKET
              </h1>
              <p className="text-[16px] mb-[30px]">
                В составе томатов в большом количестве содержатся сахара,
                клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9,
                С, К, Н и РР, а также нужные организму человека.
              </p>
              <p className="text-[16px] mb-[30px]">
                Овощи содержат в себе много полезных витаминов, которые
                укрепляют здоровье и иммунитет и являются необходимым
                компонентом в рационе человека. Тепличный помидор - всегда
                доступен для вас и в сети супермаркетов “Makro” вы всегда можете
                найти его по выгодной цене и заказать их с доставкой в Ташкенте.
              </p>
              <p className="text-[16px] mb-[30px]">
                В составе томатов в большом количестве содержатся сахара,
                клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9,
                С, К, Н и РР, а также нужные организму человека.
              </p>
              <p className="text-[16px] mb-[30px]">
                Овощи содержат в себе много полезных витаминов, которые
                укрепляют здоровье и иммунитет и являются необходимым
                компонентом в рационе человека. Тепличный помидор - всегда
                доступен для вас и в сети супермаркетов “Makro” вы всегда можете
                найти его по выгодной цене и заказать их с доставкой в Ташкенте.
              </p>
              <div className="flex items-center justify-end gap-8" >
                <p className="flex items-center gap-2">Поделиться: <i className="bi bi-share"></i></p>
                <p className="flex items-center gap-2">Распечатать: <i className="bi bi-printer"></i></p>
              </div>
            </div>

          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Акция</h1>
            <div>
              <CaruselProduct text="Акция" bg="#FF1C1C"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Index;
