const isValid = (s) => {
  // Jika string kosong, langsung dianggap valid.
  if (s.length === 0) {
    return true;
  }

  const stack = [];

  // pemetaan untuk mencocokkan kurung tutup dengan kurung buka.
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // Iterasi setiap karakter dalam string.
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Cek apakah karakter saat ini adalah kurung tutup.
    if (map[char]) {
      const topElement = stack.pop();

      // Bandingkan elemen teratas stack dengan pasangan kurung buka yang seharusnya.
      // Jika tidak cocok, string tidak valid.
      if (topElement !== map[char]) {
        return false;
      }
    } else {
      // Jika karakter adalah kurung buka, masukkan ke dalam stack.
      stack.push(char);
    }
  }

  // Jika stack kosong di akhir, semua kurung telah ditutup dengan benar.
  return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("")); // true

console.log(isValid("(((")); // false
console.log(isValid(")))")); // false
console.log(isValid("([{}])")); // true
