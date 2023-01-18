input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1925, 0, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    question = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    question = 1
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 1960, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.SmallHeart)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 10; index++) {
        basic.showString("A", 10)
basic.showString("B", 10)
basic.showString("C", 10)
basic.showString("D", 10)
    }
    guess = randint(1, 4)
    if (guess == 1) {
        basic.showString("A")
    } else if (guess == 2) {
        basic.showString("B")
    } else if (guess == 3) {
        basic.showString("C")
    } else {
        basic.showString("D")
    }
    basic.pause(1000)
    basic.clearScreen()
})
let guess = 0
let question = 0
question = 0
music.setVolume(255)
led.setBrightness(255)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.logoIsPressed()) {
        while (input.logoIsPressed()) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `, 0)
        }
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (question == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `, 50)
basic.clearScreen()
        basic.pause(50)
    }
})
