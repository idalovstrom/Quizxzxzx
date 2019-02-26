$(function(){
	$('#sQ1').hide();
	$('#sQ2').hide();
	$('#sQ3').hide();
	$('#sQ4').hide();
	$('#sQ5').hide();
	$('#sQ6').hide();
	$('#sQ7').hide();
	$('#sQ8').hide();
	$('#sQ9').hide();
	$('#sQ10').hide();
	$('#ratta').hide();
});
$('.btn-success').click(function(){
		$('#sQ1').show();
		$('#sQ2').show();
		$('#sQ3').show();
		$('#sQ4').show();
		$('#sQ5').show();
		$('#sQ6').show();
		$('#sQ7').show();
		$('#sQ8').show();
		$('#sQ9').show();
		$('#sQ10').show();
	});


var antalRatt = 0;
const ratt1 = document.getElementById('rattNamn');

ratt1.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
})


const ratt2 = document.getElementById('rattAlder');

ratt2.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
})


const ratt3 = document.getElementById('rattLangd');

ratt3.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
})


const ratt4 = document.getElementById('rattShoe');

ratt4.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
})


const ratt5 = document.getElementById('rattSibling');

ratt5.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
})


const ratt6 = document.getElementById('rattGlas');

ratt6.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
})


const ratt7 = document.getElementById('rattBarn');

ratt7.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
})


const ratt8 = document.getElementById('rattTand');

ratt8.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
})

const ratt9 = document.getElementById('rattBen');

ratt9.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
})


const ratt10 = document.getElementById('rattYeet');

ratt10.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
$('#ratta').show();
})

const ratta = document.getElementById('ratta');
ratta.addEventListener('click', function() {
	document.getElementById('rattSvar').innerHTML = 'Du fick ' +antalRatt+ ' av 10 rätt';
})