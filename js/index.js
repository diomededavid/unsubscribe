document.addEventListener('click', updateEmail);

function updateEmail() {
  // Get the checkbox
  var checkBox = document.getElementById("checkbox");
  // Get the output text
  var input = document.getElementById("box");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    input.style.display = "block";
  } else {
    input.style.display = "none";
  }
}