export const filterNumbers = (array, largerThan) => {
  function checkNumber(value) {
    return value <= largerThan;
  } 
  return array.filter(checkNumber);
  }

