function A (name) {
  this.name = name;
}

console.log(A.prototype);

/**
 * 継承
 */
let a = A('dog A');
//console.log(a.getName());

let b = Object.create(a); // aを継承したb

// プロトタイプの確認
//console.log(a == b.__proto__);              // true
//console.log(a == Object.getPrototypeOf(b)); // true