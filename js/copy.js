function copyText() {
    var aName = document.getElementById("agentsName").value;
    var callsDate = document.getElementById("dateTime").value;
    var toPhoneN = document.getElementById("toPhoneNumber").value;
    var fromPhoneN = document.getElementById("fromPhoneNumber").value;
    var callResult = document.getElementById("callResults").value;
    var kibanaInfo = document.getElementById("kibanaDetails").value;
    var callID = document.getElementById("idCall").value;

    //Now, let's get the current date

    var today = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

    var newTimeDate = callsDate.split("T");

    console.log(newTimeDate);

    document.getElementById("temp").value =
        "---Agents name---\n" + aName + " | " + today + 
        "\n\n --Calls Info--\nTo: " + toPhoneN +
        "\nFrom: " + fromPhoneN + 
        "\nDate/Time (Year/Month/Day): " + newTimeDate[0] + " // Time: " + newTimeDate[1] +
        "\nResult: " + callResult +
        "\nKibana: " + kibanaInfo + 
        "\nCall ID: " + callID;

    var copyText = document.getElementById("temp");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    console.log("Copy button was clicked. All actions worked accordingly!")
    alert("Text copied successfully! Remember to either refresh or reset ;)");

}