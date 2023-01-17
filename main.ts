input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1925, 0, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let index = 0; index < 50; index++) {
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
led.setBrightness(255)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.logoIsPressed()) {
        while (input.logoIsPressed()) {
            music.ringTone(50)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `, 0)
        }
        music.stopAllSounds()
        basic.clearScreen()
    }
})
