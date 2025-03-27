# List of Topics by Data Structures and Algorithms

## **Data Structures**

### 1. **Basic Data Structures**
  - [Arrays](./basic-data-structures/arrays/arrays.md)
  - [Strings](./basic-data-structures/strings/strings.md)
  - **Linked Lists**
    - [Singly Linked List](./basic-data-structures/singly-linked-list/signly-linked-list.md)
    - [Doubly Linked List](./basic-data-structures/doubly-linked-list/doubly-linked-list.md)
  - [Stacks](./basic-data-structures/stacks/stacks.md)
  - **Queues**
    - [Circular Queue](./basic-data-structures/circular-queue/curcular-queue.md)
    - [Priority Queue](./basic-data-structures/priority-queue/priority-queue.md)
  - [Hash Tables](./basic-data-structures/hash-table/hash-table.md)
  - [Sets](./basic-data-structures/sets/sets.md)

### 2. **Tree Data Structures**
   - Binary Trees
   - Binary Search Trees
   - AVL Trees
   - Red-Black Trees
   - Trie (Prefix Tree)
   - Segment Trees
   - Fenwick Tree (Binary Indexed Tree)

### 3. **Graphs**
   - Adjacency Matrix
   - Adjacency List
   - Directed and Undirected Graphs
   - Weighted Graphs
   - Trees as Special Graphs

### 4. **Other Advanced Data Structures**
   - Heaps
     - Min Heap
     - Max Heap
   - Disjoint Set (Union-Find)
   - LRU Cache
   - Bloom Filters

---

## **Algorithms**

### 1. **Sorting Algorithms**
   - Bubble Sort
   - Selection Sort
   - Insertion Sort
   - Merge Sort
   - Quick Sort
   - Heap Sort
   - Counting Sort
   - Radix Sort
   - Bucket Sort

### 2. **Searching Algorithms**
   - Linear Search
   - Binary Search
   - Depth-First Search (DFS)
   - Breadth-First Search (BFS)

### 3. **Divide and Conquer**
   - Binary Search
   - Merge Sort
   - Quick Sort
   - Maximum Subarray Problem (Kadane's Algorithm)

### 4. **Greedy Algorithms**
   - Interval Scheduling
   - Huffman Coding
   - Kruskal's Algorithm
   - Prim's Algorithm
   - Activity Selection Problem

### 5. **Dynamic Programming (DP)**
   - 0/1 Knapsack Problem
   - Longest Common Subsequence (LCS)
   - Longest Increasing Subsequence (LIS)
   - Matrix Chain Multiplication
   - Fibonacci Numbers
   - Minimum Edit Distance
   - Subset Sum Problem

### 6. **Backtracking**
   - N-Queens Problem
   - Sudoku Solver
   - Subset Generation
   - Permutations and Combinations
   - Rat in a Maze

### 7. **Graph Algorithms**
   - Dijkstra's Algorithm (Shortest Path)
   - Bellman-Ford Algorithm
   - Floyd-Warshall Algorithm
   - Kruskal's Algorithm (Minimum Spanning Tree)
   - Prim's Algorithm (Minimum Spanning Tree)
   - Topological Sorting
   - Tarjan's Algorithm (Strongly Connected Components)
   - Kosaraju's Algorithm

### 8. **Mathematical Algorithms**
   - Prime Factorization
   - Sieve of Eratosthenes
   - Greatest Common Divisor (GCD) - Euclidean Algorithm
   - Least Common Multiple (LCM)
   - Modular Arithmetic
   - Fast Exponentiation

### 9. **String Algorithms**
   - KMP Algorithm (Knuth-Morris-Pratt)
   - Rabin-Karp Algorithm
   - Z Algorithm
   - Manacher's Algorithm (Longest Palindromic Substring)
   - Trie Data Structure for String Matching




## Yodlash shart emas!
#### Agar siz quyidagi maslaxatlarga amal qilsangiz sini ozingizga bo`lgan ishonchingizni oshiradi. Bu shaxsiz tajribamdan kelib chiqgan holarda yozilgan.
---

### 1. **Mavzularni tushunish va asosiy ma'lumotni o'rganish**
- Har bir mavzu bo‘yicha **asosiy tushunchalarni** yodlash o‘rniga ularni qanday ishlashini tushunib oling.
- Har mavzu bo‘yicha quyidagi savollarga javob bera olishingiz kerak:
  - Bu nima?
  - Qachon va nima uchun bu usuldan foydalanamiz?
  - Qanday asosiy muammolarni hal qiladi?
  - Uning afzalliklari va kamchiliklari qanday?

---

### 2. **Amaliy mashqlar qilish**
- Har bir mavzu bo‘yicha kichik amaliy mashqlarni bajaring.
- Har qanday algoritm yoki ma'lumotlar tuzilmasi uchun ularning qanday ishlashini **qo'lda yozib chiqib tahlil qiling**:
  - Kichik massiv yoki ro‘yxat ustida operatsiyalarni qog‘ozda yoki oddiy kodda sinab ko‘ring.
  - Misol: massivdan takroriy elementlarni olib tashlashni qo‘lda bajarib, har bir qadamni tushunib chiqing.
  
---

### 3. **Intervyu savollarini yechish**
- **LeetCode**, **HackerRank**, yoki **Codewars** kabi platformalarda shu mavzular bo‘yicha savollarni yeching.
  - Boshlang‘ichdan murakkabgacha savollarni tanlang.
  - Har bir yechim uchun vaqt va joy murakkabligini (time and space complexity) tahlil qiling.
  - Yechim ustida ishlashda kodingizni **optimizatsiya qilishni o‘rganing**.
  
---

### 4. **Pseudo kod yozishni o'rganing**
- Har bir masala uchun dastlab qog‘ozda yoki shunchaki oddiy **pseudo kod** yozib ko‘ring. Bu sizning algoritmik fikrlash qobiliyatingizni oshiradi.
- Misol:
  - **Masala:** Massivdagi eng katta sonni toping.
  - **Pseudo kod:**
    ```pseudo
    function findMax(array):
        initialize max = first element of array
        for each element in array:
            if element > max:
                max = element
        return max
    ```

---

### 5. **Savollarga javob berish uslubini mashq qiling**
Intervyuda quyidagicha yondashuv foydali:
1. Savolni tushunib oling va qayta so‘rang (agar noaniq bo‘lsa).
2. Masalani qanday yechishingizni avval tushuntirib bering.
3. Pseudo kod yozing yoki qog‘ozda algoritmni tasvirlab bering.
4. Keyin kodni yozishga o‘ting.
5. Oxirida kodni test qilib, xatoliklarni topishga harakat qiling.

---

### 6. **O‘rganish uchun vaqtni to‘g‘ri boshqarish**
- Har kuni ma'lum vaqtni ma'lumotlar tuzilmalari va algoritmlar uchun ajrating.
  - Masalan: 1 soat yangi mavzuni o‘rganish, 1-2 soat amaliy mashqlar qilish.
- Oldindan belgilangan reja asosida o‘rganing:
  - Haftaning bir kuni massivlarni, boshqa kuni ro‘yxatlarni ko‘rib chiqishingiz mumkin.

---

### 7. **Muhim mavzularni takrorlash**
- Takrorlash uchun qisqa konspekt yoki cheat-sheet tayyorlang.
- Masalan:
  - **Array operatsiyalari:** qo‘shish, o‘chirish, qidirish.
  - **Hash Table:** asosiy xususiyatlari va misollar.

---

### 8. **O‘zingizga savollar bering va tahlil qiling**
- Har bir mavzu bo‘yicha shunday savollarni yozing:
  - Qanday real hayotda ishlatiladi?
  - Bu ma'lumotlar tuzilmasi yoki algoritmning afzalligi nimada?
  - Boshqa yondashuvlardan qachon foydalanishim kerak?

---

### 9. **Yordamchi manbalardan foydalaning**
- **Kitoblar:**  
  - "Cracking the Coding Interview" — Gayle Laakmann McDowell.  
  - "Introduction to Algorithms" — Cormen, Leiserson, Rivest, Stein.

- **Videolar:**  
  - YouTube'da ma'lumotlar tuzilmalari va algoritmlar bo‘yicha darsliklarni ko‘ring (masalan, **freeCodeCamp**, **NeetCode**, yoki **CS Dojo**).

- **Interaktiv platformalar:**  
  - [GeeksforGeeks](https://www.geeksforgeeks.org/)  
  - [LeetCode Discuss](https://leetcode.com/discuss/)

---

### 10. **Tajriba va sabr-toqat**
- Algoritmlar va ma'lumotlar tuzilmalari oson emas, lekin amaliyot bilan yaxshilanasiz.
- Har bir xatodan o‘rganing va murakkab masalalarga o‘tishga shoshilmang.
