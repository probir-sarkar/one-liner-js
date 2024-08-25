---
title: One-Liner JavaScript Snippets
tagline: A collection of one-liner JavaScript snippets for your next project
---

# One-Liner JavaScript Snippets

A collection of useful one-liner JavaScript snippets for your next project.

### 1. Capitalize Text

```javascript
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
```

**Description:**

The `capitalize` function takes a string as input and returns a new string with the first character converted to uppercase while leaving the rest of the string unchanged.

### 2. Calculate Percent

```javascript
const calculatePercent = (value, total) => Math.round((value / total) * 100);
```

**Description:**

Calculates the percentage of `value` relative to `total`, rounded to the nearest integer. It includes error handling for non-numeric inputs and checks for a zero total to prevent division by zero.

### 3. Get a Random Element

```javascript
const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];
```

**Description:**

Returns a random element from an array.

### 4. Check if a String is a Palindrome

```javascript
const isPalindrome = (str) => str === str.split("").reverse().join("");
```

**Description:**

Checks if a given string is a palindrome (reads the same backward as forward).

### 5. Reverse a String

```javascript
const reversedString = (str) => str.split("").reverse().join("");
```

**Description:**

Reverses the characters in a string.

### 6. Shuffle an Array

```javascript
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
```

**Description:**

Randomly shuffles the elements of an array.

### 7. Check if a Number is Even

```javascript
const isEven = (num) => num % 2 === 0;
```

**Description:**

Returns `true` if the number is even, `false` otherwise.

### 8. Get the Length of an Object

```javascript
const objectLength = (obj) => Object.keys(obj).length;
```

**Description:**

Returns the number of properties in an object.

### 9. Deep Clone an Object (Simple Implementation)

```javascript
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
```

**Description:**

Creates a deep clone of an object. This method is simple but may not work for objects with functions or undefined values.

### 10. Convert a Number to a Boolean (Truthy or Falsy)

```javascript
const isTruthy = (num) => !!num;
```

**Description:**

Converts a number to its boolean equivalent (truthy or falsy).
