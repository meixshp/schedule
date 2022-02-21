function main() {
    var monday = ["Deep Learning of AI"];
    var tuesday = ["Programming Languages", "Intelligent Systems", "Concept Design for the Future"];
    var thursday = ["Deep Learning of AI", "A Hard Look at the movies"];
    var friday = ["A Hard Look at the Movies", "Programming Languages", "Intelligent Systems", "Concept Design for the Future"];

    var weekDay = new Date().getDay();

    if (weekDay > 0 && weekDay < 6) {
        if (weekDay != 3) {
            switch (weekDay) {
                case 1:
                    checkSchedule(monday, weekDay);
                    break;
                case 2:
                    checkSchedule(tuesday, weekDay);
                    break;
                case 4:
                    checkSchedule(thursday, weekDay);
                    break;
                case 5:
                    checkSchedule(friday, weekDay);
                    break;
            }
        } else {
            console.log("mittwoch");
        }
    } else {
        console.log("weekend!");
    }
}

function checkSchedule(array, weekDay) {
    var today = new Date();
    var now = today.getHours() * 60 + today.getMinutes();
    console.log(array, weekDay);

    var startFirstClass = 18 * 60 + 35;
    var endFirstClass = 19 * 60 + 55;
    var startSecondClass = 20 * 60 + 5;
    var endSecondClass = 21 * 60 + 25;
    var startThirdClass = 22 * 60 + 5;
    var endThirdClass = 23 * 60 + 25;
    var startFourthClass = 1 * 60 + 5;
    var endFourthClass = 3 * 60 + 55;

    if (startFirstClass <= now && now <= endFirstClass) {
        manipulateBanner(array, 0);
    }

    if (startSecondClass <= now && now <= endSecondClass) {
        if (weekDay > 1)
            manipulateBanner(array, 1);
    }

    if (startThirdClass <= now && now <= endThirdClass) {
        if (weekDay == 2 || weekDay == 4)
            manipulateBanner(array, 2);
    }

    if (startFourthClass <= now && now <= endFourthClass) {
        if (weekDay == 4)
            manipulateBanner(array, 0);
    }
}

function manipulateBanner(array, course) {
    var banner = document.getElementById("banner");
    banner.classList.remove('alert-secondary');
    banner.classList.add('alert-success');
    banner.innerHTML = "May's currently learning about <b>" + array[course] + "<b>!";
}

main();