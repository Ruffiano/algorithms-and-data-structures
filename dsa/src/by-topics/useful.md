# Foydali qo`llanmalar
---

## **String Methodlari**  
Stringlar uchun ishlatiladigan eng keng tarqalgan metodlar:

| **Method**                | **Tavsif**                                                                              | **Misol**                                                        |
|---------------------------|-----------------------------------------------------------------------------------------|------------------------------------------------------------------|
| `charAt(index)`           | Berilgan indeksdagi belgini qaytaradi.                                                 | `"hello".charAt(1)` => `"e"`                                    |
| `charCodeAt(index)`       | Berilgan indeksdagi belgining Unicode qiymatini qaytaradi.                              | `"A".charCodeAt(0)` => `65`                                     |
| `concat(string2, ...)`    | Ikki yoki undan ortiq stringni birlashtiradi.                                           | `"Hello".concat(" World")` => `"Hello World"`                  |
| `includes(substring)`     | Substring mavjudligini tekshiradi (`true/false`).                                       | `"hello".includes("ll")` => `true`                             |
| `indexOf(substring)`      | Substringning birinchi uchragan indeksini qaytaradi.                                    | `"hello".indexOf("l")` => `2`                                  |
| `lastIndexOf(substring)`  | Substringning oxirgi uchragan indeksini qaytaradi.                                      | `"hello".lastIndexOf("l")` => `3`                              |
| `slice(start, end?)`      | Belgilangan oraliqdagi substringni qaytaradi.                                           | `"hello".slice(1, 3)` => `"el"`                                |
| `substring(start, end)`   | `slice`ga o‘xshash, lekin manfiy indekslarni qabul qilmaydi.                            | `"hello".substring(1, 3)` => `"el"`                            |
| `toLowerCase()`           | Katta harflarni kichik harfga aylantiradi.                                              | `"HELLO".toLowerCase()` => `"hello"`                           |
| `toUpperCase()`           | Kichik harflarni katta harfga aylantiradi.                                              | `"hello".toUpperCase()` => `"HELLO"`                           |
| `trim()`                  | Boshi va oxiridagi bo‘sh joylarni olib tashlaydi.                                       | `"  hello  ".trim()` => `"hello"`                              |
| `split(separator)`        | Stringni berilgan ajratgich bo‘yicha massivga bo‘ladi.                                  | `"a,b,c".split(",")` => `["a", "b", "c"]`                      |
| `replace(search, value)`  | Berilgan substringni yangi qiymat bilan almashtiradi.                                   | `"hello".replace("l", "r")` => `"herlo"`                       |
| `replaceAll(search, val)` | String ichidagi barcha substringlarni almashtiradi.                                     | `"hello".replaceAll("l", "r")` => `"herro"`                    |
| `startsWith(substring)`   | Stringning substring bilan boshlanishini tekshiradi (`true/false`).                     | `"hello".startsWith("he")` => `true`                           |
| `endsWith(substring)`     | Stringning substring bilan tugashini tekshiradi (`true/false`).                         | `"hello".endsWith("lo")` => `true`                             |
| `padStart(targetLen, val)`| Stringni chap tomondan ko‘rsatilgan qiymat bilan to‘ldiradi.                            | `"5".padStart(3, "0")` => `"005"`                              |
| `padEnd(targetLength, v)` | Stringni o‘ng tomondan to‘ldiradi.                                                      | `"5".padEnd(3, "0")` => `"500"`                                |

---

## **Array Methodlari**  
Massivlar bilan ishlash uchun asosiy metodlar:

| **Method**               | **Tavsif**                                                                              | **Misol**                                                       |
|--------------------------|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| `push(element)`          | Massivga yangi element qo‘shadi (oxiridan).                                             | `[1, 2].push(3)` => `[1, 2, 3]`                                |
| `pop()`                  | Oxirgi elementni o‘chiradi va uni qaytaradi.                                            | `[1, 2, 3].pop()` => `3`, `[1, 2]`                             |
| `shift()`                | Birinchi elementni o‘chiradi va uni qaytaradi.                                          | `[1, 2, 3].shift()` => `1`, `[2, 3]`                           |
| `unshift(element)`       | Boshi qismiga yangi element qo‘shadi.                                                   | `[2, 3].unshift(1)` => `[1, 2, 3]`                             |
| `splice(start, count?)`  | Massivdan elementlarni olib tashlaydi yoki yangi qo‘shadi.                              | `[1, 2, 3].splice(1, 1)` => `[1, 3]`                           |
| `slice(start, end?)`     | Massivdan belgilangan qismini qaytaradi.                                                | `[1, 2, 3].slice(0, 2)` => `[1, 2]`                            |
| `concat(array2)`         | Massivlarni birlashtiradi.                                                              | `[1, 2].concat([3, 4])` => `[1, 2, 3, 4]`                      |
| `map(callback)`          | Har bir elementga funksiyani qo‘llaydi va yangi massiv qaytaradi.                       | `[1, 2].map(x => x * 2)` => `[2, 4]`                           |
| `filter(callback)`       | Shartni bajaruvchi elementlarni qaytaradi.                                              | `[1, 2, 3].filter(x => x > 1)` => `[2, 3]`                     |
| `reduce(callback, init)` | Massivni bitta qiymatga qisqartiradi.                                                   | `[1, 2, 3].reduce((a, b) => a + b, 0)` => `6`                  |
| `find(callback)`         | Shartni birinchi bajaruvchi elementni qaytaradi.                                        | `[1, 2, 3].find(x => x > 1)` => `2`                            |
| `findIndex(callback)`    | Shartni bajaruvchi elementning indeksini qaytaradi.                                     | `[1, 2, 3].findIndex(x => x > 1)` => `1`                       |
| `includes(element)`      | Element mavjudligini tekshiradi (`true/false`).                                         | `[1, 2, 3].includes(2)` => `true`                              |
| `sort(compareFn)`        | Massivni tartiblaydi.                                                                  | `[3, 1, 2].sort()` => `[1, 2, 3]`                              |
| `reverse()`              | Massivni teskari tartibda o‘zgartiradi.                                                | `[1, 2, 3].reverse()` => `[3, 2, 1]`                           |
| `join(separator)`        | Massivni stringga aylantiradi.                                                          | `[1, 2, 3].join("-")` => `"1-2-3"`                             |
| `every(callback)`        | Barcha elementlar shartni bajarishini tekshiradi.                                       | `[1, 2, 3].every(x => x > 0)` => `true`                        |
| `some(callback)`         | Hech bo‘lmaganda bitta element shartni bajarishini tekshiradi.                          | `[1, 2, 3].some(x => x > 2)` => `true`                         |

---

## **Map Methodlari**  
Map uchun asosiy metodlar:

| **Method**          | **Tavsif**                                           | **Misol**                                        |
|---------------------|------------------------------------------------------|-------------------------------------------------|
| `set(key, value)`   | Kalit-qiymat juftligini qo‘shadi.                    | `map.set("key1", "value1")`                     |
| `get(key)`          | Kalitga mos qiymatni qaytaradi.                      | `map.get("key1")` => `"value1"`                 |
| `delete(key)`       | Kalitni va qiymatini o‘chiradi.                      | `map.delete("key1")`                            |
| `has(key)`          | Kalit mavjudligini tekshiradi.                       | `map.has("key1")` => `true`                     |
| `size`              | Mapdagi elementlar sonini qaytaradi.                 | `map.size` => `1`                               |
| `clear()`           | Mapdagi barcha elementlarni o‘chiradi.              | `map.clear()`                                   |
| `keys()`            | Barcha kalitlarni qaytaradi.                        | `map.keys()` => `Iterator`                      |
| `values()`          | Barcha qiymatlarni qaytaradi.                       | `map.values()` => `Iterator`                    |
| `entries()`         | Kalit-qiymat juftlarini qaytaradi.                  | `map.entries()` => `Iterator`                   |

---

## **Set Methodlari**  
Set uchun asosiy metodlar:

| **Method**          | **Tavsif**                                          

 | **Misol**                                        |
|---------------------|------------------------------------------------------|-------------------------------------------------|
| `add(value)`        | Yangi qiymat qo‘shadi.                               | `set.add(1)`                                    |
| `delete(value)`     | Qiymatni o‘chiradi.                                  | `set.delete(1)`                                 |
| `has(value)`        | Qiymat mavjudligini tekshiradi.                      | `set.has(1)` => `true`                          |
| `size`              | Setdagi elementlar sonini qaytaradi.                 | `set.size` => `1`                               |
| `clear()`           | Barcha elementlarni o‘chiradi.                       | `set.clear()`                                   |
| `values()`          | Setdagi barcha qiymatlarni qaytaradi.                | `set.values()` => `Iterator`                    |
| `keys()`            | Barcha qiymatlarni qaytaradi (Setda kalitlar yo‘q).  | `set.keys()` => `Iterator`                      |
| `entries()`         | Qiymat-qiymat juftligini qaytaradi.                  | `set.entries()` => `Iterator`                   |

--- 


## Misollar bilan:


### **String Misollar**

```typescript
let str = "hello world";

// charAt()
console.log(str.charAt(6)); // "w"

// includes()
console.log(str.includes("world")); // true

// indexOf()
console.log(str.indexOf("o")); // 4

// slice()
console.log(str.slice(0, 5)); // "hello"

// toUpperCase() va toLowerCase()
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"

// split()
console.log(str.split(" ")); // ["hello", "world"]

// replace()
console.log(str.replace("world", "TypeScript")); // "hello TypeScript"

// padStart() va padEnd()
let numStr = "42";
console.log(numStr.padStart(5, "0")); // "00042"
console.log(numStr.padEnd(5, "-")); // "42---"
```

---

### **Array Misollar**

```typescript
let numbers = [1, 2, 3, 4, 5];

// push() va pop()
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]

// shift() va unshift()
numbers.shift();
console.log(numbers); // [2, 3, 4, 5]
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4, 5]

// map()
let squared = numbers.map(x => x * x);
console.log(squared); // [1, 4, 9, 16, 25]

// filter()
let evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce()
let sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 15

// find()
let firstEven = numbers.find(x => x % 2 === 0);
console.log(firstEven); // 2

// sort()
let unsorted = [3, 1, 4, 1, 5];
unsorted.sort((a, b) => a - b);
console.log(unsorted); // [1, 1, 3, 4, 5]
```

---

### **Map Misollar**

```typescript
let map = new Map<string, number>();

// set()
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

// get()
console.log(map.get("a")); // 1

// has()
console.log(map.has("b")); // true

// size
console.log(map.size); // 3

// delete()
map.delete("c");
console.log(map); // Map(2) { 'a' => 1, 'b' => 2 }

// keys(), values(), entries()
console.log([...map.keys()]); // ["a", "b"]
console.log([...map.values()]); // [1, 2]
console.log([...map.entries()]); // [["a", 1], ["b", 2]]

// clear()
map.clear();
console.log(map); // Map(0) {}
```

---

### **Set Misollar**

```typescript
let set = new Set<number>();

// add()
set.add(1);
set.add(2);
set.add(3);
console.log(set); // Set(3) { 1, 2, 3 }

// has()
console.log(set.has(2)); // true

// size
console.log(set.size); // 3

// delete()
set.delete(2);
console.log(set); // Set(2) { 1, 3 }

// keys(), values(), entries()
console.log([...set.keys()]); // [1, 3]
console.log([...set.values()]); // [1, 3]
console.log([...set.entries()]); // [[1, 1], [3, 3]]

// clear()
set.clear();
console.log(set); // Set(0) {}
```

---

### Qo‘shimcha Misol: Map va Setni Birgalikda Ishlatish

```typescript
let people = new Map<string, Set<string>>();

// Add people to groups
people.set("group1", new Set(["Alice", "Bob"]));
people.set("group2", new Set(["Charlie", "Dave"]));

// Add another person to group1
people.get("group1")?.add("Eve");

// Check group members
console.log(people.get("group1")); // Set(3) { "Alice", "Bob", "Eve" }
```
