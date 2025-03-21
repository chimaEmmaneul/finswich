import FinancialDashboard from '@/components/FinancialDashboard/FinancialDashboard'
import { UploadIcon } from '@/icon/icon'
import Image from 'next/image'
import React from 'react'

const Branding = () => {
  return (

    <section>
      <main className='grid grid-cols-1 gap-y-4 lg:gap-x-4 lg:grid-cols-5 w-full mt-10'>

      <div className='col-span-3'>
        <div className=' relative w-full lg:w-[90%] h-[220px] mb-8'>
          <Image src="/img/banner.png" alt='banner' fill className='' />
        </div>

        <h1 className='font-bold text-gray-600 text-[22px] mb-6'>
          Checkout Appearance
        </h1>
        <div>
          <h3 className='font-bold text-sm text-[#1E3F52] mb-2'>Checkout Logo</h3>
          <p className='text-[#090914] text-xs font-[500]'>Change the logo that your customer will see on your checkout.</p>

          <div className='flex gap-8 mt-8'>
            <div className='relative'>
              <input type="file" className='absolute w-full h-full opacity-0' />
              <div className='bg-[#F8F8FF] w-[180px] flex flex-col items-center justify-center py-6'>
                <UploadIcon />
                <p className='font-bold text-[10px] text-[#0F0F0F]'>Drag & drop files or <span className='text-[#483EA8]'> Browse</span></p>
              </div>
            </div>

            <Image src="/img/QPicon.png" alt='Qproject' width={100} height={100} />
          </div>
        </div>

        <div className='mt-16 space-y-4'>
          <h1 className='font-bold text-[#1E3F52] '>White Label</h1>
          <p>Apply to Remove the <span className='font-bold'>{"“Powered by FinSwich”"}</span> logo on your checkout .</p>
          <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-16'>

            <p className='bg-gray-50 w-[230px] rounded-md flex flex-col items-center justify-center py-4 text-[10px] '>
              <span className='text-gray-400'>
                Powered by
              </span>
              <span className='font-bold'>FinSwich</span>
            </p>
            <button className=' border-2 border-[#09C6E0] rounded-md text-[#09C6E0]  py-2.5 px-6 '>
              Apply for White  Label
            </button>
          </div>
        </div>
      </div>

      <div className='col-span-2'>
        <FinancialDashboard />
      </div>

    </main>
      <div className='flex justify-center  sm:justify-end  w-full mt-6 sm:t-24 '>
        <button className='text-white bg-[#0A59F3] py-3.5 px-12 rounded-md sm:mr-10'>
          Submit
        </button>
      </div>
    </section>
  )
}

export default Branding