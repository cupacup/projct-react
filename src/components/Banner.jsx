import React from 'react'

const Banner = () => {
  return (
<div className='bg-[#152A46] pt-[120px] py-[250px] relative overflow-x-hidden'>
    <div className='mx-10 w-[50%] pl-[120px]'>
<h1 className='text-[#FFFF] text-[42px] w-[50%] font-semibold'>Jadi expert bersama edspert.id</h1>
<p className='text-[#FFFF] text-[16px] w-[50%] pt-[15px]'>Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
    </div>
    <img src={"/img/person1.png"} className='w-[819px] absolute bottom-0 -right-12 z-20'/>
    <img src={"/img/Subtract.png"} className='absolute bottom-[210px] right-[150px] z-10'/>
    <img src={"/img/Subtract1.png"} className='w-[330px] h-[300px] absolute bottom-0 right-[270px] z-10'/>
</div> 
  )
}

export default Banner