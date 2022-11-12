import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';

const plugins = [
	nodeResolve({
		extensions: ['.js', '.ts'],
	}),
	commonJS(),
	babel({
		extensions: ['.js', '.ts'],
		babelHelpers: 'bundled',
		presets: ['@babel/preset-typescript'],
		plugins: [
			[
				'babel-plugin-transform-rename-import',
				{
					original: 'rxcore',
					replacement: '../../../src/core',
				},
			],
		],
	}),
];

export default {
	input: 'src/index.ts',
	output: [
		{
			format: 'cjs',
			file: 'lib/index.js',
		},
		{
			format: 'es',
			file: 'dist/index.js',
		},
	],
	plugins,
};
