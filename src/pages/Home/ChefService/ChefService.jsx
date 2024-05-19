import img from '../../../assets/home/chef-service.jpg';
const ChefService = () => {
    return (
        <div className='bg-cover bg-center lg:h-[570px] mb-20 lg:px-28 lg:py-32'
        style={{
            backgroundImage: `url(${img})`,
        }}>
            <div className='bg-white lg:px-28 lg:py-20 text-center'>
                <h2 className='text-3xl lg:text-5xl font-medium mb-5'>Chef Service</h2>
                <p className='lg:text-lg font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eum recusandae provident. Quia cumque reiciendis labore et illum deleniti deserunt quasi neque beatae, nisi quos iure rem. Distinctio non quidem quisquam optio asperiores nulla veniam cupiditate fatam froolud amet eaque maxime mollitia aperiam.</p>
            </div>
        </div>
    );
};

export default ChefService;