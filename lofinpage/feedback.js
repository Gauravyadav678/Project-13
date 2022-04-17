var nameV1,emailv,textv;

function readform()
{
    nameV1 = document.getElementById("name").value; 
    emailv = document.getElementById("mail").value;
    textv = document.getElementById("feedback").value;
}

document.getElementById("insert").onclick = function(){
    readform();
    firebase
    .database()
    .ref("Feedback_Panel/"+nameV1)
    .set({
        Customer_Name :nameV1,   
        mail_id : emailv,
        feed_back : textv
    })
    alert("Thanks For Your Valueable Feedback...");
    document.getElementById("name").value="";
    document.getElementById("roll").value="";
    document.getElementById("feedback").value="";   
}
