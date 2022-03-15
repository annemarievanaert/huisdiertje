input.onButtonPressed(Button.A, function () {
    honger += -10
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(honger)
})
let honger = 0
honger = 0
basic.forever(function () {
    honger += 1
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    } else if (honger >= 30) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
