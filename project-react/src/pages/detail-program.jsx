import React from "react"
import { useHistory } from "react-router-dom"
import CheckIcon from "../../public/icons/CheckIcon"

const DetailProgram = () => {
  const { push } = useHistory()
  return (
    <div className="">
      {/* Hero */}
      <div className="h-full relative w-full flex flex-col gap-5 pl-32 py-24 bg-[#152A46]">
        <div className="flex flex-col gap-2 text-white">
          <span className="font-medium text-7xl">Programming Laravel </span>
          <span className="text-4xl">Getting Started with Laravel 9</span>
        </div>
        {/* Mentor */}
        <div className="flex text-white flex-col gap-4">
          <span>Mentor</span>
          <div className="grid  grid-cols-2 gap-6 max-w-3xl">
            <div className="flex flex-col">
              <span className="font-medium text-xl">William Hartono</span>
              <span className="text-xl">Developer at Widya Edu</span>
            </div>
            <div className="flex flex-col ">
              <span className="font-medium text-xl">Farel Prayoga</span>
              <span className="text-xl">Developer at Widya Edu</span>
            </div>
          </div>
        </div>
        <img
          src="/img/person1.png"
          className="object-contain z-10 absolute bottom-[-58px] right-0 h-96 w-96"
          alt="person1"
        />
        <img
          src="/img/Subtract.png"
          className="object-contain z-0 absolute bottom-9 right-20 h-46 w-46"
          alt=""
        />
      </div>
      {/* Side Bar + Main Content */}
      <div className="bg-[#EFF4FA] ">
        <div className="py-12 mx-auto gap-32 grid grid-cols-[0.5fr_1.5fr] max-w-7xl">
          {/* Side Bar */}
          <div>
            <div className="bg-white rounded-xl py-4 flex flex-col">
              <div className="pl-20 h-14 bg-[#F1F7FF] text-[#197BFF] font-medium flex items-center border-r-4 border-r-[#197BFF]">
                Materi
              </div>
              <div className="pl-20 h-14  flex items-center ">Fasilitas</div>
              <div className="px-2">
                <hr className="border border-gray-100" />
              </div>
              <div className="flex justify-between items-center px-5 py-4">
                <span className="font-medium text-gray-400 line-through">
                  Rp. 125.000
                </span>
                <span className="font-medium text-[#FF6A28] text-xl">
                  Rp. 99.000
                </span>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => {
                    push("/checkout")
                  }}
                  className="flex max-w-[250px] h-[50px] w-full rounded-full justify-center items-center bg-[#FFCD29] text-white font-medium"
                >
                  Daftar Kelas
                </button>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex flex-col gap-8">
            {/* Materi */}
            <div className="py-8 px-16 flex flex-col gap-8 bg-white rounded-xl">
              <span className="font-medium text-2xl">Materi</span>
              <div className="flex flex-col gap-6">
                <div className="grid-cols-[30px_1fr] grid items-center">
                  <CheckIcon className={"self-start mt-1"} />
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xl self-start">
                      Pengenalan Programming Laravel
                    </span>
                    <span>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </span>
                  </div>
                </div>
                <div className="grid-cols-[30px_1fr] grid items-center">
                  <CheckIcon className={"self-start mt-1"} />
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xl self-start">
                      Materi Bootcamp Laravel 2
                    </span>
                    <span>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </span>
                  </div>
                </div>
                <div className="grid-cols-[30px_1fr] grid items-center">
                  <CheckIcon className={"self-start mt-1"} />
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xl self-start">
                      Materi Bootcamp Laravel 3
                    </span>
                    <span>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </span>
                  </div>
                </div>
                <div className="grid-cols-[30px_1fr] grid items-center">
                  <CheckIcon className={"self-start mt-1"} />
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xl self-start">
                      Materi Bootcamp Laravel 4
                    </span>
                    <span>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </span>
                  </div>
                </div>
                <div className="grid-cols-[30px_1fr] grid items-center">
                  <CheckIcon className={"self-start mt-1"} />
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xl self-start">
                      Materi Bootcamp Laravel 5
                    </span>
                    <span>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </span>
                  </div>
                </div>
                <div className="grid-cols-[30px_1fr] grid items-center">
                  <CheckIcon className={"self-start mt-1"} />
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xl self-start">
                      Materi Bootcamp Laravel 6
                    </span>
                    <span>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Fasilitas */}
            <div className="py-8 px-16 flex flex-col gap-8 bg-white rounded-xl">
              <span className="font-medium text-2xl">Fasilitas</span>
              <div className="flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                  <CheckIcon />
                  <span className="font-medium text-xl">E-Sertifikat</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckIcon />
                  <span className="font-medium text-xl">Portofolio</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckIcon />
                  <span className="font-medium text-xl">Job Connector</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckIcon />
                  <span className="font-medium text-xl">
                    Career Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProgram
