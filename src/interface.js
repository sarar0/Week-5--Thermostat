$(document).ready(function(){

    var thermo = new Thermostat();

    if (thermo.isPowerSavingOn()){
        $("#power-saving").addClass("psmOn").removeClass("psmOff").text("ON");
      }

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

      var city = "London";
      displayWeather(city);

      $('#select-city').submit(function(event) {
        event.preventDefault();
        city = $('#current-city').val();
        displayWeather(city);
      })

      function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
        var units = '&units=metric';
        $.get(url + token + units, function(data) {
          $('#current-temperature-city').text((data.main.temp).toFixed(1)).append('&deg;');
        })
        $("#display-city").text(city.toUpperCase())
      }
});
