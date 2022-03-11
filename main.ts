input.onButtonPressed(Button.A, function () {
    honger += honger + 10
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(honger)
})
let honger = 0
honger = 0
basic.forever(function () {
    honger += 1
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    if (honger == 20) {
        basic.showIcon(IconNames.Sad)
    }
    if (honger == 35) {
        basic.showIcon(IconNames.Confused)
    }
    if (honger == 50) {
        basic.showIcon(IconNames.Angry)
    }
    if (honger == 60) {
        basic.showIcon(IconNames.Skull)
        honger = 0
    }
})
