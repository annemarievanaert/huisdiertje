input.onButtonPressed(Button.A, function () {
    honger += -10
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # . # . #
        . . . . .
        `)
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(honger)
})
let honger = 0
honger = 0
basic.forever(function () {
    honger += 0.5
    if (input.logoIsPressed()) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # . . . #
            . # # # .
            `)
    } else if (honger >= 30) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # . # . #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
})
