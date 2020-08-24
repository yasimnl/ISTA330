
const q1 = [{
    input: [[5, 6, 1]],
    output: [5, 11, 12]
},
{
    input: [[43, -3, -39]],
    output: [43, 40, 1]
}];

const q2 = [{
    input: [[5, 6, 1], 6],
    output: true
},
{
    input: [[3, 5, 2], 6],
    output: false
}];

const q3 = [{
    input: [[5, 6, 1]],
    output: 0
},
{
    input: [[3, 5, 2, 8]],
    output: 3
}];

const q4 = [{
    input: ['asDf', 'dsssaaFa'],
    output: 6
},
{
    input: ['te', 'TTTER'],
    output: 0
}];

let result = [{
    functionName: 'runningSum',
    functionCode: runningSum,
    trials: [],
    cases: q1
},
{
    functionName: 'canGetEqualCookies',
    functionCode: canGetEqualCookies,
    trials: [],
    cases: q2
},
{
    functionName: 'numberOfOrderedPairs',
    functionCode: numberOfOrderedPairs,
    trials: [],
    cases: q3
},
{
    functionName: 'howManyCommon',
    functionCode: howManyCommon,
    trials: [],
    cases: q4
}
];

function isEqual(a1, a2){
    const t = typeof(a1);
    if((t === 'boolean') || (t === 'number') || (t === 'string')){
        return a1 === a2;
    }
    
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
        let output = f.functionCode(...x.input);
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



function showTestsResults() {
    for (x of result) {
        let newDiv = document.createElement("div");
        let functionName = document.createElement("div");
        let name = document.createTextNode(x.functionName + ":");
        functionName.appendChild(name);
        functionName.className = 'functionName';
        newDiv.className = 'functionDiv';
        newDiv.appendChild(functionName);
        let ol = document.createElement('ol');
        for(y of x.trials) {
            let li = document.createElement('li');
            let content = document.createTextNode(`${y.status}`);
            li.appendChild(content);
            let br1 = document.createElement('br');
            li.appendChild(br1);
            let input = document.createTextNode(`input: ${y.input}`);
            li.appendChild(input);
            let br2 = document.createElement('br');
            li.appendChild(br2);
            let output = document.createTextNode(`output: ${y.output}`);
            li.appendChild(output);
            let br3 = document.createElement('br');
            li.appendChild(br3);
            let expected = document.createTextNode(`expected: ${y.expected}`);
            li.appendChild(expected);
            if(y.status === 'failed') {
                li.className = 'failed';
            } else {
                li.className = 'success';
            }                                       
            ol.appendChild(li);
        }
        newDiv.appendChild(ol);
        document.body.appendChild(newDiv);
    }
}


