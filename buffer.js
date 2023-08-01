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
let buf = Buffer.from('This is my pretty example');
let json = JSON.stringify({ data: [...buf] });
let buf2 = Buffer.from(JSON.parse(json).data);
console.log(buf2.toString());
