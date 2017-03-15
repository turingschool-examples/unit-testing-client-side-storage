# Unit Test Me!

## Intro (5 minutes)

This unit testing lesson is based off of an existing example repo: [Example Repo](https://github.com/turingschool-examples/client-side-storage).

The challenge here is to work under the following constraints:

1. Don't use a module bundler/framework to package your client-side code
2. Do unit test your code

You'll see this challenge in other places this mod. Specifically, when you create a small Node project and decide not to use Webpack.

This is a very specific edge case, right? But it's a good use case to help us expose some knowedge gaps we may have in the fundamentals of thinking about testing and how code runs in a browser.

By the end of this lesson, you should be able to:

- Add unit tests to your assessement that run in the browser or the terminal
- Understand and be able to speak to why unit testing client-side code is complicated
- Reenforced your understanding of:
    - What Webpack does
    - What a unit test is
    - How to think about testable JavaScript code

## How Should We Think About Unit Testing? (20 minutes)

Reading: [Writing Testable JavaScript](https://alistapart.com/article/writing-testable-javascript)

After 15 minutes, turn to the person next to you and compare/discuss interesting parts of the reading

## Activity (25 minutes)

- [Print Out 1](https://gist.github.com/rrgayhart/2aec7614cd91e1ea01780c9bbdb40d39)
- [Print Out 2](https://raw.githubusercontent.com/sikemausa/idea-box/gh-pages/script.js)

Using the code types from Murphy's article:

- Presentation and interaction
- Data management and persistence
- Overall application state
- Setup and glue code to make the pieces work together

Go through this ideabox implementation and take a first pass at highlighting the pieces you think belong to those certain sections.

After 10 minutes, turn to the person next to you and compare/discuss results.

## Unit Testing Client-Side Code (10 mins)

Ask yourself: what difficulties would you have testing client-side code without a module bundler (i.e. Webpack)?

Check out the following examples of different ways to unit test the same codebase.

### Running in the Browser

- [A simple set up](https://github.com/turingschool-examples/unit-testing-client-side-storage/compare/browser-tests)
- [Implementation 1](https://github.com/turingschool-examples/unit-testing-client-side-storage/compare/browser-implementation-1)
- [Implementation 2](https://github.com/turingschool-examples/unit-testing-client-side-storage/compare/browser-implementation-2)

### Running in the Terminal

- [A basic`module.exports` way](https://github.com/turingschool-examples/unit-testing-client-side-storage/compare/module-exports)

Is this solution used?

[Yes](https://github.com/jashkenas/underscore/blob/a9432276b90bd23d3022deb89ac1ba6b10ee7495/test/vendor/qunit.js#L1947) & also [yes](https://github.com/jashkenas/underscore/blob/e944e0275abb3e1f366417ba8facb5754a7ad273/underscore.js#L53)

### Resources

Need to use the document in a test?

Check out `mocha-jsdom`: https://www.npmjs.com/package/mocha-jsdom
