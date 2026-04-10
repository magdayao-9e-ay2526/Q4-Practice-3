function displayLevelInfo() {
    var levelentry = Number(document.getElementById('levelentry').value);
        switch (levelentry) {
            case 1:
                document.getElementById("displayLevel").innerHTML=
                "Level: Easy Mode";
                break;
            
            case 2:
                document.getElementById("displayLevel").innerHTML=
                "Level: Normal Mode";
                break;

            case 3:
                document.getElementById("displayLevel").innerHTML=
                "Level: Difficult Mode";
                break;

            default:
                window.alert("Invalid Section Number");
              }
        }
