// context: contains vue store, router, root vue instance...
// inject: inject an Object or value into app avaliable in vue and vuex 使用$name

export default function(context, inject) {

	console.log('maps.client')
	let mapLoaded = false;

	inject('maps', {   //$map
		showMap
	})
	addScript();
	function addScript() {
		const script = document.createElement('script');
		script.src ='http://insert-url';
		script.async = true;
		document.head.appendChild(script)

	}

	function initMap() {
		mapLoaded = true;
	}

	function showMap() {
		console.log('showMap')
	}

	
}