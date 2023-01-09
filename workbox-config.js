module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpg,html,js,json,md,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};