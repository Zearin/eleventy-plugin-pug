import pugExtension from '../../../index.js'

export default function (eleventyConfig) {
	eleventyConfig.setQuietMode(false)
	eleventyConfig.addPlugin(pugExtension)

	return {
		dir: {
			input: '_src',
			layouts: '_layouts'
		}
	}
}
