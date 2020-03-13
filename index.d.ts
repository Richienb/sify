import { PromiseValue } from "type-fest"

/**
 * Make a promise-style function synchronous.
 * @param input The function to make synchronous.
 * @example
 * ```
 * const sify = require("sify");
 * const got = require("got");
 *
 * const {body} = sify(got)("https://google.com")
 *
 * console.log(body)
 * //=> "<!doctype html>..."
 * ```
*/
declare function sify<ArgumentsType, ReturnValue>(input: (...args: ArgumentsType) => ReturnValue): (...args: ArgumentsType) => PromiseValue<ReturnValue>

export = sify
