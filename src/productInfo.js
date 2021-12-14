export default class ProductManager {

    _generateColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const a = Math.random();

    return `rgba(${r},${g},${b},${a})`;
  }
 

    _products =
        [
            {
                description: {
                    name: "Pali",
                    voteCount: 30,
                    details: "a quick brown fox",
                    by: "someone",
                    backgroundColor:this._generateColor()
                }
            },

            {
                description: {
                    name: "ab",
                    voteCount: 50,
                    details: "quic brown fox",
                    by: "idk",
                    backgroundColor:this._generateColor()

                }
            },

            {
                description: {
                    name: "some product",
                    voteCount: 20,
                    details: "aaa brown fox",
                    by: "hmmmm",
                    backgroundColor:this._generateColor()

                }
            }
        ]

 

        getProducts = () => {

        return this._products;

    }

}