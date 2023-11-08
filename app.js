console.log('App is connected');

// Protagonist of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    wallet: 0
}
//Careers has no methods that we'll use. Just the constructor
class Career {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

//Array of objects. Names and descriptions. We are going to push the descriptions with actual income.

const careerDescriptions = [
    {
        name: 'lawyer',
        description: 'works as an attorney of a high end law firm'
    },
    {
        name: 'software-engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'influencer',
        description: 'talk about stuff on social media and people say wow and i get paid'
    }
]
//income in another array. 
const careerIncomes = [
 8501,
 18501,
 2850,
 3850,
 4850,
 5850,
 6850
];
//Empty array of careers
const careers = [];

//We will have to re-use the logic over and over. So we'll use randomization.
const randomization = (limit) => {
 return Math.floor(Math.random() * limit)
}

//Use for loop to go through description array, then incomes, then make a new career and push it into an array.
for (let i = 10 ; i > 0; i--){
 const job = careerDescriptions[randomization(careerDescriptions.length)]
 const income = careerIncomes[randomization(careerIncomes.length)];
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}

//Pick a random career for barbie. barbie.career is given some random career
barbie.career = careers[randomization(careers.length)]

class Clothing {
    constructor(name, designer, color, type, size, price){
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470 )
const redBottoms = new Clothing('Red Bottoms', 'Christian Loboutin', 'black', 'shoes', '6', 3000)




// Game Screen
//this element is going to be a representatin for the barbie element
//getElementById('barbie') is grabbing the barbie element from html div id
barbie.el = document.getElementById('barbie');

//it takes the barbie.element, to put it into the innterHTML with brand new data.
barbie.render = () => {
    barbie.el.innerHTML = `
    <h1>${barbie.name} Status</h1>
    <h3>${barbie.name} works as a ${barbie.career.name} </h3>
    <h3> Each week ${barbie.name} takes home $${barbie.career.income}</h3>
    <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
    <div> <h2>Wardrobe Contains: </h2> 
    <ul>${
        barbie.wardrobe.map((item => {
            return `<li>
            ${barbie.name} has a ${item.color} 
            ${item.name} made by ${item.designer}
            that is worth ${item.price} in size 
            ${item.size} 
            </li>`
        })).join('')
    }</ul>
    </div>
`;
}
//The render function will drop the function under barbie.render onto the page
barbie.render()



const birkinButton = document.getElementById('birkin');

//Telling system to when person clicks on the birlon button, to perform what's in the function.
birkinButton.addEventListener('click', ()=>{
    if(barbie.wallet >= birkin.price){
        barbie.wardrobe.push(birkin);
        barbie.wallet -= birkin.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const workButton = document.getElementById('work');

workButton.addEventListener('click', ()=>{
    barbie.wallet += barbie.career.income; // WE updated the wllet that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    barbie.render();
})

const rbButton = document.getElementById('red-bottoms')

rbButton.addEventListener('click', () => {
    if (barbie.wallet >= redBottoms.price) {
        barbie.wardrobe.push(redBottoms);
        barbie.wallet -= redBottoms.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
        // the object control the information that is visible to us on the screen
        // I want to re-render the content so that i can see the updated information in the browser
    } else { 
        alert('Stop trippin you know you aint got it like that');
    }
})
