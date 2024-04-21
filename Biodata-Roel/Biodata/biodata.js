function submitForm() {
    // Get form inputs
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var zipcode = document.getElementById("zipcode").value;
    var age = document.getElementById("age").value;
    var maritalStatus = document.getElementById("maritalStatus").value;
    var dateOfBirth = document.getElementById("date").value;
    var religion = document.getElementById("religion").value;
    var nationality = document.getElementById("nationality").value;
    var father = document.getElementById("father").value;
    var fatherOccupation = document.getElementById("father-Occupation").value;
    var mother = document.getElementById("mother").value;
    var motherOccupation = document.getElementById("mother-Occupation").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var noSiblings = document.getElementById("noSiblings").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    // Update output biodata
    document.getElementById("output1").innerText = name;
    document.getElementById("output2").innerText = address;
    document.getElementById("output3").innerText = zipcode;
    document.getElementById("output4").innerText = age;
    document.getElementById("output5").innerText = maritalStatus;
    document.getElementById("output6").innerText = dateOfBirth;
    document.getElementById("output7").innerText = religion;
    document.getElementById("output8").innerText = nationality;
    document.getElementById("output9").innerText = father;
    document.getElementById("output10").innerText = fatherOccupation;
    document.getElementById("output11").innerText = mother;
    document.getElementById("output12").innerText = motherOccupation;
    document.getElementById("output13").innerText = email;
    document.getElementById("output14").innerText = phone;
    document.getElementById("output15").innerText = education;
    document.getElementById("output16").innerText = noSiblings;
    document.getElementById("output17").innerText = height;
    document.getElementById("output18").innerText = weight;

    // Show the Output_Biodata container
    var outputBiodata = document.querySelector('.Output_Biodata');
    outputBiodata.style.display = 'block';

    // Show pop-up message
    alert("Input Successfully");

    // Generate sibling inputs
    var outputSiblings = document.getElementById("outputSiblings");
    outputSiblings.innerHTML = ""; // Clear previous sibling inputs

    for (var i = 1; i <= noSiblings; i++) {
        var siblingName = prompt(i + ".) Enter the name of sibling: ");
        var siblingAge = prompt(i + ".) Enter the age of sibling: ");
        var siblingInfo = document.createElement("div");
        siblingInfo.className = "form-group1";
        siblingInfo.innerHTML = "<label for='outputSiblingName" + i + "'>Sibling " + i + " Name: </label><p class='output' id='outputSiblingName" + i + "'>" + siblingName + "\n" + "</p><label for='outputSiblingAge" + i + "'>Sibling " + i + " Age: </label><p class='output' id='outputSiblingAge" + i + "'>" + siblingAge + "</p>";
        outputSiblings.appendChild(siblingInfo);
    }

    // Prevent form submission
    return false;
}

// Event listener for right-click on the document
document.addEventListener("contextmenu", function(event) {
    // Prevent the default right-click behavior
    event.preventDefault();
    
    // Display an alert or warning to the user
    alert("\n           It is not allowed!      -     Sabi ni Roel");
});
