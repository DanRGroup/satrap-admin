export function removeNulls(obj) {
  if (obj === null) {
    return undefined;
  }
  if (typeof obj === 'object') {
    for (let key in obj) {
      obj[key] = removeNulls(obj[key]);
    }
  }
  return obj;
}

export function isEmptyObject(object) {
  for (const property in object) {
    return false;
  }
  return true;
}

export function cleanData(data) {
  for (let key in data) {
    if (data[key] === undefined) {
      delete data[key];
    }
  }
  return data;
}

export function cleanData2(data) {
  return Object.entries(data)
    .filter(([key, value]) => value !== undefined)
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
}
