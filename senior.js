/**
 * @param {number} val
 */
function TreeNode(val) {
  this.val = val === undefined ? 0 : val;
  this.left = null;
  this.right = null;
}

/**
 * Mengubah pohon biner menjadi string.
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) {
    return "null";
  }

  const queue = [root];
  const result = [];

  // Lakukan traversal level-order
  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push("null");
    }
  }

  // Hapus "null" di bagian akhir string yang tidak diperlukan
  while (result[result.length - 1] === "null") {
    result.pop();
  }

  return result.join(",");
};

/**
 * Mengubah string menjadi pohon biner.
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "null") {
    return null;
  }

  const values = data.split(",");
  const root = new TreeNode(parseInt(values[0]));
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < values.length) {
    const parent = queue.shift();

    // Bangun anak kiri
    if (values[i] !== "null") {
      parent.left = new TreeNode(parseInt(values[i]));
      queue.push(parent.left);
    }
    i++;

    // Bangun anak kanan
    if (i < values.length && values[i] !== "null") {
      parent.right = new TreeNode(parseInt(values[i]));
      queue.push(parent.right);
    }
    i++;
  }

  return root;
};

// Contoh penggunaan
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const serialized = serialize(root);
console.log(serialized); // "1,2,null,3,4,5"

const deserialized = deserialize(serialized);
console.log(deserialized.val); // 1
console.log(deserialized.left.val); // 2
console.log(deserialized.right.left.val); // 4
