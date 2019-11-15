var thermo = new Thermostat();


$(document).ready(function(){

    $("#power-saving").addClass("psmOn").text("ON");

    function updateTemperature(){
        $("#tempValue").text(thermo.showTemperature()).append('&deg;');
        $("#energy-usage").attr('class', thermo.showUsage()).text(thermo.showUsage());
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

    $("#temperature-reset").on('click', function(){
        thermo.reset();
        updateTemperature();
    })

    $("#power-saving-switch").on('click', function(){
        thermo.powerSavingSwitch();
        if (thermo.isPowerSavingOn()){
          $("#power-saving").addClass("psmOn").removeClass("psmOff").text("ON");
        } else {
          $("#power-saving").addClass("psmOff").removeClass("psmOn").text("OFF");
        }
      });
});
