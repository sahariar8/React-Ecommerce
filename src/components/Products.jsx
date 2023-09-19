import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const {products} = useLoaderData();
    console.log(products)
    return (
        <div className="max-w-screen-2xl mx-auto">
            <h1 className="text-4xl text-center font-semibold py-2">Lattest Product</h1>
           <div className="grid md:grid-cols-4 gap-5 ">
            {
                products?.map(product=><Product product={product} key={product.id}></Product>)
            }
           </div>
        </div>
    );
};

export default Products;