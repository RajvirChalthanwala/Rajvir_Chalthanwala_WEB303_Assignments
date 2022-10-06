// WEB303 Assignment 2


$(document).ready(function(){
    
    $("#prospect").click(function(){

      
        $("#content").load("prospect.html", function(responseTxt1, prospect1, xhr){
            if(prospect1 == "success")
            {
                $("#content").fadeIn(3000);
            }
                
            if(statusTxt1 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });

    });


    $("#convert").click(function(){
        $("#content").load("convert.html", function(responseTxt2, convert1, xhr){
            if(convert1 == "success") {
                $("#content").fadeIn(3000);
            }
                //alert("Convert content loaded successfully!");
            if(statusTxt2 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });


    $("#retain").click(function(){
        $("#content").load("retain.html", function(responseTxt3, retain1, xhr){
            if(retain1 == "success") {
                $("#content").fadeIn(3000);
        }
               //alert("Retain content loaded successfully!");
            if(statusTxt3 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
      
    });

})