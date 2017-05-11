// JavaScript source code
charset = "utf-8";
var filmID = 1;

function zmen(img_object,seatID) {
    token = sessionStorage.getItem("token");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.response;
            res = res.split("##");
            res = res[res.length - 1];
            if (res == "RESERVE") {
                img_object.src = "./img/seats/boxblue1.png";
            }
            if (res == "UNRESERVE") {
                img_object.src = "./img/seats/boxgray2.png";
            }
            if (res == "NONE") {
                alert("nemas opravnenie");
            }
        }
    };
    var url = "http://localhost/cinema/cinema/change_seat_status.php?token=" + token + "&movie=" + filmID + "&seat=" + seatID;
    xhttp.open("GET", url, true);
    xhttp.send();
}
/*
function init() {
    var film = document.getElementById("combo").options[combo.selectedIndex].value;
    var token = sessionStorage.getItem("token");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.response;
            res = res.split("##");
            res = res[res.length - 1];
            res = JSON.parse(res);
            
            for (var i = 0; i < 30; i++) {
                id = "t" + (i + 1);
                
                if (res[i] == "1") {
                   // console.log(id + " " + res[i]);
                    document.getElementById(id).className = "volne";
                }
                if (res[i] == "2") {
                   // console.log(id + " " + res[i]);
                    document.getElementById(id).className = "obsadene";
                }
                if (res[i] == "3") {
                   // console.log(id + " " + res[i]);
                    document.getElementById(id).className = "moje";
                }
            }
        }
    };
    var url = "http://localhost/test_cinema/get_list_of_seats.php?token="+token+"&movie="+film;
    xhttp.open("GET", url, true);
    xhttp.send();

}*/

function showAvailability(res) {
	free = $free;
	sold = $sold;
	urreservation = $urreservation;

	$i = 0;
	while ($res[$i]) {
		if (res == 1) {
			free++;
			$res[$i++]." ";
		}
		if (res == 2) {
			sold++;
			$res[$i++]." ";
		}
		if (res == 3) {
			urreservation++;
			$res[$i++]." ";
		}
	}
/*	echo $free;
	echo $sold;
	echo $urreservation;
*/
}

function showMovie(movie_id) {
    filmID = movie_id;
    token = sessionStorage.getItem("token");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.response;
            res = res.split("##");
            res = res[res.length - 1];
            res = JSON.parse(res);

            for (var i = 0; i < 30; i++) {
                id = "t" + (i + 1);

                if (res[i] == 1) {
                    // console.log(id + " " + res[i]);
                    document.getElementById(id).src = "./img/seats/boxgray2.png";
                }
                if (res[i] == 2) {
                    // console.log(id + " " + res[i]);
                    document.getElementById(id).src = "./img/seats/boxred1.png";
                }
                if (res[i] == 3) {
                    // console.log(id + " " + res[i]);
                    document.getElementById(id).src = "./img/seats/boxblue1.png";
                }
            }
        }
    };
    var url = "http://localhost/cinema/cinema/get_list_of_seats.php?token=" + token + "&movie=" + movie_id;
    xhttp.open("GET", url, true);
    xhttp.send();
}
