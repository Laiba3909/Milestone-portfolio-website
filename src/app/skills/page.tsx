import H1 from '../Components/heading'
import git from '../../../public/github.png'
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import tcss from '../../../public/tcss.png'
import js from '../../../public/js.png'
import nextjs from '../../../public/nextjs.png'
import Image from 'next/image'
export default  function Skill(){
    return(
        <div>
          <H1  name="My Skills"/>



        <div className='grid grid-cols-3 gap-1 cursor-pointer'>
        
         <div className='animate__animated animate__bounceInLeft animate__delay-1s border-2 shadow-2xl h-40 rounded-3xl sm:h-52 hover:text-white hover:bg-[#41228e] hover:border-[#deab7f] hover:border-2 border-[#41228e] mt-10 ml-2 md:w-auto md:h-60 lg:w-80 lg:ml-16'>
         <Image
         className='md:w-52 sm:w-52  sm:h-44 w-36 h-32 md:h-44 md:mt-8   md:ml-12 lg:ml-12'
           src={html}
           alt=''
           />
           <p className='text-[#41228e] hover:text-white -mt-2 text-center text-2xl font-mono '>Html</p>
         </div>

           <div className='animate__animated animate__bounceInDown animate__delay-2s border-2 shadow-2xl h-40 rounded-3xl hover:text-white hover:bg-[#41228e] hover:border-[#deab7f] hover:border-2 border-[#41228e] mt-10 ml-2 sm:h-52 md:w-auto md:h-60 lg:w-80 lg:ml-16'>
         <Image
         className='md:w-52 sm:w-52  sm:h-44 w-36 h-32 md:h-44 md:mt-8  md:ml-12 lg:ml-12'
           src={css}
           alt=''
           />
           <p className='text-[#41228e] hover:text-white -mt-2 text-center text-2xl font-mono '>Css</p>
         </div>


         <div className='animate__animated animate__bounceInRight animate__delay-1s border-2 shadow-2xl h-40 rounded-3xl hover:text-white hover:bg-[#41228e] hover:border-[#deab7f] hover:border-2 border-[#41228e] mt-10 ml-2 sm:h-52 sm:w-auto md:w-auto md:h-60 lg:w-80 lg:ml-16'>
         <Image
         className='md:w-52 sm:w-52  sm:h-44 w-36 h-32 md:ml-12 md:h-44 md:mt-8   lg:ml-12'
           src={js}
           alt=''
           />
           <p className='text-[#41228e] hover:text-white -mt-2 text-center text-2xl font-mono '>Js</p>
         </div>
        </div>


        <div className='grid grid-cols-3 gap-1 cursor-pointer'>
        
        <div className='animate__animated animate__bounceInLeft animate__delay-1s border-2 shadow-2xl h-40 rounded-3xl sm:h-52 hover:text-white hover:bg-[#41228e] hover:border-[#deab7f] hover:border-2 border-[#41228e] mt-10 ml-2 md:w-auto md:h-60 lg:w-80 lg:ml-16'>
        <Image
        className='md:w-52 sm:w-52  sm:h-44 w-36 h-32 md:h-44 md:mt-8   md:ml-12 lg:ml-12'
          src={tcss}
          alt=''
          />
          <p className='text-[#41228e] hover:text-white -mt-2 text-center text-2xl font-mono '>Tail-Css</p>
        </div>

          <div className='animate__animated animate__bounceInDown animate__delay-2s border-2 shadow-2xl h-40 rounded-3xl hover:text-white hover:bg-[#41228e] hover:border-[#deab7f] hover:border-2 border-[#41228e] mt-10 ml-2 sm:h-52 md:w-auto md:h-60 lg:w-80 lg:ml-16'>
        <Image
        className='md:w-52 sm:w-52  sm:h-44 w-36 h-32 md:h-44 md:mt-8  md:ml-12 lg:ml-12'
          src={nextjs}
          alt=''
          />
          <p className='text-[#41228e] hover:text-white -mt-2 text-center text-2xl font-mono '>Next-js</p>
        </div>


        <div className='animate__animated animate__bounceInRight animate__delay-1s border-2 shadow-2xl h-40 rounded-3xl hover:text-white hover:bg-[#41228e] hover:border-[#deab7f] hover:border-2 border-[#41228e] mt-10 ml-2 sm:h-52 sm:w-auto md:w-auto md:h-60 lg:w-80 lg:ml-16'>
        <Image
        className='md:w-52 sm:w-52  sm:h-44 w-36 h-32 md:ml-12 md:h-44 md:mt-8   lg:ml-12'
          src={git}
          alt=''
          />
          <p className='text-[#41228e] hover:text-white -mt-2 text-center text-2xl font-mono '>Github</p>
        </div>
       </div>

      



        </div>
    )
}