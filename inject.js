let contents = typeof require !== 'undefined'
 ? require('fs').readFileSync('package.json')
 : 'failed to read';

let output = document.createElement('div');
output.innerText = `package.json: ${contents}`;
document.body.appendChild(output);
