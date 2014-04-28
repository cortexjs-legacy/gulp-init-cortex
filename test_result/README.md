# test_result

> {%= description %}

## Getting Started
Before anything taking its part, you should install [node](http://nodejs.org) and "cortex".

#### Install Node

Visit [http://nodejs.org](http://nodejs.org), download and install the proper version of nodejs.

#### Install Cortex

    # maybe you should use `sudo`
    npm install -g cortex

## Using test_result In Your Project

First, install 'test_result' directly with `cortex install` (recommended)

	cortex install test_result --save

or, you could update your package.json manually

    dependencies: {
        'test_result': '<version-you-want>'
    }

and install dependencies

	cortex install

Then, use `require` method in your module

    var test_result = require('test_result');

Finally, start cortex server

    cortex server

Then cortex will care all the rest.


## API Documentation

### test_result: constructor
': constructor' means the `module.exports` of module 'test_result' is a constructor that we should use it with the `new` keyword

	new test_result(options)

#### options
- options.name {String}



### test_result.\<method-name\>(arguments)
Means this is a static method of `module.exports`

#### arguments
// arguments description here

### .\<method-name\>(arguments)
Mean this is a method of the instance

#### arguments
// arguments description here