asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: async function async(value) {
    let promise = new Promise(resolve => setTimeout(() => resolve(value), 5));
    let result = await promise; // wait till the promise resolves (*)
    return result
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: async function manipulateRemoteData(url) {
    const response = await fetch(".."+url);
    const json = await response.json();
    const names = json.people.map(person =>  person.name);
    return names.sort();
  },
};
