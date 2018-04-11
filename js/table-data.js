var members = data.results[0].members;

var rep = document.getElementById("rep");
var dem = document.getElementById("dem");
var ind = document.getElementById("ind");

rep.addEventListener("click", filterParty);
dem.addEventListener("click", filterParty);
ind.addEventListener("click", filterParty);

var dropDownSelector = document.getElementById("filter-state");
dropDownSelector.addEventListener("change", filterParty);

generateTable(members);

function generateTable(membersArray) {

    var div = document.getElementById("tbody-outlet");

    div.innerHTML = "";

    for (var i = 0; i < membersArray.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var link = document.createElement('a');


        if (membersArray[i].middle_name == null) {
            var name = membersArray[i].first_name + " " + membersArray[i].last_name;
        } else {
            var name = membersArray[i].first_name + " " + membersArray[i].middle_name + " " + membersArray[i].last_name;
        }

        var party = membersArray[i].party;
        var state = membersArray[i].state;
        var seniority = membersArray[i].seniority;
        var votes = membersArray[i].votes_with_party_pct;
        var url = membersArray[i].url;
        link.href = url;

        link.append(name);
        td1.appendChild(link);

        td2.append(party);
        td3.append(state);
        td4.append(seniority);
        td5.append(votes);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        div.appendChild(tr);
    }
}

function stateList() {
    var allMemberState = [];
    var uniqueState = [];
    for (i = 0; i < members.length; i++) {
        allMemberState.push(members[i].state);
    }
    allMemberState.sort();
    
    for (i = 0; i < allMemberState.length; i++) {
        if (!uniqueState.includes(allMemberState[i])) {
            uniqueState.push(allMemberState[i]);
        }
    }

    for (i = 0; i < uniqueState.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', uniqueState[i]);
        option.innerHTML = uniqueState[i];
        dropDownSelector.appendChild(option)
    }

}

stateList();
function filterParty() {

    var resultsParty = [];
    var selectedState = document.getElementById('filter-state').value;
    for (var i = 0; i < members.length; i++) {
        var currentMember = members[i];
        if (selectedState === currentMember.state || selectedState === 'ALL') {
            if (rep.checked && currentMember.party === "R") {
                resultsParty.push(currentMember);
            } else if (dem.checked && currentMember.party === "D") {
                resultsParty.push(currentMember);
            } else if (ind.checked && currentMember.party === "I") {
                resultsParty.push(currentMember);
            } else if (rep.checked == false && dem.checked == false && ind.checked == false) {
                resultsParty.push(currentMember);

            }
        }
    }
    
    generateTable(resultsParty);
}
