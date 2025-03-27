let numbers: number[] = [10, 20, 30, 40];

// Elementlarni konsolga chiqarish
console.log(numbers[0]); // 10

// Yangi element qo‘shish
numbers.push(50);
console.log(numbers); // [10, 20, 30, 40, 50]

// Elementni o‘chirish
numbers.pop();
console.log(numbers); // [10, 20, 30, 40]

// Elementni yangilash
numbers[2] = 35;
console.log(numbers); // [10, 20, 35, 40]