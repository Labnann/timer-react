import { useState } from "react";
import Product from "./Product"
import TimerManager from "./productInfo";

const productManager = new TimerManager();

export default function Products() {

    const [products, setProducts] = useState(productManager.getTimers());

  

    const onVote = (newVoteCount, index) => {
        const newProducts = products.slice();
        newProducts[index].description.voteCount = newVoteCount;
        setProducts(newProducts);

    }


    return (
        <div
            style={{
                padding: 30
            }}
        >
            <ol className="product_list">
                {
                    products.map((product, index) => {
                        product.description.index = index;
                        return (
                            <li key={index}><Product
                                info={
                                    {
                                        product,
                                        onVote
                                    }
                                }
                                backgroundColor={product.description.backgroundColor}
                            /></li>
                        )
                    })
                }
            </ol>
        </div>
    );
}