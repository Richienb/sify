"use strict"

const pSyncy = require("p-syncy")

module.exports = (input) => {
	if (typeof input !== "function") throw new TypeError("A function must be provided.")

	return (...args) => pSyncy(input(...args))
}
