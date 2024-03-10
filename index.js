/**
 * @fileoverview Plugin for Eleventy 3. Provides support for Pug templates.
 */
// import debugUtil from 'debug'
import path from 'node:path'
import EleventyPugExtension from './extension.js'


// const debug 	= debugUtil('Eleventy:Plugins:Pug')
// const devDebug 	= debugUtil('Dev:Eleventy:Plugins:Pug')


/**
 * @typedef {import('@11ty/eleventy/src/UserConfig.js'))} UserConfig
 */


/**
 * @param {UserConfig} eleventyConfig
 * @param {Object} [options={}]
 */
export default function EleventyPluginPug(eleventyConfig, options = {}) {

	// Tell Eleventy to process `*.pug` files
	eleventyConfig.addTemplateFormats('pug')

	// Prepare extension object
	const PugExtension = EleventyPugExtension
	PugExtension.options.basedir =
		options?.basedir
		??  path.resolve(
			eleventyConfig.dir.input,
			eleventyConfig.dir.includes
		)

	// Specify behavior for `*.pug` files
	eleventyConfig.addExtension('pug', PugExtension)
}
