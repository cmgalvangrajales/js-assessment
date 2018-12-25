stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    var text = str.split("");
    let temporalToDelete = [];
    let counter = 0;
    for (let index = 1; index < text.length; index++) {
      if (text[index - 1] == text[index] && text[index + 1] != undefined) {
        counter++
      } else {
        counter++
        if (text[index + 1] == undefined) counter++;

        let firstIndexFound = text.indexOf(text[index - 1]);
        for (let i = firstIndexFound; i < firstIndexFound + (counter - amount); i++) {
          temporalToDelete.push(i);
        }
        counter = 0;
      }
    }
    
    for (let index = temporalToDelete.length - 1; index >= 0; index--) {
      const n = 0+temporalToDelete[index];
      text.splice(n, 1);
    }
    text = text.join('');
    return text;
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    return str.split("").reverse().join("");
  },
};
