
var configurationOfRequireJS = {
	
    baseUrl: 'js',
	paths : {
		'knockout':'knockout',
		'text':'text',
	}

}

require.config(configurationOfRequireJS);

require(['knockout','text']);


