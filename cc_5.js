//Task 1
console.log("Task 1")

let customer = {            //Declared an object named customer
    name: "John Doe",           //Had to console.log each individual property due to interpolation issues.
    age: 35,                   
    email: "john.doe@gmail.com",
};

console.log(`Customer Profile: Name - ${customer.name}, Age - ${customer.age}, Email - ${customer.email}`)


//Task 2
console.log("Task 2")

let order = {               //Declared a new object named order
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",


displayOrder() {           //Used a method called displayOrder which logged each part of the object
    console.log(`Order details| Order ID: ${this.orderId}, Total Amount: ${this.totalAmount}, Status: ${this.status}`);
}
};
order.displayOrder();      //Called the method to action

//Task 3
console.log("Task 3")

let cartItems = [ "Keyboard", "Mouse", "Iphone"] //Declared new array with three items in it
cartItems.push("Headset")                        //Added item to the array
cartItems.pop()                                  //Removed the last item of the array
cartItems.unshift("Mousepad")                    //Added item to the beginning of the array
cartItems.shift()                                //Removed item from the beginning of the array

console.log(`Items in cart: ${cartItems}`)