import { useHistory } from "react-router-dom"

function isShowPrice(price) {
  if (price > 500000) {
    return (
      // <>
      //   <s>Rp.2060000</s>
      //     <span className="text-[#0ACF83] font-bold text-lg">{price}</span>
      //     </>
      <div className="flex justify-end gap-2 mt-[4px]">
        <div className="line-through pb-2">Rp 2060.000</div>
        <div className="text-green-500 flex items-end font-bold">
          Rp 560.000
        </div>
      </div>
    )
  } else if (price > 100000) {
    return <span className="text-[#0ACF83] font-bold text-lg">{price}</span>
  } else {
    return <span>Sold Out</span>
  }
}

function ProductCard() {
  const { push } = useHistory()
  return (
    <section
      className="mt-[20px] ml-[25px] cursor-pointer"
      onClick={() => push("/detail")}
    >
      <div className="bg-[#152A46] px-4 gap-4 flex flex-row rounded-t-[20px]">
        <img
          src={"/img/person.png"}
          alt="person"
          className="w-[75px] h-fit mt-[16px]"
        />
        <div className=" mt-[27px]">
          <p className="text-[#FFCD29] font-bold text-base w-[191px] h-[20px]">
            Intensive Bootcamp
          </p>
          <p className="text-[#FFFF] font-bold text-xl">Programming Laravel</p>
          <p className="text-[#FFFF] font-bold text-xs">
            (Getting Started with Laravel 9)
          </p>
        </div>
      </div>
      <div className="shadow-lg bg-[#FFFF] rounded-b-[20px] px-[24px] pt-[15px] pb-[24px]">
        <p className="text-[#000] font-bold text-xl">Programming Laravel</p>
        <p className="text-[#000] font-bold text-lg">
          Getting Started with Laravel 9
        </p>
        <div className="flex gap-4 mt-[8px]">
          <div>
            <p className="flex text-gray-600 text-sm">Batch</p>
          </div>
          <div>
            <p className="flex text-[#000] font-medium text-sm pl-[12px]">
              September 2022
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-[2px]">
          <p className="flex text-gray-600 text-sm">Mentor</p>
          <div>
            <p className="flex text-[#000] font-medium text-sm">
              William Hartono, Farel Prayoga
            </p>
          </div>
        </div>
        <div>
          <h1>{isShowPrice(560000)} </h1>
        </div>
      </div>
    </section>
  )
}

export default ProductCard
