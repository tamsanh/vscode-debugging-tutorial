# Memoization

This example shows how useful the debugger is for understanding the shape of our data and very complex operations.

It also shows how we can also debug tests, to make it easier and more sustainable to write our code in a Test Driven Development way.

## Lesson

In this lesson, we will see that we can actually run tests using the debugger.

Take a look at the `launch.json` configuration for this code, on your own, to see how mocha can be run using it. I don't expect you to necessarily memorize the entire setup, but it's good to at least understand what's going on.

### env

Notice that environment variables are also configurable. In this case, I've taken advantage of them to distinguish between the bonus and non-bonus tests.

## Assignment

This is the final assignment which will take advantage of all of the separate techniques we have learned, up until this point.

Using your new-found debugger knowledge, fix all of the bugs in this memoization function.

## Bonus

For an extra challenge, start from `bonus.js` and write the path calculator from scratch. You may use the `Launch Ex5 - Test (Bonus)` to test whether or not your code works.

## Solution

This should be the following output.

![Solution](./images/soln.png)

## Bonus

For an extra challenge, start from the `bonus.js` without using the `index.js` file.
