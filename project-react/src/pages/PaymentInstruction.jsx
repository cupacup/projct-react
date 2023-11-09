import React from "react"
import { NavLink } from "react-router-dom"

const PaymentInstruction = () => {
  return (
    <div className="w-full h-full bg-[#EFF4FA] px-20 pb-20">
      {/* Breadcrumb */}
      <div className="pt-12 flex gap-4">
        <span>{"<"}</span>
        <NavLink to={"/checkout"} className="text-gray-400 font-normal ">
          Checkout
        </NavLink>
        <span>{">"}</span>
        <span className=" text-blue-600 font-medium">Intruksi Bayar</span>
      </div>
      <div className="font-medium text-3xl py-7">Instruksi Bayar</div>

      {/* Main Content */}
      <div className="p-14 rounded-t-xl bg-white">
        {/* Instruksi Bayar */}
        <div className=" grid grid-cols-2 ">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              {/* img */}
              <div className="flex justify-center items-center bg-[#2B3E58] rounded-md px-6 py-2">
                <img src="/img/person.png" alt="person image" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-2xl">
                  Programming Laravel <br /> Getting Started with Laravel 9
                </span>
                <div className="flex gap-4">
                  <span className="text-gray-400 ">Batch</span>
                  <span className="">September 2022</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-400 ">Mentor</span>
                  <span className="">William Hartono, Farel Prayoga</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-medium text-xl">Metode Pembayaran</span>
              <span>Bank Transfer (Verifikasi Manual)-Mandiri</span>
            </div>
            {/* Logo Bank */}
            <div className="flex gap-5">
              <img
                src="/img/mandiri.png"
                className="object-contain"
                alt="mandiri logo"
              />
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <span className="font-medium">No Rek. 137000299089</span>
                  <span className="text-[#1097E7] flex gap-1">
                    <img
                      src="/img/copy-icon.png"
                      className="object-contain"
                      alt="copy icon"
                    />{" "}
                    Salin
                  </span>
                </div>
                <span className="text-gray-400">
                  a.n. PT Widya Kreasi Bangsa
                </span>
              </div>
            </div>
            {/* Nominal */}
            <div className="flex flex-col gap-2">
              <span className="text-gray-400">
                Nominal yang harus dibayar senilai:
              </span>
              <span className="font-medium text-2xl">Rp. 400.000</span>
            </div>
          </div>
          {/* Right Content */}
          <div className="flex flex-col gap-3 max-w-md">
            <span className="font-medium text-2xl">Instruksi Pembayaran</span>
            {/* ATM Carousel */}
            <div className="font-medium border-b-2 border-gray-400 flex justify-between">
              <div className="relative text-xl">
                ATM
                <div className="w-11 h-[1px] absolute bottom border-2 border-[#1097E7]"></div>
              </div>
              <span className="text-xl">Internet Banking</span>
              <span className="text-xl">M-Banking</span>
            </div>
            {/* Instruksi */}
            <ol className="flex flex-col gap-2 list-decimal list-inside">
              <li>Masukkan kartu ke mesin ATM Mandiri</li>
              <li>Pilih Bahasa</li>
              <li>Masukkan PIN ATM</li>
              <li>Pilih menu transaksi lainnya</li>
              <li>
                Pilih menu {`"`}Transfer{`"`}, lalu pilih ke rek Mandiri.
              </li>
              <li>Masukkan no rekening yang dituju</li>
              <li>Masukkan nominal jumlah uang yang akan di transfer</li>
              <li>
                Layar ATM akan menampilkan data transaksi anda, jika data sudah
                benar pilih {`"`}YA{`"`}
              </li>
              <li>Selesai, struk akan keluar dari mesin ATM.</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-16 justify-center items-center gap-6 bg-[#2B3E58] rounded-b-xl">
        <span className="font-medium text-white">
          Sudah Transfer? Lakukan verifikasi pembayaran segera!
        </span>
        <button className="w-56 h-14 bg-[#FCBC30] font-medium text-white">
          Verifikasi Pembayaran
        </button>
      </div>
    </div>
  )
}

export default PaymentInstruction
