import React from 'react';
import './App.css';
import desktopImage from './image.jpg';

function App() {
  const imageUrl = desktopImage;
  return (
	<React.Fragment>
	<div className="App" id="App" style={{backgroundImage: `url(${imageUrl})`}}></div>
	<div className="bg-blurr" id="bg-blurr"><h1>Vampire P/L</h1>
		<div className="wrapper" id="wrapper">
	 		<button className="btn1 info" id="hospital" onClick={hospital}>View as hospital</button>
	 		<button className="btn info" id="vampire" onClick={vampire}>View as vampire</button>
	 	</div>
	</div>
    </React.Fragment>
   );
}

function hospital(){

	var div = document.createElement('div');

	var popup3 = document.createElement('div');
	popup3.className = "popup2";
	popup3.id = 'popup3';
	popup3.innerHTML ="<txt class='text1'>Enter the hospital's name:</txt>"
					 +"<br><br>"
					 +"<INPUT class='input5' id='hospitalId'></INPUT>"
					 +"<a class='close2' id='close2'>&times;</a>"
					 +"</br><br>"
					 +"<br><BUTTON id='view' class='btn4 info'>View</BUTTON>";

	div.appendChild(popup3);
	document.body.appendChild(div);

	var view = document.getElementById('view');

	var close = document.getElementById('close2');
	popup3.appendChild(close);

	close.onclick = function(){
		popup3.style.display = 'none';
	}

	view.onclick = function(){
		var hospitalName = document.getElementById('hospitalId').value;
		console.log(hospitalName);
		if(hospitalName === "city hospital"){
			popup3.style.display = 'none';
			hospitalView();
		}
		else{
			alert("Wrong name/not registered!");
		}
	}
}

function hospitalView(){
	// eslint-disable-next-line
	var div = document.createElement('div');
	div.id = "divMain";
	var wrap = document.getElementById('bg-blurr');
	wrap.style.display = 'none';

	var heading =  document.createElement('h1');
	heading.innerHTML = "Vampire P/L";
	heading.className = "heading";
	div.appendChild(heading);

	var requestbtn = document.createElement("BUTTON");
    requestbtn.className = "btn2 info";
	requestbtn.innerHTML = "Request Blood";
	requestbtn.id = "request";
	div.appendChild(requestbtn);

	var popup = document.createElement('div');
	popup.className = "popup";
	popup.innerHTML = "<txt class='text'>Enter blood group:</txt>"
					 +"<br><br>"
					 +"<select class='select-css' id='bloodGroup'><option>Select Blood group<option><option>A<option><option>B<option><option>AB<option><option>O<option></select>"
				     +"<br>"
				     +"<txt class='text'>Enter blood type:</txt>"
				     +"<br><br>"
				     +"<select class='select-css' id='bloodType'><option>Select Blood type<option><option>Rare<option><option>Exotic<option><option>Genral<option></select>"
					 +"<br>"
					 +"<txt class='text'>Enter quantity:</txt>"
					 +"<br><br>"
					 +"<INPUT class='input2' id='quantity'></INPUT>"
					 +"<br><br>"
					 +"<txt class='text'>Additional information:</txt>"
					 +"<br><br>"
					 +"<INPUT class='input4' id='extraInfo'></INPUT>"
					 +"<a class='close' id='close'>&times;</a></br>"
					 +"<BUTTON id=requestBlood class='btn3 info'>Request</BUTTON>";

	requestbtn.onclick = function(){
		popup.style.display = 'block';
		div.appendChild(popup);
		var close = document.getElementById('close');
		close.onclick = function(){
			popup.style.display = 'none';
		}
		var req = document.getElementById('requestBlood');
		req.onclick = function(){
			popup.style.display = 'none';
			var blood = document.getElementById('bloodGroup').value;
			var bloodType = document.getElementById('bloodType').value;
			var bloodQuant = document.getElementById('quantity').value;
			if(blood === "A" || blood === "B" || blood === "AB" || blood === "O"){
					if(bloodQuant < 100){
						popup.style.display = 'none';
						alert("Blood group: "+blood+"<br>"+"Blood type: "+bloodType+"<br>"+"Quantity: "+bloodQuant+"Request Completed!");
						popup.style.display = 'none';
					}
					else{
						alert("Enter quantity less than 100!");
						popup.style.display = 'block';
					}
			}
			else{
				alert("Invalid Blood group!");
				popup.style.display = 'block';
			}
		}
	}

	//Content table
	var table = document.createElement("table");
	table.id = "table";
	var column = document.createElement("tr");
	var bloodGroup = document.createElement("th");
	bloodGroup.innerHTML = "Blood Group";
	var quantity = document.createElement("th");
	quantity.innerHTML = "Use By date";
	var bloodType = document.createElement("th");
	bloodType.innerHTML = "Blood Type";
	column.appendChild(bloodGroup);
	column.appendChild(quantity);
	column.appendChild(bloodType);
	table.appendChild(column);

	div.appendChild(table);
	document.body.appendChild(div);
}

// fetch('http://35.189.54.60:5000/show', {
//           method: 'GET',
//           dataType: 'json',
//           crossdomain: 'true',
//           headers: {
//               'Access-Control-Allow-Origin': 'http://127.0.0.1:12000',
//               'Access-Control-Allow-Methods': 'GET',
//               'Access-Control-Allow-Headers': 'Content-Type',
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//           }
//       })
//       .then((resp) => resp.json())
//       .then(function(data) {
//           var len = Object.keys(data).length;
//           console.log(Object.keys(data).length);
//           for (let i = 0; i<len; i++){
//             markLocations(data[i], earth);
//           }
//       })
//     }

function vampire(){

	var div = document.createElement('div');

	var popup2 = document.createElement('div');
	popup2.id = 'popup2';
	popup2.className = "popup1";
	popup2.innerHTML ="<txt class='text1'>Enter you Id:</txt>"
					 +"<br><br>"
					 +"<INPUT class='input4' id='vampireId'></INPUT>"
					 +"<a class='close1' id='close1'>&times;</a>"
					 +"</br><br>"
					 +"<br><BUTTON id='login1' class='btn4 info'>Login</BUTTON>";

	div.appendChild(popup2);
	document.body.appendChild(div);

	var login = document.getElementById('login1');
	var close = document.getElementById('close1');
	popup2.appendChild(close);

	close.onclick = function(){
		popup2.style.display = 'none';
	}

	login.onclick = function(){
		var loginId = parseInt(document.getElementById('vampireId').value);
		console.log(loginId);
		// eslint-disable-next-line
		if(loginId == '123'){
			popup2.style.display = 'none';
			vampireView1();
		}
		// eslint-disable-next-line
		else if(loginId != '123' || loginId == null){
			alert("Invalid Id!");
		}
	}
}

function vampireView1(){

		// eslint-disable-next-line
		var div = document.createElement('div');

		var wrap = document.getElementById('bg-blurr');
		wrap.style.display = 'none';

		var heading =  document.createElement('h1');
		heading.innerHTML = "Vampire P/L";
		heading.className = "heading";
		div.appendChild(heading);

		var addBtn = document.createElement("BUTTON");
	    addBtn.className = "btn2 info";
		addBtn.innerHTML = "Add new blood";
		addBtn.id = "Add";
		div.appendChild(addBtn);

		var table = document.createElement("table");
		table.id = "table";

		var column = document.createElement("tr");
		var id = document.createElement("th");
		id.innerHTML = "Id";
		var bloodGroup = document.createElement("th");
		bloodGroup.innerHTML = "Blood Group";
		var useByDate = document.createElement("th");
		useByDate.innerHTML = "Use By date";
		var arrivalDate = document.createElement("th");
		arrivalDate.innerHTML = "Arrival Date";
		var bloodType = document.createElement("th");
		bloodType.innerHTML = "Blood Type";
		var donor  = document.createElement("th");
		donor.innerHTML = "Donor";
		var del = document.createElement("th");
		del.innerHTML = "Edit";

		column.appendChild(id);
		column.appendChild(bloodGroup);
		column.appendChild(arrivalDate);
		column.appendChild(useByDate);
		column.appendChild(bloodType);
		column.appendChild(donor);
		column.appendChild(del);
		table.appendChild(column);


    fetch('http://127.0.0.1:5000/show', {
        method: 'GET',
        dataType: 'json',
        crossdomain: 'true',
        headers: {
            //'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then(function(data) {
        //var len = Object.keys(data).length;
        var res = JSON.parse(data)
        console.log(res);
        console.log(Object.keys(res.database).length);
        //console.log(Object.keys(data[0].database).length);
        //for (var i = 0; i < Object.keys(data).length;)

        //for (let i = 0; i<len; i++){
        //  markLocations(data[i], earth);
      //  }
    })



		var popup1 = document.createElement('div');
		popup1.className = "popup";
		popup1.innerHTML ="<txt class='text'>Enter blood group:</txt>"
						 +"<br><br>"
						 +"<select class='select-css' id='bloodGroupAdd'><option>Select Blood group<option><option>A<option><option>B<option><option>AB<option><option>O<option></select>"
						 +"<br>"
						 +"<txt class='text'>Enter blood type:</txt>"
						 +"<br><br>"
						 +"<select class='select-css' id='bloodTypeAdd'><option>Select Blood type<option><option>Rare<option><option>Exotic<option><option>Genral<option></select>"
						 +"<a class='close' id='close'>&times;</a>"
						 +"<br><txt class='text'>Enter Donor's name:</txt>"
						 +"<br><br>"
						 +"<INPUT class='input1' id='donorName' required></INPUT><br><br>"
						 +"<main><input id='toggle' class='input' type='checkbox'><label for='toggle'>Extra information</label>"
						 +"<div id='expand'>"
						 +"<text>Enter Phone No :</text><br>"
						 +"<br><INPUT id='phone' class='input2' required></INPUT><br>"
						 +"<br><text>Enter medical history :</text><br>"
						 +"<br><INPUT id='history' class='input2' required></INPUT><br>"
						 +"<br><text>Enter the name of pathology:</text><br>"
						 +"<br><INPUT id='path' class='input2' required></INPUT><br></div>"
						 +"<br><BUTTON id='addBlood' class='btn3 info'>Add</BUTTON>";

		addBtn.onclick = function(){
			popup1.style.display = 'block';

			div.appendChild(popup1);

			var close = document.getElementById('close');
			close.onclick = function(){
				popup1.style.display = 'none';
			}

			var add1 = document.getElementById('addBlood');

			add1.onclick = function(){

				popup1.style.display = 'none';
				var bloodGroup = document.getElementById('bloodGroupAdd').value;
				var bloodType = document.getElementById('bloodTypeAdd').value;
				var nameDonor = document.getElementById('donorName').value;
				var phone = document.getElementById('phone').value;
				var pathology = document.getElementById('history').value;
				var medical = document.getElementById('path').value;

				var column = document.createElement("tr");

	    		var col1 = document.createElement("td");
				col1.innerHTML = Math.floor((Math.random() * 1000) + 1);

				var col2 = document.createElement("td");

				var col3 = document.createElement("td");
				var today = new Date();
				var dd = String(today.getDate()).padStart(2, '0');
				var mm = String(today.getMonth() + 1).padStart(2, '0');
				var yyyy = today.getFullYear();

				col3.innerHTML = dd + '/' + mm + '/' + yyyy;

				var col4 = document.createElement("td");
				var numberOfDaysToAdd = 30;
				today.setDate(today.getDate() + numberOfDaysToAdd);

				var dd1 = today.getDate();
				var mm1 = today.getMonth() + 1;
				var y1 = today.getFullYear();

				col4.innerHTML = dd1 + '/'+ mm1 + '/'+ y1;

				var col5 = document.createElement("td");

				var match1 = /^rare$/ig;
				var match2 = /^general$/ig;
				var match3 = /^exotic$/ig;
				var match4 = /^\d[0-9]{9}$/;

				var col6 = document.createElement("td");
			    col6.innerHTML = "Name:"+nameDonor;
			    col6.className = "name";
			    col6.onclick = function(){
			    	// eslint-disable-next-line
			    	col6.innerHTML = "Name: "+nameDonor+"<br>"+"Phone: "+phone+"<br>"+"Medical history: "+medical+"<br>"+"Pathology: "+pathology+"<br>";
			    }

			    var col7 = document.createElement("td");
			    col7.innerHTML = "<BUTTON class='btnDel'>Delete</BUTTON>";

			    if(bloodGroup != null){
			    	if(bloodGroup != null && (bloodGroup === "A" || bloodGroup === "B" || bloodGroup === "AB" || bloodGroup === "O" || bloodGroup === "a" || bloodGroup === "b" || bloodGroup === "ab" || bloodGroup === "o")){
			    		if(bloodType != null && (match1.exec(bloodType) || match2.exec(bloodType) || match3.exec(bloodType))){
			    			if(nameDonor != null && phone != null && medical != null && pathology != null){
			    				if(match4.exec(phone)){
			 	  					column.appendChild(col1);
						    		col2.innerHTML = bloodGroup.toUpperCase();
						    		col5.innerHTML = bloodType.toUpperCase();
						    		column.appendChild(col2);
						    		column.appendChild(col3);
									column.appendChild(col4);
									column.appendChild(col5);
									column.appendChild(col6);
									column.appendChild(col7);
									table.appendChild(column);
									col7.onclick = function(){
			    						table.removeChild(column);
			   						}
								}
			    			}
			    		}
			    	}
			    }
			}
		}
	div.appendChild(table);
	document.body.appendChild(div);
}

export default App;
