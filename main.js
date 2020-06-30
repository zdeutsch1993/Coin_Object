const newMain = document.createElement('main');
document.body.appendChild(newMain)
let image = document.createElement('img');
newMain.appendChild(image)
let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        let flippingCoin = Math.random()
        if (flippingCoin < 0.5){
            this.state = 0
        } else {
            this.state = 1
        }

    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if(this.state === 0) {
           return 'Heads'
           } else if(this.state === 1) {
            return 'Tails'
           } 
    },
    toHTML: function() {
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
           return image;
    }
}