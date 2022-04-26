function filterApiData(apiData, mandatoryKeys) {
  let result = [];

  for (let i = 0; i < apiData.length; i++) {
    const obj = apiData[i];
    let containsAllKeys = true;

    for (let j = 0; j < mandatoryKeys.length; j++) {
      if (!Object.keys(obj).includes(mandatoryKeys[j])) {
        containsAllKeys = false;
      }
    }
    if (containsAllKeys == true) {
      result.push(obj);
    }
  }
  return result;
}
