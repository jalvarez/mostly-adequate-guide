// Refactor `fastestCar` using `compose()` and other functions in pointfree-style.

// fastestCar :: [Car] -> String
// const fastestCar = (cars) => {
//   const sorted = sortBy(car => car.horsepower, cars);
//   const fastest = last(sorted);
//   return concat(fastest.name, ' is the fastest');
// };

const isFastestSuffix = n => concat(n, ' is the fastest');
const fastestCar = compose(isFastestSuffix, prop('name'), last, sortBy(prop('horsepower')));