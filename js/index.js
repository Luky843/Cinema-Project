
function displayErrMsg(elm, msg) { //elm = element name; msg = message whitch will dysplayed; (all string type)
    document.getElementById(elm).innerHTML = msg;
    document.getElementById(elm).style.color = "red";
    document.getElementById(elm).style.display = "block";
}

function displaySccsMsg(elm, msg) { //elm = element name; msg = message whitch will dysplayed; (all string type)
    document.getElementById(elm).innerHTML = msg;
    document.getElementById(elm).style.color = "green";
    document.getElementById(elm).style.display = "block";
}


//Validator
function Valid() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("pss").value;

   /* if (user == "admin" || user == "Admin") {
        if (password == "1234") {
            displaySccsMsg("er1", 'Login successful!');
            $(document).ready(function () {
                window.setTimeout(function () { window.location.href = "cinema/index.html" }, 500);
            });
            return true;
        }
    }*/
    if (user == "" || password == "") {
        displayErrMsg("er1", 'Password and username are mandatory!');
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
				if(this.response == ""){
					 displayErrMsg("er1", 'server.error');
					 return;
				}
				var res = this.response;
				res = res.split("##");
				res = res[res.length -1];
				
                if (res == "-1") {
                     displayErrMsg("er1", 'Incorrect username or password!');
                } else {
                     sessionStorage.setItem("token", res);
                     displaySccsMsg("er1", 'Login successful!');
                     $(document).ready(function () {
                         window.setTimeout(function () { window.location.href = "cinema/index.html" }, 500);
                     });
                }
            }
            // console.log(url);
        };
        var url = "http://localhost/cinema/cinema/autorization.php?name=" + user + "&password=" + password;
        xhttp.open("GET", url, true);
        xhttp.send();
        
        return false;
    }
}