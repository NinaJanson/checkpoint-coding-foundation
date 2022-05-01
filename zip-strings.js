function zipStrings(strA, strB) {
  let arrStrA = strA.split("");
  let arrStrB = strB.split("");

  let arrAB = [];

  for (let i = 0; i < arrStrA.length || i < arrStrB.length; i++) {
    arrAB.push(arrStrA[i]);
    arrAB.push(arrStrB[i]);
  }
  return arrAB.join("");
}

/*
  let strAB = "";

  for (let i = 0; i < strA.length || i < strB.length; i++) {
    strAB = strAB + strA[i] || "";
    strAB = strAB + strB[i] || "";
  }
  return strAB;
}
*/
