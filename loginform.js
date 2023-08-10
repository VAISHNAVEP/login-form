const submitBtn = document.getElementById('submitBtn');
const nameerror = document.getElementById('nameerror');
submitBtn.addEventListener('click', (e)=>{
e.preventDefault();

if(validatename()){
    alert("Form Submitted Succesfully");
}

});

function validatename(){
    let name = document.getElementById('name').value;

    if(name.length == 0){
        nameerror.innerHTML = "Name Is Required";
        return false;
    }
        if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            nameerror.innerHTML = "Write Full Name";
            return false;
        
    }
    nameerror.innerHTML = "";
    return true;
}