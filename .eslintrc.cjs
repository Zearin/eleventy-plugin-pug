/** @type {import('@types/eslint').ESLint} */
module.exports = {
	root: true,
	env: {
		node: true,
		es2023: true,
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 14,
		sourceType: "module",
	},

	/** @type {import('@types/eslint/rules').ESLintRules} */
	rules: {
		"no-extra-semi": "warn",
		"eol-last": "error",
		"no-var": "error",
	},
}
