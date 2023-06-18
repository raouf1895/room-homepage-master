import React from 'react'

export default function Descreption(props) {
  return (
    <>
    <div className='relative row-start-1 row-end-2 col-start-3 col-end-5 '>
      <div className='mobile:p-24 p-14'>
        <h1 className='font-extrabold font-league mobile:text-[34px] mobile:leading-10 text-[27px]'> {props.titles}</h1>
          <p className='text-dark-grey  font-league text-[12px] mt-6'>
            {props.paragraphs}
          </p>
          <button className='flex justify-center items-center gap-4 uppercase mt-6 tracking-[10px] text-[12px] font-league font-bold hover:text-dark-grey duration-300'>Shop now
          <svg  width="40" height="12" ><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
        </button>
      </div>
      <div className='absolute bottom-0 mobile:flex hidden'>
        <button onClick={props.pervious} className='bg-black px-[26px] py-4 hover:bg-very-dark-blue duration-300'>
        <svg  width="14" height="24" ><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
        </button>
        <button onClick={props.next} className='bg-black px-[25px] py-4 hover:bg-very-dark-blue duration-300'>
        <svg width="14" height="24"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
        </button>
      </div>
    </div>
    
    </>
    
  )
}
