import path	from 'node:path'
import pug	from 'pug'
import debugUtil from 'debug'
import DEFAULT_PUG_OPTIONS from './defaults.js'

const debug 	= debugUtil('Eleventy:Plugins:Pug')
const debugDev 	= debugUtil('Dev:Eleventy:Plugins:Pug')


export class EleventyPugExtension {
	static DEFAULT_PUG_OPTIONS = DEFAULT_PUG_OPTIONS
	outputFileExtension = 'html'

	/**
	 * @param {module:'@11ty/eleventy/src/UserConfig.js')} eleventyConfig
	 * @param {Object} opts - Options for this plugin and Pug
	 */
	constructor(eleventyConfig, opts) {
		this.options = opts
		this.eleventyConfig = eleventyConfig

		//	Update Pug options based on eleventyConfig
		this.options.basedir ??= path.resolve(
			eleventyConfig.dir.input,
			eleventyConfig.dir.includes
		)
	}

	//	Probably the trickiest part of this plugin is getting
	//	Eleventy data *accurately* into Pug
	//
	//	this is just a first guess...
	get globals() {
		return {
			...this.eleventyConfig.globalData,
			...this.options.globals
		}
	}

	// async init(opts = this.options) {}

	async compile(inputSource, inputPath) {
		debugDev('inputSource: %s', inputSource)
		debugDev('inputPath: %s', inputPath)

		//	sometimes this is a layout, in which case it will
		//	not be the same as `page.inputPath` (see `page`, below).
		const resInputPath = path.resolve('.', inputPath)
		debug('compile resolved input path: %s', resInputPath)

		return async function(arg) {
			debugDev('rendering... received arg: %O', arg)

			const { content, eleventy, page } = arg
			debug('about to render... file: %O', 		resInputPath)
			debugDev('about to render... content: %s', 	content)
			debug('about to render... page: %O', 		page)
			debugDev('about to render... eleventy: %O', eleventy)


			const options = {
				...this.options,
				filename: 	resInputPath,
				globals: 	[ ...Object.keys(this.globals) ],
				eleventy,
				page
			}
			debugDev('options for %s: %O', resInputPath, options)
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
