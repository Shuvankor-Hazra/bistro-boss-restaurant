import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="px-3 lg:px-0">
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <div className="max-w-screen-xl mx-auto px-3 lg:px-0 my-20">
                <Category />
                <ChefService />
                <PopularMenu />
                <CallUs />
                <Recommends />
            </div>
            <Featured />
            <div className="max-w-screen-xl mx-auto px-3 lg:px-0 my-20">
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;