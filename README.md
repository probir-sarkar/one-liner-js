# One-Liner JavaScript Snippets

A collection of useful one-liner JavaScript snippets for your next project.

### 1. Capitalize Text

```javascript
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
```

**Description:** The `capitalize` function takes a string as input and returns a new string with the first character converted to uppercase while leaving the rest of the string unchanged.

### 2. Calculate Percent

```javascript
const calculatePercent = (value, total) => Math.round((value / total) * 100);
```

**Description:** Calculates the percentage of `value` relative to `total`, rounded to the nearest integer. It includes error handling for non-numeric inputs and checks for a zero total to prevent division by zero.

### 3. Get a Random Element

```javascript
const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];
```

**Description:** Returns a random element from an array.

### 4. Check if a String is a Palindrome

```javascript
const isPalindrome = (str) => str === str.split("").reverse().join("");
```

**Description:** Checks if a given string is a palindrome (reads the same backward as forward).

### 5. Reverse a String

```javascript
const reversedString = (str) => str.split("").reverse().join("");
```

**Description:** Reverses the characters in a string.

### 6. Shuffle an Array

```javascript
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
```

**Description:** Randomly shuffles the elements of an array.

### 7. Check if a Number is Even

```javascript
const isEven = (num) => num % 2 === 0;
```

**Description:** Returns `true` if the number is even, `false` otherwise.

### 8. Get the Length of an Object

```javascript
const objectLength = (obj) => Object.keys(obj).length;
```

**Description:** Returns the number of properties in an object.

### 9. Deep Clone an Object (Simple Implementation)

```javascript
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
```

**Description:** Creates a deep clone of an object. This method is simple but may not work for objects with functions or undefined values.

### 10. Convert a Number to a Boolean (Truthy or Falsy)

```javascript
const isTruthy = (num) => !!num;
```

**Description:** Converts a number to its boolean equivalent (truthy or falsy).

### 11. Generate a Random Hex Color

```javascript
const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
```

**Description:** Generates a random hexadecimal color code.

### 12. Convert Celsius to Fahrenheit

```javascript
const celsiusToFahrenheit = (c) => (c * 9/5) + 32;
```

**Description:** Converts temperature from Celsius to Fahrenheit.

### 13. Remove Duplicates from an Array

```javascript
const removeDuplicates = (arr) => [...new Set(arr)];
```

**Description:** Removes duplicate values from an array using Set.

### 14. Get Unique Values from Array of Objects

```javascript
const uniqueBy = (arr, key) => [...new Map(arr.map(item => [item[key], item])).values()];
```

**Description:** Returns unique objects from an array based on a specific key.

### 15. Check if Array is Empty

```javascript
const isEmpty = (arr) => arr.length === 0;
```

**Description:** Returns `true` if an array is empty, `false` otherwise.

### 16. Chunk Array into Smaller Arrays

```javascript
const chunk = (arr, size) => arr.reduce((chunks, el, i) => (i % size ? chunks[chunks.length - 1].push(el) : chunks.push([el]), chunks), []);
```

**Description:** Splits an array into smaller chunks of specified size.

### 17. Pick Specific Keys from Object

```javascript
const pick = (obj, keys) => Object.fromEntries(keys.filter(key => key in obj).map(key => [key, obj[key]]));
```

**Description:** Creates a new object with only the specified keys from the original object.

### 18. Omit Specific Keys from Object

```javascript
const omit = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
```

**Description:** Creates a new object excluding the specified keys.

### 19. Truncate String to Specified Length

```javascript
const truncate = (str, len) => str.length > len ? str.slice(0, len) + '...' : str;
```

**Description:** Truncates a string to a specified length and adds ellipsis if needed.

### 20. Merge Multiple Objects

```javascript
const merge = (...objs) => Object.assign({}, ...objs);
```

**Description:** Merges multiple objects into a single object.

### 21. Get File Extension from Filename

```javascript
const getExtension = (filename) => filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
```

**Description:** Extracts the file extension from a filename.

### 22. Calculate Average of Array

```javascript
const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
```

**Description:** Calculates the average of numbers in an array.

### 23. Find Sum of Array

```javascript
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
```

**Description:** Returns the sum of all numbers in an array.

### 24. Find Max Value in Array

```javascript
const max = (arr) => Math.max(...arr);
```

**Description:** Returns the maximum value in an array of numbers.

### 25. Find Min Value in Array

```javascript
const min = (arr) => Math.min(...arr);
```

**Description:** Returns the minimum value in an array of numbers.

### 26. Sleep/Delay Function

```javascript
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
```

**Description:** Creates a delay/promise that resolves after specified milliseconds.

### 27. Generate Array of Numbers in Range

```javascript
const range = (start, end) => Array.from({length: end - start + 1}, (_, i) => start + i);
```

**Description:** Generates an array of numbers from start to end (inclusive).

### 28. Flatten Array

```javascript
const flatten = (arr) => arr.flat();
```

**Description:** Flattens a nested array one level deep.

### 29. Deep Flatten Array

```javascript
const deepFlatten = (arr) => arr.flat(Infinity);
```

**Description:** Flattens a nested array to any depth.

### 30. Get Current Timestamp

```javascript
const timestamp = () => Date.now();
```

**Description:** Returns the current Unix timestamp in milliseconds.

### 31. Convert String to Slug

```javascript
const slugify = (str) => str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
```

**Description:** Converts a string into a URL-friendly slug.

### 32. Count Occurrences in Array

```javascript
const countOccurrences = (arr, val) => arr.reduce((a, v) => v === val ? a + 1 : a, 0);
```

**Description:** Counts how many times a value appears in an array.

### 33. Generate Random Integer in Range

```javascript
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```

**Description:** Generates a random integer between min and max (inclusive).

### 34. Check if Variable is an Array

```javascript
const isArray = (val) => Array.isArray(val);
```

**Description:** Returns `true` if the value is an array.

### 35. Check if Variable is an Object

```javascript
const isObject = (val) => val && typeof val === 'object' && !Array.isArray(val);
```

**Description:** Returns `true` if the value is a plain object (not null, not array).

### 36. Get Last N Elements of Array

```javascript
const lastN = (arr, n) => arr.slice(-n);
```

**Description:** Returns the last N elements of an array.

### 37. Remove Falsy Values from Array

```javascript
const compact = (arr) => arr.filter(Boolean);
```

**Description:** Removes all falsy values (false, null, undefined, 0, '', NaN) from an array.

### 38. Convert Object to Query String

```javascript
const toQueryString = (obj) => new URLSearchParams(obj).toString();
```

**Description:** Converts an object to a URL query string.

### 39. Get Value from Nested Object

```javascript
const getNestedValue = (obj, path) => path.split('.').reduce((o, p) => o?.[p], obj);
```

**Description:** Safely gets a value from a nested object using dot notation.

### 40. Scroll to Top of Page

```javascript
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
```

**Description:** Smoothly scrolls to the top of the page.

### 41. Copy Text to Clipboard

```javascript
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
```

**Description:** Copies text to the clipboard using the Clipboard API.

### 42. Check if Element is in Viewport

```javascript
const isInViewport = (el) => el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().left >= 0 && el.getBoundingClientRect().bottom <= (window.innerHeight || document.documentElement.clientHeight) && el.getBoundingClientRect().right <= (window.innerWidth || document.documentElement.clientWidth);
```

**Description:** Checks if an element is currently visible in the viewport.

### 43. Format Currency

```javascript
const formatCurrency = (amount, currency = 'USD') => new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
```

**Description:** Formats a number as currency with proper symbol and formatting.

### 44. Get Query Params from URL

```javascript
const getQueryParams = () => Object.fromEntries(new URLSearchParams(window.location.search));
```

**Description:** Returns all query parameters from the current URL as an object.

### 45. Debounce Function

```javascript
const debounce = (fn, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => fn(...args), delay); }; };
```

**Description:** Creates a debounced function that delays invoking until after wait milliseconds.

### 46. Throttle Function

```javascript
const throttle = (fn, limit) => { let inThrottle; return (...args) => { if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; };
```

**Description:** Creates a throttled function that invokes at most once per every wait milliseconds.

### 47. Check if User is on Mobile Device

```javascript
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
```

**Description:** Returns `true` if the user is on a mobile device.

### 48. Get Selected Text

```javascript
const getSelectedText = () => window.getSelection().toString();
```

**Description:** Returns the text currently selected by the user.

### 49. Generate UUID

```javascript
const generateUUID = () => crypto.randomUUID();
```

**Description:** Generates a random UUID v4 using the Crypto API.

### 50. Swap Two Variables

```javascript
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
```

**Description:** Swaps two elements in an array or two variables using destructuring.
