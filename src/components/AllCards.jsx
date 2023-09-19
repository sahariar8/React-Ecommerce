import {  useLoaderData } from "react-router-dom";
import Card from "./Card";


const AllCards = () => {
    const {products} = useLoaderData();
    return (
       <div>
            <h1 className="text-4xl text-center font-semibold py-2">All Product</h1>

             <div className="grid md:grid-cols-4 gap-5 max-w-screen-2xl mx-auto">
            {
                products.map(card=><Card card={card} key={card.id}></Card>)
            }

            </div>
       </div>
    );
};

export default AllCards;