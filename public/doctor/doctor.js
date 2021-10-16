function getData(e){
    e.preventDefault();
    var pat_id=document.getElementById('pid').value;
    console.log(pat_id);
}

fetch("http://localhost:3000/getddata")
  .then(function (response) {
    return response.json();
  })
  .then(function (s) {
   console.log(s);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });