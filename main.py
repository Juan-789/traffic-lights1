"""

P0=green

p1=yellow

p2=red

"""

def on_button_pressed_a():
    global case_test
    case_test += 1
    if case_test > 3:
        case_test = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    while case_test == 1:
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.show_string("Walk")
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
        basic.pause(20000)
        basic.pause(5000)
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
        basic.pause(10000)
        pins.digital_write_pin(DigitalPin.P2, 0)
    while case_test == 2:
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digital_write_pin(DigitalPin.P1, 0)
        basic.pause(500)
    while case_test == 3:
        pins.digital_write_pin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.pause(500)
input.on_button_pressed(Button.B, on_button_pressed_b)

case_test = 0
case_test = 0