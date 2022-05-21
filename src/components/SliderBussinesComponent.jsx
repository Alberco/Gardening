import logo2 from '../animation/log/logo2.jpg'
import logo3 from '../animation/log/logo3.jpg'
import logo4 from '../animation/log/logo4.jpg'
import logo5 from '../animation/log/logo5.jpg'
import logo6 from '../animation/log/logo6.jpg'
import logo7 from '../animation/log/logo7.jpg'
import logo8 from '../animation/log/logo8.jpg'


const SliderBussinesComponent = () => {
    return (
        <div className="bg-lime-400 mb-10 pb-14  ">
            <h2 className='desktop:text-4xl laptop:text-4xl  text-2xl text-center py-6'>Empresas que confiaron en nosotros</h2>
            <div className="desktop:container px-6  mx-auto">
                <div className="mobile:snap-x flex row gap-x-7 overflow-x-auto  laptop:overflow-visible desktop:overflow-visible">
                    <div className='mobile:snap-center mobile:scroll-ml-2 mobile:shrink-0 desktop:shrink  laptop:shrink  bg-black/30  px-2 py-2 rounded-xl shadow-xl  desktop:hover:scale-110 laptop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <img src={logo4} alt="" className='rounded-xl shadow-lg w-44' />
                    </div>
                    <div className='mobile:snap-center mobile:scroll-ml-2 mobile:shrink-0 desktop:shrink  laptop:shrink  bg-black/30  px-2 py-2 rounded-xl shadow-xl  desktop:hover:scale-110 laptop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <img src={logo2} alt="" className='rounded-xl shadow-lg w-44' />
                    </div>
                    <div className='mobile:snap-center mobile:scroll-ml-2 mobile:shrink-0 desktop:shrink  laptop:shrink  bg-black/30  px-2 py-2 rounded-xl shadow-xl  desktop:hover:scale-110 laptop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <img src={logo3} alt="" className='rounded-xl shadow-lg w-44' />
                    </div>
                    <div className='mobile:snap-center mobile:scroll-ml-2 mobile:shrink-0 desktop:shrink  laptop:shrink  bg-black/30  px-2 py-2 rounded-xl shadow-xl  desktop:hover:scale-110 laptop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <img src={logo4} alt="" className='rounded-xl shadow-lg w-44' />
                    </div>
                    <div className='mobile:snap-center mobile:scroll-ml-2 mobile:shrink-0 desktop:shrink  laptop:shrink  bg-black/30  px-2 py-2 rounded-xl shadow-xl  desktop:hover:scale-110 laptop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <img src={logo5} alt="" className='rounded-xl shadow-lg w-44' />
                    </div>
                    <div className='mobile:snap-center mobile:scroll-ml-2 mobile:shrink-0 desktop:shrink  laptop:shrink  bg-black/30  px-2 py-2 rounded-xl shadow-xl  desktop:hover:scale-110 laptop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <img src={logo6} alt="" className='rounded-xl shadow-lg w-44' />
                    </div>
                    <div className='mobile:snap-center mobile:scroll-ml-2 mobile:shrink-0 desktop:shrink  laptop:shrink  bg-black/30  px-2 py-2 rounded-xl shadow-xl  desktop:hover:scale-110 laptop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <img src={logo7} alt="" className='rounded-xl shadow-lg w-44' />
                    </div>
                    <div className='mobile:snap-center mobile:scroll-ml-2 mobile:shrink-0 desktop:shrink  laptop:shrink  bg-black/30  px-2 py-2 rounded-xl shadow-xl  desktop:hover:scale-110 laptop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <img src={logo8} alt="" className='rounded-xl shadow-lg w-44' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SliderBussinesComponent;
