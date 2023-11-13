
function checkInputs() {
  var fromInput = document.getElementById("from");
  var toInput = document.getElementById("to");


  var fromValue = fromInput.value.trim().toLowerCase();
            var toValue = toInput.value.trim().toLowerCase();

            if (fromValue === "" || toValue === "") {
                alert("Both 'from' and 'to' fields must not be empty.");
            } else {
              fromValue = fromValue.replace(/\s/g, "");
              toValue = toValue.replace(/\s/g, "");
    
                var from = fromValue;
                var to = toValue;
                search(from,to);

              
            }
}

function search(from,to){
  var metroprice = document.getElementById("mp");
  var metrostation = document.getElementById("ms");
  var exitstation = document.getElementById("ems");
  var busprice = document.getElementById("bp");
  var busstop = document.getElementById("nbs");
  var exitstop = document.getElementById("ebs");
  var busnmbr = document.getElementById("bsno");
  var autoprice = document.getElementById("ap");
  var cabprice = document.getElementById("cp");

  switch(from,to){
    case "jamia","jamiahamdard":
      metroprice.innerHTML ="20";
      metrostation.innerHTML ="JAMIA MILLIA ISLAMIA";
      exitstation.innerHTML="NEHRU ENCLAVE";
      busprice.innerHTML ="15";
      busstop.innerHTML="JAMIA MILLIA ISLAMIA";
      exitstop.innerHTML="CENTRAL LIBRARY";
      busnmbr.innerHTML ="463";
      autoprice.innerHTML= "120" ;
      cabprice.innerHTML= "160" ;
      break;

      case "nehruenclave","kalindipark":
        metroprice.innerHTML ="30";
      metrostation.innerHTML ="NEHRU ENCLAVE";
      exitstation.innerHTML="KALINDI KUNJ";
      busprice.innerHTML ="15";
      busstop.innerHTML="Nehru Place crossing";
      exitstop.innerHTML="Kalindi Park";
      busnmbr.innerHTML ="463";
      autoprice.innerHTML= "100" ;
      cabprice.innerHTML= "140" ;
      break;

      case "jamiahamdard","jamamasjid":
        metroprice.innerHTML ="40";
      metrostation.innerHTML ="GOVIND PURI";
      exitstation.innerHTML="JAMA MASJID";
      busprice.innerHTML ="15";
      busstop.innerHTML="CENTRAL LIBRARY";
      exitstop.innerHTML="JAMA MASJID";
      busnmbr.innerHTML ="311A, 445A, 469, 343A";
      autoprice.innerHTML= "220-300" ;
      cabprice.innerHTML= "350-400" ;
      break;

      
      case "jamiahamdard","nehruplace":
        metroprice.innerHTML ="10";
      metrostation.innerHTML ="GOVIND PURI";
      exitstation.innerHTML="NEHRU PLACE";
      busprice.innerHTML ="15";
      busstop.innerHTML="CENTRAL LIBRARY";
      exitstop.innerHTML="NEHRU PLACE";
      busnmbr.innerHTML ="311A, 445A, 469, 243A";
      autoprice.innerHTML= "100-160" ;
      cabprice.innerHTML= "160-220" ;
      break;

      case "jamiahamdard","connaughtplace":
        case "jamiahamdard","cp":
        metroprice.innerHTML ="40";
      metrostation.innerHTML ="GOVIND PURI";
      exitstation.innerHTML="RAJIV CHOWK";
      busprice.innerHTML ="15";
      busstop.innerHTML="CENTRAL LIBRARY";
      exitstop.innerHTML="CONNAUGHT PLACE";
      busnmbr.innerHTML ="311A, 445A, 469, 243A";
      autoprice.innerHTML= "220-300" ;
      cabprice.innerHTML= "300-360" ;
      break;

    default:
      alert('These locations are not available in our server');
      break;
  }
  

}


  function goToIndexPage() {
    window.location.href = "index.html";
  }