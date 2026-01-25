import React from 'react'

function index() {
  return (
    <section id="attorney" className="bg-[#F2EEED]">
        <div className='mx-auto max-w-full sm:max-w-[480px] lg:max-w-7xl grid grid-cols-1 text-center'>
           <div className='title-box p-[30px_15px] mb-[24px]'>
               <p className='text-[#898989] leading-[1.5] text-[20px]'>You may want to</p>
               <h2 className='text-[#333] text-[32px] font-medium font-sans relative after:block after:w-[50px] after:h-[3px] after:absolute after:top-[56px] after:left-[calc(50%-25px)] after:bg-[#c18f59]'>Know the attorneys</h2>
           </div>
        </div>
        <div className='mx-auto max-w-full sm:max-w-[480px] lg:max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] px-[11px]'> 
            <div className='team-box  p-[10px] mb-[30px] transition-all duration-400 ease-in-out cursor-pointer hover:shadow-[2px_2px_5px_#c18f59]'>
               <img className='w-full' src="	https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/team-1.jpg" alt="teamImg" />
               <div className='team-detail bg-[#f9f9f9] p-[20px]'>
                    <ul className='text-[#4b4b4b] text-center'>
                      <li className='text-[25px] font-semibold'>Thi Ngoc</li>
                      <li className='text-[17px]'>Counsel</li>
                      <li className='font-mono'>Family Law</li>
                      <li className='font-mono'>Commercial Lending</li>
                      <li className='font-mono'>Real Estate</li>
                    </ul>
               </div>
            </div>
            <div className='team-box  p-[10px] mb-[30px] transition-all duration-400 ease-in-out cursor-pointer hover:shadow-[2px_2px_5px_#c18f59]'>
               <img className='w-full' src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/team-2.jpg" alt="teamImg" />
               <div className='team-detail bg-[#f9f9f9] p-[20px]'>
                    <ul className='text-[#4b4b4b] text-center'>
                      <li className='text-[25px] font-semibold'>Stph Hlme</li>
                      <li className='text-[17px]'>Counsel</li>
                      <li className='font-mono'>Family Law</li>
                      <li className='font-mono'>Commercial Lending</li>
                      <li className='font-mono'>Real Estate</li>
                    </ul>
               </div>
            </div>
            <div className='team-box  p-[10px] mb-[30px] transition-all duration-400 ease-in-out cursor-pointer hover:shadow-[2px_2px_5px_#c18f59]'>
               <img className='w-full' src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/team-3.jpg" alt="teamImg" />
               <div className='team-detail bg-[#f9f9f9] p-[20px]'>
                    <ul className='text-[#4b4b4b] text-center'>
                      <li className='text-[25px] font-semibold'>Bich Dang</li>
                      <li className='text-[17px]'>Counsel</li>
                      <li className='font-mono'>Family Law</li>
                      <li className='font-mono'>Commercial Lending</li>
                      <li className='font-mono'>Real Estate</li>
                    </ul>
               </div>
            </div>
        </div>
    </section>
  )
}

export default index
