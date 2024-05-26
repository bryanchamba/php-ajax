function onSuccess(r){
    document.getElementById('result').innerHTML = r;
}

function getAnyData(){
    fetch('backend.php')
        .then( response => response.text() )
        .then( result => onSuccess(result) )
        .catch( err => console.log(err) );
}

document.addEventListener('DOMContentLoaded', function() {
    getAnyData();
});