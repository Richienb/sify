const test = require("ava")
const execa = require("execa")

test("main", async (t) => {
	t.is((await execa("node", ["fixtures/test"])).stdout, "a")
})
