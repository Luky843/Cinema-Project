// JavaScript source code
charset = "utf-8";

/*
function autorizuj() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.response;
            res = res.split("##");
            res = res[res.length - 1];
            sessionStorage.setItem("token", res);
            document.getElementById("token").innerHTML = sessionStorage.getItem("token");
        }
    };
    var url = "http://localhost/test_cinema/autorization.php?name="+document.getElementById("meno").value+"&password="+document.getElementById("heslo").value;
    xhttp.open("GET", url, true);
    xhttp.send();
}

function zmen(id,sedadlo) {
    token = sessionStorage.getItem("token");
    var film = document.getElementById("combo").options[combo.selectedIndex].value;
    var bunka = document.getElementById("t" + sedadlo);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.response;
            res = res.split("##");
            res = res[res.length - 1];
            if (res == "RESERVE") {
                bunka.className = "moje";
            }
            if (res == "UNRESERVE") {
                bunka.className = "volne";
            }
            if (res == "NONE") {
                alert("nemas opravnenie");
            }
        }
    };
    var url = "http://localhost/test_cinema/change_seat_status.php?token="+token+"&movie="+film+"&seat="+sedadlo;
    xhttp.open("GET", url, true);
    xhttp.send();
}

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