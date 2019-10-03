// function AutoPlay(){

//     AutoPlay.prototype.run = function(player) {
//         if (!player.muted){
//             player.muted = true;
//         }
//         player.play();
        
//     }

// }


class AutoPlay {

    run(player){
        if (!player.muted){
            player.muted = true;
        }
        player.play();
    }

}

export default AutoPlay;


