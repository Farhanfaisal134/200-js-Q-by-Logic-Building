function stringToObject(path, value) {
  const keys = path.split('.');
  let obj = {};
  let current = obj;

  keys.forEach((key, index) => {
    current[key] = index === keys.length - 1 ? value : (current[key] || {});
    current = current[key];
  });

  return obj;
};

console.log(stringToObject("a.b.c", "someValue"));