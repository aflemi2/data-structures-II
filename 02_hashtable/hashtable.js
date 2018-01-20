function HashTable () {
  this.numBuckets = 35;
}

HashTable.prototype.set = function (key, val) {
  if (typeof key !== 'string') {
    throw new TypeError('Keys must be strings');
  }
  this[key] = val;
};

HashTable.prototype.get = function (key) {
  return this[key];
};

HashTable.prototype.hasKey = function (str) {
  if (this[str]) return true;
  return false;
};

HashTable.prototype.hash = function (str) {
  var sum = 0;
  for (var i = 0; i < str.length; i ++) {
    sum += str.charCodeAt(i);
  }
  return sum % this.numBuckets; //hashed str into number
};
