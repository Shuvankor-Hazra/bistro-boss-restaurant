import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Recommends = () => {
    const [recommends, setRecommends] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "dessert")
                setRecommends(popularItems)
            })
    }, [])
    return (
        <section className="mt-20">
            <SectionTitle subHeading={'--- Should Try ---'} heading={'CHEF RECOMMENDS'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {
                    recommends.slice(0,6).map(item=> <div key={item._id} className="card bg-base-300 rounded-none">
                    <figure>
                        <img src={item.image} alt="Shoes" className="w-full border-t" />
                    </figure>
                    <p className="text-center font-bold bg-black text-[#BB8506] py-2 -mt-5">Price: {item.price}$</p>
                    <div className="card-body items-center text-center">
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        <p>{item.recipe}</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] bg-slate-300 uppercase text-[#BB8506]">add to cart</button>
                        </div>
                    </div>
                </div>)
                }
            </div>

        </section>
    );
};

export default Recommends;