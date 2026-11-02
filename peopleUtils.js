// Arrow function to filter people by city
const filterByCity = (peopleList, targetCity) => {
    return peopleList.filter(person => person.City === targetCity);
};

// Arrow function to calculate average salary
const calculateAverageSalary = (peopleList) => {
    if (peopleList.length === 0) return 0;
    const total = peopleList.reduce((sum, person) => sum + person.salary, 0);
    return total / peopleList.length;
};

// Exporting modules
module.exports = {
    filterByCity,
    calculateAverageSalary
};