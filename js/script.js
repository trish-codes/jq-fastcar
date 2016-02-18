// script.js

$(function() {

    //Click the go button
    $('#go').click(function (){
        
        //build function to see which car one the race
        function checkIfComplete(){
            if( isComplete == false){
                isComplete = true;
            } else {
                place = 'second';
            }
        }
        
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
            checkIfComplete();
            $('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!');
        });
        
         //amimate car 2
        $('#car2').animate({
            
           //move the car width of the racetrack
            left: raceTrackWidth,
            
        }, raceTime2, function(){
            //animation is complete
            
            //run a function
            checkIfComplete();
            $('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!');
        });
        
        
        
        
        
        
    });
    

});
