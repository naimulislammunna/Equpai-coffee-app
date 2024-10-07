import { MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Product = ({ item }) => {
    return (
        <div className="bg-base-200 rounded-xl px-5 py-4">
            <div className="flex gap-5 justify-between items-center">
                <div>
                    <img src={item?.photoUrl} alt="" className="w-[140px]" />
                </div>
                <div className="space-y-2 text-xl">
                    <p>Name: {item?.name}</p>
                    <p>Chef: {item?.chef}</p>
                    <p>Price: ${item?.price}</p>
                </div>
                <div className="space-y-2">
                    <p className="bg-[#E3B577] p-2 rounded-md text-white cursor-pointer"><span><MdEdit /></span></p>
                    <p className="bg-[#5C5B5B]  p-2 rounded-md text-white cursor-pointer"><span><IoMdEye /></span></p>
                    <p className="bg-[#EA4744]  p-2 rounded-md text-white cursor-pointer"><span><MdDelete /></span></p>
                </div>
            </div>
        </div>
    );
};

export default Product;

