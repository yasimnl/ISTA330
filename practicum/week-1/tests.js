
const q1 = [{
    input: [5, 6, 1],
    output: [5, 11, 12]
},
{
    input: [43, -3, -39],
    output: [43, 40, 1]
}];

let result = [{
    functionName: 'runningSum',
    functionCode: runningSum,
    trials: [],
    cases: q1
}];

function isEqual(a1, a2){
    
    if(!a1 || !a2 || a1.length !== a2.length) {
        return false;
    }
    for(let i = 0; i < a1.length; i++) {
        if(a1[i] !== a2[i]) {
            return false;
        }
    }
    return true;
}

for(let f of result){
    for(let x of f.cases){
        let output = f.functionCode(x.input);
        let trial = {status: 'failed',
         input: x.input,
        expected: x.output, 
        output: output};
        if(isEqual(x.output, output)) {
            trial.status = 'success'
        }
        f.trials.push(trial);
    }
}
