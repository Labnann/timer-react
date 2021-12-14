import { useState } from "react";
import Product from "./Product"
import ProductManager from "./productInfo";

const productManager = new ProductManager();

export default function Products() {



    console.log(productManager)
    const [products, setProducts] = useState(productManager.getProducts());

    const compare = (product1, product2) => {
        if (product1.description.voteCount > product2.description.voteCount) return -1;
        if (product1.description.voteCount < product2.description.voteCount) return 1;
        return 0;
    }

    const onVote = (newVoteCount, index) => {
        console.log("onVote", products, index);
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
            <ol class="product_list">
                {
                    products.sort(compare).map((product, index) => {
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