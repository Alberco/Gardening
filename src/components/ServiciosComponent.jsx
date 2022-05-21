import icon1 from '../animation/icon1.png'
import icon2 from '../animation/icon2.png'
import icon3 from '../animation/icon3.png'
import icon4 from '../animation/icon4.png'
import icon5 from '../animation/icon5.png'
import icon6 from '../animation/icon6.png'
const ServiciosComponent = () => {
    return (
        <div className='pt-4 mb-28'>
            <div className="desktop:container mx-auto px-2 laptop:px-10 destop:px-10">
                <div className='text-center pb-14'>
                    <p className='text-5xl border-x-2 border-black/60 inline px-4' >Servicios</p>
                </div>
                <div className='grid grid-cols-1 laptop:grid-cols-4 desktop:grid-cols-4 laptop:gap-6 gap-y-6 content-center px-2 place-content-center'>
                    <div className='flex border-2 items-center border-black/30 gap-2 laptop:hover:scale-110  desktop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <div className='basis-1/2 bg-lime-400 px-6 py-8 '>
                            <p className='text-xl '>Mantenimiento de áreas verdes, jardines, jardineras y macetas.</p>
                        </div>
                        <div className='basis-1/2 flex justify-center'>
                            <img src={icon1} alt=""/>
                        </div>
                    </div>
                    <div className='flex border-2 items-center border-black/30 gap-2 laptop:hover:scale-110  desktop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <div className='basis-1/2 bg-lime-400 px-6 py-8 '>
                            <p className='text-xl '>Mantenimiento de áreas verdes, jardines, jardineras y macetas.</p>
                        </div>
                        <div className='basis-1/2 flex justify-center'>
                            <img src={icon2} alt=""/>
                        </div>
                    </div>
                    <div className='flex border-2 items-center border-black/30 gap-2 laptop:hover:scale-110  desktop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <div className='basis-1/2 bg-lime-400 px-6 py-8 '>
                            <p className='text-xl '>Mantenimiento de áreas verdes, jardines, jardineras y macetas.</p>
                        </div>
                        <div className='basis-1/2 flex justify-center'>
                            <img src={icon3} alt=""/>
                        </div>
                    </div>
                    <div className='flex border-2 items-center border-black/30 gap-2 laptop:hover:scale-110  desktop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <div className='basis-1/2 bg-lime-400 px-6 py-8 '>
                            <p className='text-xl '>Mantenimiento de áreas verdes, jardines, jardineras y macetas.</p>
                        </div>
                        <div className='basis-1/2 flex justify-center'>
                            <img src={icon4} alt=""/>
                        </div>
                    </div>
                    <div className='flex border-2 items-center border-black/30 gap-2 laptop:hover:scale-110  desktop:hover:scale-110 transition-all duration-300 ease-in-out desktop;col-start-2'>
                        <div className='basis-1/2 bg-lime-400 px-6 py-8 '>
                            <p className='text-xl '>Mantenimiento de áreas verdes, jardines, jardineras y macetas.</p>
                        </div>
                        <div className='basis-1/2 flex justify-center'>
                            <img src={icon5} alt=""/>
                        </div>
                    </div>
                    <div className='flex border-2 items-center border-black/30 gap-2 laptop:hover:scale-110  desktop:hover:scale-110  transition-all duration-300 ease-in-out'>
                        <div className='basis-1/2 bg-lime-400 px-6 py-8 '>
                            <p className='text-xl '>Mantenimiento de áreas verdes, jardines, jardineras y macetas.</p>
                        </div>
                        <div className='basis-1/2 flex justify-center'>
                            <img src={icon6} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ServiciosComponent;
