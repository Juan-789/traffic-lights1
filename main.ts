/**
 * do the
 */
function Green_Light () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function Red_Green_Yellow_Test_case () {
    strip.setBrightness(20)
    Green_Light()
    basic.showString("Walk")
    while (index > 0) {
        index += -1
        basic.showNumber(index)
    }
    music.stopMelody(MelodyStopOptions.All)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    Yellow_Light()
    basic.pause(1000)
    Red_Light()
    basic.pause(10000)
    index = 10
}
// This blocks sets which case test are we going to use
input.onButtonPressed(Button.A, function () {
    Deaf_Red_Green_Yellow_Test_case2()
    case_test += 1
    // This while loop executes the first test case which shows at first the green light, then the left turn, then the Walk sign, and then the countdown for the pedestrians
    while (case_test == 2) {
        Red_Green_Yellow_Test_case()
    }
})
function Red_Light () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
// Resets the micro bit and the lights
input.onButtonPressed(Button.AB, function () {
	
})
// Executes the test case that you chose
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
/**
 * P0=green
 * 
 * p1=yellow
 * 
 * p2=red
 */
function Deaf_Red_Green_Yellow_Test_case2 () {
    strip.setBrightness(20)
    Green_Light()
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    while (index > 0) {
        index += -1
        basic.showNumber(index)
        while (index > 5) {
            music.playTone(659, music.beat(BeatFraction.Half))
            music.playTone(554, music.beat(BeatFraction.Whole))
            music.playTone(247, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            break;
        }
    }
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    Yellow_Light()
    basic.pause(1000)
    Red_Light()
    basic.pause(10000)
    index = 10
}
function Yellow_Light () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
// sets the case test to 0, and sets index, which is the variable used for the countdown as 10
let index = 0
let case_test = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
range = strip.range(0, 3)
case_test = 0
index = 10
basic.forever(function () {
	
})
