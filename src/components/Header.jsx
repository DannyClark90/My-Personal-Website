import '../css/header.css'

export default function Header(){
    return(
        <>
        <div id='header-container' className="bg-cover bg-no-repeat relative">
        <img src="src/assets/header-img.gif" alt="Desk with houseplants on left and computer monitor and lamp on right" className='w-full h-full' />
            
            <h1 className='absolute mb-6 
            xs:mr-24 xs:pr-4 xs:text-xs
            sm:mr-40 sm:mb-14 sm:pr-8 sm:text-s 
            md:mr-64 md:pr-6 md:text-m 
            lg:mr-80 lg:pr-18 lg:text-l 
            xl:mr-96 xl:pr-40 xl:text-xl'>Hi, I'm Dan</h1>
            <h2 id='subtitle' className="absolute
            xs:mt-6 xs:mr-24 xs:pr-4 xs:text-6xs
            sm:mt-8 sm:mr-40 sm:pr-8 sm:text-5xs 
            md:mt-20 md:mr-64 md:pr-6 md:text-4xs 
            lg:mt-28 lg:mr-80 lg:pr-18 lg:text-3xs 
            xl:mt-30 xl:mr-96 xl:pr-40 xl:text-xxs">Trainee Software Engineer</h2>
        </div>
        </>
    )
}