function onResponse(r){
    if(r.ok){
        return r.text();
    }else{
        throw "Error en la llamada Ajax.";
    }
}

function onSuccess(r){
    document.getElementById('r1').innerHTML = r;
}

function getAnyData(){
    const data = new FormData();
    data.append('dato1', 'texto');
    data.append('dato2', 125);

    fetch('backend.php', {
        method: 'POST',
        body: data
    })
    .then( response => onResponse(response) )
    .then( result => onSuccess(result) )
    .catch( err => console.log(err) );
}
