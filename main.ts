let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 . . . . . . 
    . . 6 6 6 6 6 6 6 6 . . . . . . 
    . . 6 6 6 6 6 6 6 6 6 . . . . . 
    . 6 6 f 6 6 6 6 6 f 6 6 . . . . 
    . 6 6 3 6 f 6 f 6 3 6 6 6 . . . 
    . 6 6 6 6 6 f 6 6 6 6 6 6 . . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 6 6 . . . 
    . . . . 6 6 6 6 6 6 6 6 6 . . . 
    . . . . . . . 6 6 6 6 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.say("Hello!")
