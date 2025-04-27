import { Logger as InternalAxiomLogger } from 'next-axiom';
import { config } from './config.js';

const loggerBak = new InternalAxiomLogger({
	source: 'signum-activation-service',
	autoFlush: true,
	args: {
		config: {}
	}
});

interface LogObject {
	msg: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[p: string]: any;
}

function log({ msg = '', ...args }: LogObject) {
	loggerBak.info(msg, args);
}

function verbose({ msg = '', ...args }: LogObject) {
	if (config.verboseLog) {
		loggerBak.debug(msg, args);
	}
}

function logError({ msg, ...obj }: LogObject) {
	loggerBak.error(msg, obj);
}

function flush() {
	return loggerBak.flush();
}

export const Logger = {
	logError,
	log,
	verbose,
	flush
};
