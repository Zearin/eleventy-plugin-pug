/*	eslint-disable no-unused-vars	*/
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {
    after,
    before,
    describe,
    describe as context,
    it
}   from 'node:test'

//	test subjects
import Eleventy from '@11ty/eleventy'


describe('SCENARIO: Global Data', function() {
	const GLOBAL_DATA_PROJECT_PATH 	= path.resolve(import.meta.dirname, 'stubs/data-access')
	const input						= path.resolve(GLOBAL_DATA_PROJECT_PATH, '_src')
	const output					= path.resolve(GLOBAL_DATA_PROJECT_PATH, '_site')
	const options	= {
		configPath: path.resolve(GLOBAL_DATA_PROJECT_PATH, 'eleventy.config.js')
	}


	context('GIVEN some global data', function() {
		before(function() {
			//	cleanup output from previous test run
			if (fs.existsSync(output)) {
				fs.rmdirSync(
					output,
					{ recursive: true }
				)
			}
		})

		// after(function() {
		//	/* ⚠️ 	CAUTION:
		//	 *		Dangerous if you mess with the paths above!
		//	 */
		// 	if (fs.existsSync(output)) {
		// 		fs.rmSync(output, { recursive: true, force: true })
		// 	}
		// })
		let eleventyInstance = new Eleventy(input, output, options)

		it('The compilation can use the data ', async function() {
			await eleventyInstance.executeBuild()
			assert(fs.existsSync(output), `output did not exist: ${output}`)
			assert(fs.existsSync(path.resolve(output, 'index.html')))
		})
	})
})
