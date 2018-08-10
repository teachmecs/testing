/**
* Custom blocks
*/
//% weight=100 color=#f6a800 icon=""
namespace binary {
    /**
     * Binary: Displays decimal number as Binary LEDs
     * @param n eg: decimalNumber
     */
    //% block
    export function displayBinaryLeds(n: number): void {
        decimalNumber = n
        binaryLEDs();
    }

    let item = 0
    let decimalNumber = 0
    let binaryNumber = ""
    let index = 0
    let binaryArray: number[] = []
    let value = 0
    function convertToBinary() {
        binaryArray = [0]
        while (decimalNumber > 0) {
            binaryArray.push(decimalNumber % 2)
            if (decimalNumber % 2 == 1) {
                decimalNumber = decimalNumber / 2 - 0.5
            } else {
                decimalNumber = decimalNumber / 2
            }
            console.logValue("Math", decimalNumber)
        }
        binaryArray.reverse()
        item = binaryArray.pop()
    }
    function successBlink() {
        for (let i = 0; i < 4; i++) {
            light.setAll(0x00ff00)
            pause(__internal.__timePicker(500))
            light.setAll(0x000000)
            pause(__internal.__timePicker(500))
        }
    }
    function binaryConsoleLog() {
        for (let value2 of binaryArray) {
            binaryNumber = "" + binaryNumber + value2
        }
        console.log("Binary Number = " + binaryNumber)
    }
    function binaryLEDs() {
        if (decimalNumber > 1023 || decimalNumber < 0) {
            console.log("Decimal number is out of bounds.")
            errorBlink()
        } else {
            console.logValue("Decimal Number", decimalNumber)
            light.setAll(0x000000)
            convertToBinary()
            binaryConsoleLog()
            turnOnLEDs()
        }
    }
    function turnOnLEDs() {
        index = 0
        for (let value3 of binaryArray) {
            if (value3 == 1) {
                light.setPixelColor(index, 0x007fff)
            } else {
                light.setPixelColor(index, 0xffffff)
            }
            index += 1
        }
    }
    function errorBlink() {
        for (let i = 0; i < 4; i++) {
            light.setAll(0xff0000)
            pause(__internal.__timePicker(500))
            light.setAll(0x000000)
            pause(__internal.__timePicker(500))
        }
    }
    value = 0
}
