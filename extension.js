import path	from 'node:path'
import pug	from 'pug'
import debugUtil from 'debug'
import DEFAULT_PUG_OPTIONS from './defaults.js'
import UserConfig from '@11ty/eleventy/src/UserConfig.js'


const debug 	= debugUtil('Eleventy:Plugins:Pug')
const debugDev 	= debugUtil('Dev:Eleventy:Plugins:Pug')


export class EleventyPugExtension {
	static DEFAULT_PUG_OPTIONS = DEFAULT_PUG_OPTIONS
	outputFileExtension = 'html'

	/**
	 *	@param {UserConfig} eleventyConfig
	 *	@param {Object} [opts] - Options for this plugin and Pug
	 */
	constructor(eleventyConfig, opts = DEFAULT_PUG_OPTIONS) {
		this.eleventyConfig = eleventyConfig
		this.options = opts

		//	Update Pug options based on eleventyConfig
		this.options.basedir ??= path.resolve(
			eleventyConfig.dir.input,
			eleventyConfig.dir.includes
		)
	}

	// async init(opts = this.options) {}

	/**
	 *	Provides runtime Pug compilation for Eleventy.
	 *	@param {String} inputSource - Source of the input file
	 *	@param {String} inputPath   - Path of the input file
	 *	@returns {String} The resulting code returned by Pug (currently, `pug.render()`).
	 */
	compile(inputSource, inputPath) {
		debugDev('inputSource: %s', inputSource)
		debugDev('inputPath: %s',	inputPath)

		//	sometimes this is a layout, in which case it will
		//	not be the same as `page.inputPath` (see `page`, below).
		const filename = path.resolve('.', inputPath)
		debug('compile resolved inputPath to filename: %s', filename)

		/** @param {Object} arg - Provided by Eleventy at runtime */
		return function(arg) {
			debugDev('rendering... received arg: %O',	arg)
			debug(	 'about to render... file: %O', 	filename)
			if (arg.content) { debugDev('about to render... content: %s', 	arg.content) }
			debugDev('about to render... eleventy: %O', arg.eleventy)
			debug(	 'about to render... page: %O', 	arg.page)

			//  contents of `_data/`
			const GLOBAL_DATA_FILES_CONTENT = arg.collections.all[0].data

			const options = {
				...this.options,
				filename,
				...arg,
				GLOBAL_DATA_FILES_CONTENT
			}
			debugDev('options for %s: %O', filename, options)

			//	simplest path to get this working...
			//	but `pug.compile()` returns a function that can
			//	be cached.
			//
			//	might that speed up build times for large projects?
			return pug.render(inputSource, options)
		}
	}
}

export default EleventyPugExtension
