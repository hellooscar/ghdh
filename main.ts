let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 90)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 || pins.digitalReadPin(DigitalPin.P1) == 1) {
        wuKong.setAllMotor(-100, -100)
        basic.pause(1000)
        wuKong.setAllMotor(80, 0)
        basic.pause(500)
        wuKong.setAllMotor(100, 100)
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    } else if (sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    ) <= 10) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 90)
        basic.pause(2000)
        wuKong.setAllMotor(100, 100)
    } else if (sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    ) > 10 && sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    ) <= 10) {
        wuKong.setAllMotor(100, 100)
    } else {
        wuKong.setAllMotor(100, 0)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
})
