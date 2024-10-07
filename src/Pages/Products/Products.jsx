import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:4000/coffee-items')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return (
        <div className="home-container">
            <img src='https://i.postimg.cc/6QtwHMwm/4.png' alt="" />
            <img src='https://i.postimg.cc/Jhx8Sjz4/5.png' alt="" />
            <h1 className="text-4xl text-center font-semibold">Our Popular Products</h1>
            <div className="text-center mt-5">
                <Link to='/add-coffee'><button className="bg-[#E3B577] border border-gray-950 px-3 py-1">Add Coffee</button></Link>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-5">
                {
                    items?.map((item, idx) => <Product key={idx} item={item}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;