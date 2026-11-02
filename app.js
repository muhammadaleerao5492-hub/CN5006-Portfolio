// Import custom module
const { filterByCity, calculateAverageSalary } = require('./peopleUtils');

// Mock data array
const samplePeople = [
    { name: "Grace", City: "London", salary: 5347 },
    { name: "Justin", City: "Birmingham", salary: 5783 },
    { name: "Alice", City: "London", salary: 4900 }
];

// Call the imported arrow functions
const londonPeople = filterByCity(samplePeople, "London");
const avgSalary = calculateAverageSalary(samplePeople);

// Print output to terminal
console.log("--- Week 3 Output ---");
console.log("People in London:", londonPeople);
console.log("Average Salary:", avgSalary.toFixed(2));