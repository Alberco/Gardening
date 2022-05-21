import fondop from '../animation/fondop.png'

const HeroComponent = () => {
    return (
        <div className="desktop:container mx-auto px-1 laptop:px-14 desktop:px-14">
            <div className="flex flex-wrap text-center laptop:flex-nowrap desktop:flex-nowrap flex-row container1  mt-8 laptop:mt-8 desktop:mt-8 gap-10">
                <div className="my-8 px-8 laptop:my-auto desktop:my-auto mx-auto basis-full laptop:basis-1/2 desktop:basis-1/2">
                    <div className="px-1 desktop:px-10 py-6 mt-1 desktop:mt-20 border-y-2  border-black text-center ">
                        <p className=' text-3xl desktop:text-5xl'>Empresa Peruana de Jardineria </p>
                    </div>
                    <div className='mt-5' >
                        <p className='text-2xl laptop:text-3xl desktop:text-4xl mt-16'>
                            Somos lideres en el mercado de construccion de jardines horizonaltes y verticales , 
                            ademas que hacemos el mantenimiento de los jardines de manera profesional
                        </p>
                    </div>
                    <div className='px-10 text-center'>
                        <button className='text-2xl px-10 desktop:px-16 mt-10 hover:bg-lime-300 py-2 desktop:py-4 border-2 border-black hover:scale-125  transition-all duration-700 ease-in-out'>
                            Contactar
                        </button>
                    </div>
                </div>
                <div className="hidden laptop:block desktop:block basis-1/2 contenedor1 bg-contain bg-no-repeat bg-center text-center mx-auto">
                    <img src={fondop} alt="" className='h-full w-full' />
                </div>
            </div>
        </div>
    )
};

export default HeroComponent;


