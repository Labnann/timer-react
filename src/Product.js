import { ProductImage } from "./ProductImage";
import { ProductDescription } from "./ProductDescription";


export default function Product(props) {


  const backgroundColor = props.backgroundColor;


  return (
    <>
      <div className="product_wrapper">
        <div style={{ backgroundColor }} className="product_image">
          <ProductImage />
        </div>
        <div className="product_description">
          <ProductDescription
            data={props.info}
          />
        </div>
      </div>

    </>
  );
}
