const roles = {
  visa: /^4(\d{12}|\d{15})$/,
  ip: /^(25[0-5]|2[0-4][0-9]|1\d\d|[1-9][0-9]|[1-9])\.(25[0-5]|2[0-4][0-9]|1\d\d|[1-9][0-9]|[0-9]\.){2}(25[0-5]|2[0-4][0-9]|1\d\d|[1-9][0-9]|[1-9])$/,
  mac: /^((\d|[A-Fa-f]){2}[:-]){5}(\d|[A-Fa-f]){2}$/,
  validate(text, type) {
    return !!text.match(this.patterns[type]);
  },
};

const validate = (string, format) => !!string.match(roles[format]);

export default validate;
