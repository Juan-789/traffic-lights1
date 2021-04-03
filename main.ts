/**
 * P0=green
 * 
 * p1=yellow
 * 
 * p2=red
 */
input.onButtonPressed(Button.A, function () {
    case_test += 1
    if (case_test > 3) {
        case_test = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    while (case_test == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.showString("Walk")
        for (let index = 0; index <= 17; index++) {
            basic.showNumber(17 - index)
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(10000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    while (case_test == 2) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
    while (case_test == 3) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    }
})
let case_test = 0
case_test = 0
