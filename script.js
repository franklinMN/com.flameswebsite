
let firstPerson;
let secondPerson;
let resultDiv;
let FLAMES;

function refineText() {

    firstPerson = firstPerson.replace(/\s/g, '').toLowerCase();
    secondPerson = secondPerson.replace(/\s/g, '').toLowerCase();
}

function cancelCommonLetters() {

    let fp_array = [...firstPerson];
    let sp_array = [...secondPerson];

    for( let i=0 ; i < fp_array.length ; i++ ){

        let ch = fp_array[i];
        
        if( sp_array.includes(ch) ) {
            fp_array[i] = '*';
            sp_array[sp_array.indexOf(ch)] = '*';
        }

    }

    // console.log(fp_array);
    // console.log(sp_array);

    firstPerson = fp_array.join('').replace(/[*]/g, '');
    secondPerson = sp_array.join('').replace(/[*]/g, '');

}

function calculateFlames(){

    let totalLength = firstPerson.length + secondPerson.length;

    // console.log(totalLength);
    // if(totalLength === 0) return 'Siblings';

    while( FLAMES.length > 1 ){

        let pos = totalLength % FLAMES.length;
        if( pos === 0 ){
            FLAMES = FLAMES.splice( 0, FLAMES.length - 1 );
        }else if ( pos === 1 ) {
            FLAMES = FLAMES.splice( 1 , FLAMES.length );
        }else {
            // placing is reverse to rotating while iterating the flames
            FLAMES = FLAMES.splice( pos ).concat(FLAMES.splice( 0, pos - 1 ));
        }

        // console.log(FLAMES);
        
    }

    // console.log(FLAMES);
    // const result = FLAMES[0];
    let meaning = '';
    switch (FLAMES[0]) {
        case 'F':
            meaning = 'Friends';
            break;
        case 'L':
            meaning = 'Lovers';
            break;
        case 'A':
            meaning = 'Affectionate';
            break;
        case 'M':
            meaning = 'Marriage';
            break;
        case 'E':
            meaning = 'Enemies';
            break;
        case 'S':
            meaning = 'Siblings';
            break;
        default:
            meaning = 'Unknown';
    }
    return meaning;
}

function submitForm() {

    FLAMES = [ 'F', 'L', 'A', 'M', 'E', 'S' ]

    firstPerson = document.getElementById('input1').value;
    secondPerson = document.getElementById('input2').value;
    resultDiv = document.getElementById('result');

    refineText();
    cancelCommonLetters();
    let result = calculateFlames();
    resultDiv.innerHTML = result;



    // console.log(firstPerson);
    // console.log(secondPerson);
}