import React, { useState } from 'react'



export default function Navbar(props) {
  const desktopImage = props.image
  const mobileImage = props.mobImage
  const divStyle = {
    backgroundImage: `url(${desktopImage})`,
  };
  const divMobileStyle = {
    backgroundImage:`url(${mobileImage})`
  }
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = ()=>{
    setIsOpen(true)
  }
  const closeMenu = () =>{
    setIsOpen(false)
  }
  return (
    <>
    <div className='text-white  font-league bg-cover bg-center  mobile:flex justify-start items-start  gap-14 pl-14  hidden px-8 pt-6 row-start-1 row-end-2 col-start-1 col-end-3  ' style={ divStyle }>
      
      <div className='text-[30px] '>room</div>
        <nav >
            <ul className='flex justify-center items-center gap-8 list-none  m-3 text-[18px]'>
                <li className="relative after-bar"><a className="after-bar-inner" href='/'>home</a></li>
                <li className="relative after-bar"><a className="after-bar-inner" href='/shop'>shop</a></li>
                <li className="relative after-bar"><a className="after-bar-inner" href='/about'>about</a></li>
                <li className="relative after-bar"><a className="after-bar-inner" href='/contact'>contact</a></li>
            </ul>
        </nav>
    </div>
    <div className='relative mobile:hidden  bg-cover bg-center flex items-start justify-start gap-24 text-white font-league h-[350px]' style={divMobileStyle}>
      <button className='mt-8 ml-8 ' 
      onClick={openMenu}>
      <svg  width="20" height="14" ><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>
      </button>
      <div className='text-[30px] mt-4 '>room</div> 
      {isOpen && (<div className=' fixed h-full w-full bg-pop-up'>
        <nav className='text-black w-full bg-white pl-4 flex justify-between items-center h-[80px] '>
        <button onClick={closeMenu}><svg width="16" height="16"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg></button>
            <ul className='flex justify-start items-center gap-6 pr-4 font-bold'>
                <li ><a href='/'>home</a></li>
                <li ><a href='/shop'>shop</a></li>
                <li ><a href='/about'>about</a></li>
                <li ><a href='/contact'>contact</a></li>
            </ul>
        </nav>
      </div>)}
      <div className='bottom-0 right-0 absolute'>
        <div className='flex justify-center items-center  '>
          <button onClick={props.pervious} className='bg-black p-4'>
            <svg  width="14" height="24" ><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
          </button>
          <button onClick={props.next} className='bg-black p-4'>
            <svg  width="14" height="24" ><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>  
          </button>
        </div>
        
      </div>
    </div>
      
    </>
    
  )
}
