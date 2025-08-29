class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    // Head adalah penanda item yang Paling Baru Digunakan.
    this.head = { key: "head", next: null, prev: null };
    // Tail adalah penanda item yang Paling Lama Digunakan.
    this.tail = { key: "tail", next: null, prev: this.head };
    this.head.next = this.tail;
  }

  /**
   * Mengambil nilai dari cache. ini akan membuat item tersebut
   * menjadi yang paling baru digunakan.
   */
  get(key) {
    // Jika key tidak ada, kembalikan -1.
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key);

    // Pindahkan node ke posisi terdepan.
    this._remove(node);
    this._add(node);

    return node.value;
  }

  /**
   * Menambah atau memperbarui item di cache. ini juga akan
   * membuat item tersebut menjadi yang paling baru digunakan.
   */
  put(key, value) {
    // Jika key sudah ada, hapus posisi lamanya di list agar bisa dipindah ke depan.
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }

    // Buat node baru menggunakan objek biasa.
    const newNode = { key, value, prev: null, next: null };
    this.map.set(key, newNode);
    this._add(newNode);

    // Jika cache melebihi kapasitas, hapus item yang paling lama digunakan.
    if (this.map.size > this.capacity) {
      const lruNode = this.tail.prev;
      this._remove(lruNode);
      this.map.delete(lruNode.key);
    }
  }

  // --- Metode Internal untuk Mengelola Linked List ---

  // Helper untuk menambahkan node tepat setelah head.
  _add(node) {
    const headNext = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = headNext;
    headNext.prev = node;
  }

  // Helper untuk menghapus node dari posisinya saat ini di list.
  _remove(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}

// Contoh penggunaan
const cache = new LRUCache(2);

cache.put(1, 1); // null
cache.put(2, 2); // null
console.log(cache.get(1)); // 1
cache.put(3, 3); // null, (evict key 2)
console.log(cache.get(2)); // -1
cache.put(4, 4); // null, (evict key 1)
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
