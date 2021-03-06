# is-file-global [![Build Status](https://travis-ci.org/petersandor/is-file-global.svg?branch=master)](https://travis-ci.org/petersandor/is-file-global)

> Check if a file is available globally in PATH

Useful when you need to check if a file (script, executable, etc.) is callable globally.

## Install

```
$ npm install --save is-file-global
```


## Usage

```js
var isFileGlobal = require('is-file-global');

isFileGlobal('where.exe', function(err, path) {
  if (err) {
    throw err;
  }

  console.log(path);
  //=> C:/Windows/system32/where.exe
});
```


## API

### isFileGlobal(filename, callback)

#### filename

*Required*  
Type: `string`

Name of a script or executable to find e.g. `where.exe`. Also, you can use patterns to match files, see [Glob](https://github.com/isaacs/node-glob#glob).

#### callback

*Required*  
Type: `function`

Arguments: `error`, `result`

Where `result` is an array containing path(s) to the file or an empty array in case of no results.


## Support
This module was tested on Windows only.

## License

MIT © [Peter Sandor](http://petersandor.name)
