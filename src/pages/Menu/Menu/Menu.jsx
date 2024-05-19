import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={coverImg} title='Our menu' />
            {/* Main cover */}
            <div className='max-w-screen-xl mx-auto px-3 lg:px-0 my-20'>
                <SectionTitle subHeading={"--- Don't miss ---"} heading={"TODAY'S OFFER"} />
                {/* Offered menu items */}
                <MenuCategory items={offered} />
                {/* Desserts menu items */}
                <MenuCategory items={desserts} title='desserts' img={dessertImg}/>
                {/* Pizzas menu items */}
                <MenuCategory items={pizzas} title='pizzas' img={pizzaImg}/>
                {/* Salads menu items */}
                <MenuCategory items={salads} title='salads' img={saladImg}/>
                {/* Soups menu items */}
                <MenuCategory items={soups} title='soups' img={soupImg}/>
                
            </div>
        </div>
    );
};

export default Menu;