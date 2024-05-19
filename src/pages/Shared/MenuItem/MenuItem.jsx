/* eslint-disable react/prop-types */



const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex items-center gap-3">
            <img src={image} alt="img" className="w-[118px] h-[104px]" style={{borderRadius:'0 200px 200px 200px'}} />
            <div>
                <h3 className="uppercase">{name}--------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506] w-1/6">$ {price}</p>
        </div>
    );
};

export default MenuItem;