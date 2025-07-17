import React from 'react'
import play from '@/assets/graphics/play.png'
import { HugeiconsIcon } from '@hugeicons/react'
import { FavouriteIcon } from '@hugeicons/core-free-icons/index'

const Cards = ({item}) => {
  return (
    <div className="box flex flex-col gap-3">
                    <div className="top relative">
                      <img src={item?.image} alt="image" loading='lazy' className='w-full'/>
                      <div className="icon flex items-center justify-center bg-white/40 cursor-pointer p-3 border border-gray-200 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img src={play} alt="" className='w-5'/>
                      </div>
                      <div className="wishlist bg-primary p-2 rounded-full absolute top-4 right-4">
                        <HugeiconsIcon icon={FavouriteIcon} size={20} color='#000'/>
                      </div>
                    </div>
                    <div className="bottom">
                      <p className='text-sm md:text-md lg:text-lg'>{item?.name}</p>
                    </div>
                  </div>
  )
}

export default Cards