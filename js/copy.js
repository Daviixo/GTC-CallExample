function copyText() {
    var aName = document.getElementById("agentsName").value;

    //Now, let's get the current date

    var today = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
    
    document.getElementById("temp").value =
        "---Agents name---\n" + aName + " | " + today;

    var copyText = document.getElementById("temp");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    console.log("Copy button was clicked. All actions worked accordingly!")
    alert("Text copied successfully! Remember to either refresh or reset ;)");

}