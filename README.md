# Math in V8 is Broken and How We Can Fix It

> Talk for [Node.js Interactive North America 2016][nodejs-interactive].


## Abstract

The built-in JavaScript Math library is used in virtually every Node.js application, from generating random ids to calculating exponential back-off times to computing basic performance metrics. When using the Math library, most developers simply assume that the underlying implementations are accurate, performant, and correctly implemented. In this presentation, I discuss why this assumption is often false and show the various ways in which the standard library is broken. The presentation includes the algorithms used, their performance and accuracy, and how they have downstream effects on users of these libraries. The presentation concludes by highlighting how community solutions are stepping up to fix these problems and identify opportunities for additional improvements. 


## Installation

``` bash
$ git clone https://github.com/kgryte/talks-nodejs-interactive-2016
```

and

``` bash
$ npm install
```


## Usage

From the top-level directory,

``` bash
$ python -m SimpleHTTPServer 9000
```

and, in your browser, navigate to

```
http://127.0.0.1:9000/public
```


---

## License

[MIT license][mit-license].


## Copyright

Copyright &copy; 2016. Athan Reines.


[mit-license]: http://opensource.org/licenses/MIT
[nodejs-interactive]: http://events.linuxfoundation.org/events/node-interactive
