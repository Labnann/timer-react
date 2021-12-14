import { VoteCount } from "./VoteCount";


function PersonImage(props) {
    return (
        <img className="by_image" src={props.by} alt=""></img>
    )
}



export function ProductDescription(props) {



    return (
        <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
            <VoteCount data={props.data} />
            <div style={{
                color: "blue",
                fontWeight: "bold"
            }}>
                {props.data.product.description.name}
            </div>
            <div style={{ paddingTop: "30px" }}>
                {props.data.product.description.details}
            </div>
            <div style={{ display: "flex", paddingTop: "30px" }}>
                <div>Submitted by</div>
                <PersonImage by={props.data.product.description.by} />
            </div>

        </div>
    );
}
