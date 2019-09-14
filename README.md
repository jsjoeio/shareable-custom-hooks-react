<br />
<p align="center">
  <h1 align="center">Writing Shareable Custom React Hooks</h1>

  <p align="center">
    <br />
    <!-- UPDATE THIS WITH EGGHEAD LINK -->
    <a href="https://ti.to/egghead-live-online-events/create-publish-custom-react-hooks-with-joe-previte/"><strong>Take Workshop</strong></a>
    <br />
    <br />
    <a href="https://twitter.com/messages/compose?recipient_id=1567529924">Ask a Question</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
  </p>
</p>

## Table of Contents

- [About the Workshop](#about-the-workshop)
  - [Workshop Goals](#workshop-goals)
  - [Workshop Outcomes](#workshop-outcomes)
- [Prerequisites](#prerequisites)
- [Pre-Workshop Instructions](#pre-workshop-instructions)
- [Further Learning](#further-learning)
- [Resources](#resources)

## About The Workshop

Hooks are awesome because they're "first-class" utility functions provided by React to let you hook into state and other features while writing components. The cool thing about Hooks is that you can build on top of them to make your own. It’s like writing a function on top of lodash. You can gather something that might be reusable, and then package it up into a custom hook. That is the beauty of writing a shareable custom Hook in React.

### Workshop Goals

After completing this workshop, you will understand how to write custom Hooks in React, and publish them as npm packages for the open source community.

### Workshop Outcomes

By taking this workshop, you will learn how to:

1. Understand what a “first-class” Hook is and isn’t
2. Understand what a custom Hook is
3. Write a custom Hook in an existing application
4. Extract the Hook into a module
5. Test the Hook locally
6. Publish the Hook as an npm package

## Prerequisites

Although this workshop is not targeted at React experts you'll need the following:

- moderate React experience
- some familiarity with Hooks
- an [npm account](https://www.npmjs.com/signup)
- `node v10.16.3` or greater
- `npm v6.9.0` or greater


## Pre-Workshop Instructions

Before you join us for the workshop, please make sure to the following:
1. [Download Zoom](https://zoom.us/support/download)
2. Clone this repo so you have it locally
3. Create an [npm account](https://www.npmjs.com/signup) (needed to publish your package)
4. Install [`create-react-hook`](https://github.com/Hermanya/create-react-hook) globally
 - `npm i -g create-react-hook`
 - `yarn add global create-react-hook`
 - or you can run it during the workshop using `npx create-react-hook

## Resources

If you run into road blocks at anytime in the workshop or want additional resources, here's a list of things to check out:

- Wrapping your head around the bundle outputs.
  - [The State of JavaScript Modules](https://medium.com/webpack/the-state-of-javascript-modules-4636d1774358)
  - [What is AMD, CommonJS, and UMD?](https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/)
- Know why / how you shouldn’t bundle React
  - [Understanding the npm dependency model](https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/)
- Hook inspiration and deciding what to make a hook of
  - [usehooks.com](https://usehooks.com)
  - [the-platform](https://github.com/palmerhq/the-platform)
  - [awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks)
- Default exports and named exports
  - [Why we use named exports and not default exports in our package](https://github.com/rollup/rollup/issues/1961#issuecomment-423037881)
- Understanding how Hooks work
  - [Deep dive: How do React hooks really work](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)
