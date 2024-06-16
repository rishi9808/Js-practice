/* 
    PROTOTYPE IN JAVASCRIPT 

    linking of parent object to child object to utilize its properties.

*/

// prototype example

let human = {
  speak: function () {
    console.log("speaking");
  },
};

let john = Object.create(human, {
  name: { value: "Jhon doe" },
});

console.log(jhon.name);
john.speak();
