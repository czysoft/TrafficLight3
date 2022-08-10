function 灯控制1 (红: number, 黄: number, 绿: number) {
    pins.digitalWritePin(DigitalPin.P0, 绿)
    pins.digitalWritePin(DigitalPin.P1, 黄)
    pins.digitalWritePin(DigitalPin.P2, 红)
}
function 闪1 (次数: number, 灯: number) {
    for (let index = 0; index < 次数; index++) {
        if (灯 == 0) {
            灯控制1(1, 0, 0)
            灯控制2(0, 0, 1)
            basic.pause(1000)
            灯控制1(0, 0, 0)
            灯控制2(0, 0, 0)
            basic.pause(1000)
        } else {
            灯控制1(0, 0, 1)
            灯控制2(1, 0, 0)
            basic.pause(1000)
            灯控制1(0, 0, 0)
            灯控制2(0, 0, 0)
            basic.pause(1000)
        }
    }
}
function 灯控制2 (红: number, 黄: number, 绿: number) {
    pins.digitalWritePin(DigitalPin.P3, 绿)
    pins.digitalWritePin(DigitalPin.P4, 黄)
    pins.digitalWritePin(DigitalPin.P6, 红)
}
led.enable(false)
basic.forever(function () {
    灯控制1(1, 0, 0)
    灯控制2(0, 0, 1)
    basic.pause(5000)
    闪1(3, 0)
    灯控制1(0, 1, 0)
    灯控制2(0, 1, 0)
    basic.pause(1000)
    灯控制1(0, 0, 1)
    灯控制2(1, 0, 0)
    basic.pause(5000)
    闪1(3, 1)
    灯控制1(0, 1, 0)
    灯控制2(0, 1, 0)
    basic.pause(1000)
})
