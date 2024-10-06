import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div className="home-container">
            <h1 className="text-4xl text-center font-semibold">Our Popular Products</h1>
            <div className="text-center mt-5">
                <Link to='/add-coffee'><button className="bg-[#E3B577] border border-gray-950 px-3 py-1">Add Coffee</button></Link>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Products;