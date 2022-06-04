const fs = require('fs');
const allStepNames = fs.readFileSync('./allStepNames.json')
let allSteps = JSON.parse(allStepNames)

// This function will take an array of arrays of StepsIDs, and will return another array of arrays containing the "Step Name (StepID)" taking the values from an array of objects with ID and Name.


function nextStepsWithNames (stepIds){
arrayFinal = [];
    for(i=0; i<allNextSteps.length ; i++){
        let tempArrDos = [];
        for (j=0;j<allNextSteps[i].length;j++){
            let objetoDelID = allSteps.filter(objetoPaso => objetoPaso.id == allNextSteps[i][j])
            objetoDelID.forEach (objeto => tempArrDos.push(`${objeto.name} (${objeto.id})`))
        };
        arrayFinal.push(tempArrDos)
    };
return arrayFinal
}

let allNextSteps = [[1,2,3],[2],[2,3],[3]]
console.log(nextStepsWithNames(allNextSteps))