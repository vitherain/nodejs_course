var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
//nasledujici se nezapise, protoze new ArrayBuffer(8) rika: vytvor buffer o velikosti 8 bajtu, ale kazde cislo zabira 4 bajty (32 bitu / 8)
view[2] = 30;
console.log(view);