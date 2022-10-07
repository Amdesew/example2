function submit(){
	name = document.getElementById('name');
	password = document.getElementById('password');

	if (name.value == "seifu" || password.value == "baks"){
		window.alert('Administer Database Activated')
		window.location = "test2.html";
	}

	else if(name.value == "" || password.value == ""){
		window.alert("Fill In Before You Sign In")
	}

	else{
		window.alert('Administer Database Disactivated');
	}
}