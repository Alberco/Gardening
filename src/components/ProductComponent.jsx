import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import pro1 from '../animation/product/product1.jpg'
import pro2 from '../animation/product/product2.jpg'
import pro3 from '../animation/product/product3.jpg'
import pro4 from '../animation/product/product4.jpg'
import pro5 from '../animation/product/product5.jpg'
import pro6 from '../animation/product/product6.jpg'


const ProductComponent = () => {


    return (
        <div className='desktop:container desktop:4paginas mx-auto laptop:px-24 desktop:px-24 mb-20'>
            <div className="text-center">
                <p className='text-5xl border-x-2 border-black px-4 inline-block'>Ecommerce</p>
            </div>
            <Splide

                tag="section"
                hasTrack={false}
                options={{
                    rewind: true,
                    gap: '1rem',
                    perPage: 4,
                    breakpoints:{
                        400:{
                            perPage:1
                        }
                    },
                    perMove: 1,
                    pagination: false
                }}
            >
                <SplideTrack className='py-3'>
                    <SplideSlide>
                        <div className="w-full py-4 text-center">
                            <img src={pro1} alt="" />
                            <p className="text-md text-black">Pulverizador Presión 1.5 L verde duradero </p>
                            <p className="text-xl font-bold text-black py-2">S/19.90 c/u</p>
                            <button
                                className='px-14 py-2 rounded-xl hover:bg-lime-400 transition-all duration-400  border-black border-2 ' 
                            >Comprar</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="w-full py-4 text-center">
                            <img src={pro2} alt="" />
                            <p className="text-md text-black">Pulverizador Presión 1.5 L verde duradero </p>
                            <p className="text-xl font-bold text-black py-2">S/19.90 c/u</p>
                            <button
                                className='px-14 py-2 rounded-xl hover:bg-lime-400 transition-all duration-400  border-black border-2 ' 
                            >Comprar</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="w-full py-4 text-center">
                            <img src={pro3} alt="" />
                            <p className="text-md text-black">Pulverizador Presión 1.5 L verde duradero </p>
                            <p className="text-xl font-bold text-black py-2">S/19.90 c/u</p>
                            <button
                                className='px-14 py-2 rounded-xl hover:bg-lime-400 transition-all duration-400  border-black border-2 ' 
                            >Comprar</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="w-full py-4 text-center">
                            <img src={pro4} alt="" />
                            <p className="text-md text-black">Pulverizador Presión 1.5 L verde duradero </p>
                            <p className="text-xl font-bold text-black py-2">S/19.90 c/u</p>
                            <button
                                className='px-14 py-2 rounded-xl hover:bg-lime-400 transition-all duration-400  border-black border-2 ' 
                            >Comprar</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="w-full py-4 text-center">
                            <img src={pro5} alt="" />
                            <p className="text-md text-black">Pulverizador Presión 1.5 L verde duradero </p>
                            <p className="text-xl font-bold text-black py-2">S/19.90 c/u</p>
                            <button
                                className='px-14 py-2 rounded-xl hover:bg-lime-400 transition-all duration-400  border-black border-2 ' 
                            >Comprar</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="w-full py-4 text-center">
                            <img src={pro6} alt="" />
                            <p className="text-md text-black">Pulverizador Presión 1.5 L verde duradero </p>
                            <p className="text-xl font-bold text-black py-2">S/19.90 c/u</p>
                            <button
                                className='px-14 py-2 rounded-xl hover:bg-lime-400 transition-all duration-400  border-black border-2 ' 
                            >Comprar</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="w-full py-4 text-center">
                            <img src={pro6} alt="" />
                            <p className="text-md text-black">Pulverizador Presión 1.5 L verde duradero </p>
                            <p className="text-xl font-bold text-black py-2">S/19.90 c/u</p>
                            <button
                                className='px-14 py-2 rounded-xl hover:bg-lime-400 transition-all duration-400  border-black border-2 ' 
                            >Comprar</button>
                        </div>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
    )
};

export default ProductComponent;
