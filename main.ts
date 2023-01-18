input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1925, 0, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (question == 0) {
        question = 1
    } else {
        question = 0
    }
    while (question == 1) {
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
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 1960, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.SmallHeart)
})
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
