function errorcheck(category) {
    //stores the values of the units being converted from
    let checkFrom = document.getElementById('unitFrom').value;
    let checkTo = document.getElementById('unitTo').value;

    //if the units are the same:
    if (checkFrom == checkTo){
        alert("Units cannot be the same")
        return;
    }
    else if(category == 1){
        massconvert()
    }
    else if(category == 2){
        timeconvert()
    }
    else if(category == 3){
        volconvert()
    }
    else if(category == 4) {
        speedconvert()
    }
}

function massconvert(){
    const convertfrom = document.querySelector("#unitFrom")
    const convertto = document.querySelector("#unitTo")
    const value = document.querySelector("#valueinput")

    const convertfromval = convertfrom.value
    const converttoval = convertto.value
    const valueval = value.value
        
        const options = {
	        method: 'GET',
	        headers: {
		      'X-RapidAPI-Key': '8cb00a3265msh5c010e533cb928ep1be905jsn4d49b4fff1fd',
		      'X-RapidAPI-Host': 'measurement-unit-converter.p.rapidapi.com'
	        }
        };

        var answer;
        fetch(`https://measurement-unit-converter.p.rapidapi.com/mass?value=${valueval}&from=${convertfromval}&to=${converttoval}`, options)
	        .then(response => response.json()) //parse the API response to JSON
	        .then(data => {
                answer = data.value; //stores the calcualted answer into a variable
                document.getElementById("valueoutput").innerHTML = answer; //replaces the answer div
                addData(); // continues to add to the table
            })
	        .catch(err => console.error(err))
}

function timeconvert(){
    const convertfrom = document.querySelector("#unitFrom")
    const convertto = document.querySelector("#unitTo")
    const value = document.querySelector("#valueinput")

    const convertfromval = convertfrom.value
    const converttoval = convertto.value
    const valueval = value.value

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8cb00a3265msh5c010e533cb928ep1be905jsn4d49b4fff1fd',
            'X-RapidAPI-Host': 'measurement-unit-converter.p.rapidapi.com'
        }
    };
    
    fetch(`https://measurement-unit-converter.p.rapidapi.com/time?value=${valueval}&from=${convertfromval}&to=${converttoval}`, options)
    .then(response => response.json())
	.then(data => {
        answer = data.value;
        document.getElementById("valueoutput").innerHTML = answer;
        addData();
    })
	.catch(err => console.error(err))
}

function speedconvert(){
    const convertfrom = document.querySelector("#unitFrom")
    const convertto = document.querySelector("#unitTo")
    const value = document.querySelector("#valueinput")

    const convertfromval = convertfrom.value
    const converttoval = convertto.value
    const valueval = value.value
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8cb00a3265msh5c010e533cb928ep1be905jsn4d49b4fff1fd',
            'X-RapidAPI-Host': 'measurement-unit-converter.p.rapidapi.com'
        }
    };
    
    fetch(`https://measurement-unit-converter.p.rapidapi.com/speed?value=${valueval}&from=${convertfromval}&to=${converttoval}`, options)
        .then(response => response.json())
        .then(data => {
            answer = data.value;
            document.getElementById("valueoutput").innerHTML = answer;
            addData();})
        .catch(err => console.error(err));
}

function volconvert(){
    const convertfrom = document.querySelector("#unitFrom")
    const convertto = document.querySelector("#unitTo")
    const value = document.querySelector("#valueinput")

    const convertfromval = convertfrom.value
    const converttoval = convertto.value
    const valueval = value.value
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8cb00a3265msh5c010e533cb928ep1be905jsn4d49b4fff1fd',
            'X-RapidAPI-Host': 'measurement-unit-converter.p.rapidapi.com'
        }
    };
    
    fetch(`https://measurement-unit-converter.p.rapidapi.com/volume?value=${valueval}&from=${convertfromval}&to=${converttoval}`, options)
        .then(response => response.json())
        .then(data => {
            answer = data.value;
            document.getElementById("valueoutput").innerHTML = answer;
            addData();})
        .catch(err => console.error(err));
}

function addData(){
    //writes all user inputted data to tablr that can ve referenced to later
    var inputUnitFrom = document.getElementById("unitFrom").value;
    var inputUnitTo = document.getElementById("unitTo").value;
    var inputValueFrom = document.getElementById("valueinput").value;
    var inputValueTo = document.getElementById("valueoutput").innerHTML;

    //creates <tr> tag
    var newRow = document.createElement("tr");
    //creates <td> tag
    var newCell = document.createElement("td"),
     newCell2 = document.createElement("td"),
     newCell3 = document.createElement("td"),
     newCell4 = document.createElement("td");
    
    newCell.innerHTML = inputUnitFrom;
    newCell2.innerHTML = inputUnitTo;
    newCell3.innerHTML = inputValueFrom;
    newCell4.innerHTML = inputValueTo;
    newRow.append(newCell);
    document.getElementById("unitRow").appendChild(newRow);

    newRow.append(newCell2);
    document.getElementById("unitRow").appendChild(newRow);

    newRow.append(newCell3);
    document.getElementById("unitRow").appendChild(newRow);

    newRow.append(newCell4);
    document.getElementById("unitRow").appendChild(newRow);
}
