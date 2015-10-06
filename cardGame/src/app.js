'use strict';

require('./app.css');

var utils    = require('./utils');
var Observer = require('./observer');

var Manager = function(element, options) {
	this.observer = new Observer();
	this._init(element, options);
};

var p = Manager.prototype;

Object.defineProperty(p, '$watch', {
	value: function(key, callback) {
		var self = this;
		this.observer.on('change:' + key, function() {
			callback.apply(self, arguments)
		})
	},
	enumerable   : true,
	configurable : true
})


utils.extend(p, require('./instance/init'));
utils.extend(p, require('./instance/layout'));
utils.extend(p, require('./instance/event'));
utils.extend(p, require('./instance/trigger'));
utils.extend(p, require('./instance/animrelated'));

window['CardGames'] = Manager;

module.exports = Manager
