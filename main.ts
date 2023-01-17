input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1925, 0, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 1960, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    basic.showIcon(IconNames.SmallHeart)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.ringTone(50)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.stopAllSounds()
    basic.clearScreen()
})
basic.showIcon(IconNames.Happy)
