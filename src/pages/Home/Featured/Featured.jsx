import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <section className="featured-item mt-20 py-20 ">
            <SectionTitle subHeading={'--- check it out ---'} heading={'featured items'} />
            <div className="md:flex items-center gap-3 max-w-screen-xl mx-auto px-3 lg:px-0 bg-black bg-opacity-50 ">
                <div className="md:w-1/2 ">
                    <img src={featuredImg} alt="Featured img" />
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 text-white p-5">
                    <h2 className="text-2xl font-medium">March 20, 2023</h2>
                    <h2 className="text-2xl font-medium">WHERE CAN I GET SOME?</h2>
                    <p className="text-lg mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem veniam magnam blanditiis obcaecati, consequatur quis vero ipsam autem architecto doloremque. Iusto, nostrum. Eaque molestiae, inventore expedita vitae eum doloribus necessitatibus cupiditate pariatur provident debitis quas laborum nisi officiis excepturi, quod numquam earum ratione. Debitis illum quos reiciendis odit ea!</p>
                    <div className="mt-5">
                        <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] uppercase text-white">read more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;