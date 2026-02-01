def on_forever():
    pass
basic.forever(on_forever)

input.calibrate_compass()

def on_forever2():
    degre = input.compass_heading()
    if degre < 45:
        basic.show_string("N")
    elif degre < 135:
        basic.show_string("E")
    elif degre < 225:
        basic.show_string("S")
    elif degre < 315:
        basic.show_string("O")
    else:
        basic.show_string("N")
basic.forever(on_forever2)
