//Waits for the full html doc to load before running
document.addEventListener("DOMContentLoaded", function () {
    //Grabs the form and order summary elements
    const form = document.getElementById("smoothie-form");
    const orderSummary = document.getElementById("order-summary");
    const orderBtn = document.getElementById("order-btn");
    
    //Class to represent smoothie order
    class SmoothieOrder {
        constructor(form) {
            const inputs = form.elements;
            //Gets cusomters name,size and base liquid from the form
            this.name = inputs['name'].value;
            this.size = inputs['size'].value;
            this.liquid = inputs['liquid'].value;

            //Gets selected fruits 
            this.fruits = [];
            const fruitInputs = form.elements['fruit'];
            for (let i = 0; i < fruitInputs.length; i++) {
                if (fruitInputs[i].checked) {
                this.fruits.push(fruitInputs[i].value);
                }
            }

            //Gets selected supplements 
            this.supplements = [];
            const supplementInputs = form.elements['supplement'];
            for (let i = 0; i < supplementInputs.length; i++) {
                if (supplementInputs[i].checked) {
                this.supplements.push(supplementInputs[i].value);
                }
            }

        }
        //Returns the size of the smoothie based on the selected option
        getSize() {
            switch (this.size) {
                case 'small':
                    return 'Small (12oz)';
                case 'medium':
                    return 'Medium (16oz)';
                case 'large':
                    return 'Large (20oz)';
                default:
                    return 'Please select a size.';
            }
        }
        //Calculates the price based on size and fruits/supplements added
        calculatePrice() {
            let price = 0;
            switch (this.size) {
                case 'small':
                    price = 4.99;
                    break;
                case 'medium':
                    price = 5.99;
                    break;
                case 'large':
                    price = 6.99;
                    break;
            }
            price += (this.fruits.length + this.supplements.length) * 0.5;
            return price;
        }
        //Calculates the estimated prep time based on size and number of fruits/supplements added
        prepTime() {
            const baseTime = 2 * 60; //Takes 2 minutes to prepare the smoothie
            //Each fruit or supplement adds 30 seconds to the prep time
            const extraTime = (this.fruits.length + this.supplements.length) * 30;
            const totalSeconds = baseTime + extraTime;
            //Converts total seconds to minutes and seconds
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            return `${minutes} minute(s) ${seconds ? `and ${seconds} second(s)` : ""}`;
        }
        //Generates the summary of the order
        generateSummary() {
            const sizeMsg = this.getSize();
            const price = this.calculatePrice().toFixed(2);
            const prepTime = this.prepTime();
            //Returns the summary string with all the details
            return `Thank you, ${this.name}!

            Size: ${this.getSize()}
            Base: ${this.liquid}
            Fruits: ${this.fruits.length ? this.fruits.join(', ') : 'None'}
            Supplements: ${this.supplements.length ? this.supplements.join(', ') : 'None'}
            Total Price: $${price}
            Estimated Prep Time: ${prepTime}`;
        }
    }
        //Adds an event listener to the order button
        //When clicked, it prevents the default form submission and generates the order summary
        orderBtn.addEventListener("click", function (e) {
         e.preventDefault();
        
        const order = new SmoothieOrder(form);
        orderSummary.innerHTML = order.generateSummary();
    });
});
