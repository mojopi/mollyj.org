 var buttons = Array.from(document.querySelectorAll('.button'));


    var explanations = {
        "heart-emoji": {
            "audio": "snail-1",
            "gif": "retraction.gif",
            "backgroundPosition": "center"

        },
        "eye-emoji": {
            "audio": "snail-9",
            "gif": "eye.gif",
            "backgroundPosition": "3px"


        },

        "shell-emoji1": {
            "audio": "snail-10a",
            "gif": "retraction.gif"
        },

        "shell-emoji2": {
            "audio": "snail-10b",
            "gif": "retraction.gif"
        },
        "mouth-emoji": {
            "audio": "snail-eat",
            "gif": "eating.gif",
            "backgroundPosition": "center"

        },



    };

    var counter = 0;

    var gifContainer = document.getElementById("gif-container");


    function playExplanation(element) {




        element.addEventListener("click", function(event) {
            console.log(element);

            counter = counter + 1;
            console.log(counter);


            var explanationToPlay = document.getElementById(explanations[event.target.id].audio);

            var gifToShow = explanations[event.target.id].gif;




            if (counter % 2 == 1)

            {
                explanationToPlay.play();

                gifContainer.style.backgroundImage = 'url(' + gifToShow + ')';
                gifContainer.style.backgroundPosition = explanations[event.target.id].backgroundPosition;

            };

            if (counter % 2 == 0) {
                explanationToPlay.pause();

            };

        });

    };

    buttons.forEach(playExplanation);





    




