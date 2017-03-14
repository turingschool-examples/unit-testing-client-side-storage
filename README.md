# Unit Test Me!

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

## How Should We Think About Unit Testing?

Reading: [Writing Testable JavaScript](https://alistapart.com/article/writing-testable-javascript)

## Activity

See Print Outs

## Unit Testing Client-Side Code

Why is this different from the work flow with a module bundler (i.e. Webpack)?

### Running in the Browser

- [A simple set up](https://github.com/turingschool-examples/unit-testing-client-side-storage/compare/browser-tests)
- [Implementation 1](https://github.com/turingschool-examples/unit-testing-client-side-storage/compare/browser-implementation-1)

### Running in the Terminal

- [A basic`module.exports` way]()
- [A more advanced implementation]()
- [An even more advanced implementation]()

Is this solution used?

[Yes](https://github.com/jashkenas/underscore/blob/a9432276b90bd23d3022deb89ac1ba6b10ee7495/test/vendor/qunit.js#L1947) & also [yes](https://github.com/jashkenas/underscore/blob/e944e0275abb3e1f366417ba8facb5754a7ad273/underscore.js#L53)
