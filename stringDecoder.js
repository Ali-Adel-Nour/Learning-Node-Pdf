/*let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf8');
let euro =  Buffer.alloc([0xE2, 0x82]);
let euro2 = Buffer.alloc([0xAC]);
console.log(decoder.write(euro));
console.log(decoder.write(euro2));
console.log(euro.toString());
console.log(euro2.toString())
*/
var buf = Buffer.alloc(4);
// write values to buffer
buf.writeUInt8(0x63,0);
buf.writeUInt8(0x61,1);
buf.writeUInt8(0x74,2);
buf.writeUInt8(0x73,3);
// now print out buffer as string
console.log(buf.toString());


var buf1 =  Buffer.alloc('this is the way we build our buffer');
var lnth = buf1.length;
// create new buffer as slice of old
var buf2 = buf1.Buffer.slice(19,lnth);
console.log(buf2.toString()); // build our buffer
//modify second buffer
buf2.fill('*',0,5);
console.log(buf2.toString()); // ***** our buffer