import { PlayIcon } from 'lucide-react'
import React from 'react'

const TrendingCard = ({item}) => {
  return (
    <div className="box flex items-center justify-center flex-col gap-3">
                    <div className="image flex items-center justify-center relative">
                      <img src={item?.image} alt="image" loading='lazy' className='w-[70%]'/>
                      <div className="icon bg-linear-to-r from-[#C6FF00] to-[#52D875] p-2 rounded-full absolute bottom-0 right-6 md:right-10 lg:right-10 cursor-pointer">
                        <PlayIcon className='text-black w-4 h-4'/>
                      </div>
                    </div>
                    <p className='text-sm md:text-md'>{item?.name}</p>
                  </div>
  )
}

export default TrendingCard