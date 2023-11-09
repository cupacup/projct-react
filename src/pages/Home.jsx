import React from "react"
import ProductCard from "../components/ProductCard"
import Banner from "../components/Banner"

const Home = () => {
  const productList = [
    { id: 1, name: "Product 1", price: 100000 },
    { id: 2, name: "Product 2", price: 200000 },
    { id: 3, name: "Product 3", price: 300000 },
    { id: 4, name: "Product 4", price: 400000 },
    { id: 5, name: "Product 5", price: 500000 },
    { id: 5, name: "Product 5", price: 500000 },
    { id: 5, name: "Product 5", price: 500000 },
  ]
  return (
    <div className="bg-[#EFF4FA] h-full pb-14 ">
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] container mx-auto py-20">
        {productList.map((item) => (
          <ProductCard key={item.id} />
        ))}
      </div>
      <div className="flex justify-end items-center mx-4">
        <div className="flex gap-4 items-center">
          <span> {"<"} Sebelumnya</span>
          <span className="flex justify-center items-center rounded bg-blue-400 text-white p-2">
            1
          </span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>...</span>
          <span>10</span>
          <span>Selanjutnya {">"} </span>
        </div>
      </div>
    </div>
  )
}

export default Home
