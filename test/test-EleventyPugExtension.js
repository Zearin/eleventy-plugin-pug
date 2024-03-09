import assert from 'node:assert/strict'
import {
    after,
    before,
    describe,
    describe as context,
    it
}   from 'node:test'

//	test subjects
import EleventyPugExtension from '../extension.js'
import UserConfig from '@11ty/eleventy/src/UserConfig.js'


describe.skip('CLASS: EleventyPugExtension', function(){

	// context('GIVEN a basic UserConfig', function(){
	// 	let config = new UserConfig()
	// 	debugger
	// 	it('Should have the `dir` property', function(){
	// 		console.dir(config)
	// 		assert.ok('dir' in config, `config was: ${config}`)
	// 	})

	// 	const ext = new EleventyPugExtension(config)

	// 	// it('should update `options.basedir`', function() {
	// 	// 	assert.notEqual(ext.options.basedir, '.')
	// 	// })
	// })

})
