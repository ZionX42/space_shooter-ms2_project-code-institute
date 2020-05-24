// Sequence of enemies spawning into the game that follow a set of waypoints across the screen
function addEnemySequence(delayBefore, image, score, 
    lives, speed, number, delayBetween, waypoints) {
        for(let i = 0; i < number; ++i) {
            let delay = delayBetween;
            if (i == 0) {
                delay = delayBefore;
            }
            EnemySequences.push({
                delayBefore: delay,
                image: image,
                waypoints: waypoints,
                score: score,
                lives: lives,
                speed: speed
            });
        }
}

// Function that adds the enemy calls/spawning to sequence
function setUpSequences() {
    addEnemySequence(2000, 'enemies/jerryHead', 100, 1, 200 / 1000, 
        2, 800, WayPoints['LEFTTORIGHTSHALLOW']);
    addEnemySequence(4000, 'enemies/jerryHead', 100, 1, 400 / 1000, 
        6, 400, WayPoints['STREAMFROMB180']);
    console.log(EnemySequences);
}