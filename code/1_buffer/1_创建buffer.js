//alloc
let buf = Buffer.alloc(10)
console.log(buf)

//allocUnsafe
let buf_2 = Buffer.allocUnsafe(1000);
console.log(buf_2)


//from
let buf_3 = Buffer.from("Hello")
let buf_4 = Buffer.from([105,108,111,118,101,121,111,117])
console.log(buf_4)


