const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

try {
  document.getElementById('random').innerText = getRandomInt(100);
} catch (err) {}

exports.getRandomInt = getRandomInt;