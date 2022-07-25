enum RadioMessage {
    message1 = 49434,
    jump = 59044
}
radio.onReceivedMessage(RadioMessage.jump, function () {
    mySprite.vy = -10
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -10
    radio.sendMessage(RadioMessage.jump)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
radio.sendMessage(RadioMessage.message1)
