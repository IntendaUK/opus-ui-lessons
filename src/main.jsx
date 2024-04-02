//Opus
import { loadApp } from '@intenda/opus-ui';

//Component Libraries
import '@intenda/opus-ui-components';

//Styles
import './main.css';

(async() => {
	const res = await fetch('/app.json')
	const mdaPackage = await res.json();

	loadApp({
		mdaPackage,
		loadUrlParameters: true,
		config: {
			env: 'development'
		}
	});
})();
