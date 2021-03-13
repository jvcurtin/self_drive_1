basic.pause(1000)
basic.forever(function () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) > 15) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
    while (maqueen.Ultrasonic(PingUnit.Centimeters) <= 20) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 120)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
    }
})
