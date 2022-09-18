// 2. Írj egy függvényt `validateIPAddress`, ami paraméterként egy IPv4 címet vár stringként!

const validateIPAddress = (input) => {
  const pattern = /^(25[0-5]|2[0-4][0-9]|1\d\d|[1-9][0-9]|[1-9])\.(25[0-5]|2[0-4][0-9]|1\d\d|[1-9][0-9]|[0-9]\.){2}(25[0-5]|2[0-4][0-9]|1\d\d|[1-9][0-9]|[1-9])$/;
  return !!input.match(pattern);
};

export default validateIPAddress;
