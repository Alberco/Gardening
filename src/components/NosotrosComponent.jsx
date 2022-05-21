import fondo1 from '../animation/fondo1.png'
const NosotrosComponent = () => {
    return (
        <div className="mx-auto laptop:mt-16 laptop:mb-12 desktop:mt-16 desktop:mb-12">
            <div className="text-center">
                <p className=" border-x-2 border-black inline px-4 text-4xl laptop:text-5xl desktop:text-5xl">Nosotros</p>
            </div>
            <div className="flex flex-row items-center justify-center pt-6">
                <div className="basis-full laptop:basis-1/2 desktop:basis-1/2 px-12  laptop:relative desktop:relative mt-30">
                    <div className='block laptop:absolute desktop:absolute -bottom-60 left-32'>
                        <p className=" text-xl laptop:text-2xl desktop:text-4xl px-4 font-sans text-center pb-2 font-bold ">Gardening Perú</p>
                        <p className="laptop:text-xl desktop:text-2xl text-md  font-sans laptop:text-center desktop:text-left ">
                            Existe la idea de que para hacer crecer un negocio, tienes que ser despiadado. Pero sabemos que hay una mejor manera de crecer. Uno en el que lo que es bueno para el resultado final también es bueno para los clientes. Creemos que las empresas pueden crecer con conciencia y tener éxito con alma, y que pueden hacerlo con el inbound. Es por eso que hemos creado un ecosistema que une el software, la educación y la comunidad para ayudar a las empresas a crecer mejor cada día..
                        </p>
                        <div className='text-center mb-6'>
                            <button className=' text-xl laptop:text-2xl desktop:text-2xl laptop:py-4 desktop:py-4 p-2 px-8 desktop:px-14 laptop::px-14 mt-4 laptop:mt-10 desktop:mt-10 hover:bg-lime-300 border-2 border-black hover:scale-125  transition-all duration-700 ease-in-out'>
                                Leer mas...
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden laptop:block desktop:block basis-1/2  mt-10">
                    <img src={fondo1} alt="" className='h-full w-full' />
                </div>
            </div>
        </div>
    )
};

export default NosotrosComponent;
