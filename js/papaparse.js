let csvFile1 = document.getElementById("csv_file1");
let csvForm = document.getElementById("csv_form");
let csvTable = document.getElementById("csvTable");
csvForm.addEventListener("submit", function (e) {
  e.preventDefault();
  Papa.parse(csvFile1.files[0], {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      let a = JSON.stringify(results);
      localStorage.setItem("csv1", a);
      let csvOp1 = localStorage.getItem("csv1");
      let csvop2 = JSON.parse(csvOp1);
      for (let i = 0; i < csvop2.data.length; i++) {
        var row1 = csvTable.insertRow();
        var cell1 = row1.insertCell();
        var cell2 = row1.insertCell();
        var cell3 = row1.insertCell();
        var cell4 = row1.insertCell();
        var cell5 = row1.insertCell();
        cell1.innerHTML = csvop2.data[i].NAME;
        cell2.innerHTML = csvop2.data[i].MATHS;
        cell3.innerHTML = csvop2.data[i].SOCIAL;
        cell4.innerHTML = csvop2.data[i].ENGLISH;
        cell5.innerHTML = csvop2.data[i].TELUGU;
      }
    },
  });
});
//show data in table
// function showCsvdata() {
//   console.log("iam working");
//   let csvTablecount = csvTable.rows.length();
//   for (let i = csvTablecount - 1; i > 0; i--) {
//     csvTable.deleteRow(i);
//   }
//   let csvOp1=localStorage.getItem("csv1");
//   let csvop2=json.stringify(csvOp1);
//   for(let i=0;i<csvop2.length;i++){
//     var row1=csvTable.insertRow();
//     var cell1=row1.insertCell();
//     var cell2=row1.insertCell();
//     var cell3=row1.insertCell();
//     var cell4=row1.insertCell();
//     var cell5=row1.insertCell()
//     cell1.innerHTML=csvop2[i].name;
//     cell2.innerHTML=csvop2[i].maths;
//     cell3.innerHTML=csvOp1[i].social;
//     cell4.innerHTML=csvop2[i].english;
//     cell5.innerHTML=csvop2[i].telugu;
//   }
// }
