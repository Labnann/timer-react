import { ProductImage } from "./ProductImage";
import { ProductDescription } from "./ProductDescription";

export default function Product(props) {

  return (
    <>
      <div className="product_wrapper">
        <ProductImage />
        <ProductDescription
            data= {props.info}
        />
      </div>

    </>
  );
}
