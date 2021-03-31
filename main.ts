input.onButtonPressed(Button.A, function () {
    case_test += 1
    if (case_test > 5) {
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
    if (case_test == 1) {
        while (true) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(5000)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(5000)
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.showString("Walk")
            basic.pause(5000)
        }
    } else if (case_test == 2) {
        while (true) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
    } else if (case_test == 3) {
        while (true) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
    } else if (false) {
    	
    }
})
let case_test = 0
case_test = 0
