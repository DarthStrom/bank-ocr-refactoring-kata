# Bank OCR Refactoring Kata
This kata currently includes working code and tests.  Your mission is to refactor the code with the Single Responsibility Principle in mind.  While the first thing on your mind should be SRP, don't be afraid to use other design principles to make this happen.

This kata is based on the Bank OCR kata at [codingdojo.org](http://codingdojo.org/cgi-bin/index.pl?KataBankOCR).

## More info on the Single Responsibility Principle:
- [Wikipedia](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- [8th Light Blog](https://blog.8thlight.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html)
- [SRP Clean Coders video](https://cleancoders.com/episode/clean-code-episode-9/show)

## Getting started
You should have [Node.js](https://nodejs.org), [npm](https://www.npmjs.com), and [jasmine-node](https://github.com/mhevery/jasmine-node).  You can install jasmine-node globally with `npm install -g jasmine-node`.

Once you have jasmine-node, you can run the tests with `jasmine-node bank-ocr-spec.js`.  They should pass the first time before you make any changes.  Any time you make a change, you'll want to run the tests again to make sure you didn't break anything.

## Here are some questions to ask as you refactor
- Who are the actors that would want changes to the code?
- Can we isolate the concerns of each actor to separate functions?
- Are there groups of functions that belong in separate modules?
