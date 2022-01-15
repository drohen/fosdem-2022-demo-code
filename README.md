# FOSDEM 2022 DEMO CODE

## For the talk: Rapid Prototyping Physical Interfaces with Web Serial and Cheap MCUs.

Quickly and cheaply doing design discovery and prototype development with only a web browser

## How to use

The web application code is available under the `docs` directory. It is also available at [drohen.github.com/fosdem-2022-demo-code](https://drohen.github.com/fosdem-2022-demo-code).

The code in the `rp2040` directory needs to run on a [RP2040](https://en.wikipedia.org/wiki/RP2040), like the [Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/), or in an [emulator](https://wokwi.com/arduino/new?template=kaluma-pi-pico). This code is designed to work with the [Kaluma](https://kaluma.io/) runtime, so this must also be on the chip, [please follow the instructions here](https://docs.kaluma.io/getting_started) to do so.

Ensure the Pico is set up with a potentiometer on ADC pin 26, as demonstrated here.

With the web application running in a Chromium browser (such as Chrome or Edge), click the circle button the center and grant access to the Pico serial device. Turn the potentiometer to see the circle rotate.

## License

Copyright 2021 [DROHEN](https://github.com/drohen)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.