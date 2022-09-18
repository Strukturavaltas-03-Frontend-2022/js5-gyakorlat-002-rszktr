const validateMACAddress = (input) => {
  // XX:XX:XX:XX:XX:XX, but will sometimes display as XX-XX-XX-XX-XX-XX or XXXXXXXXXXXX
  const pattern = /^((\d|[A-Fa-f]){2}[:-]){5}(\d|[A-Fa-f]){2}$/;

  return !!(input.match(pattern));
};

export default validateMACAddress;
