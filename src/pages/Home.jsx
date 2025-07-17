import React from 'react'
import bg1 from'@/assets/images/bg1.png'
import g1 from '@/assets/graphics/g1.png'
import g2 from '@/assets/graphics/g2.png'
import g3 from '@/assets/graphics/g3.png'
import g4 from '@/assets/graphics/g4.png'
import g6 from '@/assets/graphics/g6.png'
import g7 from '@/assets/graphics/g7.png'
import g8 from '@/assets/graphics/g8.png'
import g9 from '@/assets/graphics/g9.png'
import g10 from '@/assets/graphics/g10.png'
import g11 from '@/assets/graphics/g11.png'
import g12 from '@/assets/graphics/g12.png'
import g13 from '@/assets/graphics/g13.png'
import g14 from '@/assets/graphics/g14.png'
import g15 from '@/assets/graphics/g15.png'

import c from '@/assets/graphics/C.png'

import a1 from '@/assets/images/a1.png'
import a2 from '@/assets/images/a2.png'
import a3 from '@/assets/images/a3.png'
import a4 from '@/assets/images/a4.png'
import a5 from '@/assets/images/a5.png'
import a6 from '@/assets/images/a6.png'
import a7 from '@/assets/images/a7.png'
import a8 from '@/assets/images/a8.png'
import a9 from '@/assets/images/a9.png'
import a10 from '@/assets/images/a10.png'
import a11 from '@/assets/images/a11.png'
import a12 from '@/assets/images/a12.png'
import a13 from '@/assets/images/a13.png'
import a14 from '@/assets/images/a14.png'
import a15 from '@/assets/images/a15.png'
import a16 from '@/assets/images/a16.png'
import b1 from '@/assets/images/b1.png'
import b2 from '@/assets/images/b2.png'
import b3 from '@/assets/images/b3.png'
import b4 from '@/assets/images/b4.png'
import m1 from '@/assets/images/m1.png'
import m2 from '@/assets/images/m2.png'
import m3 from '@/assets/images/m3.png'
import m4 from '@/assets/images/m4.png'
import m5 from '@/assets/images/m5.png'
import m6 from '@/assets/images/m6.png'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon, FavouriteIcon, Message02Icon, PlayFreeIcons, UploadSquare02Icon } from '@hugeicons/core-free-icons/index'
import { PlayIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TrendingCard } from '@/_components'
import Cards from '@/_components/Cards'

const genre = [
  {
    title: "Pop"
  },
  {
    title: "EDM"
  },{
    title: "Country"
  },
  {
    title: "R&b/Soul"
  },
  {
    title: "Latin, K-pop"
  },
]

const artists = [
  {
    name: "Aiden Collins",
    image: g6
  },
  {
    name: "Lillian Sanchez",
    image: g7
  },
  {
    name: "Sebastian Reed",
    image: g8
  },
  {
    name: "Victoria Cook",
    image: g9
  },
  {
    name: "David Murphy",
    image: g10
  },
  {
    name: "Mauris in diam",
    image: g11
  },
  {
    name: "Nullam maximus",
    image: g12
  },
  {
    name: "Pellentesque laoreet",
    image: g13
  },
  {
    name: "Donec luctus risus",
    image: g14
  },
  {
    name: "Maecenas posuere",
    image: g15
  },
]

const bgColors = [
  "bg-linear-to-b  from-lime-200 1% to-[#8BA80D]",
  "bg-linear-to-b  from-yellow-200 to-[#FDAD18]",
  "bg-linear-to-b  from-red-200 to-[#EF1212]",
  "bg-linear-to-b  from-blue-200 to-[#2416E9CC]",
  "bg-linear-to-b  from-pink-200 to-[#E41AD7CC]",
  
];

const albums = [
  {
    name: "Maecenas bibendum nisl",
    image: a1
  },
  {
    name: "Maecenas bibendum nisl",
    image: a2
  },
  {
    name: "Maecenas bibendum nisl",
    image: a3
  },
  {
    name: "Maecenas bibendum nisl",
    image: a4
  },
  {
    name: "Praesent blandit mau",
    image: a5
  },
  {
    name: "Vivamus non tellus",
    image: a6
  },
  {
    name: "Nullam eleifend lorem",
    image: a7
  },
  {
    name: "Vivamus non tellus",
    image: a8
  },
  {
    name: "Maecenas bibendum nisl",
    image: a9
  },
  {
    name: "Maecenas bibendum nisl",
    image: a10
  },
  {
    name: "Maecenas bibendum nisl",
    image: a11
  },
  {
    name: "Maecenas bibendum nisl",
    image: a12
  },
  {
    name: "Vivamus non tellus",
    image: a13
  },
  {
    name: "Maecenas bibendum nisl",
    image: a14
  },
  {
    name: "Maecenas bibendum nisl",
    image: a15
  },
  {
    name: "Maecenas bibendum nisl",
    image: a16
  },
]

const sArtists = [
  {
    name: "Pellentesque laoreet",
    iimage: b1
  },
  {
    name: "Pellentesque laoreet",
    iimage: b2
  },
  {
    name: "Pellentesque laoreet",
    iimage: b3
  },
  {
    name: "Pellentesque laoreet",
    iimage: b4
  },
]

const merchandise = [
  {
    title: "T-shirt",
    price: "34.00",
    image: m1
  },
  {
    title: "T-shirt",
    price: "34.00",
    image: m2
  },
  {
    title: "Cap",
    price: "34.00",
    image: m3
  },
  {
    title: "Jeans",
    price: "34.00",
    image: m4
  },
  {
    title: "Shirt",
    price: "34.00",
    image: m5
  },
]

const Home = () => {
  return (
    <>
      {/* ==================== Section 1 ============================= */}
      <div className="section1_container px-[4%] relative -mt-56 ">
        <div className="container mx-auto">
          <div className="section1 flex items-center justify-center flex-col">
            <div className="boxes absolute top-0 left-0 w-full grid grid-cols-3">
              <img src={bg1} alt="background" loading='lazy' className='opacity-10 object-cover h-96 w-full mix-blend-color-dodge'/>
              <img src={bg1} alt="background" loading='lazy' className='opacity-10 object-cover h-96 w-full mix-blend-color-dodge'/>
              <img src={bg1} alt="background" loading='lazy' className='opacity-10 object-cover h-96 w-full mix-blend-color-dodge'/>
            </div>
            <div className="middle flex-col items-center justify-center lg:hidden flex lg:z-20 relative mt-54">
                <p className="text-center font-alumni text-4xl font-light">
                  Play What Moves You <br />{" "}
                  <span className="text-5xl font-semibold">
                    Discover Music That Speaks You.
                  </span>
                </p>
              </div>
            <div className="content relative mt-5 lg:mt-52 lg:z-20 w-fit flex items-center justify-center">
              <div className="box flex items-center justify-center flex-col gap-5">
                <img src={g1} alt="image" loading='lazy' className='lg:w-[80%]'/>
                <div className="md:absolute w-full md:w-fit mt-4 md:mt-0 top-16 -right-12 right_box bg-white/10 border border-white/30 shadow-lg rounded-lg backdrop-blur-md h-fit py-4 px-6">
                  <div className="box flex items-center gap-3 border-b border-dashed border-gray-400 pb-3">
                    <div className="icon p-2 lg:p-3 rounded-full bg-white/30">
                      <HugeiconsIcon icon={UploadSquare02Icon} size={24}/>
                    </div>
                    <p className='text-sm'>Upload photos and videos</p>
                  </div>
                  <div className="box flex items-center gap-3 mt-3">
                    <div className="icon p-2 lg:p-3 rounded-full bg-white/30">
                      <HugeiconsIcon icon={Message02Icon} size={24}/>
                    </div>
                    <p className='text-sm'>Chat with your loved once</p>
                  </div>
                </div>
                <div className="md:absolute w-full md:w-fit bottom-16 -left-8 left_box bg-white/10 border border-white/30 shadow-lg rounded-lg backdrop-blur-md h-fit py-4 px-6">
                  <p className='font-semibold text-sm'>Trending now</p>
                  <div className="boxes flex items-center gap-3 mt-2">
                    <div className="box w-20 cursor-pointer relative">
                      <img src={g2} alt="" />
                      <div className="icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-200 p-2 rounded-full">
                        <PlayIcon className='w-4 h-4'/>
                      </div>
                    </div>
                    <div className="box w-24 cursor-pointer relative">
                      <img src={g3} alt="" />
                      <div className="icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-200 p-2 rounded-full">
                        <PlayIcon className='w-4 h-4'/>
                      </div>
                    </div>
                    <div className="box w-20 cursor-pointer relative">
                      <img src={g4} alt="" />
                      <div className="icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-200 p-2 rounded-full">
                        <PlayIcon className='w-4 h-4'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Section 2 ============================= */}
      <div className="section2_container px-[4%]">
        <div className="container mx-auto">
          <div className="section2 py-10">
            <div className="top flex items-start md:items-center justify-between flex-col md:flex-row gap-4">
              <h2 className='font-semibold text-2xl'>Top Genres this week</h2>
              <Button className={`rounded-full lg:px-5 lg:py-5 text-black`}>View More</Button>
            </div>
            <div className="bottom mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
              {
                genre.map((item, index) => (
                  <div className={`box cursor-pointer rounded-2xl md:py-8 md:px-4 py-4 px-2 flex items-center justify-around gap-4 ${bgColors[index % bgColors.length]}`} key={index}>
                    <p className='text-black font-semibold md:text-lg'>{item?.title}</p>
                    <div className="icon bg-white/50 backdrop-blur-md md:p-2 p-1 rounded-full border border-white">
                      <HugeiconsIcon icon={ArrowRight01Icon} color='#000'/>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Section 3 ============================= */}
      <div className="section3_container px-[4%]">
        <div className="container mx-auto">
          <div className="section3 py-10 bg-[url(./assets/images/bg2.png)] bg-cover bg-center rounded-4xl px-4 md:px-6 lg:px-10">
            <div className="top flex items-center justify-between">
              <h2 className='font-semibold text-2xl'>Top Artists</h2>
              <Button className={`rounded-full lg:px-5 lg:py-5 text-black`}>View More</Button>
            </div>
            <div className="bottom w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 mt-10">
              {
                artists.slice(0, 5).map((item, index) => (
                  <TrendingCard key={index} item={item}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Section 4 ============================= */}
      <div className="section4_container px-[4%]">
        <div className="container mx-auto">
          <div className="section4 py-10">
            <div className="top flex items-center justify-start">
              <h2 className='font-semibold text-2xl'>Latest albums</h2>
            </div>
            <div className="bottom mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
              {
                albums.slice(0, 4).map((item, index)=>(
                  <Cards key={index} item={item}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* ==================== section 5 ============================== */}
      <div className="section5_container px-[4%] mt-8">
        <div className="container mx-auto">
          <div className="section5 py-10 bg-[#4D41FA] rounded-4xl px-4 md:px-6 lg:px-10 relative">
            <div className="top flex md:items-center items-start justify-between flex-col md:flex-row gap-4 z-20 relative">
              <h2 className='font-semibold text-2xl'>Latest songs</h2>
              <Button className={`rounded-full lg:px-5 lg:py-5 text-black`}>View More</Button>
            </div>
            <div className="bottom mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 z-20 relative">
              {
                albums.slice(4, 8).map((item, index)=>(
                  <Cards key={index} item={item}/>
                ))
              }
            </div>
            <img src={c} alt="" className='absolute md:w-[50%] lg:w-[40%] md:-top-20  md:left-1/2 md:-translate-x-1/2 top-0 left-0'/>
          </div>
        </div>
      </div>
      {/* ==================== Section 6 ============================= */}
      <div className="section6_container px-[4%] md:mt-10">
        <div className="container mx-auto">
          <div className="section6 py-10">
            <div className="top flex items-center justify-start">
              <h2 className='font-semibold text-2xl'>Latest albums</h2>
            </div>
            <div className="bottom mt-6 md:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
              {
                albums.slice(8, 12).map((item, index)=>(
                  <Cards key={index} item={item}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Section 7 ============================= */}
      <div className="section7_container px-[4%]">
        <div className="container mx-auto">
          <div className="section7 py-10">
            <div className="top flex items-center justify-start">
              <h2 className='font-semibold text-2xl'>Trending songs</h2>
            </div>
            <div className="bottom w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-10 mt-10">
              {
                artists.slice(5, 10).map((item, index) => (
                  <TrendingCard key={index} item={item}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Section 8 ============================= */}
      <div className="section8_container px-[4%] md:mt-10">
        <div className="container mx-auto">
          <div className="section8 py-10">
            <div className="top flex items-center justify-start">
              <h2 className='font-semibold text-2xl'>Most liked albums</h2>
            </div>
            <div className="bottom mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
              {
                albums.slice(12, 16).map((item, index)=>(
                  <Cards key={index} item={item}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Section 9 ============================= */}
      <div className="section9_container px-[4%]">
        <div className="container mx-auto">
          <div className="section py-10">
            <div className="top flex items-center justify-start">
              <h2 className='font-semibold text-2xl'>Top streamed artists</h2>
            </div>
            <div className="bottom mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-10">
              {
                sArtists.map((item, index) => (
                  <div className="box bg-black p-4 rounded-3xl" key={index}>
                    <div className="image w-full flex items-center justify-center relative h-54">
                      <img src={item?.iimage} alt="" className='h-72 -top-10 object-cover absolute'/>
                    </div>
                    <p className='mt-10 text-center'>{item?.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Section 10 ============================= */}
      <div className="section10_container px-[4%]">
        <div className="container mx-auto">
          <div className="section10 py-10">
            <div className="top flex items-start md:items-center justify-between flex-col md:flex-row gap-4">
              <h2 className='font-semibold text-2xl'>Merchandise</h2>
              <Button className={`rounded-full lg:px-5 lg:py-5 text-black`}>View More</Button>
            </div>
            <div className="bottom mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {
                merchandise.map((item, index) => (
                  <div className="box" key={index}>
                    <div className="top">
                      <img src={item?.image} alt="image" loading='lazy' className='w-full'/>
                    </div>
                    <div className="bottom flex items-center justify-between mt-4">
                      <p className=''>{item?.title}</p>
                      <span className='flex items-center gap-1'>
                        <div className="line h-[1px] w-10 bg-white"></div>
                        <p className='text-sm'>${item?.price}</p>
                      </span>
                    </div>
                    <Button className={`rounded-4xl text-black mt-3`}>View More</Button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Section 11 ============================= */}
      <div className="section11_container px-[4%] lg:mt-10">
        <div className="container mx-auto">
          <div className="section11 py-10 relative">
            <h2 className='font-alumni text-7xl md:text-9xl lg:text-[200px] font-bold lg:leading-34'>Music <br /><span className='text-primary'>Anytime</span> <br />Anywhere </h2>
            <Button className={`text-black rounded-full lg:py-5 lg:px-5! mt-6 lg:mt-10`}>Click Here</Button>
            <img src={m6} alt="" loading='lazy' className='lg:absolute top-0 right-0 lg:w-[52%] w-full mt-4 lg:mt-0'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home