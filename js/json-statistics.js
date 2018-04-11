var statistics = {

    "glance": [
        {
            "party": "Republicans",
            "reps": 0,
            "votes_with_party_pct": 0,
          },
        {
            "party": "Democrats",
            "reps": 0,
            "votes_with_party_pct": 0,
          },
        {
            "party": "Independents",
            "reps": 0,
            "votes_with_party_pct": 0,
        },
        {
            "party": "Total",
            "reps": 0,
            "votes_with_party_pct": 0,
        }
    ]
};

var members = data.results[0].members;

var summary = statistics.glance;

generatePartyCount(members, summary);


generateTable(summary);


function generatePartyCount(membersArray, membersSummary) {
    
   var republic = 0;
    var republicanVotes = 0;
    var repVotesAvg = 0;
   var democratic = 0;
    var democraticVotes = 0;
   var independent = 0;
    var independentVotes = 0;
    
    for (var i = 0; i < membersArray.length; i++){
        membersArray[i].party;
        membersArray[i].votes_with_party_pct;
        if(membersArray[i].party == 'R'){
            republic += 1;
            republicanVotes += membersArray[i].votes_with_party_pct;
            repVotesAvg = republicanVotes / republic;
//            console.log(republicanVotes)
        } else if (membersArray[i].party == 'D') {
            democratic += 1;
            democraticVotes +=
            membersArray[i].votes_with_party_pct;
            demVotesAvg = democraticVotes / democratic;
        } else {
            independent += 1;
            independentVotes +=
            membersArray[i].votes_with_party_pct;
            indVotesAvg = independentVotes / independent;
        }
    }
    
parseFloat(Math.round(republic*100/100).toFixed(2));
parseFloat(Math.round(democratic*100/100).toFixed(2));
parseFloat(Math.round(independent*100/100).toFixed(2));
parseFloat(Math.round(republic*100/100).toFixed(2));
    
    membersSummary[0].reps = republic;
    membersSummary[1].reps = democratic;
    membersSummary[2].reps = independent;
    membersSummary[3].reps = republic + democratic + independent;
    
    membersSummary[0].votes_with_party_pct = repVotesAvg;
    membersSummary[1].votes_with_party_pct = demVotesAvg;
    membersSummary[2].votes_with_party_pct = indVotesAvg;
    membersSummary[3].votes_with_party_pct = (republicanVotes + democraticVotes + independentVotes) / (republic + democratic + independent);
}

function generateTable(membersSummary) {
    
    var tbody = document.getElementById("at-a-glance");
    
    tbody.innerHTML = "";
    
    for (var i = 0; i < membersSummary.length; i++) {
        
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        
        var party = membersSummary[i].party;
        var reps = membersSummary[i].reps;
        var votes = membersSummary[i].votes_with_party_pct;
        var total = membersSummary[i].total;
        
        td1.textContent = party;
        td2.textContent = reps;
        td3.textContent = votes;
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        
        tbody.appendChild(tr);
    }
    
}


