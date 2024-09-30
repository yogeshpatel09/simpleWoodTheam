import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

 function ProductCollection() {
  return (
    <>
    <header>
      <div className="relative w-full h-[120px]  ">
        <div className="flex   w-full justify-center items-center ">
          <div className="flex w-full ">
            <div
              className="absolute inset-0 "
              style={{
                backgroundImage: "url('/BgImageHome.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className=" px-36 flex flex-col gap-6 py-6">
                <p className="text-xs text-[#a7a7a7]  relative z-10 flex ">
                  <p className="text-white"> Home -</p> Inner page Example
                </p>
                <h1 className="text-2xl text-white relative z-10">
                Simple Wood Chair Collection
                </h1>
              </div>
              <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
      </header>

      <main>

        <div className="">
            <div className="flex justify-center items-center ">
                <div className="w-[65%]">
                <div className="flex gap-2 justify-center items-center pt-3 text-xs">
                   <p className='text-[#A2A2A2]'>Share</p>
                   <a href='https://www.facebook.com/' className="h-9 w-9 bg-[#F0F0F0] flex justify-center items-center text-lg "><FaFacebookF className=' text-[#BBBBBB]'/></a>
                   <a href='https://www.X.com/' className="h-9 w-9 bg-[#F0F0F0] flex justify-center items-center text-lg"> <FaTwitter className=' text-[#BBBBBB]'/></a>
                   <a href='https://www.YouTube.com/' className="h-9 w-9 bg-[#F0F0F0] flex justify-center items-center text-lg"><FaYoutube className=' text-[#BBBBBB]' /></a>
                   <a href='https://www.Google.com/' className="h-9 w-9 bg-[#F0F0F0] flex justify-center items-center text-lg"><FaGoogle className=' text-[#BBBBBB]'/></a>
                </div>

                <div className="py-6">
                    <img src="/ProductCollection01.png" alt="" />
                </div>

                <div className="space-y-4 py-4">
                    <p>It’s a tricky thing, being a wedding guest.</p>
                    <p>Among the endless list of requirements – buy a present, arrange accommodation, practise your small talk – there’s one obligation that trumps them all in terms of effort: fix up and look sharp.</p>
                    <p>The rules surrounding wedding guest dressing are as nuanced as they come.</p>
                    <p>There are some obvious musts – avoiding white is always a good idea – and others that are only acknowledged by serial wedding-goers, such as steering clear of stilettos unless you enjoy the feeling of numbness in your feet.</p>
                    <p>In the summer, things get even more complicated. Not only do you have to find a sweat-free way to “dress to the nines”, but you have to strike the right balance between playful sunshine garb and formal occasionwear. This forces you to ask difficult questions, such as “Is this wrap dress more ‘I do’ or ‘BBQ?’” and “Does this hat make me look like a chic French woman, or a dishevelled bird?”</p>
                    <p>It’s no mean feat, so here’s our handy guide to summer wedding guest dressing, with tips from industry experts on the trends and colours you need to know about this season .</p>
                </div>

                <div className="py-12">
                    <img src="/ProductCollection02.png" alt="" />
                </div>

                <div className="text-3xl py-6">
                    <h1>Related Products</h1>
                </div>

                <div className="space-y-4 py-8">
                    <p>It’s a tricky thing, being a wedding guest.</p>
                    <p>Among the endless list of requirements – buy a present, arrange accommodation, practise your small talk – there’s one obligation that trumps them all in terms of effort: fix up and look sharp.</p>
                    <p>The rules surrounding wedding guest dressing are as nuanced as they come.</p>
                    <p>There are some obvious musts – avoiding white is always a good idea – and others that are only acknowledged by serial wedding-goers, such as steering clear of stilettos unless you enjoy the feeling of numbness in your feet.</p>
                    <p>In the summer, things get even more complicated. Not only do you have to find a sweat-free way to “dress to the nines”, but you have to strike the right balance between playful sunshine garb and formal occasionwear. This forces you to ask difficult questions, such as “Is this wrap dress more ‘I do’ or ‘BBQ?’” and “Does this hat make me look like a chic French woman, or a dishevelled bird?”</p>
                    <p>It’s no mean feat, so here’s our handy guide to summer wedding guest dressing, with tips from industry experts on the trends and colours you need to know about this season .</p>
                </div>
                </div>
            </div>
            <div className="bg-[#F2F2F2] w-full">
                <div className="flex justify-center items-center">
                    <div className="grid sm:grid-cols-3 gap-6 px-24 py-10">
                         <div className="space-y-1">
                                <img src="/ProductCollection04.png" alt="" />
                                <button className='text-white font-bold bg-[#7DB800] text-xs px-1 py-0.5'>Lifestyle</button>
                                <h1 className='text-sm font-bold'>Staircase Ideas: New Riser Finishes to Transform Your Staircase</h1>
                                <p className='text-xs'>Our statement staircase ideas can give your hallway a whole new lease of life without any messy building work or plannin...</p>
                            </div>
                            <div className="">
                            <img src="/ProductCollection05.png" alt="" />
                            <div className="py-4">
                                <button className='text-white font-bold bg-[#0081B8]  text-xs px-1 py-0.5'>NEWS</button>
                                <h1 className='text-sm font-bold'>Staircase Ideas: New Riser Finishes to Transform Your Staircase</h1>
                                <p className='text-xs'>Our statement staircase ideas can give your hallway a whole new lease of life without any messy building work or plannin...</p>
                                </div>    
                              </div>
                            <div className="">
                            <img src="/ProductCollection06.png" alt="" />
                            <div className="py-8">
                                <button className='text-white font-bold bg-[#7DB800] text-xs px-1 py-0.5'>Lifestyle</button>
                                <h1 className='text-sm font-bold'>Staircase Ideas: New Riser Finishes to Transform Your Staircase</h1>
                                <p className='text-xs'>Our statement staircase ideas can give your hallway a whole new lease of life without any messy building work or plannin...</p>
                                </div>
                            </div>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center py-6">
                        <p className='text-[#4F4F4F] '>See More</p>
                    </div>
            </div>
        </div>
        
      </main>
    </>
  )
}

export default ProductCollection
