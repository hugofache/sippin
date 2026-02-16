module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{html,js,css,ico,png,svg,json}'
	],
	globIgnores: [
		'**/node_modules/**/*',
		'sw.js',
		'workbox-*.js'
	],
	swSrc: 'public/sw.js',
	swDest: 'dist/sw.js',
	maximumFileSizeToCacheInBytes: 10 * 1024 * 1024 // 10 MB
};