const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

const foods = [hamburger, zucchini, chickenBreast, corn, steak];

const cookedFoods = [];

function grill (food) {
    food.cooked = true;
    cookedFoods.push(food);
};

//[x] iterate over the array of foods 
//[x] invoke the function for each item 
//[x] so that the cookedFood array contains all of the items 
//[x] after they are cooked.

for (let i = 0; i < foods.length; i++) {
    grill(foods[i]);
}

console.log("The cooked foods are:", cookedFoods)