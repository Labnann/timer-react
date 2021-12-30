import { VoteCount } from "./VoteCount";


function PersonImage(props) {
    return (
        <img className="by_image" src={props.by} alt=""></img>
    )
}



export function Timer(props) {



    return (
        <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
            
            <div style={{
                color: "blue",
                fontWeight: "bold"
            }}>
                {props.data.product.description.name}
            </div>
            <div style={{ paddingTop: "30px" }}>
                {props.data.product.description.details}
            </div>

        </div>
    );
}
