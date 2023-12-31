mp.onControllerEvent(ControllerEvent.Connected, function (player2) {
    mp.setPlayerIndicatorsVisible(true)
    effects.confetti.startScreenEffect()
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    effects.confetti.endScreenEffect()
    mp.setPlayerIndicatorsVisible(false)
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 . . . . . . . . . 
    . . . . . 1 f 1 . . . . . . . . 
    . . . . 1 f f f 1 . . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . . . . 1 f 1 . . . . . . . . 
    . . . . . 1 f 1 . . . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 . . . . . . . . . 
    . . . . . 1 f 1 . . . . . . . . 
    . . . . 1 f f f 1 . . . . . . . 
    . . . . . 1 f 1 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 . . . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . . 1 1 f f 1 1 . . . . . . 
    . . . . 1 f f f f 1 . . . . . . 
    . . . . 1 1 f f 1 1 . . . . . . 
    . . . . . 1 f f 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 . . . . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . 1 1 f 1 1 . . . . . . . 
    . . . . 1 f f f 1 . . . . . . . 
    . . . . 1 1 f 1 1 . . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
tiles.setCurrentTilemap(tilemap`level1`)
