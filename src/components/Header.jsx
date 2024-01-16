import '../css/header.css'

export default function Header(){
    return(
        <>
        <div id='header-container' className="bg-cover bg-no-repeat relative">
        <img src="src/assets/header-img.gif" alt="Desk with houseplants on left and computer monitor and lamp on right" className='w-full h-full' />
        <h1 className='absolute mb-6 
        xs:mr-24 xs:pr-4 xs:text-xs xs:mb-4 
        sm:mr-40 sm:pr-4 sm:text-s 
        md:mr-64 md:pr-4 md:text-m 
        lg:mr-80 lg:pr-7 lg:text-l 
        xl:mr-96 xl:pr-10 xl:text-xl 
        2xl:mr-96 2xl:pr-28 2xl:text-2xl'>Hi, I'm Dan</h1>
        </div>
        </>
    )
}