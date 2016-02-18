// script.js

$(function() {

    //Click the go button
    $('#go').click(function (){
        
        //get with of the cars
        var carWidth = $('#car1').width();
        
        //get with of the cars
        var raceTrackWidth= $(window).width() - carWidth;
        
        //generate a random # between 1 and 5000
        
        var raceTime1 = Math.floor( (Math.random() * 5000) + 1);
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1);
        
        //set a flag variable to False by default
        var isComplete = false;
        //set a flag bariabl to First by default
        var place = 'first';
        
        //amimate car 1
        $('#car1').animate({
            
           //move the car width of the racetrack
            left: raceTrackWidth,
            
        }, raceTime1, function(){
            //animation is complete
            
            //run a function
            
        });
    });
    

});
