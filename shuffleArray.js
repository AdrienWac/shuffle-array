function shuffle(paramArray) {
  
  const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  Array.from({ length: paramArray.length }, (value, index) => index)
    .reverse()
    .forEach((index) => {

      let j = getRandomInt(0, index);

      [paramArray[index], paramArray[j]] = [
        paramArray.at(j),
        paramArray.at(index)
      ];
      
    });

  return paramArray;
}


export { shuffle as shuffleArray };
