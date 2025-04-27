import pino from 'pino';
import { config } from './config';
// App configuration
const options = {
	verboseLog: config.verboseLog,
	appName: 'signum-activator'
};

// Create the pino logger instance with pretty formatting
const pinoLogger = pino({
	level: options.verboseLog ? 'debug' : 'info',
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true
		}
	},
	base: {
		app: options.appName
	}
});

interface LogObject {
	msg: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[p: string]: any;
}

/**
 * Standard info-level logging
 */
function log({ msg = '', ...args }: LogObject) {
	pinoLogger.info(args, msg);
}

/**
 * Debug-level logging for verbose information
 * Only logs if verboseLog config is enabled
 */
function verbose({ msg = '', ...args }: LogObject) {
	if (options.verboseLog) {
		pinoLogger.debug(args, msg);
	}
}

/**
 * Error-level logging
 */
function logError({ msg = '', ...args }: LogObject) {
	pinoLogger.error(args, msg);
}

/**
 * Flush all pending logs
 * Pino doesn't need explicit flushing in most cases, but we'll keep
 * the interface consistent with your original code
 */
async function flush() {
	// For synchronous loggers like pino's default, this isn't strictly necessary
	// but included for API compatibility
	return new Promise<void>((resolve) => {
		pinoLogger.flush(() => {
			resolve();
		});
	});
}

export const ConsoleLogger = {
	log,
	verbose,
	logError,
	flush
};
