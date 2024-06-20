import { CaruselProduct } from "@/components/ui";
import { CaruselCard } from "@/components/ui/card";
function Index() {
  const data = [
    { text: "Акция", bg: "" },
    { text: "Акция", bg: "#FF1C1C" },
    { text: "Акция", bg: "" },
    { text: "Акция", bg: "#FF1C1C" },
    { text: "Акция", bg: "" },
    { text: "Новый", bg: "#917BFF" },
    { text: "Акция", bg: "" },
    { text: "ТОП", bg: "#10DE24" },
    { text: "Акция", bg: "" },
    { text: "ТОП", bg: "#10DE24" },
    { text: "Акция", bg: "#FF1C1C" },
    { text: "ТОП", bg: "#10DE24" },
    { text: "Акция", bg: "#FF1C1C" },
    { text: "ТОП", bg: "#10DE24" },
    { text: "Новый", bg: "#917BFF" },
  ];
  return (
    <>
      <section className="bg-[#F2F2F2] pb-[120px] pt-[80px]">
        <div className="container mx-auto px-2.5">
          <div className="flex items-start gap-6">
            <div className="bg-[#E4E4E4] rounded-lg">
              <div className="bg-white p-6 rounded-lg w-80 py-5 px-4">
                <h2 className="text-lg font-semibold mb-4">Фильтр</h2>
                <div className="mb-4">
                  <label className="block text-gray-700">Цена</label>
                  <input
                    type="range"
                    min="3000"
                    max="40000"
                    defaultValue="3000"
                    className="w-full mb-2"
                    id="priceRange"
                  />
                  <div className="flex justify-between text-gray-700">
                    <span>3 000 uzs</span>
                    <span>40 000 uzs</span>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="artikul" className="block text-gray-700">
                    Артикул:
                  </label>
                  <input
                    type="text"
                    id="artikul"
                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                    placeholder="аф566"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="category" className="block text-gray-700">
                    Выберите категорию:
                  </label>
                  <select
                    id="category"
                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                  >
                    <option>Все</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="new" className="block text-gray-700">
                    Новинка:
                  </label>
                  <select
                    id="new"
                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                  >
                    <option>Все</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="sale" className="block text-gray-700">
                    Акция:
                  </label>
                  <select
                    id="sale"
                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                  >
                    <option>Все</option>
                  </select>
                </div>
              </div>
              <button className="py-3 px-[80px]">Показать результат</button>
            </div>
            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-3 gap-6">
                {data.map((el, i) => (
                  <CaruselCard key={i} text={el?.text} bg={el?.bg} />
                ))}
              </div>
              <button className="w-full py-3 rounded-md bg-white">
                    Показать ещё
              </button>
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Реконмендуемые продукты</h1>
            <div>
              <CaruselProduct text="Акция" bg=""/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
