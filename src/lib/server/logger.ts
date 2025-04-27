import { config } from './config';
import { ConsoleLogger } from './loggerConsole';
import { LoggerAxiom } from '$lib/server/loggerAxiom';
export const Logger = config.logger.type === 'console' ? ConsoleLogger : LoggerAxiom;
