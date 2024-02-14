
function playMusic() {
    var audio = document.getElementById("song");
    audio.loop = true; 
    audio.play();
    return audio;
}

$(document).ready(function () {
    var backgroundMusic;

  
    function startMusicOnClick() {
        if (!backgroundMusic) {
            backgroundMusic = playMusic();
        } else if (backgroundMusic.paused) {
            backgroundMusic.play();
        }
    }

    function pauseMusic() {
        if (backgroundMusic && !backgroundMusic.paused) {
            backgroundMusic.pause();
        }
    }

    $(".container")
        .mouseenter(function () {
            $(".card").stop().animate(
                {
                    top: "-90px",
                },
                "slow"
            );
            if (!backgroundMusic || backgroundMusic.paused) {
                startMusicOnClick();
            }
        })
        .mouseleave(function () {
            $(".card").stop().animate(
                {
                    top: 0,
                },
                "slow"
            );
            pauseMusic();
        });

    $(document).on('click', function () {
        startMusicOnClick();
    });

    window.addEventListener('beforeunload', () => {
        pauseMusic();
    });
});
