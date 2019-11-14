describe('Thermostat', function(){
    var myThermo;

    beforeEach(function(){
        myThermo = new Thermostat();
    })
    it('has a default temperature of 20', function(){
        expect(myThermo.showTemperature()).toEqual(20);
    })

    it('can increase the temperature', function(){
        myThermo.increase();
        expect(myThermo.showTemperature()).toEqual(21);
    })

    it('can decrease the temperature', function(){
        myThermo.decrease();
        expect(myThermo.showTemperature()).toEqual(19);
    })

    it('can turn power saving on/off', function (){
        expect(myThermo.powerSavingSwitch()).toEqual(false);
        expect(myThermo.powerSavingSwitch()).toEqual(true);
    })


    it('can reset the temperature to 20', function(){
        myThermo._temperature = 25;
        expect(myThermo.reset()).toEqual(20);
    })

    describe('when temperature is below 18', function(){
        it('returns LOW usage', function(){
            myThermo._temperature = 16;
            expect(myThermo.showUsage()).toEqual('low-usage');
        });

        it('alerts if the temperature is going below min', function(){
            //spyOn(Thermostat.prototype, 'showTemperature').and.returnValue(10);
            // ANY WAY TO CHANGE THE BELOW TO AVOID USING THE PROPERTY?
            myThermo._temperature = 10;
            expect(myThermo.decrease()).toEqual('cannot lower temperature below minimum temperature');
        })
        
    });

    describe('when temperature is between 18 and 25', function(){
        it('returns MEDIUM usage', function(){
            myThermo._temperature = 20;
            expect(myThermo.showUsage()).toEqual('medium-usage');
        });
    });

    describe('when temperature is more than 25', function(){
        it('returns HIGH usage', function(){
            myThermo.powerSavingSwitch();
            myThermo._temperature = 27;
            expect(myThermo.showUsage()).toEqual('high-usage');
        })


        it('alerts if try to increase temperature beyond 25 degrees when powerSaving is ON', function(){
            myThermo._temperature = 25;
            expect(myThermo.increase()).toEqual('cannot increase temperature beyond 25 degrees');
        })

        it('alerts if try to increase temperature beyond 25 degrees when powerSaving is ON', function(){
            myThermo.powerSavingSwitch();
            myThermo._temperature = 32;
            expect(myThermo.increase()).toEqual('cannot increase temperature beyond 32 degrees');
        })
    })

})