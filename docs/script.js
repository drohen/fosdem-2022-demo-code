const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
  navigator.serial.requestPort().then(readPort);
})

const message = new Uint8Array(4);

const transformStream = {
  reading: -1,
  start() {},
  transform(chunk, controller) {
    if (chunk) {
      for (const byte of chunk) {
        if (this.reading === -1) {
          if (byte === 192) this.reading = 0;
        } else {
          message[this.reading] = byte;
          this.reading += 1;
          if (this.reading > 3) {
            this.reading = -1;
            controller.enqueue();
          }
        }
      }
    }
  },
  flush() {}
}

async function readPort(port) {
  await port.open( { baudRate: 115200 } );
  
  while (port.readable) {
    const reader = port.readable
      .pipeThrough(new TransformStream(transformStream))
      .getReader();
    
    try {
      while (true) {
        if (!handleMessage(await reader.read())) {
          break;
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      reader.releaseLock();
    }
  }
}

const value = new Float32Array(message.buffer);

function handleMessage({ done }) {
  if (done) {
    return false;
  }
  
  // convert to degrees to rotate the button
  btn.style.transform = `rotate(${value[0] * 360}deg)`;
  
  return true;
}