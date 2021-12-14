import { VoteCount } from "./VoteCount";



export function ProductDescription(props) {

    

    return (
        <div>
            <VoteCount data={props.data} />
            <div style={{
                color:"blue",
                fontWeight:"bold"
            }}>
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
