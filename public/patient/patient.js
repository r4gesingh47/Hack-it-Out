


fetch('http://localhost:3000/getpdata')
  .then(function (response) {
    return response.json();
  })
  .then(function (s) {
    s.forEach(element => {
     add_record(element);   
    });
    add_details(s);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
setTimeout(300);
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

function add_details(e)
{
    var cont=`
    <p>Patient Id : ${e[0].pid}</p>
    <p>Name : ${e[0].name}</p>
    <p>Age : ${e[0].age}</p>
    <p>Gender : ${e[0].gender}</p>
    <p>Address :  ${e[0].address}</p>
    <p>Phone No : ${e[0].phoneno}</p>
    `;
    document.getElementById('detail').innerHTML=cont;
}

