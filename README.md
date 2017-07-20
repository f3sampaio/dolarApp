# DolarAPP

This is the english documentation. There is a [Portuguese Version](./README_pt.md)

## Introduction

Dolar App is a web solution to present the variation of the USD between an informed period based on the BRL. With this webapp, users can visualize a plotted chart with the variation of the USD quotation and some statistics like the highest value, the lowest value and the average between the second and the last but one day.
This app was develop into a scope of an internship selective proccess, where some questions should be answered:


```

During the period between Aug 7, 2009 and Nov 17, 2011 in base on USD of http://fixer.io, answer:

* Wich day was observed the minor value?
  A: Jul 26, 2011 the USD quotation has the value of R$ 1,5347.

* Wich day was observed the major value?
  A: Sep 23, 2011 the USD quotation has the value of R$ 1,9111.

* What was the quotation average for this period, excepting the first and the last one value?
  A: Between Aug 8, 2009 to Nov 16, 2011 the average of the USD was R$ 1,7208.

```

## Environment

* Language: Javascript
* Framework: AngularJS v1.5
* Dependencies Management: npm, bower

## Installation

Firstly you will need [NodeJS](https://nodejs.org/en/) and the dependencies manager NPM. To get them see the manual at [Get NPM](https://www.npmjs.com/get-npm).

After this, clone the project into a directory and inside this directory install the angular dependencies using the npm command:

> npm install

This will download all the development dependencies to you. After the download finish, you will be able to start the project using another npm command:

> npm start

Another script will be executed after this and the project is now accessible by the url http://localhost:8000.
