function checkData() {    
    if (document.getElementById('name').value == "") {
        alert('please fill in Name');
        return false;
    }

    if (document.getElementById('email').value == "") {
        alert('please fill in Email');
        return false;
    }

    if (document.getElementById('phone').value == "") {
        alert('please fill in Phone');
        return false;
    }
    if (document.getElementById('controlSelect').value == "") {
        alert('please select one');
        return false;
    }

    alert('Success');
    return true;
}