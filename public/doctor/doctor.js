function getData(e){
    e.preventDefault();
    var pat_id=document.getElementById('pid').value;
    const data={
      pid:pat_id
    }

    fetch('http://localhost:3000/getpatient', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (s) {
    s.forEach(element => {
      add_record(element);   
     });
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
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


  function add_record(e)
  {
      for(var i=0;i<e.records.length;i++)
      {
          var div=`
          <div class="record ${e.records[i].date}">
                      <p>Date : ${e.records[i].date}</p>
                      <p>Location : ${e.records[i].location}</p>
                      <p>Age at Visit : ${e.records[i].age}</p>
                      <p>Doctor Consulted : ${e.records[i].doctor}</p>
                      <p>Reason : ${e.records[i].reason}</p>
                      <p>Finding : ${e.records[i].finding}</p>
                      <p>Prescription : ${e.records[i].presc}</p>
          </div>
          `
          document.getElementById('records').innerHTML+=div;
      }
  }
  