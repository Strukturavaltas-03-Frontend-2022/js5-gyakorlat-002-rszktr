const validateVisaCardNumber = (input) => {
  const string = input;
  const stringWithoutSpaces = string.split(' ').join('');
  const pattern = /^4(\d{12}|\d{15})$/;

  return !!(stringWithoutSpaces.match(pattern));
};

export default validateVisaCardNumber;
