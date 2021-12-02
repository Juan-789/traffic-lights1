def Green_Light():
    global range2
    range2 = strip.range(0, 1)
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
"""

P0=green

p1=yellow

p2=red

"""
def Red_Green_Yellow_Test_case():
    global index
    strip.set_brightness(20)
    Green_Light()
    basic.show_string("Walk")
    basic.show_leds("""
        . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
    """)
    while index > 0:
        index += -1
        basic.show_number(index)
    basic.clear_screen()
    basic.show_leds("""
        # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
    """)
    Yellow_Light()
    basic.pause(1000)
    index = 10
    Red_Light()
# This blocks sets which case test are we going to use

def on_button_pressed_a():
    global case_test
    case_test += 1
    if case_test > 3:
        case_test = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def Red_Light():
    global range2
    range2 = strip.range(0, 1)
    strip.show_color(neopixel.colors(NeoPixelColors.RED))
    range2 = strip.range(1, 1)
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
# Resets the micro bit and the lights

def on_button_pressed_ab():
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# Executes the test case that you chose

def on_button_pressed_b():
    # This while loop executes the first test case which shows at first the green light, then the left turn, then the Walk sign, and then the countdown for the pedestrians
    while case_test == 1:
        Red_Green_Yellow_Test_case()
input.on_button_pressed(Button.B, on_button_pressed_b)

def Yellow_Light():
    global range2
    range2 = strip.range(0, 1)
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    range2 = strip.range(2, 1)
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
# sets the case test to 0, and sets index, which is the variable used for the countdown as 10
index = 0
case_test = 0
range2: neopixel.Strip = None
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
range2 = strip.range(0, 3)
case_test = 0
index = 10

def on_forever():
    pass
basic.forever(on_forever)
