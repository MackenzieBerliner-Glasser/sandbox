const fsPromises = require('fs').promises;
fsPromises
  .readFile('./promise.md', { encoding: 'utf8' })
  .then(data => console.log(data))
  .catch(err => console.log(err));

fsPromises
  .writeFile('./test.text', 'hello world test', { encoding: 'utf8' })
  .then(console.log('finished'))
  .catch(err => console.log(err));
