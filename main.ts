/**
 * P0=green
 * 
 * p1=yellow
 * 
 * p2=red
 */
// This blocks sets which case test are we going to use
input.onButtonPressed(Button.A, function () {
    case_test += 1
    if (case_test > 3) {
        case_test = 0
    }
})
// Resets the micro bit and the lights
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.clearScreen()
})
// Executes the test case that you chose
input.onButtonPressed(Button.B, function () {
    // This while loop executes the first test case which shows at first the green light, then the left turn, then the Walk sign, and then the countdown for the pedestrians
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
        while (index > 0) {
            index += -1
            basic.showNumber(index)
        }
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(10000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        index = 10
    }
    // Executes test case 2, this shows a flashing yellow light
    while (case_test == 2) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
    // Executes test case 3, shows a flashing red light
    while (case_test == 3) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    }
})
// sets the case test to 0, and sets index, which is the variable used for the countdown as 10
let index = 0
let case_test = 0
case_test = 0
index = 10
