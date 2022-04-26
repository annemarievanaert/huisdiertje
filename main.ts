input.onButtonPressed(Button.A, function () {
    honger += -10
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(honger)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        # . # . #
        . . . . .
        `)
    basic.pause(5000)
})
let honger = 0
honger = 0
basic.forever(function () {
    honger += 1
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
