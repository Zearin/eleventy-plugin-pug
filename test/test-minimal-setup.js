import assert from 'node:assert/strict'
import {
    after,
    before,
    describe,
    describe as context,
    it
}   from 'node:test'

//	test subjects
import eleventy from '@11ty/eleventy'
import plugin from '../index.js'

//	Other plugins I’ve looked at test their own code,
//	but they don’t test how it interacts with Eleventy.
//
//	Pug had some a few rough edges in Eleventy 2, so
//	I want to be sure it’s solid for Eleventy 3.
//
//	What’s the best way to test how the plugin behaves
//	when in use by Eleventy…?

describe.todo('SCENARIO: Minimal possible setup', function() {})

describe.todo('SCENARIO: Multiple layouts', function() {})

describe.todo('SCENARIO: Global Data', function() {})
