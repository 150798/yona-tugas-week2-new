fetch('user2.json')
  .then(response => response.json())
  .then(json => {
    console.log("json", json)
    console.log(json[0].name);
    users(json)
  })
  // handling error
  .catch(err => console.log(err))

function users(dataUser) {
  console.log('dataUser', dataUser);
  for (let index = 0; index < dataUser.length; index++) {
    const elements = dataUser[index];
    console.log("elements", elements);
    // const p = document.createElement('p');
    // p.textContent = elements.name
    // p.style.marginLeft = '12px'
    // document.body.append(p); 
  }

  
let output = ''

  dataUser.forEach(element => {
    output += `
      <tr>
        <td>${element.name}</td>
        <td>${element.work}</td>
        <td>${element.salary}</td>
        <td>
            <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modaledit" onclick="edit(${element.id})" 
            style="
            background-color: transparent;
            border-color: transparent;  ">
              <img src="assets/edit.png" style="
              height: 25px;
              width: 25px;">  
            </a>
        
          
            <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modaldelete" onclick="konfirmasi(${element.id})" 
            style="
            background-color: transparent;
            border-color: transparent;  ">
          <img src="assets/delete.png" style="
          height: 25px;
          width: 25px;"> </a>
        
        
        </td>
      </tr>
    `;
  } )
  
  const bodyTable = document.getElementById('body-table')
  console.log('body table:', bodyTable);
  bodyTable.innerHTML = output
  console.log('print element', dataUser);

  console.log(output);

}


function edit(id){

  //bersihkan data sebelum memanggil data baru
  $("#editname").val("");
  $("#editwork").val("");
  $("#editsalary").val("");


  
  fetch('user2.json')
  .then(response => response.json())
  .then(json => {
    console.log("json", json[id-1]);
    $("#editname").val(json[id-1].name);
    $("#editwork").val(json[id-1].work);
    $("#editsalary").val(json[id-1].salary);

  })
  // handling error
  .catch(err => console.log(err))

}

function konfirmasi(id){
    fetch(id+'.json')
    .then(response => response.json())
    .then(json => {
      console.log("json", json);
      $("#deletename").html(json.name);

    })
    // handling error
    .catch(err => console.log(err))

}
