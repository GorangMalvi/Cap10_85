// fill in javascript code here
var form = document.querySelector("form");
form.addEventListener("submit",function(){
    formData()
})
var formArr=[]
function formData(){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var employeeId = document.getElementById("employeeID").value;
    var department = document.getElementById("department").value;
    var experience = document.getElementById("exp").value;
    var emailAdd = document.getElementById("email").value;
    var mobileNum = document.getElementById("mbl").value;
    var objForm ={
        name :name,
        employeeId :employeeId,
        department :department,
        experience :experience,
        emailAdd :emailAdd,
        mobileNum :mobileNum
    }
    formArr.push(objForm);
    advForm(formArr)
  
}   
function advForm(formArr){
    document.querySelector("tbody").innerHTML= ""
    formArr.forEach(function(ele,i) {
        var tr =document.createElement("tr");

        var td1 = document.createElement("td");
        td1.textContent = ele.name;
        var td2 = document.createElement("td");
        td2.textContent = ele.employeeId;
        var td3 = document.createElement("td");
        td3.textContent= ele.department;
        var td4 = document.createElement("td");
        td4.textContent = ele.experience; 
        var td5 = document.createElement("td");
        td5.textContent = ele.emailAdd
        var td6 = document.createElement("td")
        td6.textContent = ele.mobileNum
        var td7 = document.createElement("td")
        if(ele.experience<=1){
            td7.textContent = "Fresher"
        };
        if(ele.experience>1&&ele.experience<=5){
            td7.textContent="Junior"
        };
        if(ele.experience>5){
            td7.textContent="Senior"
        }
        var btn = document.createElement("button");
        btn.textContent="Delete"
        btn.addEventListener("click",function(){
            deleteData(i)

        })
    
        tr.append(td1,td2,td3,td4,td5,td6,td7,btn)
        document.querySelector("tbody").append(tr)
        
    });
}
function deleteData(i){
    formArr.splice(i,1);
    advForm(formArr)
}