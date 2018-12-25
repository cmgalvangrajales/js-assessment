/*const files = [];
function buscaryguardarfile(objeto) {
  for (const key in objeto) {
    console.log('key:');
    console.log(key);
    if (key === "files") {
      console.log('Encontramos un(os) file(s)');
      files.push(...objeto[key]); // almacenamos los files en un array
      console.log(files);
    }
    buscaryguardarsubDirs(objeto);
  }
}

function buscaryguardarsubDirs(objeto) {
  for (const key in objeto) {
    if (key === 'subDirs') {
      console.log('Encontramos un subdirectorio');
      buscaryguardarfile(objeto[key]); // agregamos todos los subdirectorios de este nivel al array dileDataTemp
    }
  }
}*/
recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
    /*secuencua de prueba
      n=6 f(5)+f(4) == 5 + 3 = 8

      n=5 f(4)+f(3) == 3 + 2 = 5

      n=4 f(3)+f(2) == 2 + 1 = 3

      n=3 f(2)+f(1) == 1 + 1 = 2

      n=2 		               = 1

      n=1		                 = 1

      n=0 	                 = 0
    */
  },
};
