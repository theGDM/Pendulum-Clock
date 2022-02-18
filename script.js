(function () {
    let secondHand = document.querySelector(".second");
    let minuteHand = document.querySelector(".minute");
    let hourHand = document.querySelector(".hour");

    function setTime() {
        //used to get current time
        let now = new Date();
        let getSeconds = now.getSeconds(); //extracting seconds
        let getMinutes = now.getMinutes(); //extracting minutes
        let getHours = now.getHours(); //extracting hours

        let secondRotateDegree = getSeconds * 6 + 180;
        let minuteRotateDegree = getMinutes * 6 + 180;
        let hourRotateDegree = (getHours % 12) * 30 + 180 + getMinutes * (1 / 2);

        //tick tick sound for second hand
        let secondSound = new Howl({
            src: ['sounds/clockTick.mp3'],
            html5: true,
            volume: 1
        });

        //tick tick sound for hour hand
        let hourSound = new Howl({
            src: ['sounds/hourSound2.mp3'],
            html5: true,
            volume: 1
        });

        if (hourRotateDegree % 30 == 0) {
            hourSound.play();
        } else {
            secondSound.play();
        }

        //rotate the dial of clock
        secondHand.style.transform = `rotate(${secondRotateDegree}deg)`;
        minuteHand.style.transform = `rotate(${minuteRotateDegree}deg)`;
        hourHand.style.transform = `rotate(${hourRotateDegree}deg)`;
    }

    setInterval(setTime, 1000);
})();