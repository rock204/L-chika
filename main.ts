let bf = 0
let sw = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
    }
})
basic.forever(function () {
    bf = pins.digitalReadPin(DigitalPin.P1)
    if (bf == 1) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
    sw = pins.digitalReadPin(DigitalPin.P1)
    if (sw == 1) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
