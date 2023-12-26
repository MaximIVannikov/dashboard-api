export class HTTPError extends Error {
	statusCode: number;
	constext?: string;

	constructor(statusCode: number, message: string, context?: string) {
		super(message);
		this.statusCode = statusCode;
		this.message = message;
		this.constext = context;
	}
}
