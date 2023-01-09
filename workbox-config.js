module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpg,html,js,webmanifest,md,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};