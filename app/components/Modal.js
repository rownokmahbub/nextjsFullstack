import React from 'react'
import {RxCrossCircled} from 'react-icons/rx'
export default function Modal({ children ,modal,setModal}) {
  return (
    <>
      {modal && (
        <div className="bg-black/50 fixed inset-0 ">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-end bg-slate-700 rounded-xl w1/2 p-5">
              <button onClick={()=> setModal(false)} className="text-2xl mb-3"> <RxCrossCircled className='text-red-600'/> </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
