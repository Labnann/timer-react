export default class TimerManager {

    _generateColor() {
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);
        const a = Math.random();

        return `rgba(${r},${g},${b},${a})`;
    }


    _timers =
        [
            {
                description: {
                    name: "Timer 1",
                    miliseconds: 100000,
                    details: "On demand sand castle construction"


                }
            },

            {
                description: {
                    name: "Timer 2",
                    miliseconds: 100000,
                    details: "Earn points when your favourite politician passes legislation."



                }
            },

            {
                description: {
                    name: "Timer 3",
                    miliseconds: 100000,
                    details: "We already have your measurements and shipping address."
                }
            },

            {
                description: {
                    name: "Timer 4",
                    miliseconds: 100000,
                    details: "High minded or absent minded? You decide"
                }
            }
        ]



    getTimers = () => {

        return this._timers;

    }

}