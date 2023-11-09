import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-[#152A46] text-white p-[28px]">
      {/* <h1>LOGO</h1> */}
      <nav>
        <div>
          <div className="flex justify-between list-none m-0 p-0 ml-[120px]">
            <span className="flex justify-center items-center mr-[10px]">
              <NavLink to={"/"} className="text-white no-underline font-bold">
                LOGO
              </NavLink>
            </span>

            <div className="flex gap-2 items-center">
              <li className="flex mr-[10px]">
                <a className="text-white no-underline" href="#">
                  Program
                </a>
              </li>
              <li className="flex mr-[10px]">
                <a className="text-white no-underline" href="#">
                  Bidang Ilmu
                </a>
              </li>
              <li className="flex mr-[10px]">
                <a className="text-white no-underline" href="#">
                  Tentang edspert
                </a>
              </li>
              <li className="flex mr-[10px] bg-[#FF6161] rounded-[20px] w-[148px] h-[48px] justify-center items-center">
                <a className="text-white no-underline" href="#">
                  Masuk/Daftar
                </a>
              </li>
              {/* <li className="flex mr-[10px]"><span id="saldo">400000</span></li> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
