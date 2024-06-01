import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://server-two-ivory.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    console.log(reviews);
    return (
        <section>
            <SectionTitle subHeading={'--- What Our Clients Say ---'} heading={'Testimonials'} />
            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}>
                            <div className="text-center flex flex-col items-center gap-10 pb-20">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-6xl" />
                                <p className="w-5/6 mx-auto mb-5">{review.details}</p>
                                <h2 className="text-2xl font-semibold text-[#CD9003]">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;