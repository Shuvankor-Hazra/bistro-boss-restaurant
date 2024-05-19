// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import category1 from '../../../assets/home/slide1.jpg';
import category2 from '../../../assets/home/slide2.jpg';
import category3 from '../../../assets/home/slide3.jpg';
import category4 from '../../../assets/home/slide4.jpg';
import category5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={'--- From 11:00am to 10:00pm ---'} heading={'ORDER ONLINE'}/>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                centeredSlides={true}
                FreeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={category1} alt="food" />
                    <h3 className='text-sm lg:text-3xl font-semibold lg:font-bold uppercase text-center -translate-y-10 lg:-translate-y-14 text-base-100'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category2} alt="food" />
                    <h3 className='text-sm lg:text-3xl font-semibold lg:font-bold uppercase text-center -translate-y-10 lg:-translate-y-14 text-base-100'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category3} alt="food" />
                    <h3 className='text-sm lg:text-3xl font-semibold lg:font-bold uppercase text-center -translate-y-10 lg:-translate-y-14 text-base-100'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category4} alt="food" />
                    <h3 className='text-sm lg:text-3xl font-semibold lg:font-bold uppercase text-center -translate-y-10 lg:-translate-y-14 text-base-100'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category5} alt="food" />
                    <h3 className='text-sm lg:text-3xl font-semibold lg:font-bold uppercase text-center -translate-y-10 lg:-translate-y-14 text-base-100'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category3} alt="food" />
                    <h3 className='text-sm lg:text-3xl font-semibold lg:font-bold uppercase text-center -translate-y-10 lg:-translate-y-14 text-base-100'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category1} alt="food" />
                    <h3 className='text-sm lg:text-3xl font-semibold lg:font-bold uppercase text-center -translate-y-10 lg:-translate-y-14 text-base-100'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category4} alt="food" />
                    <h3 className='text-sm lg:text-3xl font-semibold lg:font-bold uppercase text-center -translate-y-10 lg:-translate-y-14 text-base-100'>desserts</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;