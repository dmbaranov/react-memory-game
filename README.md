# Memory Game

## What is it?

This is a simple game, where you need to open cards. If 2 opened cards have the same value - they will be removed from the board. Once there're no cards left on the board - you won!

## Why is it?

I made this project to take a look at new React feature called [Hooks](https://reactjs.org/docs/hooks-intro.html). When I first heard about it I thought that it's not something that I might need when I develop applications with React. Now, after I made this project, I understand that Hooks are indeed quite interesting conception that lets you write a better code (not always though). What is better code - find out yourself! :)

## What is it made of?

Even thought the project itself is not that difficult, I tried to build it in a way I would build a medium React application. Main technologies that I used here were React, Redux, redux-saga, Styled components and TypeScript, of course.

Worth mentioning that I felt a lot of pain during creating unit tests for the components. The thing is, as of today, Enzyme doesn't always work with Hooks correctly which leads to incorrect testing results. That's why I ended up with react-testing-library, which has some small problems as well (well, maybe I don't know its good enough).

Also, I'd like to say special thanks to @r-park and his [SoundCloud Redux](https://github.com/r-park/soundcloud-redux/) project. That project has awesome structure and this project was inspired by it.

## Contribute

I'd be glad if you, people, have something to say or, even better, to contribute some stuff over here! :)
