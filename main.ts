input.onButtonPressed(Button.A, function () {
    basic.showNumber(blij)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
})
let blij = 0
blij = 0
basic.forever(function () {
    blij += -2
    if (blij < 1) {
        basic.showIcon(IconNames.Happy)
    }
})
