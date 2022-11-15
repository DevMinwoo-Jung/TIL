var fruits = ["Apple", "Banana"];
fruits.preferred = "Apple";

console.log(fruits);

fruits[100] = "Strawberry";
for(let i = 0; i < fruits.length; ++i) {
    console.log(fruits[i]);
}
console.log(fruits.length);
fruits.length = 0;
console.log(fruits);