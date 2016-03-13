var projectName;

$('.grid__item-img').on('click', function(){
	projectName = $(this).attr('data-project');
	$('.'+projectName).show();
});

$('.grid__item-img .close-btn').on('click', function(){
	$(this).parent().hide();
});




// // // When the user clicks on the button,
// // // togggle between hiding and showing the dropdown content

// // function myFunction() {
// // 	document.getElementById("myDropdown").classList.toggle("show");
// // }

// // // Close the dropdown menu if the user clicks outside of it

// // window.onclick = function(event) {
// // 	if (!event.target.matches('.dropbtn')) {

// // 		var dropdowns = document.getElementByClassName ("dropdown-content");
// // 		var = i;
// // 		for (i = 0; i < dropdowns.length; d++) {
// // 			var openDropdown = dropdowns[i];
// // 			if (openDropdown.classList.contains('show')) {
// // 				openDropdown.classList.remove('show');
// // 			}
// // 		}
// // 	}
// // }




// Just saving this here in case i need jquery for dropdown /////


// // 	<!-- 			<div class="dropdown">
// // 					<button onclick="myFunction()" class="dropbtn">Design</button>
// // 					<div id="myDropdown" class="dropdown-content">
// //     					<a href="design-cd-lp.html">CD/LP Design</a>
// //     					<a href="posters.html">Posters</a>
// //     					<a href="identity.html">Identity</a>
// //   </div>
// // </div> -->