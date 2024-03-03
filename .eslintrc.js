/** @type {import('@types/eslint').ESLint} */
export default {
	root: true,
	env: {
		node: true,
		es2022: true,
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 13,
		sourceType: "module",
	},

	/** @type {import('@types/eslint/rules').ESLintRules} */
	rules: {
		"no-extra-semi": "warn",
		"eol-last": "error",
		"no-var": "error",
	},
}
