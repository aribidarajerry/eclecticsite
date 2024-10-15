$(document).ready(function() {
	//  Still under development 
	//  Still under development 
	//  Still under development 
	
	let firstname = $("#firstname");
	let lastname = $("#lastname");
	let age = $("#age");
	let gender = null;
	let male = $("#male");
	let female = $("#female")
	male.click(function() {
		gender = "Male";
	})
	female.click(function() {
		gender = "Female";
	})
	let register = false;
	// Add data to a class from an object using this code
	let myData = (myId, obj) => {
		let str = "";
		for (let [key, value] of Object.entries(obj)) {
			if (value == "" || gender == null) {
				alert("Please enter a valid input!");
				break;
			} else {
				str += "<td>" + value + "</td>";
				register = true;
			}
		}
		str = "<tr>" + str + "</tr>";
		let table = $(myId)
		$(table).append(str)
		str = "";
		if (register != false) {
			registerStudent(firstname.val().trim(), lastname.val().trim(), age.val(), gender)
			alert(verifiedStudents())
		}
	}
	let submit = $("#submit");
	submit.click(function(event) {
		event.preventDefault()
		let person = {
			firstName: firstname.val(),
			lastName: lastname.val(),
			age: age.val(),
			gender: gender
		}
		myData("#my", person);
		firstname.val("");
		lastname.val("");
		age.val("");
		gender = null
		male.val("");
		female.val("");
	})


	let n = $("#student");
	let d = $("#data");
	let view = $("#dataView");

	let getStudent = (name, data) => {
		if (register != false) {
			let first = studentData(name.val().trim())
			let p = first.getData(data.val().trim())
			alert(p)
		}
	}
	view.click(function(event) {
		event.preventDefault()
		getStudent(n, d)
		n.val("");
		d.val("");
	})
})