input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
    basic.pause(500)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 210)
    wuKong.stopAllMotor()
    雨水 = false
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 360)
    basic.pause(500)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
    basic.pause(500)
    wuKong.stopAllMotor()
    雨水 = true
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let strip: neopixel.Strip = null
let 雨水 = false
雨水 = false
basic.showIcon(IconNames.Happy)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Purple))
basic.pause(1000)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
basic.pause(1000)
strip.showColor(neopixel.colors(NeoPixelColors.White))
basic.pause(1000)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    if (Environment.ReadWaterLevel(AnalogPin.P1) > 10) {
        if (雨水 == false) {
            basic.showIcon(IconNames.No)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 360)
            basic.pause(500)
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
            wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
            basic.pause(500)
            wuKong.stopAllMotor()
            雨水 = true
            basic.showIcon(IconNames.Happy)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
    if (Environment.ReadWaterLevel(AnalogPin.P1) < 10) {
        if (雨水 == true) {
            雨水 = false
        }
    }
})
