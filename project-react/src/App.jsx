// import "./style.css"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import PaymentInstruction from "./pages/PaymentInstruction"
import Header from "./components/header"
import DetailProgram from "./pages/detail-program"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={"/detail"}>
            <DetailProgram />
          </Route>
          <Route path={"/instruksi-bayar"}>
            <PaymentInstruction />
          </Route>
          <Route path={"/checkout"}>
            <Checkout />
          </Route>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>

      <footer>
        {/* <p>&copy; 2023 HTML Javascript dan CSS</p> */}
        <div className="bg-[#FFFF] h-[500px]">
          <div className="grid grid-cols-[0.75fr_1.25fr] p-24 h-full w-full">
            <div className="flex gap-4 flex-col">
              <span className="text-[#A3A3A3]">TAGLINE edspert disini</span>
              <span className="text-[#A3A3A3]">
                Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
                Sleman, Daerah Istimewa Yogyakarta 55581
              </span>
            </div>
            <div className="flex flex-col gap-24">
              <div className="grid grid-cols-3 gap-4 w-fit mx-auto place-content-center">
                <div className="flex flex-col gap-4">
                  <span>Program</span>
                  <span className="text-[#A3A3A3]">Online Course</span>
                  <span className="text-[#A3A3A3]">Mini bootcamp</span>
                  <span className="text-[#A3A3A3]">Bootcamp</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span>Bidang ilmu</span>
                  <span className="text-[#A3A3A3]">Digital marketing</span>
                  <span className="text-[#A3A3A3]">Product management</span>
                  <span className="text-[#A3A3A3]">English</span>
                  <span className="text-[#A3A3A3]">Programming</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span>Tentang edspert</span>
                  <span className="text-[#A3A3A3]">Bantuan</span>
                  <span className="text-[#A3A3A3]">Kontak kami</span>
                  <span className="text-[#A3A3A3]">Media sosial</span>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-[#A3A3A3]">
                  Edspert, copyright. Alamat boleh ditaruh disini apabila
                  diinginkan.
                </span>
              </div>
            </div>
          </div>
          {/* <p className='text-[#A3A3A3] text-[16px] w-[50%] pt-[15px]'>Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p> */}
        </div>
      </footer>
    </>
  )
}

export default App
