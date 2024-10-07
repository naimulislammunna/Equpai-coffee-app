import { MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import useUrl from "../../Hooks/useUrl";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Product = ({ item, delCount }) => {
    const url = useUrl();
    const [deleteCount, setDeleteCount] = useState(false);
    const [coffee, setCoffee] = useState([]);
    delCount(deleteCount)
    const handleDelete = async (id) => {
        const response = await axios.delete(`${url}/delete/${id}`);
        if (response.data?.deletedCount > 0) {
            setDeleteCount(true);
        }

    }
    const handleShow = async (id) => {
        const response = await axios(`${url}/coffee-item/${id}`);
        setCoffee(response?.data);

    }

    return (
        <>
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
                        <Link to={`/update/${item._id}`}>
                            <p className="bg-[#E3B577] p-2 rounded-md text-white cursor-pointer"><span><MdEdit /></span></p>
                        </Link>
                        <p onClick={() => { document.getElementById('my_modal_3').showModal(); handleShow(item._id) }} className="bg-[#5C5B5B]  p-2 rounded-md text-white cursor-pointer"><span><IoMdEye /></span></p>
                        <p onClick={() => handleDelete(item._id)} className="bg-[#EA4744]  p-2 rounded-md text-white cursor-pointer"><span><MdDelete /></span></p>
                    </div>
                </div>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-base-200 rounded-xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex gap-20 items-center px-5 py-4">
                        <div>
                            <img src={coffee?.photoUrl} alt="" className="w-[140px]" />
                        </div>
                        <div className="space-y-2 text-xl">
                            <p>Name: {coffee?.name}</p>
                            <p>Chef: {coffee?.chef}</p>
                            <p>Price: ${coffee?.price}</p>
                            <p>Supplier: {coffee?.supplier}</p>
                            <p>Teste: {coffee?.teste}</p>
                            <p>Category: {coffee?.category}</p>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Product;

