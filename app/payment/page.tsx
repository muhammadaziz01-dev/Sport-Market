import { CaruselProduct } from "@/components/ui";

function Index() {
  return (
    <>
      <section className="bg-[#F2F2F2] pb-[120px] pt-[80px] ">
        <div className="container mx-auto px-2 5">
          <div className="flex items-start gap-6">
            <div className="py-[15px] px-[9px] bg-white rounded-md w-[187px] h-[258px]">
              <div className="flex items-center gap-[2px] ">
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
                <p>Оплата и Доставка</p>
              </div>
            </div>

            <div className=" bg-white rounded-md w-[714px] h-[800-px] py-10 px-12">
              <h1 className="text-[24px] font-medium mb-[17px]">
                Способы оплаты
              </h1>
              <p className="text-[16px] mb-[30px]">
                Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и
                выбрать тот товар, который Вы хотите купить.
              </p>
              <p className="text-[16px] mb-[30px]">
                После перехода в Корзину, откроется список товаров, которые Вы
                добавили. Далее, нажимаем кнопку «Оформить заказ». В окне,
                появится «Контактная информация» и «Способы доставки», которые
                Вам не обходимо заполнить.
              </p>
              <div className="felec flex-col items-start mb-[30px]">
                <p className="text-[16px]">
                  Вы можете выбрать более подходящий для Вас способ оплаты:
                </p>
                <p className="text-[16px]">-Оплата на месте;</p>
                <p className="text-[16px]">-Оплата по терминалу;</p>
                <p className="text-[16px]">
                  -Оплата через платёжные системы, такие как CLICK, Payme.
                </p>
              </div>
              <p className="text-[16px] mb-[30px]">
                Оплатить покупки можно наличными при получении. Убедительная
                просьба вначале ознакомиться с товаром, убедиться в отсутствии
                дефектов в присутствии курьера, после чего оплачивать сумму.
              </p>
              <h1 className="text-[24px] font-medium mb-[17px]">Доставка</h1>
              <p className="text-[16px] mb-[30px]">
                Тарифы на доставку товаров по Ташкенту: 
              </p>
              <div className="felec flex-col items-start mb-[30px]">
                
                <p className="text-[16px]">-20.000 сум для товаров до 150.000 сум</p>
                <p className="text-[16px]">-Бесплатная доставка для всех товаров от 150.000 сум</p>
                
              </div>
              <div className="felec flex-col items-start mb-[30px]">
                <p className="text-[16px]">
                  Вы можете выбрать более подходящий для Вас способ оплаты:
                </p>
                <p className="text-[16px]">-Платная доставка для всех товаров по согласованной цене</p>
                <p className="text-[16px]">-Бесплатная установка для всех тренажеров-Бесплатная установка для всех тренажеров</p>
                
              </div>
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Акция</h1>
            <div>
              <CaruselProduct text="Акция" bg="#FF1C1C" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Index;
