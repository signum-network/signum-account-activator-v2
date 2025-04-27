import { Axiom } from '@axiomhq/js';
import { config } from './config';

// Create the Axiom client instance
const axiomClient = new Axiom({
	token: config.logger.axiom.token
});

// The dataset to send logs to

// App configuration
const options = {
	dataset: config.logger.axiom.dataset,
	extraFields: {
		app: 'signum-activator',
		isTestnet: config.isTestnet
	}
};

interface LogObject {
	msg: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[p: string]: any;
}

/**
 * Standard info-level logging
 */
function log({ msg = '', ...args }: LogObject) {
	axiomClient.ingest(options.dataset, [
		{
			level: 'info',
			message: msg,
			...options.extraFields,
			...args
		}
	]);
}

/**
 * Debug-level logging for verbose information
 * Only logs if verboseLog config is enabled
 */
function verbose({ msg = '', ...args }: LogObject) {
	if (config.verboseLog) {
		axiomClient.ingest(options.dataset, [
			{
				level: 'debug',
				message: msg,
				...options.extraFields,
				...args
			}
		]);
	}
}

/**
 * Error-level logging
 */
function logError({ msg = '', ...args }: LogObject) {
	axiomClient.ingest(options.dataset, [
		{
			level: 'error',
			message: msg,
			...options.extraFields,
			...args
		}
	]);
}

/**
 * Flush all pending logs to Axiom
 * Important to call before application shutdown
 */
async function flush() {
	return axiomClient.flush();
}

export const LoggerAxiom = {
	log,
	verbose,
	logError,
	flush
};
