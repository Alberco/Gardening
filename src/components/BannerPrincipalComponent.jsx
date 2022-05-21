import logo from '../animation/logo.png'
const BannerPrincipalComponent = () => {
    return (
        <div className="banner bg-cover h-16 flex justify-center gap-4 items-center bg-top  py-4 text-center">
            <img src={logo} alt="aea" className='h-full' />
            <p className='text-3xl h-full text-white'>Gardening Perú</p>
        </div>
    )
};

export default BannerPrincipalComponent;
