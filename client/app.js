function getBathValue(){
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms){
        if(uiBathrooms[i].checked){
            return parseInt(i)+1
        }
    }
    return -1
}

function getBHKValue(){
    var uiBHK = document.getElementsByName("uiBHK")
    for(var i in uiBHK){
        if(uiBHK[i].checked){
            return parseInt(i)+1;
        }
    }
    return -1
}

function onClickedEstimatePrice(){
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = document.getElementById("uiBHK");
    var bathrooms = document.getElementById("uiBathrooms");
    var location = document.getElementById("uiLocations");
    var estiPrice = document.getElementById("uiEstimatedPrice");

    var url = // missing

    $.post(url, {
        total_sqft: parseFloat(sqqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    },function(data, status) {
        console.log(data.estimated_price);
        estiPrice.innerHTML = "<h2>" + data.estimated_price.toString() + "Lakh</h2>";
        console.log(status);
    });

}

function onPageLoad(){
    console.log(" document loaded ");
    var url = ; // missing URL at the moment
    $.get(url, function(data, status){
        console.log("got response for get_location_names request");
        if(data){
            var location = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations){
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
}

window.onload = onPageLoad;