import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === "popular")
    //             setMenu(popularItems)
    //         })
    // }, [])
    // console.log(menu);
    return (
        <section>
            <SectionTitle subHeading={'--- Our popular items ---'} heading={'FROM OUR MENU'} />
            <div className="grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="text-center mt-10 ">
            <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] uppercase">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;