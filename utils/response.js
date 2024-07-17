import { NextResponse } from "next/server";

export const StatusCodes = Object.freeze({
	OK: 200,
	CREATED: 201,
	ACCEPTED: 202,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	INTERNAL_SERVER_ERROR: 500,
	NOT_IMPLEMENTED: 501,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503,
	GATEWAY_TIMEOUT: 504,
});

class Response {
	#message = "";
	#messageCode = "";
	#data = {};
	#errors = [];
	#statusCode = StatusCodes.OK;

	constructor(
		data = {},
		message = "",
		messageCode = "",
		errors = [],
		statusCode = StatusCodes.OK
	) {
		this.#data = data;
		this.#message = message;
		this.#messageCode = messageCode;
		this.#errors = errors;
		this.#statusCode = statusCode;
	}

	setMessage(message = "") {
		this.#message = message;
	}
	setData(data = {}) {
		this.#data = data;
	}
	setMessageCode(code = "") {
		this.#messageCode = code;
	}
	setStatusCode(code = StatusCodes.OK) {
		this.#statusCode = code;
	}
	setErrors(errors = []) {
		this.#errors = errors;
	}
	addError(error = "") {
		this.#errors.push(error);
	}
	setBadRequest() {
		this.#statusCode = StatusCodes.BAD_REQUEST;
	}
	setForbidden() {
		this.#statusCode = StatusCodes.FORBIDDEN;
	}
	view() {
		return Object.freeze({
			errors: this.#errors,
			message: this.#message,
			messageCode: this.#messageCode,
			data: this.#data,
			statusCode: this.#statusCode,
		});
	}
	viewData() {
		return Object.freeze(this.#data);
	}
	viewErrors() {
		return Object.freeze(this.#errors);
	}
	viewMessage() {
		return this.#message;
	}
	viewMessageCode() {
		return this.#messageCode;
	}
	make(data = this.#data) {
		this.#data = data;
		return NextResponse.json(
			{
				errors: this.#errors,
				message: this.#message,
				messageCode: this.#messageCode,
				data: this.#data,
			},
			{ status: this.#statusCode }
		);
	}
}

export function ok(message, messageCode) {
	return NextResponse.json(
		{ message, messageCode },
		{ status: StatusCodes.OK }
	);
}

export function badRequest(message, messageCode) {
	return NextResponse.json(
		{ message, messageCode },
		{ status: StatusCodes.BadRequest }
	);
}

export default Response;
