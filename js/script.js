er = 0
function cal(){
	comp = parseInt(document.getElementById('hosts').value)
	
	if (isNaN(comp)) {
		alert('Digite o número de Hosts.')
	}
	else {
		barra = [30, 29, 28, 27, 26, 25, 24]
		hosts = [2, 6, 14, 30, 62, 126, 254]
		mascara = [252, 248, 240, 224, 192, 128, 0]
		
		for (i = 0; i < 7; i++) {
			if (hosts[i] >= comp) {
				break;
			}
		}

		f1 = er + 1
		f2 = er + hosts[i]
		b = f2 + 1
		g = f2

		document.getElementById('er').innerHTML = 'E.R: .' + er
		document.getElementById('f').innerHTML = 'F: .' + f1 + ' a .' + f2 
		document.getElementById('b').innerHTML = 'B: .' + b
		document.getElementById('g').innerHTML = 'G: .' + g
		document.getElementById('m').innerHTML = 'M: /' + barra[i] + ' ou .' + mascara[i]

		er = b + 1
	}
}

function reload(){
	er = f1 = f2 = b = g = 0
	document.getElementById('er').innerHTML = 'E.R:'
		document.getElementById('f').innerHTML = 'F:'
		document.getElementById('b').innerHTML = 'B:'
		document.getElementById('g').innerHTML = 'G:'
		document.getElementById('m').innerHTML = 'M:'
}