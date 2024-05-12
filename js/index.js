var bookNameInput = document.getElementById("sn");
var bookUrlInput = document.getElementById("su");
var allBook = [];
var idxUpdate=0;

function addBook (){

    var bookInformation = {
      name : bookNameInput.value,
      url : bookUrlInput.value,
    }
     
    if (!bookUrlInput.value.match(/^(http:\/\/www\.|https:\/\/www\.|ftp:\/\/www\.|www\.)?[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+(\/[^\s]*)?$/)) {
      alert("Invalid URL. Please enter a valid URL.");
      return;
    }

  allBook.push( bookInformation );

  console.log(allBook);
  clearValue();
  displayValue();
}


function clearValue(){
  bookNameInput.value = " ";
  bookUrlInput.value = " ";
}



displayValue();
function displayValue(){
  var cartona = "";

  for(var i=0; i<allBook.length; i++){
    cartona = cartona + `
    <tr class="text-center">
      <td>` + [i] + `</td>
      <td>` + allBook[i].name + `</td>
      <td>` + allBook[i].url + `</td>
      <td>
        <button  onclick="visitBook( ${ i } )" class="btn btn-success">vist</button>
      </td>
      <td>
        <button onclick="deleteBook( ${ i } )" class="btn btn-danger">delete</button>
      </td>
      <td>
        <button onclick="editBook( ${ i } )" class="btn btn-info">Edit</button>
      </td>
    </tr>`

  }

  document.getElementById("tbody").innerHTML = cartona;
}


function deleteBook( idx ){

  // console.log("deleted..");
  allBook.splice( idx , 1)
  displayValue(); 
}

function editBook( idx ){
  bookNameInput.value = allBook[ idx ].name;
  bookUrlInput.value = allBook[ idx ].url;

  document.getElementById("addBt").classList.add("d-none")
  document.getElementById("updateBt").classList.remove("d-none")

  document.getElementById("updateBt").dataset.index = idx;
}



function updateBook( ) {
 
  var bookInformation = {
    name : bookNameInput.value,
    url : bookUrlInput.value,
  }

  allBook.splice( idxUpdate , 1 , bookInformation );

  
  document.getElementById("addBt").classList.remove("d-none")
  document.getElementById("updateBt").classList.add("d-none")
  displayValue();
}





