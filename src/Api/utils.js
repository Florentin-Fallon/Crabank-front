export function numberToString(number) {
    let text = number.toString()
    let finalText = ''

    for (let c = 0; c < text.length; c++) {
        finalText += text[c] + ((c+1 + (text.length % 2 !== 0 ? 1 : 0)) % 3 === 0 ? " " : "")
    }

    return finalText
}