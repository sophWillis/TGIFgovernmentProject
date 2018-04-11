var members = data.results[0].members;

//Count for each party

//Percentage for votes w/ party
var = republicV [];
var = democraticV [];
var = independentV [];

for (var i = 0; i < members.length; i++) {
    var party = members[i].party;
    var votes = members[i].votes_with_party_pct;
}

function filterParty() {

    var partyR = [];
    var partyD = [];
    var partyI = [];
    
    for (var i = 0; i < members.length; i++) {
        var currentMember = members[i];
        
            if (currentMember.party === "R") {
                partyR.push(currentMember);
            } else if (currentMember.party === "D") {
                partyD.push(currentMember);
            } else if (currentMember.party === "I") {
                partyI.push(currentMember);
            }
        }
    
console.log(partyR);