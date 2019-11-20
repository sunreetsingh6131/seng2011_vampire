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

	var hospital = document.getElementById('hospital');
	hospital.onclick = function(){
		popup3.style.display = 'none';
	}

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

	var wrap = document.getElementById('bg-blurr');
	wrap.style.display = 'none';

	var heading =  document.createElement('h1');
	heading.innerHTML = "Vampire P/L (Hospital view)";
	heading.className = "heading";
	div.appendChild(heading);
	
	var search = document.createElement('div'); 
	search.innerHTML = "<INPUT type='text' id='myInput' class='myInput' placeholder='Enter'><BUTTON class='btn5 info'><img class='image' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojREFFRkY2OyIgZD0iTTM0Ny4xMTksNjAuNzQ2YzI4Ljc1OS0wLjAzNSw1Mi4wOTQsMjMuMjU3LDUyLjEyOSw1Mi4wMDdjMC4wMjYsMjIuNTExLTE0LjQyMyw0Mi40ODctMzUuODE0LDQ5LjUyNSAgdi0yMy40MzFMMzM3LjM5OSw4Ni43OGwwLjYwNy0yNS4xNjZDMzQxLjAwOSw2MS4wMTUsMzQ0LjA2NCw2MC43MjgsMzQ3LjExOSw2MC43NDZ6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGNUQwQzc7IiBkPSJNMzM3LjM5OSwxMjUuODMxYzAtNy4xODUtNS44MzItMTMuMDE3LTEzLjAxNy0xMy4wMTdjLTcuMTg1LDAtMTMuMDE3LDUuODMyLTEzLjAxNywxMy4wMTcgIGMwLDcuMTg1LDUuODMyLDEzLjAxNywxMy4wMTcsMTMuMDE3QzMzMS41NjgsMTM4Ljg0NywzMzcuMzk5LDEzMy4wMTYsMzM3LjM5OSwxMjUuODMxeiBNMzM3LjM5OSw4Ni43OGwyNi4wMzQsNTIuMDY4djIzLjQzMSAgYy01LjI3NiwxLjcwMS0xMC43NzgsMi41NzctMTYuMzE1LDIuNjAzYy0zLjIwMiwwLjAxNy02LjM5Ni0wLjI2OS05LjU0Ni0wLjg2OGMtMjguMjU1LTUuMzQ2LTQ2LjgyNi0zMi41ODYtNDEuNDgxLTYwLjg0MSAgYzQuMDA5LTIxLjIsMjAuNjgtMzcuNzMyLDQxLjkxNS00MS41NTlMMzM3LjM5OSw4Ni43OHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0QzRDNEMzsiIGQ9Ik0zMjkuMTU1LDIxNi45NDljLTQuNTMsMjYuMzAzLTI1LjIxOCw0Ni44NDQtNTEuNTQ3LDUxLjJjLTMuMzUsMC41OTktNi43NTEsMC44ODUtMTAuMTUzLDAuODY4ICBoLTUwLjUwNmwxNi4zMTUtMTA0LjEzNmgxMDQuMTM2bC04LjA3LDUxLjExM0MzMjkuMjQyLDIxNi4zNDIsMzI5LjI0MiwyMTYuNjAyLDMyOS4xNTUsMjE2Ljk0OXoiLz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjVEMEM3OyIgZD0iTTE4Mi4yMzcsMTEyLjgxNHY1Mi4wNjhoLTguNjc4Yy0xNC4zNzksMC0yNi4wMzQtMTEuNjU1LTI2LjAzNC0yNi4wMzRzMTEuNjU1LTI2LjAzNCwyNi4wMzQtMjYuMDM0ICAgSDE4Mi4yMzd6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjVEMEM3OyIgZD0iTTI1NiwxMzguODQ3YzcuMTg1LDAsMTMuMDE3LTUuODMyLDEzLjAxNy0xMy4wMTdjMC03LjE4NS01LjgzMi0xMy4wMTctMTMuMDE3LTEzLjAxNyAgIGMtNy4xODUsMC0xMy4wMTcsNS44MzItMTMuMDE3LDEzLjAxN0MyNDIuOTgzLDEzMy4wMTYsMjQ4LjgxNSwxMzguODQ3LDI1NiwxMzguODQ3eiBNMzM3LjM5OSwxNjQuODgxSDIzMy4yNjRsLTE2LjMxNSwxMDQuMTM2ICAgaDQzLjM5bC00My4zOSwzNC43MTJsLTQzLjM5LTM0LjcxMmw4LjY3OC0xMDQuMTM2Vjk1LjQ1OGMzNy45MjMtMC41OSw2OC4zNjUtMzEuNDkyLDY4LjM4Mi02OS40MjRWMCAgIGMtMC4wMzUsMjguNzE1LDIzLjIxNCw1Mi4wMzMsNTEuOTI5LDUyLjA2OGMwLjAxNywwLDAuMDM1LDAsMC4wNTIsMGgzNS42NjZsLTAuMjYsOS41NDYgICBjLTI4LjI5OSw1LjEwMy00Ny4xMDQsMzIuMTg3LTQxLjk5Myw2MC40ODVjMy44MzYsMjEuMjM1LDIwLjM1OSwzNy45MDUsNDEuNTU5LDQxLjkxNUwzMzcuMzk5LDE2NC44ODF6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjVEMEM3OyIgZD0iTTQxNi41NDIsMjk1LjA1MXYxNy4zNTZoLTUyLjA2OHYtNDMuMzljMC0xNC4zNzksMTEuNjU0LTI2LjAzNCwyNi4wMzQtMjYuMDM0di00My4zOWgyNi4wMzQgICBjMTQuMzc5LDAsMjYuMDM0LDExLjY1NSwyNi4wMzQsMjYuMDM0djQzLjM5QzQ0Mi41NzYsMjgzLjM5Niw0MzAuOTIyLDI5NS4wNTEsNDE2LjU0MiwyOTUuMDUxeiIvPgo8L2c+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Y1QjA1QzsiIGQ9Ik0zMzguMjY3LDUyLjA2OGgtMzUuNjY2Yy0yOC43MTUtMC4wMDktNTEuOTktMjMuMy01MS45ODEtNTIuMDE2YzAtMC4wMTcsMC0wLjAzNSwwLTAuMDUyaDQzLjM5ICAgYzI0LjA3MywwLjAxNyw0My42ODUsMTkuMzI2LDQ0LjA4NCw0My4zOUwzMzguMjY3LDUyLjA2OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGNUIwNUM7IiBkPSJNMjUwLjYyLDB2MjYuMDM0Yy0wLjAxNywzNy45MzEtMzAuNDYsNjguODM0LTY4LjM4Miw2OS40MjRoLTEuMDQxVjQzLjM5ICAgYzAtMjMuOTYsMTkuNDMtNDMuMzksNDMuMzktNDMuMzlIMjUwLjYyeiIvPgo8L2c+CjxnPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAwNDQ4RjsiIHBvaW50cz0iMjQ1LjE1MywzMjcuMTU5IDI0Mi45ODMsMzI5Ljc2MyAyMjUuNjI3LDM0Ny4xMTkgMjE2Ljk0OSwzNTUuNzk3IDIwOC4yNzEsMzQ3LjExOSAgICAxOTAuOTE1LDMyOS43NjMgMTg4Ljc0NiwzMjcuMTU5IDIxNi45NDksMzAzLjcyOSAgIi8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMDA0NDhGOyIgcG9pbnRzPSIyMjUuNjI3LDM0Ny4xMTkgMjQyLjk4Myw1MTIgMTkwLjkxNSw1MTIgMjA4LjI3MSwzNDcuMTE5IDIxNi45NDksMzU1Ljc5NyAgIi8+CjwvZz4KPGc+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRDNEM0QzOyIgcG9pbnRzPSIxNjQuODgxLDM5OS4xODYgMTY0Ljg4MSw1MTIgMTEyLjgxNCw0MjUuMjIgICIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0QzRDNEMzsiIHBvaW50cz0iMTY0Ljg4MSwzNDcuMTE5IDE2NC44ODEsMzk5LjE4NiAxMTIuODE0LDM3My4xNTMgMTM4Ljg0NywyNjkuMDE3IDE2NC44ODEsMjY5LjAxNyAgIi8+CjwvZz4KPGc+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRjNGM0YzOyIgcG9pbnRzPSIyMDguMjcxLDM0Ny4xMTkgMTkwLjkxNSw1MTIgMTY0Ljg4MSw1MTIgMTY0Ljg4MSwzOTkuMTg2IDE2NC44ODEsMzQ3LjExOSAxODguNzQ2LDMyNy4xNTkgICAgMTkwLjkxNSwzMjkuNzYzICAiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGM0YzRjM7IiBwb2ludHM9IjExMi44MTQsNDI1LjIyIDE2NC44ODEsNTEyIDExMi44MTQsNTEyICAiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGM0YzRjM7IiBwb2ludHM9IjE2NC44ODEsMzk5LjE4NiAxMTIuODE0LDQyNS4yMiAxMTIuODE0LDM3My4xNTMgICIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0YzRjNGMzsiIGQ9Ik0xMzguODQ3LDI2OS4wMTdsLTI2LjAzNCwxMDQuMTM2VjUxMmgtNDMuMzlWMzM4LjQ0MSAgIEM2OS40MjQsMzAwLjEwMSwxMDAuNTA4LDI2OS4wMTcsMTM4Ljg0NywyNjkuMDE3eiIvPgo8L2c+CjxnPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0QzRDNEMzsiIHBvaW50cz0iMTczLjU1OSwyNjkuMDE3IDIxNi45NDksMzAzLjcyOSAxODguNzQ2LDMyNy4xNTkgMTY0Ljg4MSwzNDcuMTE5IDE2NC44ODEsMjY5LjAxNyAgIi8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRDNEM0QzOyIgcG9pbnRzPSIzMjEuMDg1LDQyNS4yMiAyNjkuMDE3LDUxMiAyNjkuMDE3LDM5OS4xODYgICIvPgo8L2c+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0YzRjNGMzsiIGQ9Ik0zMDcuMjg3LDI2OS4xOTFjMzIuMTI2LDEuNzk2LDU3LjI0LDI4LjM5NCw1Ny4xODgsNjAuNTcyVjUxMmgtNDMuMzlWMzczLjE1M2wtNDMuMzktMTA0LjEzNiAgIGwtMC4wODctMC44NjhjMTEuMzA3LTEuODIyLDIxLjg3Ny02Ljc1MSwzMC41NDYtMTQuMjMyTDMwNy4yODcsMjY5LjE5MXoiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGM0YzRjM7IiBwb2ludHM9IjMyMS4wODUsMzczLjE1MyAzMjEuMDg1LDQyNS4yMiAyNjkuMDE3LDM5OS4xODYgICIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0YzRjNGMzsiIHBvaW50cz0iMjY5LjAxNywzOTkuMTg2IDI2OS4wMTcsNTEyIDI0Mi45ODMsNTEyIDIyNS42MjcsMzQ3LjExOSAyNDIuOTgzLDMyOS43NjMgMjQ1LjE1MywzMjcuMTU5ICAgIDI2OS4wMTcsMzQ3LjExOSAgIi8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6I0QzRDNEMzsiIGQ9Ik0yNjcuNDU1LDI2OS4wMTdjMy40MDIsMC4wMTcsNi44MDQtMC4yNjksMTAuMTUzLTAuODY4bDAuMDg3LDAuODY4bDQzLjM5LDEwNC4xMzZsLTUyLjA2OCwyNi4wMzQgIHYtNTIuMDY4bC0yMy44NjQtMTkuOTU5bC0yOC4yMDMtMjMuNDMxbDQzLjM5LTM0LjcxMkgyNjcuNDU1eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjNGM0YzOyIgZD0iTTM2NC40NzUsMzQ3LjExOXYtMzQuNzEyaDUyLjA2OHYxNDcuNTI1YzAsMjguNzU5LTIzLjMwOSw1Mi4wNjgtNTIuMDY4LDUyLjA2OGwwLDBWMzQ3LjExOXoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0NTQ1NDU7IiBjeD0iMzI0LjM4MiIgY3k9IjEyNS44MzEiIHI9IjEzLjAxNyIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNDU0NTQ1OyIgY3g9IjI1NiIgY3k9IjEyNS44MzEiIHI9IjEzLjAxNyIvPgoJPHJlY3QgeD0iMzY0LjQ3NSIgeT0iMzM4LjQ0MSIgc3R5bGU9ImZpbGw6IzQ1NDU0NTsiIHdpZHRoPSIyNi4wMzQiIGhlaWdodD0iMTcuMzU2Ii8+CjwvZz4KPGc+Cgk8cmVjdCB4PSIxMDQuMTM2IiB5PSIzNzMuMTUzIiBzdHlsZT0iZmlsbDojRTVFNUU1OyIgd2lkdGg9IjE3LjM1NiIgaGVpZ2h0PSIxMzguODQ3Ii8+Cgk8cmVjdCB4PSIzMTIuNDA3IiB5PSIzNzMuMTUzIiBzdHlsZT0iZmlsbDojRTVFNUU1OyIgd2lkdGg9IjE3LjM1NiIgaGVpZ2h0PSIxMzguODQ3Ii8+Cgk8cmVjdCB4PSIzNTUuNzk3IiB5PSIzMjkuNzYzIiBzdHlsZT0iZmlsbDojRTVFNUU1OyIgd2lkdGg9IjE3LjM1NiIgaGVpZ2h0PSIxODIuMjM3Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDU0NTQ1OyIgZD0iTTMyOS43NjMsMjI1LjYyN0gzMTQuNDljLTE1LjIzOCwwLjA5NS0yOS4xODQtOC41MjItMzUuOTI3LTIyLjE4MWwxNS41NTEtNy43MDYgICBjMy44MzYsNy43MzIsMTEuNzUsMTIuNTkyLDIwLjM3NiwxMi41MzFoMTQuNjY2TDMyOS43NjMsMjI1LjYyN3oiLz4KCQoJCTxyZWN0IHg9IjM4Ni4xNzMiIHk9IjE2MC4xNTEiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjkxMDQgMC40MTM4IC0wLjQxMzggLTAuOTEwNCA4NDIuMjcxNyAyNDIuNjk4NCkiIHN0eWxlPSJmaWxsOiM0NTQ1NDU7IiB3aWR0aD0iMTcuMzU2IiBoZWlnaHQ9IjEwNC44MzMiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM0NTQ1NDU7IiBkPSJNMzQ3LjExOSwxNzMuNTU5Yy0zLjc0OSwwLjAyNi03LjQ5OC0wLjMyMS0xMS4xODYtMS4wMjRjLTMyLjk1OS02LjI0OC01NC42MTktMzguMDM2LTQ4LjM3MS03MC45OTQgICBjNC42ODYtMjQuNjk3LDI0LjA5OS00My45NjMsNDguODQtNDguNDU4YzMuNTMyLTAuNjk0LDcuMTE2LTEuMDQxLDEwLjcxNy0xLjAxNWMzMy41NDktMC4wMTcsNjAuNzYzLDI3LjE2Miw2MC43OCw2MC43MTEgICBjMC4wMTcsMjYuMjQyLTE2LjgyNyw0OS41MzQtNDEuNzUsNTcuNzM1QzM1OS45OTcsMTcyLjUwMSwzNTMuNTg0LDE3My41MzMsMzQ3LjExOSwxNzMuNTU5eiBNMzQ3LjExOSw2OS40MjQgICBjLTIuNDczLTAuMDE3LTQuOTQ2LDAuMjA4LTcuMzc2LDAuNjg2bC0wLjI0MywwLjA1MmMtMjMuNTc4LDQuMjc4LTM5LjIyNCwyNi44NjctMzQuOTM4LDUwLjQ0NSAgIGMzLjIxMSwxNy42NjgsMTYuOTY1LDMxLjUzNiwzNC42MDgsMzQuODc3YzcuMjI5LDEuMzAyLDE0LjY1NywwLjc5OCwyMS42NDMtMS40NzVjMjIuNzU0LTcuNTI0LDM1LjA5NC0zMi4wNzQsMjcuNTctNTQuODE5ICAgQzM4Mi40OTksODEuMzk5LDM2NS44NTQsNjkuMzk4LDM0Ny4xMTksNjkuNDI0eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=' /></BUTTON></INPUT>";

	div.appendChild(search);

	var requestbtn = document.createElement("BUTTON");
    requestbtn.className = "btn2 info";
	requestbtn.innerHTML = "Request Blood";
	requestbtn.id = "request";
	div.appendChild(requestbtn);
	
	var filterbtn = document.createElement("div");
	filterbtn.innerHTML = "<button class='dropbtn info'>Filter</button>";
	div.appendChild(filterbtn);

	var popupFilter = document.createElement('div');
	popupFilter.className = "popup";
	popupFilter.id = 'popupFilter';
	popupFilter.innerHTML = "<txt class='text2'>Blood group</txt>"
							+"<br><br>"
							+"<img class='image2' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxMC4yOTQgNDEwLjI5NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDEwLjI5NCA0MTAuMjk0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8ZyBpZD0iR3VpZGVzX0Zvcl9BcnRib2FyZF80MF8iPgoJPC9nPgoJPGcgaWQ9IkFydHdvcmtfMzlfIj4KCTwvZz4KCTxnIGlkPSJMYXllcl8yXzM5XyI+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiM2MkE1QTI7IiBkPSJNMTM3Ljc4NSwzNDIuOTMyYzAsMzcuMjAzLDMwLjE1OSw2Ny4zNjIsNjcuMzYyLDY3LjM2MnM2Ny4zNi0zMC4xNTksNjcuMzYtNjcuMzYyVjMzLjQ0NkgxMzcuNzg1ICAgICBWMzQyLjkzMnogTTE1Ny43ODYsMjAzLjgxN2g5NC43MjJ2MTM2LjcwOGMwLDI2LjE1Ni0yMS4yMDMsNDcuMzYtNDcuMzYsNDcuMzZjLTI2LjE1NywwLTQ3LjM2MS0yMS4yMDQtNDcuMzYxLTQ3LjM2VjIwMy44MTcgICAgIEgxNTcuNzg2eiIvPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojNUE5Nzk0OyIgZD0iTTI3Ni4zMzYsMEgxMzMuOTU4Yy04LjQ1NSwwLTE1LjMxLDYuODU0LTE1LjMxLDE1LjMxdjMuODI3YzAsOC40NTYsNi44NTQsMTUuMzEsMTUuMzEsMTUuMzEgICAgIGgzLjgyN2gxMzQuNzIzaDMuODI4YzguNDU1LDAsMTUuMzA5LTYuODU0LDE1LjMwOS0xNS4zMVYxNS4zMUMyOTEuNjQ1LDYuODU0LDI4NC43OTIsMCwyNzYuMzM2LDB6Ii8+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGN0YxRTY7IiBkPSJNMjA1LjE0NywzODcuODg1YzI2LjE1NywwLDQ3LjM2LTIxLjIwNCw0Ny4zNi00Ny4zNlYyMDMuODE3aC05NC43MjJ2MTM2LjcwOCAgICAgQzE1Ny43ODYsMzY2LjY4MSwxNzguOTkxLDM4Ny44ODUsMjA1LjE0NywzODcuODg1eiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>"
							+"<txt class='text2'>A</txt><input type='checkbox' class='check2' id=groupA></input>"
						    +"<txt class='text2'>B</txt><input type='checkbox' class='check2' id='groupB'></input>"
						    +"<txt class='text2'>AB</txt><input type='checkbox' class='check2' id='groupAB'></input>"
						    +"<txt class='text2'>O</txt><input type='checkbox' class='check2' id='groupO'></input>"
						    +"<br><br>"
						    +"<txt class='text2'>Blood type</txt>"
						    +"<br><br>"
						    +"<img class='image3' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4Ij48Zz48Zz48cGF0aCBkPSJtMzUwLjk1MSAxMjFoLTk0Ljk1MS05MGMtOC4yOTEgMC0xNSA2LjcwOS0xNSAxNXM2LjcwOSAxNSAxNSAxNWg5MCA5NC45NTFjOC4yOTEgMCAxNS02LjcwOSAxNS0xNXMtNi43MDktMTUtMTUtMTV6IiBmaWxsPSIjOTdkZTNkIi8+PGcgZmlsbD0iI2ZkYmYwMCI+PHBhdGggZD0ibTMxNiAxODFoLTYwLTYwYy04LjI5MSAwLTE1IDYuNzA5LTE1IDE1czYuNzA5IDE1IDE1IDE1aDYwIDYwYzguMjkxIDAgMTUtNi43MDkgMTUtMTVzLTYuNzA5LTE1LTE1LTE1eiIvPjxwYXRoIGQ9Im0zNjkuOTM2IDYxaC0xMTMuOTM2LTExMy45MzZjLTguMjkxIDAtMTUgNi43MDktMTUgMTVzNi43MDkgMTUgMTUgMTVoMTEzLjkzNiAxMTMuOTM2YzguMjkxIDAgMTUtNi43MDkgMTUtMTVzLTYuNzA5LTE1LTE1LTE1eiIvPjwvZz48L2c+PHBhdGggZD0ibTM2NS45NTEgMTM2YzAtOC4yOTEtNi43MDktMTUtMTUtMTVoLTk0Ljk1MXYzMGg5NC45NTFjOC4yOTEgMCAxNS02LjcwOSAxNS0xNXoiIGZpbGw9IiNmZjkxMDAiLz48cGF0aCBkPSJtMzMxIDE5NmMwLTguMjkxLTYuNzA5LTE1LTE1LTE1aC02MHYzMGg2MGM4LjI5MSAwIDE1LTYuNzA5IDE1LTE1eiIgZmlsbD0iIzU5YzM2YSIvPjxwYXRoIGQ9Im0zODQuOTM2IDc2YzAtOC4yOTEtNi43MDktMTUtMTUtMTVoLTExMy45MzZ2MzBoMTEzLjkzNmM4LjI5MSAwIDE1LTYuNzA5IDE1LTE1eiIgZmlsbD0iIzU5YzM2YSIvPjxwYXRoIGQ9Im0zNDYgMzYxaDEyMXYzMGgtMTIxeiIgZmlsbD0iIzY2MzMyNSIvPjxnPjxwYXRoIGQ9Im0xOTYgMzMxaDYwIDYwYzguMjkxIDAgMTUtNi43MDkgMTUtMTVzLTYuNzA5LTE1LTE1LTE1aC02MC02MGMtOC4yOTEgMC0xNSA2LjcwOS0xNSAxNXM2LjcwOSAxNSAxNSAxNXoiIGZpbGw9IiNmZGJmMDAiLz48cGF0aCBkPSJtMTYxLjA0OSAzOTFoOTQuOTUxIDkwYzguMjkxIDAgMTUtNi43MDkgMTUtMTVzLTYuNzA5LTE1LTE1LTE1aC05MC05NC45NTFjLTguMjkxIDAtMTUgNi43MDktMTUgMTVzNi43MDkgMTUgMTUgMTV6IiBmaWxsPSIjOTdkZTNkIi8+PHBhdGggZD0ibTM2OS45MzYgNDIxaC0xMTMuOTM2LTExMy45MzZjLTguMjkxIDAtMTUgNi43MDktMTUgMTVzNi43MDkgMTUgMTUgMTVoMTEzLjkzNiAxMTMuOTM2YzguMjkxIDAgMTUtNi43MDkgMTUtMTVzLTYuNzA5LTE1LTE1LTE1eiIgZmlsbD0iI2ZkYmYwMCIvPjwvZz48cGF0aCBkPSJtMzMxIDMxNmMwLTguMjkxLTYuNzA5LTE1LTE1LTE1aC02MHYzMGg2MGM4LjI5MSAwIDE1LTYuNzA5IDE1LTE1eiIgZmlsbD0iIzU5YzM2YSIvPjxwYXRoIGQ9Im0zNjEgMzc2YzAtOC4yOTEtNi43MDktMTUtMTUtMTVoLTkwdjMwaDkwYzguMjkxIDAgMTUtNi43MDkgMTUtMTV6IiBmaWxsPSIjZmY5MTAwIi8+PHBhdGggZD0ibTM4NC45MzYgNDM2YzAtOC4yOTEtNi43MDktMTUtMTUtMTVoLTExMy45MzZ2MzBoMTEzLjkzNmM4LjI5MSAwIDE1LTYuNzA5IDE1LTE1eiIgZmlsbD0iIzU5YzM2YSIvPjxwYXRoIGQ9Im00NSAxMjFoMTIxdjMwaC0xMjF6IiBmaWxsPSIjOGM0YTM3Ii8+PHBhdGggZD0ibTI2NC45OTQgMjQ0LjAwM2MtMy4xNi0yLjM3MS01Ljk0Ny01LjEyNy04Ljk5NC03LjYxOS02NS43Ni01My43OTgtMTA1LTEzNi4xMS0xMDUtMjIxLjM4NCAwLTguMjkxLTYuNzA5LTE1LTE1LTE1cy0xNSA2LjcwOS0xNSAxNWMwIDk4LjYxMyA0Ny4xMDkgMTkzLjgxNyAxMjYuMDA2IDI1Mi45OTcgMy4xNiAyLjM3MSA1Ljk0NyA1LjEyNyA4Ljk5NCA3LjYxOSA2NS43NiA1My43OTggMTA1IDEzNi4xMSAxMDUgMjIxLjM4NCAwIDguMjkxIDYuNzA5IDE1IDE1IDE1czE1LTYuNzA5IDE1LTE1YzAtOTguNjEzLTQ3LjEwOS0xOTMuODE3LTEyNi4wMDYtMjUyLjk5N3oiIGZpbGw9IiNmZTg1OTgiLz48cGF0aCBkPSJtMzYxIDQ5N2MwIDguMjkxIDYuNzA5IDE1IDE1IDE1czE1LTYuNzA5IDE1LTE1YzAtOTguNjEzLTQ3LjEwOS0xOTMuODE3LTEyNi4wMDYtMjUyLjk5Ny0zLjE2LTIuMzcxLTUuOTQ3LTUuMTI3LTguOTk0LTcuNjE5djM5LjIzMmM2NS43NiA1My43OTggMTA1IDEzNi4xMSAxMDUgMjIxLjM4NHoiIGZpbGw9IiNmZTU1NzAiLz48cGF0aCBkPSJtNDUgMTgxYy0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1IDQ1IDIwLjE4NiA0NSA0NS0yMC4xODYgNDUtNDUgNDV6IiBmaWxsPSIjOWVkMGZmIi8+PHBhdGggZD0ibTQ2NyA0MjFjLTI0LjgxNCAwLTQ1LTIwLjE4Ni00NS00NXMyMC4xODYtNDUgNDUtNDUgNDUgMjAuMTg2IDQ1IDQ1LTIwLjE4NiA0NS00NSA0NXoiIGZpbGw9IiM3M2JjZmYiLz48cGF0aCBkPSJtMzc2IDBjLTguMjkxIDAtMTUgNi43MDktMTUgMTUgMCA4NS4yNzQtMzkuMjQgMTY3LjU4Ni0xMDUgMjIxLjM4NC0zLjA0NyAyLjQ5Mi01LjgzNCA1LjI0OC04Ljk5NCA3LjYxOS03OC44OTcgNTkuMTgtMTI2LjAwNiAxNTQuMzg0LTEyNi4wMDYgMjUyLjk5NyAwIDguMjkxIDYuNzA5IDE1IDE1IDE1czE1LTYuNzA5IDE1LTE1YzAtODUuMjc0IDM5LjI0LTE2Ny41ODYgMTA1LTIyMS4zODQgMy4wNDctMi40OTIgNS44MzQtNS4yNDggOC45OTQtNy42MTkgNzguODk3LTU5LjE4IDEyNi4wMDYtMTU0LjM4NCAxMjYuMDA2LTI1Mi45OTcgMC04LjI5MS02LjcwOS0xNS0xNS0xNXoiIGZpbGw9IiM5ZWQwZmYiLz48cGF0aCBkPSJtMzkxIDE1YzAtOC4yOTEtNi43MDktMTUtMTUtMTVzLTE1IDYuNzA5LTE1IDE1YzAgODUuMjc0LTM5LjI0IDE2Ny41ODYtMTA1IDIyMS4zODR2MzkuMjMyYzMuMDQ3LTIuNDkyIDUuODM0LTUuMjQ4IDguOTk0LTcuNjE5IDc4Ljg5Ny01OS4xOCAxMjYuMDA2LTE1NC4zODQgMTI2LjAwNi0yNTIuOTk3eiIgZmlsbD0iIzczYmNmZiIvPjwvZz48L3N2Zz4K' />"
						    +"<txt class='text2'>Rare</txt><input type='checkbox' class='check2' id='groupRare'></input>"
						    +"<txt class='text2'>General</txt><input type='checkbox' class='check2' id='groupGeneral'></input>"
						    +"<txt class='text2'>Exotic</txt><input type='checkbox' class='check2' id='groupExotic'></input>"
						    +"<a class='close' id='close1'>&times;</a>";

	var popup = document.createElement('div');
	popup.className = "popup";
	popup.id = 'popup';
	popup.innerHTML = "<txt class='text'>Enter blood group:</txt>"
					 +"<br><br>"
					 +"<select class='select-css' id='bloodGroup'><option>Select Blood group<option>A<option>B<option>AB<option>O</option></select>"
				     +"<br>"
				     +"<txt class='text'>Enter blood type:</txt>"
				     +"<br><br>"
				     +"<select class='select-css' id='bloodType'><option>Select Blood type<option>Rare<option>Exotic<option>Genral</option></select>"
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

	filterbtn.onclick = function(){
		popupFilter.style.display = 'block';
		div.appendChild(popupFilter);
		var close = document.getElementById('close1');
		close.onclick = function(){
			popupFilter.style.display = 'none';
		}
	}			 		

	requestbtn.onclick = function(){
		popup.style.display = 'block';
		div.appendChild(popup);
		var close1 = document.getElementById('close');
		close1.onclick = function(){

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
						// eslint-disable-next-line
						alert("Blood group: "+blood+"Blood type: "+bloodType+"Quantity: "+bloodQuant+"Request Completed!");
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
	table.style.overflow = "scroll";
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

	var vampire = document.getElementById('vampire');
	vampire.onclick = function(){
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

/**
 * adding entry to table
 * @param {[type]} table [description]
 * @param {[type]} data  [description]
 * @param {[type]} num   [description]
 */
function addEntry(table, data, num){

  for (var i = 0; i < num; i++){
      var column = document.createElement("tr");

      var col1 = document.createElement("td");
      col1.innerHTML = data.database[i].id;

      var col2 = document.createElement("td");
      col2.innerHTML = data.database[i].blood_group;

      var col3 = document.createElement("td");
      col3.innerHTML = data.database[i].arrival_date;

      var col4 = document.createElement("td");
      col4.innerHTML = data.database[i].use_by_date;

      var col5 = document.createElement("td");
      col5.innerHTML = data.database[i].blood_type;

      var col6 = document.createElement("td");
      col6.innerHTML = data.database[i].name;
      col6.className = "name";
      col6.onclick = function(){
          col6.innerHTML = "Name: "+data.database[i].name+"<br>"+"Email: "+data.database[i].contact+"<br>"+"Medical history: SOMETHING HERE"+"<br>"+"Pathology: "+data.database[i].pathology+"<br>";
      }

      var col7 = document.createElement("td");
      col7.innerHTML = "<BUTTON class='btnDel'>Delete</BUTTON>";
      col7.onclick = function(){
          table.removeChild(column);
      }
      column.appendChild(col1);
      column.appendChild(col2);
      column.appendChild(col3);
      column.appendChild(col4);
      column.appendChild(col5);
      column.appendChild(col6);
      column.appendChild(col7);
      table.appendChild(column);
  }
}

/**
 * Vampire screen
 * @return {[type]} [description]
 */
function vampireView1(){

		var div = document.createElement('div');å
		var wrap = document.getElementById('bg-blurr');
		wrap.style.display = 'none';

		var heading =  document.createElement('h1');
		heading.innerHTML = "Vampire P/L (Vampire view)";

		heading.className = "heading";
		div.appendChild(heading);

    var table = document.createElement("table");
		table.id = "table";

		var wrap = document.getElementById('bg-blurr');
		wrap.style.display = 'none';

		var addBtn = document.createElement("BUTTON");
	  addBtn.className = "btn2 info";
		addBtn.innerHTML = "Add new blood";
		addBtn.id = "Add";
		div.appendChild(addBtn);

		var search = document.createElement('div'); 
		search.innerHTML = "<INPUT type='text' id='myInput' class='myInput' placeholder='Enter'><BUTTON class='btn5 info'><img class='image' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojREFFRkY2OyIgZD0iTTM0Ny4xMTksNjAuNzQ2YzI4Ljc1OS0wLjAzNSw1Mi4wOTQsMjMuMjU3LDUyLjEyOSw1Mi4wMDdjMC4wMjYsMjIuNTExLTE0LjQyMyw0Mi40ODctMzUuODE0LDQ5LjUyNSAgdi0yMy40MzFMMzM3LjM5OSw4Ni43OGwwLjYwNy0yNS4xNjZDMzQxLjAwOSw2MS4wMTUsMzQ0LjA2NCw2MC43MjgsMzQ3LjExOSw2MC43NDZ6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGNUQwQzc7IiBkPSJNMzM3LjM5OSwxMjUuODMxYzAtNy4xODUtNS44MzItMTMuMDE3LTEzLjAxNy0xMy4wMTdjLTcuMTg1LDAtMTMuMDE3LDUuODMyLTEzLjAxNywxMy4wMTcgIGMwLDcuMTg1LDUuODMyLDEzLjAxNywxMy4wMTcsMTMuMDE3QzMzMS41NjgsMTM4Ljg0NywzMzcuMzk5LDEzMy4wMTYsMzM3LjM5OSwxMjUuODMxeiBNMzM3LjM5OSw4Ni43OGwyNi4wMzQsNTIuMDY4djIzLjQzMSAgYy01LjI3NiwxLjcwMS0xMC43NzgsMi41NzctMTYuMzE1LDIuNjAzYy0zLjIwMiwwLjAxNy02LjM5Ni0wLjI2OS05LjU0Ni0wLjg2OGMtMjguMjU1LTUuMzQ2LTQ2LjgyNi0zMi41ODYtNDEuNDgxLTYwLjg0MSAgYzQuMDA5LTIxLjIsMjAuNjgtMzcuNzMyLDQxLjkxNS00MS41NTlMMzM3LjM5OSw4Ni43OHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0QzRDNEMzsiIGQ9Ik0zMjkuMTU1LDIxNi45NDljLTQuNTMsMjYuMzAzLTI1LjIxOCw0Ni44NDQtNTEuNTQ3LDUxLjJjLTMuMzUsMC41OTktNi43NTEsMC44ODUtMTAuMTUzLDAuODY4ICBoLTUwLjUwNmwxNi4zMTUtMTA0LjEzNmgxMDQuMTM2bC04LjA3LDUxLjExM0MzMjkuMjQyLDIxNi4zNDIsMzI5LjI0MiwyMTYuNjAyLDMyOS4xNTUsMjE2Ljk0OXoiLz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjVEMEM3OyIgZD0iTTE4Mi4yMzcsMTEyLjgxNHY1Mi4wNjhoLTguNjc4Yy0xNC4zNzksMC0yNi4wMzQtMTEuNjU1LTI2LjAzNC0yNi4wMzRzMTEuNjU1LTI2LjAzNCwyNi4wMzQtMjYuMDM0ICAgSDE4Mi4yMzd6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjVEMEM3OyIgZD0iTTI1NiwxMzguODQ3YzcuMTg1LDAsMTMuMDE3LTUuODMyLDEzLjAxNy0xMy4wMTdjMC03LjE4NS01LjgzMi0xMy4wMTctMTMuMDE3LTEzLjAxNyAgIGMtNy4xODUsMC0xMy4wMTcsNS44MzItMTMuMDE3LDEzLjAxN0MyNDIuOTgzLDEzMy4wMTYsMjQ4LjgxNSwxMzguODQ3LDI1NiwxMzguODQ3eiBNMzM3LjM5OSwxNjQuODgxSDIzMy4yNjRsLTE2LjMxNSwxMDQuMTM2ICAgaDQzLjM5bC00My4zOSwzNC43MTJsLTQzLjM5LTM0LjcxMmw4LjY3OC0xMDQuMTM2Vjk1LjQ1OGMzNy45MjMtMC41OSw2OC4zNjUtMzEuNDkyLDY4LjM4Mi02OS40MjRWMCAgIGMtMC4wMzUsMjguNzE1LDIzLjIxNCw1Mi4wMzMsNTEuOTI5LDUyLjA2OGMwLjAxNywwLDAuMDM1LDAsMC4wNTIsMGgzNS42NjZsLTAuMjYsOS41NDYgICBjLTI4LjI5OSw1LjEwMy00Ny4xMDQsMzIuMTg3LTQxLjk5Myw2MC40ODVjMy44MzYsMjEuMjM1LDIwLjM1OSwzNy45MDUsNDEuNTU5LDQxLjkxNUwzMzcuMzk5LDE2NC44ODF6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjVEMEM3OyIgZD0iTTQxNi41NDIsMjk1LjA1MXYxNy4zNTZoLTUyLjA2OHYtNDMuMzljMC0xNC4zNzksMTEuNjU0LTI2LjAzNCwyNi4wMzQtMjYuMDM0di00My4zOWgyNi4wMzQgICBjMTQuMzc5LDAsMjYuMDM0LDExLjY1NSwyNi4wMzQsMjYuMDM0djQzLjM5QzQ0Mi41NzYsMjgzLjM5Niw0MzAuOTIyLDI5NS4wNTEsNDE2LjU0MiwyOTUuMDUxeiIvPgo8L2c+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Y1QjA1QzsiIGQ9Ik0zMzguMjY3LDUyLjA2OGgtMzUuNjY2Yy0yOC43MTUtMC4wMDktNTEuOTktMjMuMy01MS45ODEtNTIuMDE2YzAtMC4wMTcsMC0wLjAzNSwwLTAuMDUyaDQzLjM5ICAgYzI0LjA3MywwLjAxNyw0My42ODUsMTkuMzI2LDQ0LjA4NCw0My4zOUwzMzguMjY3LDUyLjA2OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGNUIwNUM7IiBkPSJNMjUwLjYyLDB2MjYuMDM0Yy0wLjAxNywzNy45MzEtMzAuNDYsNjguODM0LTY4LjM4Miw2OS40MjRoLTEuMDQxVjQzLjM5ICAgYzAtMjMuOTYsMTkuNDMtNDMuMzksNDMuMzktNDMuMzlIMjUwLjYyeiIvPgo8L2c+CjxnPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAwNDQ4RjsiIHBvaW50cz0iMjQ1LjE1MywzMjcuMTU5IDI0Mi45ODMsMzI5Ljc2MyAyMjUuNjI3LDM0Ny4xMTkgMjE2Ljk0OSwzNTUuNzk3IDIwOC4yNzEsMzQ3LjExOSAgICAxOTAuOTE1LDMyOS43NjMgMTg4Ljc0NiwzMjcuMTU5IDIxNi45NDksMzAzLjcyOSAgIi8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMDA0NDhGOyIgcG9pbnRzPSIyMjUuNjI3LDM0Ny4xMTkgMjQyLjk4Myw1MTIgMTkwLjkxNSw1MTIgMjA4LjI3MSwzNDcuMTE5IDIxNi45NDksMzU1Ljc5NyAgIi8+CjwvZz4KPGc+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRDNEM0QzOyIgcG9pbnRzPSIxNjQuODgxLDM5OS4xODYgMTY0Ljg4MSw1MTIgMTEyLjgxNCw0MjUuMjIgICIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0QzRDNEMzsiIHBvaW50cz0iMTY0Ljg4MSwzNDcuMTE5IDE2NC44ODEsMzk5LjE4NiAxMTIuODE0LDM3My4xNTMgMTM4Ljg0NywyNjkuMDE3IDE2NC44ODEsMjY5LjAxNyAgIi8+CjwvZz4KPGc+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRjNGM0YzOyIgcG9pbnRzPSIyMDguMjcxLDM0Ny4xMTkgMTkwLjkxNSw1MTIgMTY0Ljg4MSw1MTIgMTY0Ljg4MSwzOTkuMTg2IDE2NC44ODEsMzQ3LjExOSAxODguNzQ2LDMyNy4xNTkgICAgMTkwLjkxNSwzMjkuNzYzICAiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGM0YzRjM7IiBwb2ludHM9IjExMi44MTQsNDI1LjIyIDE2NC44ODEsNTEyIDExMi44MTQsNTEyICAiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGM0YzRjM7IiBwb2ludHM9IjE2NC44ODEsMzk5LjE4NiAxMTIuODE0LDQyNS4yMiAxMTIuODE0LDM3My4xNTMgICIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0YzRjNGMzsiIGQ9Ik0xMzguODQ3LDI2OS4wMTdsLTI2LjAzNCwxMDQuMTM2VjUxMmgtNDMuMzlWMzM4LjQ0MSAgIEM2OS40MjQsMzAwLjEwMSwxMDAuNTA4LDI2OS4wMTcsMTM4Ljg0NywyNjkuMDE3eiIvPgo8L2c+CjxnPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0QzRDNEMzsiIHBvaW50cz0iMTczLjU1OSwyNjkuMDE3IDIxNi45NDksMzAzLjcyOSAxODguNzQ2LDMyNy4xNTkgMTY0Ljg4MSwzNDcuMTE5IDE2NC44ODEsMjY5LjAxNyAgIi8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRDNEM0QzOyIgcG9pbnRzPSIzMjEuMDg1LDQyNS4yMiAyNjkuMDE3LDUxMiAyNjkuMDE3LDM5OS4xODYgICIvPgo8L2c+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0YzRjNGMzsiIGQ9Ik0zMDcuMjg3LDI2OS4xOTFjMzIuMTI2LDEuNzk2LDU3LjI0LDI4LjM5NCw1Ny4xODgsNjAuNTcyVjUxMmgtNDMuMzlWMzczLjE1M2wtNDMuMzktMTA0LjEzNiAgIGwtMC4wODctMC44NjhjMTEuMzA3LTEuODIyLDIxLjg3Ny02Ljc1MSwzMC41NDYtMTQuMjMyTDMwNy4yODcsMjY5LjE5MXoiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGM0YzRjM7IiBwb2ludHM9IjMyMS4wODUsMzczLjE1MyAzMjEuMDg1LDQyNS4yMiAyNjkuMDE3LDM5OS4xODYgICIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0YzRjNGMzsiIHBvaW50cz0iMjY5LjAxNywzOTkuMTg2IDI2OS4wMTcsNTEyIDI0Mi45ODMsNTEyIDIyNS42MjcsMzQ3LjExOSAyNDIuOTgzLDMyOS43NjMgMjQ1LjE1MywzMjcuMTU5ICAgIDI2OS4wMTcsMzQ3LjExOSAgIi8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6I0QzRDNEMzsiIGQ9Ik0yNjcuNDU1LDI2OS4wMTdjMy40MDIsMC4wMTcsNi44MDQtMC4yNjksMTAuMTUzLTAuODY4bDAuMDg3LDAuODY4bDQzLjM5LDEwNC4xMzZsLTUyLjA2OCwyNi4wMzQgIHYtNTIuMDY4bC0yMy44NjQtMTkuOTU5bC0yOC4yMDMtMjMuNDMxbDQzLjM5LTM0LjcxMkgyNjcuNDU1eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjNGM0YzOyIgZD0iTTM2NC40NzUsMzQ3LjExOXYtMzQuNzEyaDUyLjA2OHYxNDcuNTI1YzAsMjguNzU5LTIzLjMwOSw1Mi4wNjgtNTIuMDY4LDUyLjA2OGwwLDBWMzQ3LjExOXoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0NTQ1NDU7IiBjeD0iMzI0LjM4MiIgY3k9IjEyNS44MzEiIHI9IjEzLjAxNyIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNDU0NTQ1OyIgY3g9IjI1NiIgY3k9IjEyNS44MzEiIHI9IjEzLjAxNyIvPgoJPHJlY3QgeD0iMzY0LjQ3NSIgeT0iMzM4LjQ0MSIgc3R5bGU9ImZpbGw6IzQ1NDU0NTsiIHdpZHRoPSIyNi4wMzQiIGhlaWdodD0iMTcuMzU2Ii8+CjwvZz4KPGc+Cgk8cmVjdCB4PSIxMDQuMTM2IiB5PSIzNzMuMTUzIiBzdHlsZT0iZmlsbDojRTVFNUU1OyIgd2lkdGg9IjE3LjM1NiIgaGVpZ2h0PSIxMzguODQ3Ii8+Cgk8cmVjdCB4PSIzMTIuNDA3IiB5PSIzNzMuMTUzIiBzdHlsZT0iZmlsbDojRTVFNUU1OyIgd2lkdGg9IjE3LjM1NiIgaGVpZ2h0PSIxMzguODQ3Ii8+Cgk8cmVjdCB4PSIzNTUuNzk3IiB5PSIzMjkuNzYzIiBzdHlsZT0iZmlsbDojRTVFNUU1OyIgd2lkdGg9IjE3LjM1NiIgaGVpZ2h0PSIxODIuMjM3Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDU0NTQ1OyIgZD0iTTMyOS43NjMsMjI1LjYyN0gzMTQuNDljLTE1LjIzOCwwLjA5NS0yOS4xODQtOC41MjItMzUuOTI3LTIyLjE4MWwxNS41NTEtNy43MDYgICBjMy44MzYsNy43MzIsMTEuNzUsMTIuNTkyLDIwLjM3NiwxMi41MzFoMTQuNjY2TDMyOS43NjMsMjI1LjYyN3oiLz4KCQoJCTxyZWN0IHg9IjM4Ni4xNzMiIHk9IjE2MC4xNTEiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjkxMDQgMC40MTM4IC0wLjQxMzggLTAuOTEwNCA4NDIuMjcxNyAyNDIuNjk4NCkiIHN0eWxlPSJmaWxsOiM0NTQ1NDU7IiB3aWR0aD0iMTcuMzU2IiBoZWlnaHQ9IjEwNC44MzMiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM0NTQ1NDU7IiBkPSJNMzQ3LjExOSwxNzMuNTU5Yy0zLjc0OSwwLjAyNi03LjQ5OC0wLjMyMS0xMS4xODYtMS4wMjRjLTMyLjk1OS02LjI0OC01NC42MTktMzguMDM2LTQ4LjM3MS03MC45OTQgICBjNC42ODYtMjQuNjk3LDI0LjA5OS00My45NjMsNDguODQtNDguNDU4YzMuNTMyLTAuNjk0LDcuMTE2LTEuMDQxLDEwLjcxNy0xLjAxNWMzMy41NDktMC4wMTcsNjAuNzYzLDI3LjE2Miw2MC43OCw2MC43MTEgICBjMC4wMTcsMjYuMjQyLTE2LjgyNyw0OS41MzQtNDEuNzUsNTcuNzM1QzM1OS45OTcsMTcyLjUwMSwzNTMuNTg0LDE3My41MzMsMzQ3LjExOSwxNzMuNTU5eiBNMzQ3LjExOSw2OS40MjQgICBjLTIuNDczLTAuMDE3LTQuOTQ2LDAuMjA4LTcuMzc2LDAuNjg2bC0wLjI0MywwLjA1MmMtMjMuNTc4LDQuMjc4LTM5LjIyNCwyNi44NjctMzQuOTM4LDUwLjQ0NSAgIGMzLjIxMSwxNy42NjgsMTYuOTY1LDMxLjUzNiwzNC42MDgsMzQuODc3YzcuMjI5LDEuMzAyLDE0LjY1NywwLjc5OCwyMS42NDMtMS40NzVjMjIuNzU0LTcuNTI0LDM1LjA5NC0zMi4wNzQsMjcuNTctNTQuODE5ICAgQzM4Mi40OTksODEuMzk5LDM2NS44NTQsNjkuMzk4LDM0Ny4xMTksNjkuNDI0eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=' /></BUTTON></INPUT>";
		div.appendChild(search);

		var filterbtn = document.createElement("div");
		filterbtn.innerHTML = "<button class='dropbtn1 info'>Filter</button>";
		div.appendChild(filterbtn);

		//sort
		var sortbtn = document.createElement("div");
		sortbtn.innerHTML = "<div class='dropDown info'><button class='dropDownbtn info'><img class='image1' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEgNTgiIHdpZHRoPSI1MTJweCI+PGcgaWQ9IlBhZ2UtMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBpZD0iMDEwLS0tRGlyZWN0aW9uYWwtVHJhZmZpYy1BcnJvdyIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xKSI+PHBhdGggaWQ9IlNoYXBlIiBkPSJtMzEuOTk3IDUzdi0zM2gtNmMtLjM3MDgzOTguMDAyNjg5LS43MTE4NjQyLS4yMDI4MDYyLS44ODI3NTczLS41MzE5MzM3cy0uMTQyNzg1Ny0uNzI2Mjg3My4wNzI3NTczLTEuMDI4MDY2M2wxLjk4LTIuOCA2LjkzLTkuODEgMy4xMi00LjQyYy4xODg0NTU1LS4yNTkxNzMyNy40ODk1NTMxLS40MTI1MTU5Mi44MS0uNDEyNTE1OTJzLjYyMTU0NDUuMTUzMzQyNjUuODEuNDEyNTE1OTJsMTEuOTcgMTcuMDNjLjIxNTU0My4zMDE3NzkuMjQzNjUwNC42OTg5Mzg4LjA3Mjc1NzMgMS4wMjgwNjYzcy0uNTExOTE3NS41MzQ2MjI3LS44ODI3NTczLjUzMTkzMzdoLTZ2MzNjMCAuNTUyMjg0Ny0uNDQ3NzE1MyAxLTEgMWgtMTBjLS41NTIyODQ3IDAtMS0uNDQ3NzE1My0xLTF6IiBmaWxsPSIjMjg1NjgwIi8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtNy4wMDMgN3YzMi45OTc1aC02Yy0uMzcwODM5NzYtLjAwMjY4OS0uNzExODY0MTcuMjAyODA2Mi0uODgyNzU3MjguNTMxOTMzNy0uMTcwODkzMTIuMzI5MTI3NS0uMTQyNzg1NzIuNzI2Mjg3My4wNzI3NTcyOCAxLjAyODA2NjNsMS45OCAyLjggNi45MyA5LjgxIDMuMTIgNC40MmMuMTg4NDI5Ni4yNTkyMTI1LjQ4OTUzNjYuNDEyNTg2LjgxLjQxMjU4NnMuNjIxNTcwNC0uMTUzMzczNS44MS0uNDEyNTg2bDExLjk3LTE3LjAzYy4yMTU1NDMtLjMwMTc3OS4yNDM2NTA0LS42OTg5Mzg4LjA3Mjc1NzMtMS4wMjgwNjYzcy0uNTExOTE3NS0uNTM0NjIyNy0uODgyNzU3My0uNTMxOTMzN2gtNnYtMzIuOTk3NWMwLS41NTIyODQ3NS0uNDQ3NzE1My0xLTEtMWgtMTBjLS4yNjUyMTY0OSAwLS41MTk1NzA0LjEwNTM1Njg0LS43MDcxMDY3OC4yOTI4OTMyMnMtLjI5Mjg5MzIyLjQ0MTg5MDI5LS4yOTI4OTMyMi43MDcxMDY3OHoiIGZpbGw9IiM0NDgyYzMiLz48L2c+PC9nPjwvc3ZnPgo=' /></button><div class='dropDown-content'><a href='#'>Use By Date</a><a href='#'>Quantity</a></div></div>";
		div.appendChild(sortbtn);

		//filter
		var popupFilterVampire = document.createElement('div');
		popupFilterVampire.className = "popup";
		popupFilterVampire.id = 'popupFilter';
		popupFilterVampire.innerHTML = "<txt class='text2'>Blood group</txt>"
							+"<br><br>"
							+"<img class='image2' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxMC4yOTQgNDEwLjI5NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDEwLjI5NCA0MTAuMjk0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8ZyBpZD0iR3VpZGVzX0Zvcl9BcnRib2FyZF80MF8iPgoJPC9nPgoJPGcgaWQ9IkFydHdvcmtfMzlfIj4KCTwvZz4KCTxnIGlkPSJMYXllcl8yXzM5XyI+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiM2MkE1QTI7IiBkPSJNMTM3Ljc4NSwzNDIuOTMyYzAsMzcuMjAzLDMwLjE1OSw2Ny4zNjIsNjcuMzYyLDY3LjM2MnM2Ny4zNi0zMC4xNTksNjcuMzYtNjcuMzYyVjMzLjQ0NkgxMzcuNzg1ICAgICBWMzQyLjkzMnogTTE1Ny43ODYsMjAzLjgxN2g5NC43MjJ2MTM2LjcwOGMwLDI2LjE1Ni0yMS4yMDMsNDcuMzYtNDcuMzYsNDcuMzZjLTI2LjE1NywwLTQ3LjM2MS0yMS4yMDQtNDcuMzYxLTQ3LjM2VjIwMy44MTcgICAgIEgxNTcuNzg2eiIvPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojNUE5Nzk0OyIgZD0iTTI3Ni4zMzYsMEgxMzMuOTU4Yy04LjQ1NSwwLTE1LjMxLDYuODU0LTE1LjMxLDE1LjMxdjMuODI3YzAsOC40NTYsNi44NTQsMTUuMzEsMTUuMzEsMTUuMzEgICAgIGgzLjgyN2gxMzQuNzIzaDMuODI4YzguNDU1LDAsMTUuMzA5LTYuODU0LDE1LjMwOS0xNS4zMVYxNS4zMUMyOTEuNjQ1LDYuODU0LDI4NC43OTIsMCwyNzYuMzM2LDB6Ii8+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGN0YxRTY7IiBkPSJNMjA1LjE0NywzODcuODg1YzI2LjE1NywwLDQ3LjM2LTIxLjIwNCw0Ny4zNi00Ny4zNlYyMDMuODE3aC05NC43MjJ2MTM2LjcwOCAgICAgQzE1Ny43ODYsMzY2LjY4MSwxNzguOTkxLDM4Ny44ODUsMjA1LjE0NywzODcuODg1eiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>"
							+"<txt class='text2'>A</txt><input type='checkbox' class='check2' id=groupA></input>"
						    +"<txt class='text2'>B</txt><input type='checkbox' class='check2' id='groupB'></input>"
						    +"<txt class='text2'>AB</txt><input type='checkbox' class='check2' id='groupAB'></input>"
						    +"<txt class='text2'>O</txt><input type='checkbox' class='check2' id='groupO'></input>"
						    +"<br><br>"
						    +"<txt class='text2'>Blood type</txt>"
						    +"<br><br>"
						    +"<img class='image3' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4Ij48Zz48Zz48cGF0aCBkPSJtMzUwLjk1MSAxMjFoLTk0Ljk1MS05MGMtOC4yOTEgMC0xNSA2LjcwOS0xNSAxNXM2LjcwOSAxNSAxNSAxNWg5MCA5NC45NTFjOC4yOTEgMCAxNS02LjcwOSAxNS0xNXMtNi43MDktMTUtMTUtMTV6IiBmaWxsPSIjOTdkZTNkIi8+PGcgZmlsbD0iI2ZkYmYwMCI+PHBhdGggZD0ibTMxNiAxODFoLTYwLTYwYy04LjI5MSAwLTE1IDYuNzA5LTE1IDE1czYuNzA5IDE1IDE1IDE1aDYwIDYwYzguMjkxIDAgMTUtNi43MDkgMTUtMTVzLTYuNzA5LTE1LTE1LTE1eiIvPjxwYXRoIGQ9Im0zNjkuOTM2IDYxaC0xMTMuOTM2LTExMy45MzZjLTguMjkxIDAtMTUgNi43MDktMTUgMTVzNi43MDkgMTUgMTUgMTVoMTEzLjkzNiAxMTMuOTM2YzguMjkxIDAgMTUtNi43MDkgMTUtMTVzLTYuNzA5LTE1LTE1LTE1eiIvPjwvZz48L2c+PHBhdGggZD0ibTM2NS45NTEgMTM2YzAtOC4yOTEtNi43MDktMTUtMTUtMTVoLTk0Ljk1MXYzMGg5NC45NTFjOC4yOTEgMCAxNS02LjcwOSAxNS0xNXoiIGZpbGw9IiNmZjkxMDAiLz48cGF0aCBkPSJtMzMxIDE5NmMwLTguMjkxLTYuNzA5LTE1LTE1LTE1aC02MHYzMGg2MGM4LjI5MSAwIDE1LTYuNzA5IDE1LTE1eiIgZmlsbD0iIzU5YzM2YSIvPjxwYXRoIGQ9Im0zODQuOTM2IDc2YzAtOC4yOTEtNi43MDktMTUtMTUtMTVoLTExMy45MzZ2MzBoMTEzLjkzNmM4LjI5MSAwIDE1LTYuNzA5IDE1LTE1eiIgZmlsbD0iIzU5YzM2YSIvPjxwYXRoIGQ9Im0zNDYgMzYxaDEyMXYzMGgtMTIxeiIgZmlsbD0iIzY2MzMyNSIvPjxnPjxwYXRoIGQ9Im0xOTYgMzMxaDYwIDYwYzguMjkxIDAgMTUtNi43MDkgMTUtMTVzLTYuNzA5LTE1LTE1LTE1aC02MC02MGMtOC4yOTEgMC0xNSA2LjcwOS0xNSAxNXM2LjcwOSAxNSAxNSAxNXoiIGZpbGw9IiNmZGJmMDAiLz48cGF0aCBkPSJtMTYxLjA0OSAzOTFoOTQuOTUxIDkwYzguMjkxIDAgMTUtNi43MDkgMTUtMTVzLTYuNzA5LTE1LTE1LTE1aC05MC05NC45NTFjLTguMjkxIDAtMTUgNi43MDktMTUgMTVzNi43MDkgMTUgMTUgMTV6IiBmaWxsPSIjOTdkZTNkIi8+PHBhdGggZD0ibTM2OS45MzYgNDIxaC0xMTMuOTM2LTExMy45MzZjLTguMjkxIDAtMTUgNi43MDktMTUgMTVzNi43MDkgMTUgMTUgMTVoMTEzLjkzNiAxMTMuOTM2YzguMjkxIDAgMTUtNi43MDkgMTUtMTVzLTYuNzA5LTE1LTE1LTE1eiIgZmlsbD0iI2ZkYmYwMCIvPjwvZz48cGF0aCBkPSJtMzMxIDMxNmMwLTguMjkxLTYuNzA5LTE1LTE1LTE1aC02MHYzMGg2MGM4LjI5MSAwIDE1LTYuNzA5IDE1LTE1eiIgZmlsbD0iIzU5YzM2YSIvPjxwYXRoIGQ9Im0zNjEgMzc2YzAtOC4yOTEtNi43MDktMTUtMTUtMTVoLTkwdjMwaDkwYzguMjkxIDAgMTUtNi43MDkgMTUtMTV6IiBmaWxsPSIjZmY5MTAwIi8+PHBhdGggZD0ibTM4NC45MzYgNDM2YzAtOC4yOTEtNi43MDktMTUtMTUtMTVoLTExMy45MzZ2MzBoMTEzLjkzNmM4LjI5MSAwIDE1LTYuNzA5IDE1LTE1eiIgZmlsbD0iIzU5YzM2YSIvPjxwYXRoIGQ9Im00NSAxMjFoMTIxdjMwaC0xMjF6IiBmaWxsPSIjOGM0YTM3Ii8+PHBhdGggZD0ibTI2NC45OTQgMjQ0LjAwM2MtMy4xNi0yLjM3MS01Ljk0Ny01LjEyNy04Ljk5NC03LjYxOS02NS43Ni01My43OTgtMTA1LTEzNi4xMS0xMDUtMjIxLjM4NCAwLTguMjkxLTYuNzA5LTE1LTE1LTE1cy0xNSA2LjcwOS0xNSAxNWMwIDk4LjYxMyA0Ny4xMDkgMTkzLjgxNyAxMjYuMDA2IDI1Mi45OTcgMy4xNiAyLjM3MSA1Ljk0NyA1LjEyNyA4Ljk5NCA3LjYxOSA2NS43NiA1My43OTggMTA1IDEzNi4xMSAxMDUgMjIxLjM4NCAwIDguMjkxIDYuNzA5IDE1IDE1IDE1czE1LTYuNzA5IDE1LTE1YzAtOTguNjEzLTQ3LjEwOS0xOTMuODE3LTEyNi4wMDYtMjUyLjk5N3oiIGZpbGw9IiNmZTg1OTgiLz48cGF0aCBkPSJtMzYxIDQ5N2MwIDguMjkxIDYuNzA5IDE1IDE1IDE1czE1LTYuNzA5IDE1LTE1YzAtOTguNjEzLTQ3LjEwOS0xOTMuODE3LTEyNi4wMDYtMjUyLjk5Ny0zLjE2LTIuMzcxLTUuOTQ3LTUuMTI3LTguOTk0LTcuNjE5djM5LjIzMmM2NS43NiA1My43OTggMTA1IDEzNi4xMSAxMDUgMjIxLjM4NHoiIGZpbGw9IiNmZTU1NzAiLz48cGF0aCBkPSJtNDUgMTgxYy0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1IDQ1IDIwLjE4NiA0NSA0NS0yMC4xODYgNDUtNDUgNDV6IiBmaWxsPSIjOWVkMGZmIi8+PHBhdGggZD0ibTQ2NyA0MjFjLTI0LjgxNCAwLTQ1LTIwLjE4Ni00NS00NXMyMC4xODYtNDUgNDUtNDUgNDUgMjAuMTg2IDQ1IDQ1LTIwLjE4NiA0NS00NSA0NXoiIGZpbGw9IiM3M2JjZmYiLz48cGF0aCBkPSJtMzc2IDBjLTguMjkxIDAtMTUgNi43MDktMTUgMTUgMCA4NS4yNzQtMzkuMjQgMTY3LjU4Ni0xMDUgMjIxLjM4NC0zLjA0NyAyLjQ5Mi01LjgzNCA1LjI0OC04Ljk5NCA3LjYxOS03OC44OTcgNTkuMTgtMTI2LjAwNiAxNTQuMzg0LTEyNi4wMDYgMjUyLjk5NyAwIDguMjkxIDYuNzA5IDE1IDE1IDE1czE1LTYuNzA5IDE1LTE1YzAtODUuMjc0IDM5LjI0LTE2Ny41ODYgMTA1LTIyMS4zODQgMy4wNDctMi40OTIgNS44MzQtNS4yNDggOC45OTQtNy42MTkgNzguODk3LTU5LjE4IDEyNi4wMDYtMTU0LjM4NCAxMjYuMDA2LTI1Mi45OTcgMC04LjI5MS02LjcwOS0xNS0xNS0xNXoiIGZpbGw9IiM5ZWQwZmYiLz48cGF0aCBkPSJtMzkxIDE1YzAtOC4yOTEtNi43MDktMTUtMTUtMTVzLTE1IDYuNzA5LTE1IDE1YzAgODUuMjc0LTM5LjI0IDE2Ny41ODYtMTA1IDIyMS4zODR2MzkuMjMyYzMuMDQ3LTIuNDkyIDUuODM0LTUuMjQ4IDguOTk0LTcuNjE5IDc4Ljg5Ny01OS4xOCAxMjYuMDA2LTE1NC4zODQgMTI2LjAwNi0yNTIuOTk3eiIgZmlsbD0iIzczYmNmZiIvPjwvZz48L3N2Zz4K' />"
						    +"<txt class='text2'>Rare</txt><input type='checkbox' class='check2' id='groupRare'></input>"
						    +"<txt class='text2'>General</txt><input type='checkbox' class='check2' id='groupGeneral'></input>"
						    +"<txt class='text2'>Exotic</txt><input type='checkbox' class='check2' id='groupExotic'></input>"
						    +"<a class='close' id='close2'>&times;</a>";

		filterbtn.onclick = function(){
			popupFilterVampire.style.display = 'block';
			div.appendChild(popupFilterVampire);
			var close1 = document.getElementById('close2');
			close1.onclick = function(){
				popupFilterVampire.style.display = 'none';
			}
		}

		//main column 
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


    /**
     * fetching GET request with info
     * @param  {[type]} http [description]
     * @return {[type]}      [description]
     */
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

        addEntry(table, res, Object.keys(res.database).length);
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
						 +"<select class='select-css' id='bloodGroupAdd'><option>Select Blood group<option>A<option>B<option>AB<option>O</option></select>"
						 +"<br>"
						 +"<txt class='text'>Enter blood type:</txt>"
						 +"<br><br>"
						 +"<select class='select-css' id='bloodTypeAdd'><option>Select Blood type<option>Rare<option>Exotic<option>General</option></select>"
						 +"<a class='close' id='close'>&times;</a>"
						 +"<br><txt class='text'>Enter Donor's name:</txt>"
						 +"<br><br>"
						 +"<INPUT class='input1' id='donorName' required></INPUT><br><br>"
						 +"<main><input id='toggle' class='input' onclick='showQuantity()' type='checkbox'><label for='toggle'>Extra information</label>"
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


      /**
       * button adding blood info
       * @return {[type]} [description]
       */
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
        var arrival = dd + '/' + mm + '/' + yyyy;
				col3.innerHTML = dd + '/' + mm + '/' + yyyy;

				var col4 = document.createElement("td");
				var numberOfDaysToAdd = 30;
				today.setDate(today.getDate() + numberOfDaysToAdd);

				var dd1 = today.getDate();
				var mm1 = today.getMonth() + 1;
				var y1 = today.getFullYear();

				col4.innerHTML = dd1 + '/'+ mm1 + '/'+ y1;

				var col5 = document.createElement("td");

				// var match1 = /^rare$/ig;
				// var match2 = /^general$/ig;
				// var match3 = /^exotic$/ig;
				var match4 = /^\d[0-9]{9}$/;

				var col6 = document.createElement("td");
			    col6.innerHTML = "Name:"+nameDonor;
			    col6.className = "name";
			    col6.onclick = function(){
			    	// eslint-disable-next-line
			    	col6.innerHTML = "Name: "+nameDonor+"<br>"+"Phone: "+phone+"<br>"+"Medical history: "+medical+"<br>"+"Pathology: "+pathology+"<br>";
			    }

			    var col7 = document.createElement("td");
			    col7.innerHTML = "<BUTTON><img class='btnDel' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAxIDUxMi4wMDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnIGlkPSJYTUxJRF8xNzc1XyI+Cgk8cGF0aCBpZD0iWE1MSURfMjI2M18iIHN0eWxlPSJmaWxsOiNGOEY4Rjg7IiBkPSJNNDkuNDkzLDE0MkwzNi42MTIsOTMuNGMtMi4wODYtNy44NzItMC42MzYtMTYuMjYyLDMuOTcyLTIyLjk3N2wxNS45ODMtMjMuMjg5ICAgYzYuOTgtMTAuMTcxLDE5LjgwMy0xNC41NjQsMzEuNTUzLTEwLjgwOWwyMy4yMDUsNy40MTVsMzEtMzMuNzRsNDguODg2LDExLjE2M2M4LjgzOCwyLjAxOCwxNS41NzYsOS4xODMsMTcuMDQ4LDE4LjEyOEwyMTIuMzI1LDY0ICAgbDM3LjQwNiwxNy43NDFMMjUxLjM3NCwxNDJINDkuNDkzeiIvPgoJPHBhdGggaWQ9IlhNTElEXzIyNjJfIiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTIxOC4wNzYsMTQyaDE5NC42MTZsLTIzLjY5NC01OC44NTRMMzE0LjE0NSw0My43NGwtNTMuMTg1LDIwLjU1NyAgIGMtNy4xMzUsMi43NTgtMTEuNjczLDkuODA4LTExLjIyOCwxNy40NDRsMS4wOTYsMTguODEybC0zMS4yMjksMzEuMjI5TDIxOC4wNzYsMTQyeiIvPgoJPHBvbHlnb24gaWQ9IlhNTElEXzE5MjRfIiBzdHlsZT0iZmlsbDojQzBFNTQ5OyIgcG9pbnRzPSIzNTguMzI1LDUwMiAxMDEuNzMyLDUwMiAzOC4zMjUsMTQyIDQyMS43MzIsMTQyICAiLz4KCTxwYXRoIGlkPSJYTUxJRF8xODYxXyIgc3R5bGU9ImZpbGw6I0Y4RjhGODsiIGQ9Ik00MzAuNzEsNTAyaC0zNC4zMTdjLTMuNDIxLDAtNi42OTQtMS4zODktOS4wNzEtMy44NDlsLTEwLjcxMS0xMS4wODggICBjLTMuNjA0LTMuNzMxLTkuMTI2LTQuODc1LTEzLjkxNi0yLjg4MkwzMTkuODY4LDUwMmwtMzkuNjA3LTQ4LjkzMWMtMS44NjMtMi4zMDEtMi4zMzItNS40MzEtMS4yMjYtOC4xNzhsNS44MjItMTQuNDUyICAgYzEuODkxLTQuNjkzLTAuOTA1LTkuOTU3LTUuODUyLTExLjAybC0xNS43LTMuMzczYy0zLjc1OC0wLjgwNy02LjQ0Mi00LjEyOS02LjQ0Mi03Ljk3M3YtNDAuNzE2bDExLjY0My0xOS40MzMgICBjNi45ODktMTEuNjY1LDIyLjU0Ny0xNC43LDMzLjQwNy02LjUxN2wxLjc4NSwxLjM0NWwxOC40NTItMTMuNjY5aDQ0LjE2NWwxMi41MjctMTQuMDc3YzUuMDg1LTUuNzE0LDEzLjI3OS03LjQ5MSwyMC4yNzQtNC4zOTYgICBsNTIuMTQ0LDIzLjA3MmwyNS4wNjQsODAuNzkzbC0zNC4wMTIsNzkuODU0QzQ0MC4zMzIsNDk4Ljk4Miw0MzUuNzY1LDUwMiw0MzAuNzEsNTAyeiIvPgoJPGcgaWQ9IlhNTElEXzY4Nl8iPgoJCTxwYXRoIGlkPSJYTUxJRF82ODdfIiBkPSJNMzk5LjI0MiwyNTkuNjljLTIuNjMsMC01LjIxLDEuMDctNy4wNywyLjkzMWMtMS44NiwxLjg1OS0yLjkzLDQuNDM5LTIuOTMsNy4wNjlzMS4wNyw1LjIxLDIuOTMsNy4wNyAgICBzNC40NCwyLjkzLDcuMDcsMi45M3M1LjIxLTEuMDY5LDcuMDctMi45M2MxLjg2LTEuODYsMi45My00LjQ0LDIuOTMtNy4wN3MtMS4wNy01LjIxLTIuOTMtNy4wNjkgICAgQzQwNC40NTIsMjYwLjc2LDQwMS44NzIsMjU5LjY5LDM5OS4yNDIsMjU5LjY5eiIvPgoJCTxwYXRoIGlkPSJYTUxJRF82OTBfIiBkPSJNNDg1Ljg3Niw0MTEuNTE0bC0yNS4wNjQtODAuNzkzYy0wLjg1Ni0yLjc1OS0yLjg2My01LjAxMy01LjUwNC02LjE4MmwtNTIuMTQ1LTIzLjA3MyAgICBjLTExLjAxLTQuODctMjMuNzg2LTIuMTAxLTMxLjc5LDYuODk0bC05LjU0NCwxMC43MjVoLTM5LjY3OGMtMi4xNDQsMC00LjIzLDAuNjg4LTUuOTUyLDEuOTY1bC0xMi44Miw5LjQ5NiAgICBjLTYuNTY3LTMuNDI5LTE0LjE3MS00LjU3LTIxLjUzNS0zLjEzN2MtOS4xNDEsMS43ODMtMTcuMTI5LDcuMzg4LTIxLjkxNiwxNS4zNzdsLTExLjY0MywxOS40MzMgICAgYy0wLjkzMSwxLjU1My0xLjQyMiwzLjMyOS0xLjQyMiw1LjE0djQwLjcxNmMwLDguNTAxLDYuMDMyLDE1Ljk2NiwxNC4zNDEsMTcuNzVsMTMuNTU4LDIuOTEybC01LjAwMywxMi40MTkgICAgYy0yLjQ2MSw2LjExMS0xLjQxNiwxMy4wODcsMi43MjksMTguMjA2bDI2LjQyLDMyLjY0SDExMC4xMjRMNjAuMTA0LDIwOGg4My41NjVjNS41MjMsMCwxMC00LjQ3OCwxMC0xMHMtNC40NzctMTAtMTAtMTBINTYuNTgxICAgIGwtNi4zNDEtMzZoMTY3LjgzNWgxOTEuNzQxbC0xMy40NCw3Ni4zMDZjLTAuOTU4LDUuNDM4LDIuNjc1LDEwLjYyNSw4LjExNCwxMS41ODNjNS40MzgsMC45NTYsMTAuNjI1LTIuNjc1LDExLjU4My04LjExNCAgICBsMTUuNTA2LTg4LjA0YzAuNTEzLTIuOTEtMC4yODktNS44OTktMi4xODktOC4xNjNjLTEuOS0yLjI2NC00LjcwNC0zLjU3MS03LjY2LTMuNTcxaC0yLjI4NmwtMjEuMTcyLTUyLjU4OSAgICBjLTAuODg1LTIuMTk4LTIuNTIxLTQuMDExLTQuNjE4LTUuMTE0bC03NC44NTMtMzkuNDA2Yy0yLjU1NS0xLjM0NS01LjU2OC0xLjUyMS04LjI2NC0wLjQ3OUwyNTcuMzU0LDU0Ljk3ICAgIGMtNi4yNzgsMi40MjctMTEuMjU0LDYuOTM0LTE0LjMwMiwxMi41MzZsLTIxLjcwOS0xMC4yOTZsLTMuMjE2LTE5LjU0MmMtMi4xNDItMTMuMDEzLTExLjgzMy0yMy4zMTgtMjQuNjg5LTI2LjI1M0wxNDQuNTUxLDAuMjUxICAgIGMtMy40OTgtMC44LTcuMTYsMC4zMzktOS41OSwyLjk4M2wtMjYuNjc4LDI5LjAzNkw5MS4xNjQsMjYuOGMtMTYuMDc1LTUuMTM2LTMzLjI5MiwwLjc2MS00Mi44NDIsMTQuNjc2TDMyLjMzOSw2NC43NjUgICAgYy02LjI2NCw5LjEyNi04LjIyOSwyMC40OTctNS4zOTMsMzEuMTk2bDkuNTk4LDM2LjIxM2MtMi4yNzgsMC40MTMtNC4zNjYsMS41OTYtNS44NzgsMy4zOTdjLTEuOSwyLjI2NC0yLjcwMiw1LjI1My0yLjE4OSw4LjE2MyAgICBsNjMuNDA2LDM2MGMwLjg0Miw0Ljc4LDQuOTk1LDguMjY2LDkuODQ5LDguMjY2aDIxOC4xMjJjMC4wMDYsMCwwLjAxMiwwLjAwMSwwLjAxOCwwLjAwMWMwLjAwNywwLDAuMDEzLTAuMDAxLDAuMDItMC4wMDFoMzguNDM1ICAgIGM0Ljg1NCwwLDkuMDA2LTMuNDg1LDkuODQ5LTguMjY2bDEuNjQtOS4zMTVsMTAuMzE2LDEwLjY4YzQuMjM3LDQuMzg2LDEwLjE2NSw2LjkwMSwxNi4yNjMsNi45MDFoMzQuMzE3ICAgIGM5LjA3OSwwLDE3LjI0NS01LjM5NywyMC44MDQtMTMuNzUxbDM0LjAxMi03OS44NTRDNDg2LjQ1NCw0MTYuMjE1LDQ4Ni41NzgsNDEzLjc3Nyw0ODUuODc2LDQxMS41MTR6IE0yNjQuNTY1LDczLjYyNCAgICBsNDguOTQ1LTE4LjkxOGw2Ny41ODIsMzUuNTc4TDM5Ny44ODUsMTMySDIzMy41MjJsMjQuMzc2LTI0LjM3NmMyLjAxOC0yLjAxOSwzLjA3OC00LjgwMywyLjkxMi03LjY1MmwtMS4wOTEtMTguNzMyICAgIGMtMC4wMDEtMC4wMjctMC4wMDMtMC4wNTMtMC4wMDUtMC4wOEMyNTkuNTIyLDc3Ljg0OSwyNjEuNDcxLDc0LjgyMSwyNjQuNTY1LDczLjYyNHogTTQ4LjgyOSw3Ni4wODJsMTUuOTgyLTIzLjI4OSAgICBjNC41MTctNi41ODEsMTIuNjYyLTkuMzcyLDIwLjI2NC02Ljk0MWwyMy4yMDYsNy40MTVjMy43MTIsMS4xODYsNy43NzMsMC4xMSwxMC40MDgtMi43NmwyNy4wNzEtMjkuNDY0bDQzLjIyNSw5Ljg3ICAgIGM0Ljg5OCwxLjExOCw4LjU5MSw1LjA0NSw5LjQwNywxMC4wMDNsNC4wNjYsMjQuNzA5YzAuNTMyLDMuMjM2LDIuNjE4LDYuMDA2LDUuNTgyLDcuNDExbDMyLjA1MywxNS4yMDJsMC40OSw4LjQxNyAgICBsLTI4LjA1NywyOC4wNTdjLTEuNTE2LDEuNTE2LTIuNTA0LDMuNDc5LTIuODIsNS41OTlsLTAuMjUyLDEuNjlINTcuMTg4bC0xMC45MS00MS4xNjMgICAgQzQ0LjkzNyw4NS43NzcsNDUuODY2LDgwLjM5OSw0OC44MjksNzYuMDgyeiBNNDMzLjExMyw0OTAuNDEyYy0wLjQxMSwwLjk2NS0xLjM1NCwxLjU4OS0yLjQwMywxLjU4OWgtMzQuMzE3ICAgIGMtMC43MDQsMC0xLjM4OS0wLjI5MS0xLjg3OC0wLjc5N2wtMTAuNzEyLTExLjA4OWMtNC4zNy00LjUyMy0xMC4yMTktNi45MjMtMTYuMjEtNi45MjNjLTIuOTMxLDAtNS44OTcsMC41NzUtOC43MzgsMS43NTggICAgbC0zNS45MjEsMTQuOTQ0bC0zNC4yMTctNDIuMjczbDUuNDE2LTEzLjQ0NGMyLjAwNi00Ljk4LDEuNzEyLTEwLjU1Ni0wLjgwNi0xNS4yOThzLTYuOTczLTguMTA4LTEyLjIyMS05LjIzNmwtMTQuMjQzLTMuMDYgICAgdi0zNi40NThsMTAuMjIxLTE3LjA2YzEuOTAzLTMuMTc3LDQuOTU0LTUuMzE3LDguNTg4LTYuMDI2YzMuNjM1LTAuNzA3LDcuMjY1LDAuMTI4LDEwLjIyNCwyLjM1N2wxLjc4NSwxLjM0NSAgICBjMy41MzksMi42NjcsOC40MSwyLjY4NywxMS45NjksMC4wNDhsMTUuODAxLTExLjcwNGg0MC44NjVjMi44NTQsMCw1LjU3My0xLjIyLDcuNDctMy4zNTNsMTIuNTI3LTE0LjA3NiAgICBjMi4yMDYtMi40NzgsNS43MjQtMy4yNCw4Ljc1OC0xLjg5OWw0Ny45ODYsMjEuMjMzbDIyLjYzLDcyLjk0NUw0MzMuMTEzLDQ5MC40MTJ6Ii8+CgkJPHBhdGggaWQ9IlhNTElEXzY5M18iIGQ9Ik0zOTkuMTk1LDM4Mi43ODNsNC41MDgtMjEuMjUxYzEuMTQ2LTUuNDAyLTIuMzA0LTEwLjcxMS03LjcwNy0xMS44NTcgICAgYy01LjQwMy0xLjE0OS0xMC43MTEsMi4zMDQtMTEuODU3LDcuNzA3bC01LjYzNSwyNi41NmMtMC43MDMsMy4zMTIsMC4zMTgsNi43NTMsMi43MTEsOS4xNDZsMjAuOTE1LDIwLjkxNCAgICBjMS45NTMsMS45NTIsNC41MTIsMi45MjksNy4wNzEsMi45MjlzNS4xMTktMC45NzcsNy4wNzEtMi45MjljMy45MDUtMy45MDUsMy45MDUtMTAuMjM3LDAtMTQuMTQzTDM5OS4xOTUsMzgyLjc4M3oiLz4KCQk8cGF0aCBpZD0iWE1MSURfNjk0XyIgZD0iTTE3Ni41OTIsMTkwLjkzYy0xLjg2LDEuODYtMi45Miw0LjQ0LTIuOTIsNy4wN3MxLjA2LDUuMjEsMi45Miw3LjA2OWMxLjg3LDEuODYsNC40NSwyLjkzMSw3LjA4LDIuOTMxICAgIHM1LjItMS4wNyw3LjA3LTIuOTMxYzEuODYtMS44NTksMi45My00LjQzOSwyLjkzLTcuMDY5cy0xLjA3LTUuMjEtMi45My03LjA3Yy0xLjg2LTEuODYtNC40NC0yLjkzLTcuMDctMi45MyAgICBDMTgxLjAzMiwxODgsMTc4LjQ2MiwxODkuMDcsMTc2LjU5MiwxOTAuOTN6Ii8+CgkJPHBhdGggaWQ9IlhNTElEXzY5NV8iIGQ9Ik0xMjAuNTczLDExNy4wMzljMC4zNDMsMCwwLjY4OS0wLjAxOCwxLjAzOC0wLjA1NGwyMy41NjMtMi40M2M2LjEyNi0wLjYzMywxMS40NDItNC43ODIsMTMuNTQ0LTEwLjU3MSAgICBsOC42MzUtMjMuNzg4YzEuODg0LTUuMTkxLTAuNzk2LTEwLjkyOC01Ljk4OC0xMi44MTJjLTUuMTkxLTEuODg0LTEwLjkyNywwLjc5Ni0xMi44MTIsNS45ODdsLTcuODE3LDIxLjUzNUwxMTkuNTYsOTcuMDkgICAgYy01LjQ5NCwwLjU2Ni05LjQ4OCw1LjQ3OS04LjkyMSwxMC45NzNDMTExLjE2OSwxMTMuMjA4LDExNS41MTEsMTE3LjAzOSwxMjAuNTczLDExNy4wMzl6Ii8+Cgk8L2c+CjwvZz4KCgoKCgoKCgoKCgoKCgoKPC9zdmc+Cg==' /></BUTTON>";

			    // if(bloodGroup != null){
			    // 	if(bloodGroup != null && (bloodGroup === "A" || bloodGroup === "B" || bloodGroup === "AB" || bloodGroup === "O" || bloodGroup === "a" || bloodGroup === "b" || bloodGroup === "ab" || bloodGroup === "o")){
			    // 		if(bloodType != null && (match1.exec(bloodType) || match2.exec(bloodType) || match3.exec(bloodType))){
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

                    postData(bloodGroup, bloodType, nameDonor, phone, pathology, medical, arrival);
									  table.appendChild(column);
									  col7.onclick = function(){
			    						table.removeChild(column);
			   						}
			 					}
			     			}
			     		}
			//     	}
			//     }
			// }
		}
		div.appendChild(table);
		document.body.appendChild(div);
}



function postData(bloodGroup, bloodType, nameDonor, phone, pathology, medical, arrival){
    var data = {name: nameDonor, contact: phone, blood_group: bloodGroup,
                          blood_type: bloodType, use_by_date: '12/12/12', arrival_date: arrival, pathology: pathology};

    console.log(JSON.stringify(data));
    fetch('http://127.0.0.1:5000/show', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(data)
    })
    .then( (response) => {
      const json = response.json();
      console.log('Success:', JSON.stringify(json));
      // reload the page
    });

    // try {
    //   const response = await fetch('http://127.0.0.1:5000/show', {
    //     method: 'POST', // or 'PUT'
    //     body: JSON.stringify(data), // data can be `string` or {object}!
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
    //   const json = await response.json();
    //   console.log('Success:', JSON.stringify(json));
    // } catch (error) {
    //   console.error('Error:', error);
    // }

}

export default App;

// import requests
// r = requests.post("http://yoururl/post", data={'foo': 'bar'})
// # And done.
// print(r.text) # displays the result body.
//
// export default App;
// from flask import Flask, request
// app = Flask(__name__)
// @app.route('/', methods=['POST'])
// def result():
//     print(request.form['foo']) # should display 'bar'
//     return 'Received !' # response to your request.

// let response = await fetch('/article/fetch/post/user', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(user)
// });
//
// let result = await response.json();
// alert(result.message);
//function createGist(opts) {
//   ChromeSamples.log('Posting request to GitHub API...');
//   fetch('https://api.github.com/gists', {
//     method: 'post',
//     body: JSON.stringify(opts)
//   }).then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     ChromeSamples.log('Created Gist:', data.html_url);
//   });
// }
//
// function submitGist() {
//   var content = document.querySelector('textarea').value;
//   if (content) {
//     createGist({
//       description: 'Fetch API Post example',
//       public: true,
//       files: {
//         'test.js': {
//           content: content
//         }
//       }
//     });
//   } else {
//     ChromeSamples.log('Please enter in content to POST to a new Gist.');
//   }
// }
//
// var submitBtn = document.querySelector('button');
// submitBtn.addEventListener('click', submitGist);
