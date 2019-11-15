'use strict';

function Thermostat() {
    this._DEFAULT = 20
    this._temperature = this._DEFAULT;
    this._MINTEMP = 10;
    this._powerSavingOn = true;
    this._MINTEMPpsON = 25;
    this._MINTEMPpsOFF = 32;
    this.MEDIUM_USAGE_LIMIT = 18;
}

Thermostat.prototype.showTemperature = function() {
    return this._temperature;
}

Thermostat.prototype.increase = function() {
    if (this._powerSavingOn && this._temperature === this._MINTEMPpsON) {
        return 'cannot increase temperature beyond 25 degrees'; }
    else if (this._powerSavingOn === false && this._temperature === this._MINTEMPpsOFF) {
        return 'cannot increase temperature beyond 32 degrees'; }
    else { this._temperature++ }
}

Thermostat.prototype.decrease = function() {
    if (this._temperature === this._MINTEMP) {
        return 'cannot lower temperature below minimum temperature';
    } else {
        this._temperature--;
    }
}

Thermostat.prototype.powerSavingSwitch = function(){
    this._powerSavingOn = !(this._powerSavingOn);
}

Thermostat.prototype.isPowerSavingOn = function(){
    return this._powerSavingOn;
}

Thermostat.prototype.reset = function(){
    this._temperature = this._DEFAULT;
}

Thermostat.prototype.showUsage = function(){
    if (this._temperature < this.MEDIUM_USAGE_LIMIT) {
        return 'low-usage';
      }
      if (this._temperature >= this.MEDIUM_USAGE_LIMIT && this._temperature < this._MINTEMPpsON) {
        return 'medium-usage';
      }
      return 'high-usage';
}
