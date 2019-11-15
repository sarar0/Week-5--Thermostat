

$(document).ready(function(){

    var thermo = new Thermostat();

    function updateTemperature(){
        $("#tempValue").text(thermo.showTemperature());
        $("#tempValue").attr('class', thermo.showUsage());
    }
    
    updateTemperature();

    $("#temperature-up").on('click', function(){
        thermo.increase();
        updateTemperature();
    })

    $("#temperature-down").on('click', function(){
        thermo.decrease();
        updateTemperature();
    })


})
