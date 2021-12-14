export function VoteCount(props) {
  
  const product = props.data.product.description;
  function upvote(){
    props.data.onVote(product.voteCount+1, product.index);
    console.log(product);
    
  }


  return (
    <div style={{
      display: 'flex',
      alignContent: 'flex-start',
      flexWrap: 'wrap',
      fontWeight:"bold",
      fontSize:15
    }}>

      <div>
        <button className="vote_button" onClick={upvote}>▲</button>
      </div>
      <div>
        {product.voteCount}
      </div>
    </div>
  );
}
