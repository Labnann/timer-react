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
                    name: "Yellow Pail",
                    voteCount: 30,
                    details: "On demand sand castle construction",
                    by: "/usr1.png",
                    backgroundColor:this._generateColor()
                }
            },

            {
                description: {
                    name: "Supermajority: The fantasy Congress League",
                    voteCount: 50,
                    details: "Earn points when your favourite politician passes legislation.",
                    by: "/usr2.png",
                    backgroundColor:this._generateColor()

                }
            },

            {
                description: {
                    name: "Tinfoild: Tailored tinfoil hats",
                    voteCount: 20,
                    details: "We already have your measurements and shipping address.",
                    by: "/usr3.png",
                    backgroundColor:this._generateColor()

                }
            },

             {
                description: {
                    name: "Haught or Naught",
                    voteCount: 40,
                    details: "High minded or absent minded? You decide",
                    by: "/usr4.png",
                    backgroundColor:this._generateColor()

                }
            }
        ]

 

        getProducts = () => {

        return this._products;

    }

}