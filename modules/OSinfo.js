var os = require('os');
var timeFormat = require('./timeFormat');

function getInfo() {
	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var userInfo = os.userInfo();
	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	timeFormat.time();
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}

exports.print = getInfo;
