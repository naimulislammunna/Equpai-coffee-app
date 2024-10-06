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
            <h1 className="text-4xl text-center font-semibold">Our Popular Products</h1>
            <div className="text-center mt-5">
                <Link to='/add-coffee'><button className="bg-[#E3B577] border border-gray-950 px-3 py-1">Add Coffee</button></Link>
            </div>
            <div>
                {
                    items?.map((item, idx) => <Product key={idx} item={item}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;