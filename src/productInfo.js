export default class ProductManager {

    _products =
        [
            {
                description: {
                    name: "Pali",
                    voteCount: 30,
                    details: "a quick brown fox",
                    by: "someone"
                }
            },

            {
                description: {
                    name: "ab",
                    voteCount: 50,
                    details: "quic brown fox",
                    by: "idk"
                }
            },

            {
                description: {
                    name: "some product",
                    voteCount: 20,
                    details: "aaa brown fox",
                    by: "hmmmm"
                }
            }
        ]

 

    getProducts = () => {

        return this._products;

    }

}