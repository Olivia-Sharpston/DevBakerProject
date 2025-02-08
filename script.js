$(document).on("click", (event) => {
  console.log(event.target.id, $("#" + event.target.id).position().left);
});

$(document).ready(function () {
  console.log("ready!");

  for (i = 0; i < 2; i++) {
    $("#leftDoor").animate({ top: "-421px" });
    $("#rightDoor").animate({ top: "-380px" });
  }
});