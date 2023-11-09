import React from "react"
import { useHistory } from "react-router-dom"

const Checkout = () => {
  const { push } = useHistory()
  return (
    <div className="w-full h-full bg-[#EFF4FA] px-20 pb-20">
      {/* Breadcrumb */}
      <div className="pt-12 flex gap-4">
        <span>{"<"}</span>
        <span className="text-blue-600 font-medium ">Checkout</span>
        <span>{">"}</span>
        <span className="text-gray-400 font-normal">Intruksi Bayar</span>
      </div>
      {/* Title */}
      <div className="font-medium text-3xl py-7">Checkout</div>
      {/* Main Content */}
      <div className="grid grid-cols-[0.75fr_1.25fr] gap-8 ">
        {/* Pilih Metode Pembayaran */}
        <div className="bg-white rounded-3xl p-14">
          <div className="flex flex-col gap-5">
            <span className="font-medium text-2xl">Pilh Metode Pembayaran</span>
            {/* Bank Transfer Manual */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between py-2 border-b-2">
                <div className="flex flex-col">
                  <span className="font-medium">
                    Bank Transfer (verifikasi manual)
                  </span>
                  <span className="text-gray-500">
                    Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode
                    bayar ini memerlukan verifikasi pembayaran manual melalui
                    Whatsapp
                  </span>
                </div>
                <span className="flex justify-center items-center">^</span>
              </div>
              {/* Bank List */}
              <div className="flex gap-3 justify-between items-center rounded border-2 border-gray-300 px-6 py-7">
                <div className="flex gap-4">
                  <img src="/img/mandiri.png" alt="mandiri Logo" />
                  <span>Bank Transfer ke Rek Bank Mandiri</span>
                </div>
                <input className="h-4 w-4" type="radio" />
              </div>
              <div className="flex gap-3 justify-between items-center rounded border-2 border-gray-300 px-6 py-7">
                <div className="flex gap-4">
                  <img src="/img/bca.png" alt="BCA LOGO" />
                  <span>Bank Transfer ke Rek Bank BCA</span>
                </div>
                <input className="h-4 w-4" type="radio" />
              </div>
            </div>
            {/* Virtual Account */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between py-2 border-b-2">
                <div className="flex flex-col">
                  <span className="font-medium">
                    Virtual Account (verifikasi otomatis)
                  </span>
                  <span className="text-gray-500">
                    Pembayaran melalui virtual account berbagai bank. Metode
                    bayar ini akan diverifikasi secara otomatis.
                  </span>
                </div>
                <span className="flex justify-center items-center">^</span>
              </div>
              {/* Bank List */}
              <div className="flex gap-3 justify-between items-center rounded border-2 border-gray-300 px-6 py-7">
                <div className="flex gap-4">
                  <img src="/img/mandiri.png" alt="mandiri Logo" />
                  <span>Virtual Account Mandiri</span>
                </div>
                <input className="h-4 w-4" type="radio" />
              </div>
              <div className="flex gap-3 justify-between items-center rounded border-2 border-gray-300 px-6 py-7">
                <div className="flex gap-4">
                  <img src="/img/bca.png" alt="BCA LOGO" />
                  <span>Virtual Account BCA</span>
                </div>
                <input className="h-4 w-4" type="radio" />
              </div>
            </div>
          </div>
        </div>
        {/* Ringkasan Pesanan */}
        <div className="bg-white rounded-3xl p-14">
          <div className="flex flex-col gap-5">
            <span className="font-medium text-2xl">Ringkasan Pesanan</span>
            {/* Person */}
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
            <div className="flex flex-col gap-8">
              {/* Kode Promo */}
              <div className="flex flex-col gap-2">
                <span className="font-medium">Kode Promo</span>
                <div className="flex w-full gap-2">
                  <input type="text" className="border h-20 w-full" />
                  <button className="text-white border bg-[#2A61A8] w-24 flex justify-center items-center px-10">
                    Terapkan
                  </button>
                </div>
              </div>
              {/* Metode Pembayaran */}
              <div className="flex flex-col gap-2">
                <span className="font-medium ">Metode Pembayaran</span>
                <span>Bank Transfer (Verifikasi Manual)-Mandiri</span>
              </div>
              {/* Ringkasan Pembayaran */}
              <div className="flex flex-col gap-2">
                <span className="font-medium">Ringkasan Pembayaran</span>
                <div className="flex justify-between items-center">
                  <span>Harga Kelas</span>
                  <span>Rp. 700.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Potongan</span>
                  <span>Rp. 200.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Promo</span>
                  <span>-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Kode Unik</span>
                  <span>Rp. 100.000</span>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Pembayaran</span>
                  <span className="font-medium">Rp. 400.000</span>
                </div>
              </div>
            </div>
            {/* Syarat n ketentuan */}
            <p>
              Dengan menekan tombol <span className="font-medium">Bayar</span>{" "}
              kamu telah menyetujui syarat dan ketentuan yang berlaku, silahkan
              baca kembali{" "}
              <span className="text-blue-500 underline font-medium">
                Syarat & ketentuan
              </span>{" "}
              yang berlaku.
            </p>
            {/* Button */}
            <div className="flex justify-between">
              <span className=""> {"<"} Batalkan</span>
              <button
                onClick={() => {
                  push("/instruksi-bayar")
                }}
                className="text-white border bg-[#2A61A8] w-52 rounded-[50px] h-12"
              >
                {" "}
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
