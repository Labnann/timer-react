import { VoteCount } from "./VoteCount";



export function ProductDescription(props) {

    return (
        <div className="product_description colored" >
            <VoteCount data={props.data} />
            <div>
                {props.data.product.description.name}
            </div>
            <div>
                {props.data.product.description.details}
            </div>
            <div>
                Submitted by {props.data.product.description.by}
            </div>

        </div>
    );
}
