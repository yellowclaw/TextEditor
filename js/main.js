function getE(id) {
	return document.getElementById(id);
}
var valid = document.querySelectorAll('.check');
var valid1 = document.querySelectorAll('.lustok');
getE('ar1but1').onclick = function () {
	getE('div1').innerHTML = getE('area1').value;
}
getE('butRedag').onclick = function () {
	getE('redag').style.display = "block";
	getE('stul').style.display = "none";
}
getE('butStul').onclick = function () {
	getE('stul').style.display = "block";
	getE('redag').style.display = "none";
}
var rad = document.querySelectorAll('.rad');
for (var i = 0; i < rad.length; i++) {
	rad[i].onclick = function () {
		getE('div1').style.fontSize = this.value + "pt";
	}
}

getE('TextStyle').onchange = function () {
	for (var j = 0; getE('TextStyle').children.length; j++) {
		if (getE('TextStyle').children[j].selected) {
			getE('div1').style.fontFamily = getE('TextStyle').children[j].style.fontFamily;
		}
	}
}
var x = true;
var foncolor = document.querySelectorAll('.ColorChange');
for (n = 0; n < foncolor.length; n++) {
	foncolor[n].onclick = function () {
		if (x) {
			getE('div1').style.backgroundColor = this.style.backgroundColor;
		} else {
			getE('div1').style.color = this.style.backgroundColor;
		}

	}
}
var ok = true;
getE('textColor').onclick = function () {
	if (ok) {
		getE('Color').style.display = "block";
		ok = false;
	} else {
		getE('Color').style.display = "none";
		ok = true;
	}
	x = false;
}
getE('bgColor').onclick = function () {
	if (ok) {
		getE('Color').style.display = "block";
		ok = false;
	} else {
		getE('Color').style.display = "none";
		ok = true;
	}
	x = true;
}
var a = true;
getE('TextBold').onclick = function () {
	if (a) {
		getE('div1').style.fontWeight = "bold";
		a = false;
	} else {
		getE('div1').style.fontWeight = "normal";
		a = true;
	}
}
var b = true;
getE('TextCursive').onclick = function () {
	if (b) {
		getE('div1').style.fontStyle = "italic";
		b = false;
	} else {
		getE('div1').style.fontStyle = "normal";
		b = true;
	}
}
getE('ar1but2').onclick = function () {
	getE('main').style.display = "none";
	getE('main2').style.display = "block";
}
getE('tbl').onclick = function () {
	getE('table').style.display = "block";
	getE('list').style.display = "none";

}
getE('sps').onclick = function () {
	getE('list').style.display = "block";
	getE('table').style.display = "none";
}
getE('doTable').onclick = function () {
	var check = true;
	for (var i = 0; i < valid.length; i++) {
		if (valid[i].value != valid[i].value * 1 || valid[i].value == "") {
			check = false;
			break;
		}
	}
	if (check) {
		getE('main').style.display = "block";
		getE('main2').style.display = "none";
		var typlin;
		var colrlin;
		var rad = getE('tablRad').value;
		var stov = getE('tablStov').value;
		var widt = getE('tablWidth').value;
		var heig = getE('tablHeight').value;
		var weig = getE('tablWeight').value;
		for (var j = 0; j < getE('typeLine').children.length; j++) {
			console.log(getE('typeLine').children[j]);
			if (getE('typeLine').children[j].selected) {
				typlin = getE('typeLine').children[j].innerHTML;
			}
		}
		for (var i = 0; i < getE('colorLine').children.length; i++) {
			if (getE('colorLine').children[i].selected) {
				colrlin = getE('colorLine').children[i].innerHTML;
			}
		}
		createTable(rad, stov, widt, heig, weig, typlin, colrlin);
	}

}

function createTable(rad, stov, widt, heig, weig, typlin, colrlin) {
	var table, row, data;
	table = document.createElement('table');
	table.border = 1;
	for (var k = 0; k < rad; k++) {
		row = document.createElement('tr');
		for (var m = 0; m < stov; m++) {
			data = document.createElement('td');
			data.style.width = widt + 'px';
			data.style.height = heig + 'px';
			data.style.borderWidth = weig + 'px';
			data.style.borderStyle = typlin;
			data.style.borderColor = colrlin;

			row.appendChild(data);
		}
		table.appendChild(row);
		getE('div1').appendChild(table);
	}
}
getE('doList').onclick = function () {
	var check=true;
	if (getE('skikList').value != getE('skikList').value *1 || getE('skikList').value == "") {
		check=false;	
	}
	if(check){}
		getE('main').style.display = "block";
		getE('main2').style.display = "none";
		var kiko = getE('skikList').value;
		var mark;
		for (var i = 0; i < getE('markList').children.length; i++) {
			if (getE('markList').children[i].selected) {
				mark = getE('markList').children[i].innerHTML;
			}
		}
		for (var j = 0; j < getE('markList1').children.length; j++) {
			if (getE('markList1').children[j].selected) {
				mark = getE('markList1').children[j].innerHTML;
			}
		}
		if (ull) {
			var ul = document.createElement('ul');
		} else {
			var ul = document.createElement('ol');
		}
		for (var j = 0; j < kiko; j++) {
			var li = document.createElement('li');
			ul.appendChild(li);
		}
		ul.type = mark;
		getE('div1').appendChild(ul);
	}

getE('pass').onclick = function () {
	getE('parent_popup').style.display = 'block';
}
var pas = '2296';

getE('passOk').onclick = function () {
	if (getE('passWord').value == pas) {
		getE('parent_popup').style.display = 'none';
	} else {
		getE('passWord').style.border = '2px solid red';
	}
}
var ull = true;
getE('mark').onclick = function () {
	getE('markList1').style.display = "none";
	getE('markList').style.display = "block";
	ull = true;
}
getE('numb').onclick = function () {
	getE('markList').style.display = "none";
	getE('markList1').style.display = "block";
	ull = false;
}
for (var g = 0; g < valid.length; g++) {
	valid[g].onblur = function () {
		if (this.value != this.value * 1 || this.value == ""){
			this.style.borderColor = "red";
            this.nextElementSibling.style.display="block";
        }
	}
	valid[g].onfocus = function () {
        
		this.style.borderColor = "gray";
        this.nextElementSibling.style.display="none";
	}
}
	document.getElementById('skikList').onblur=function(){
		if (this.value != this.value * 1 || this.value == ""){
			this.style.borderColor = "red";
			getE('q1').style.display="block";
		}
		
	}
	document.getElementById('skikList').onfocus = function () {
		this.style.borderColor = "gray";
		getE('q1').style.display="none";
	}
