import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import InstagramFollow from "../InstagramFollow/InstagramFollow";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Products></Products>
            <InstagramFollow></InstagramFollow>
        </div>
    );
};

export default Home;