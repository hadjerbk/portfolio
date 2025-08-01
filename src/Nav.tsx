import React from 'react'
import Arrow from './componenets/arrow'
import  Email  from './componenets/Email'

const Nav = () => {
  return (
    <div className='bg-black min-h-screen  '>
    <div className='font-[Helvetica] font-extrabold pl-4 p-4 border-b-1 text-[20px] border-b-[#475768] text-white mb-20'>Portfolio</div>
    <div className='border-1 border-[#475768] rounded-3xl  flex items-center gap-2 p-2 pl-3 pr-3 mt-15 bg-[#2f3e4f] ml-4 mb-5  w-fit'>
      <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
      <p className='text-white'>Availabale for freelance</p>
    </div>
    
    <div className=" ml-4 mt-5  mr-4 w-full">
      <div className="space-y-3  font-bold text-5xl mb-5">
         <p className=" leading-tight text-white">Frontend<br /> Developer</p>
          <p className="text-[#9CA3AF] leading-tight">& Web<br /> Designer</p>
       </div>
         <p className='text-[22px] text-[#9CA3AF] mb-10'>I create exceptional digital experiences through clean code and thoughtful design.
            Specializing in modern web technologies and user-centered design principles.</p>
      <button className='bg-white rounded-md w-[95%] h-10 flex items-center justify-center gap-2'>
  View My Work
  <Arrow />
</button>

      <button className='border-[#475768] border-1 text-white rounded-md w-[95%] h-10 mt-5 flex gap-2 items-center justify-center'>
        <Email/>
        Get In Touch
      </button>
   </div>
   
    
    </div>
  )
}

export default Nav