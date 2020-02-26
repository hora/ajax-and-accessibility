## So what is AJAX?

Essentially, it's a technique that allows web developers
to fetch data from a server asynchronously – that is,
without requiring that the user make new HTTP(S) requests
via the browser.

To make this possible, AJAX (commonly) leverages the
following core technologies:

- HTML and CSS
- the Document Object Model (aka the DOM)
- XMLHttpRequest object or, more recently, (also) the
  Fetch API
- jQuery
- JSON (or XML)
- JavaScript

See the files in [/ajax-get-example](https://github.com/hora/lhl-w4d3/tree/2019-nov-6/ajax-get-example) for a demo. To
serve the demo files, you'll need the Nodejs `http-server`
package.

> Install using `npm install http-server -g`

> Browse to the `/ajax-get-example` directory in Vagrant
> (after downloading the code)

> Run http-server using `http-server .`

