import axios from "axios";
import { Link, useParams } from "react-router-dom";
import useUrl from "../../Hooks/useUrl";

const UpdateCoffee = () => {
    const {id} = useParams();
    const url = useUrl();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const category = form.category.value;
        const price = form.price.value;
        

        const response = await axios.patch(`${url}/update/${id}`, {name, chef, supplier, teste, category, price});
        console.log(response);

        
    }
    return (
        <div className="home-container">
            <Link to='/'><h2 className="my-4 text-lg font-semibold">{`<-`} Back Home</h2></Link>
            <div className="bg-[#F4F3F0]">
                <div className="mx-20 py-10">
                    <h3 className="text-xl font-bold text-center my-3">Update</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 text-sm">
                                <label className="text-sm font-serif font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                     Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="first_name"
                                    placeholder="Enter first name"
                                    name="name"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                    Chef
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="first_name"
                                    placeholder="Enter first name"
                                    name="chef"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                    Supplier
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="first_name"
                                    placeholder="Enter first name"
                                    name="supplier"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                    Taste
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="first_name"
                                    placeholder="Enter first name"
                                    name="teste"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                   Category
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="first_name"
                                    placeholder="Enter first name"
                                    name="category"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="last_name">
                                    Price
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="last_name"
                                    placeholder="Enter last name"
                                    name="price"
                                    type="text"
                                />
                            </div>
                        </div>
                        <button type="submit" className="bg-[#E3B577] border border-gray-950 px-3 py-1 my-3">Update</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;