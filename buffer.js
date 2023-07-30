let a = [1,2,3];
let b = Buffer.from(a);
console.log(b);
let a2 = new Uint8Array([1,2,3]);
let b2 = Buffer.from(a2);
console.log(b2);
let b3 = Buffer.alloc(10);
console.log(b3);
let b4 = Buffer.allocUnsafe(10);
console.log(b4);

//Depracted
let buf = new Buffer('This is my pretty example');
let json = JSON.stringify(buf);
let buf2 = new Buffer(JSON.parse(json).data);
console.log(buf2.toString())