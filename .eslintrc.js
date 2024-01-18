/** @type {import {ESLint} from '@types/eslint'} */
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

	/** @type {import { ESLintRules } from '@types/eslint/rules'} */
	rules: {
		"no-extra-semi": "warn",
		"eol-last": "error",
		"no-var": "error",
	},
}
