/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} />}
            <div className="my-20">
            <div className="grid md:grid-cols-2 gap-8 ">
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="text-center mt-10">
                <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4 border-[#BB8506] uppercase ">ORDER YOUR FAVORITE FOOD</Link>
            </div>
            </div>
        </div>
    );
};

export default MenuCategory;