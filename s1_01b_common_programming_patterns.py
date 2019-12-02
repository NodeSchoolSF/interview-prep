# Common coding patterns

These will come up often in programming questions.

**Iterating through each pair of items in an array**

Includes indices, and only covers unique index pairs.

Javascript:

```js
const array = [1, 2, 3, 4, 5];

for (let idx1 = 0; idx1 < array.length; idx1++) {
  for (let idx2 = idx1 + 1; idx2 < array.length; idx2++) {
    console.log(array[idx1], array[idx2]);
  }
}
```

Python:

```python
array = [1, 2, 3, 4, 5]

for idx1 in range(len(array)):
    for idx2 in range(idx1 + 1, len(array)):
        print(array[idx1], array[idx2])
```

**Iterating through a 2D array**

Javascript:

```js
const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
  const row = array[rowIndex];
  for (let colIndex = 0; colIndex < row.length; colIndex++) {
    console.log(row[colIndex]);
  }
}
```

Python:

```python
array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for rowIndex in range(len(array)):
    row = array[rowIndex]
    for colIndex in range(len(row)):
        print(row[colIndex])
```

**Initialize an array of fixed size**

Javascript:

Not really needed, generally speaking - arrays can be accessed at any index.

Python:

```python
size = 20
array = [None] * size
```

**Initialize a 2D array**

Javascript:

`TODO`

Python:

```python
num_rows = 10
num_cols = 20
array = [[None] * num_cols for _ in num_rows]
```


**Track the count of an item using a hash**

Javascript:

```js
const array = [1, 2, 1, 4, 2];
const counts = {};

array.forEach((item) => {
  counts[item] = (counts[item] || 0) + 1;
});

return counts;

# Alternative with .reduce
return array.reduce((hsh, item) => {
  hsh[item] = (hsh[item] || 0) + 1;
  return hsh;
}, {});
```

Python:

```python
array = [1, 2, 1, 4, 2]
counts = {}

for item in array:
    counts[item] = counts.get(item, 0) + 1

# Alternative with defaultdict
from collections import defaultdict

counts = defaultdict(int)
for item in array:
    counts[item] += 1
```

**Track existence of an item in a set**

`TODO`

**Using an array as a stack**

Javascript:

```js
const stack = [];

# Push
stack.push(item)

# Pop
item = stack.pop()
```

Python:

```python
stack = []

# Push
stack.push(item)

# Pop
item = stack.pop()
```

**Maximum and minimum numeric values for comparison**

Javascript:

```js
Number.MAX_VALUE
Number.MIN_VALUE
```

Python:

```python
float('inf')
float('-inf')
```

**Division of two numbers with quotient and remainder**

Javascript:

```js
const x = 13;
const y = 5;

const quotient = Math.floor(x / y);
const remainder = x % y;
```

Python:

```python
x = 13
y = 5

quotient = x // y
remainder = x % y
```

**Reversing a string**

Javascript:

```js
const str = "abcdef"
return str.split('').reverse().join('');
```

Python:

```python
str = "abcdef"
return str[::-1]
```
