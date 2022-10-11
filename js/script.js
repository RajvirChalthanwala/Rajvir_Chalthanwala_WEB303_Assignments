function JSON(){
    $.getJSON( "team.json", function( outcome ) {    
        $.each( outcome, function( index, info ) {
            $("div#team").append(`<h2>${info.name}</h2><h5>${info.position}</h5><p>${info.bio}</p>`);
        });
    });
}

function Ajax(){
    $.ajax({
        url: "team.json",
        beforeSend: function() {
            $("div#team").html(`<h1>Loading...</h1>`);
        },
        error: function(xhr){
            alert("An error occured.");
        },        
        success: function(outcome){
            setTimeout(() => 
            {
                $("div#team").html("");
                $.each(outcome, (index, info)=>
                {
                    $("div#team").append(`<h2>${info.name}</h2><h5>${info.position}</h5><p>${info.bio}</p>`);
                });
            }, 3000);
        }
    });
}

$(document).ready(function(){
    Ajax();
});