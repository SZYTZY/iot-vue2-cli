const env = process.env.NODE_ENV
const envapi = process.env.VUE_APP_BASE_API || 'dev' 
let baseapi = {
	dev: {
		//联调
		api: 'http://39.107.247.209',
		web: ''
	},
	test: {
		//验收
		api: 'http://123.57.31.57',
		web: ''
	},
	prod: {
		//正式
		api: '',
		web: ''
	}
}

if (env === 'development') {
	baseapi = {
		dev: {
			api: '/apidev',
			web: ''
		},
		test: {
			api: '/apitest',
			web: ''
		},
		prod: {
			api: '/apiprod',
			web: ''
		}
	}
}
export default {
	envapi: envapi,
	baseapi: baseapi[envapi]
}
