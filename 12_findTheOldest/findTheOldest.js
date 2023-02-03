const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.reduce(function(oldest, current){
  
        let oldestAge = !oldest.yearOfDeath ? (currentYear - oldest.yearOfBirth) : (oldest.yearOfDeath - oldest.yearOfBirth);
        let currentAge = !current.yearOfDeath ? (currentYear - current.yearOfBirth) : (current.yearOfDeath - current.yearOfBirth);


        return currentAge > oldestAge ? current : oldest;

    },people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
