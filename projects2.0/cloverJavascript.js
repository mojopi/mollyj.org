 var cloverButtons = Array.from(document.querySelectorAll('.cloverButton'));


        "clover-button1": {
            "audio": "snail-poop.m4a",
            "video": "clover-snail-poop1.mp4"


        },

        "clover2": {
            "audio": "snail-eat",
        },

         "clover3": {
            "audio": "snail-eat",
        
        },

         "clover4": {
            "audio": "snail-eat",
        
        },

        "clover5": {
            "audio": "snail-eat",
        
        },


    };

    var counter = 0;

    var cloverVideoContainer = document.getElementById("clover-video-container");


    function playCloverExplanation(element) {



        element.addEventListener("click", function(event) {
            console.log(element);

            counter = counter + 1;
            console.log(counter);
            var video = document.getElementById("video")


            var explanationToPlay = document.getElementById(explanations[event.target.id].audio);

            var videoToShow = explanations[event.target.id].video;




            if (counter % 2 == 1)

            {
                explanationToPlay.play();

                video.src = 'url(' + videoToShow + ')';
                // videoContainer.style.backgroundPosition = explanations[event.target.id].backgroundPosition;

            };

            if (counter % 2 == 0) {
                explanationToPlay.pause();
                videoToShow.pause();

            };

        });

    };

    cloverButtons.forEach(playCloverExplanation);





    




