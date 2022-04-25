let c = 0
input.onButtonPressed(Button.B, function () {
    for (let a = 0; a <= 4; a++) {
        led.toggle(4 - a, 4 - a)
        c = 4 - a
        for (let b = 0; b <= 4; b++) {
            led.toggle(c - b, c)
            basic.pause(50)
            led.toggle(c, c - b)
        }
    }
})
basic.forever(function () {
	
})
