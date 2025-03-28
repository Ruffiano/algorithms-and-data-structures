## **Other Advanced Data Structures: Disjoint Set (Union-Find)**

### **1. Mavzuni tushuntirish**

#### **Disjoint Set (Union-Find)**

**Disjoint Set** yoki **Union-Find** — ma'lumotlarni boshqarish uchun ishlatiladigan ma'lumot tuzilmasi bo‘lib, elementlarni **disjoint (bir-biriga mos kelmaydigan)** guruhlarga ajratish va ularni samarali birlashtirish uchun ishlatiladi. Bu ma'lumot tuzilmasi, asosan, grafik algoritmlarida (masalan, **Kruskalning minimum spanning tree algoritmi**) qo‘llaniladi.

#### **Asosiy operatsiyalar**
1. **Find(x):**  
   Berilgan element x qaysi to‘plamga tegishli ekanligini topadi. Bu operatsiya elementni o‘z ildiziga olib boradi.  
   - Optimallash: Path Compression texnikasi yordamida tezlashtiriladi.

2. **Union(x, y):**  
   Ikki to‘plamni birlashtiradi.  
   - Optimallash: Union by Rank texnikasi yordamida samaradorligi oshiriladi.

---

#### **Optimallash texnikalari**
- **Path Compression:**  
  Find operatsiyasida, qidirilgan tugun ildizga ulanadi, bu esa keyingi qidiruvlarni tezlashtiradi.
  
- **Union by Rank:**  
  Har bir to‘plam uchun chuqurlik saqlanadi va chuqurligi kichikroq bo‘lgan to‘plamni chuqurligi kattaroq to‘plamga birlashtiradi.

---

### **2. Misollar bilan tushuntirish (Typescript)**

#### **Misol 1: Union-Findni yaratish**

```typescript
class DisjointSet {
  parent: number[];
  rank: number[];

  constructor(size: number) {
    this.parent = new Array(size).fill(0).map((_, index) => index);
    this.rank = new Array(size).fill(0);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path Compression
    }
    return this.parent[x];
  }

  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}

const ds = new DisjointSet(5);
ds.union(0, 1);
ds.union(1, 2);
console.log(ds.find(2)); // Output: 0
console.log(ds.find(3)); // Output: 3 (no union with other sets)
```

---

#### **Misol 2: Elementlarning bir guruhda ekanligini tekshirish**

```typescript
function areInSameSet(ds: DisjointSet, x: number, y: number): boolean {
  return ds.find(x) === ds.find(y);
}

const ds = new DisjointSet(6);
ds.union(1, 2);
ds.union(2, 3);
console.log(areInSameSet(ds, 1, 3)); // true
console.log(areInSameSet(ds, 1, 4)); // false
```

---

#### **Misol 3: Union by Rank va Path Compressionni ko‘rsatish**

```typescript
const ds = new DisjointSet(7);
ds.union(1, 2);
ds.union(2, 3);
ds.union(4, 5);
ds.union(5, 6);
ds.union(3, 6); // Birlashtiradi va optimallashni amalga oshiradi
console.log(ds.find(6)); // ildizga boradi va barcha yo‘llarni optimallashtiradi
```

---

### **3. Uyga vazifalar**

#### **1. Guruhlarni birlashtirish**

**Masala:**  
Berilgan elementlar orasida birlashtirish operatsiyasini amalga oshiring va Find yordamida qaysi guruhga tegishli ekanligini aniqlang.  
**Input:**  
```typescript
n = 5;
queries = [
  ["union", 1, 2],
  ["union", 3, 4],
  ["find", 2],
  ["find", 3]
];
```
**Output:**  
`[1, 3]`

**Kod:**

```typescript
class UnionFind {
  // Your code here
}

function processQueries(queries: any[]): any[] {
  // Your code here
  return [];
}
```

**Pseudo Code:**
```pseudo
function UnionFind(size):
    initialize parent array with indices
    initialize rank array with zeros

function union(x, y):
    find roots of x and y
    if roots are different:
        attach smaller tree to larger tree
        if ranks are equal, increment rank of new root

function find(x):
    if parent of x is not itself:
        set parent of x to result of find(parent of x) // path compression
    return parent of x
```

---

#### **2. Guruhlar sonini aniqlash**

**Masala:**  
Berilgan elementlar orasida birlashtirish va Find operatsiyalari yordamida nechta alohida guruh borligini aniqlang.  
**Input:**  
```typescript
n = 5;
queries = [
  ["union", 1, 2],
  ["union", 2, 3],
  ["union", 4, 5]
];
```
**Output:**  
`2` (Alohida guruhlar: `{1, 2, 3}` va `{4, 5}`)

**Kod:**

```typescript
function countGroups(n: number, queries: any[]): number {
  // Your code here
  return 0;
}
```

**Pseudo Code:**
```pseudo
function countGroups(size, queries):
    initialize UnionFind of size
    process union queries
    find unique roots by checking parent array
    return count of unique roots
```

---

#### **3. Ikkita element bir guruhga tegishli ekanligini tekshirish**

**Masala:**  
Berilgan elementlar orasida `x` va `y` bir guruhga tegishli ekanligini aniqlang.  
**Input:**  
```typescript
n = 7;
queries = [
  ["union", 1, 2],
  ["union", 2, 3],
  ["union", 4, 5],
  ["sameSet", 1, 3],
  ["sameSet", 1, 4]
];
```
**Output:**  
`[true, false]`

**Kod:**

```typescript
function areInSameSet(x: number, y: number): boolean {
  // Your code here
  return false;
}
```

**Pseudo Code:**
```pseudo
function areInSameSet(x, y):
    if find(x) == find(y):
        return true
    else:
        return false
```