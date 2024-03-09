/**
 * @fileoverview Plugin for Eleventy 3. Provides support for Pug templates.
 */
import debugUtil from 'debug'
import EleventyPugExtension from './extension.js'


const debug 	= debugUtil('Eleventy:Plugins:Pug')
const devDebug 	= debugUtil('Dev:Eleventy:Plugins:Pug')


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

	// Specify output format and behavior for `*.pug` files
	eleventyConfig.addExtension('pug', new EleventyPugExtension(eleventyConfig, options))
}
