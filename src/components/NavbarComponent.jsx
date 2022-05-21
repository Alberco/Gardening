const NavbarComponent = () => {
    return (
        <div className="bg-lime-400 py-2 shadow-2xl">
            <div className="container mx-auto">
                <div className="flex justify-around items-center py-2 overflow">
                    <div className="flex justify-center gap-x-4 laptop:gap-x-6 desktop:gap-x-10 items-end basis-3/4 py-4">
                        <div className=" text-xl laptop:text-3xl laptop:block desktop:text-3xl   border_letra  hover:scale-125  transition-all duration-200 ease-in-out">
                            <a href="/" className='py-4 my-2'>Inicio</a>
                        </div>
                        <div className=" text-xl laptop:text-3xl laptop:block desktop:text-3xl  border_letra  hover:scale-125  transition-all duration-200 ease-in-out ">
                            <a href="/" className='py-4 my-2'>Nosotros</a>
                        </div>
                        <div className=" text-xl laptop:text-3xl laptop:block desktop:text-3xl  border_letra  hover:scale-125  transition-all duration-200 ease-in-out ">
                            <a href="/" className='py-4 my-2'>Servicios</a>
                        </div>
                        <div className=" text-xl laptop:text-3xl laptop:block desktop:text-3xl  border_letra  hover:scale-125  transition-all duration-200 ease-in-out ">
                            <a href="/" className='py-4 my-2'>Productos</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default NavbarComponent;
