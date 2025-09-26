const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        if (!oldestPerson.yearOfDeath) {
            oldestPerson.yearOfDeath = new Date().getFullYear();
        }
        const oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        return oldestAge > currentAge ? oldestPerson : currentPerson;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
