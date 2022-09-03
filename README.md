# Luhn Algorithm

## What is the Luhn's Algorithm?

The Luhn's Algorithm is an algorithm commonly used to validate credit card numbers and debit card numbers for online payment vendors. This easily allows retailers to tell if a credit card number is fake or random, and helps validate real numbers and separate real from fake.

## How the hell does it work?!

Simple.

A credit card of type Visa is added with the number 4624 7482 3324 9080.

This credit card number starts with 4, as it should be in all Visa cards. It also has 16 digits, which is valid for a Visa card. Now, execute Luhn's algorithm:

### Step 1

Double the value of every other digit from right to left, beginning with the second to last digit.

4624 7482 3324 9080:

-   8\*2 = 16
-   9\*2 = 18
-   2\*2 = 4
-   3\*2 = 6
-   8\*2 = 16
-   7\*2 = 14
-   2\*2 = 4
-   4\*2 = 8

### Step 2

Add the digits of the results of the previous step to the remaining digits in the credit card number.

The digits of the result of Step a amount to the following: 1+6+1+8+4+6+1+6+1+4+4+8 = 50

The remaining digits in the credit card number amount to the following: 6+4+4+2+3+4+0+0 = 23

The sum of the two sub results is: 23+50 = 73

### Step 3

If the final sum is divisible by 10 and has no remainder after being divided by 10, congrats, your number passed the Luhn's Algorithm.

btw: example number didn't pass lmao

### Test Credit Card Numbers

Wanna test this out with some CC numbers? Shoot, go ahead. 

### Numbers That Pass The Algorithm

MasterCard: 5555555555554444, 5105105105105100
Visa: 4111111111111111, 4012888888881881

---

## Instructions to build & run the code

### Install TypeScript

If you don't have it already, install TypeScript.

NPM :
```
npm i -g typescript
```

Yarn (superior):
```
yarn global add typescript
```

After doing this, you may have to restart whatever command prompt or shell application you're using.

### Compiling

Run `tsc` in your command prompt while `cd`'d into whatever directory you cloned this repo into. It may take a while, but it should work. If you seee any errors, ignore them.

### Running

In a new folder that popped up called `dist`, you should see one file: `Index.js`. Run that by doing the following:
```
node dist/Index.js
```

That's it!

---

## Contributing

I'm open to basically anything, as long as it doesn't stray too far away from the original idea of the repository. If you have a questions regarding any feature additions or bug fixes, make an issue and I'll respond whenever I want to. Bye, see you never.

\- Lawson
