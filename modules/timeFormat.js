var os = require('os');

function timeFormat() {
	var sec = Math.floor(os.uptime());
	var min = Math.floor(sec / 60);
	var h = Math.floor(min / 60);
	var days = Math.floor(h / 24);
	var hour = h % 24;
	var minutes = min % 60;
	var seconds = sec % 60;

	switch (true) {
		case days > 0:
			process.stdout.write('Uptime: ~ ' + days + ' days ' + hour + ' h ' + minutes + ' min ' + seconds + ' sec\n');
			break;
		case (days == 0 && h >= 0):
			process.stdout.write('Uptime: ~ ' + hour + ' h ' + minutes + ' min ' + seconds + ' sec\n');
			break;
		case (days == 0 && h == 0 && min >= 0):
			process.stdout.write('Uptime: ~ ' + minutes + ' min ' + seconds + ' sec\n');
			break;
		default:
			process.stdout.write('Uptime: ~ ' + seconds + ' sec');
	}
}


exports.time = timeFormat;