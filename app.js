function talk() {
    var know = {
        "hii" :"hii! what can i do for you ?",
        "Are you a robot?":"i'm a robot",
        "What is your name":"This is Jamkaya",
        "How old are you?":"iam 21 years old",
        "what day is it today":"Tuesday",
        "what do you do with my data":"i process and give the output",
        "who made you?":"sir MD Jaleel Pasha",
        "which languages can you speak":"Telugu Hindi English Urdu",
        "what do you think about me":"Fool",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
        document.getElementById("userBox").value="";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
            document.getElementById("userBox").value="";
    }
}

