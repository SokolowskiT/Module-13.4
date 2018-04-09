var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/ver':
				process.stdout.write(process.version + '\n');
				break;
			case '/sys':
				process.stdout.write(process.env.OS + '\n');
				break;
			case '/lang':
				process.stdout.write("System language (request works only for macOS and Linux) " + process.env.LANG + '\n');
				break;
			case '/info':
				OSinfo.print();
				break;
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			default:
				process.stderr.write('Wrong instruction\n');
		}
	}
});