const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// 1. ----------------  forEach  ------------------------------- 

// ages.forEach(age => {
//     console.log(age);
// })


// 2. ---------------- filter  --------------------------------

// const canDrink = ages.filter(age => age >= 21);


// 3. --------------- map ------------------------------------

// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);


// 4. -------------- sort -------------------------------------

// const sorted = ages.sort((a, b) => (a > b ? 1 : -1));


// 5. -------------- reduce -----------------------------------

// return an integer of total ages
// const totalAges = ages.reduce((total, age) => total + age, 0);

// return a list where age>=21
// const ages21 = ages.reduce((total, age) => {
//     if (age >= 21) {
//         return total.concat(age);
//     }
//     return total;
// }, [])


// 6. --------------- Combined methods --------------------------

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 42)
    .sort((a, b) => (a > b ? 1 : -1))
    .reduce((total, age) => total + age, 0);

console.log(combined);

