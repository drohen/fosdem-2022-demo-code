const {ADC} = require('adc');

const adc = new ADC(26);
const data = new Uint8Array([192, 0, 0, 0, 0]);

// Shared buffer to change between data types
const flt = new Float32Array(1);
const cpy = new Uint8Array(flt.buffer);

setInterval(() => {
  // adc is a float
  flt[0] = adc.read();

  // set message buffer
  data.set(cpy, 1);

  // send to serial
  process.stdout.write(data);
}, 100);