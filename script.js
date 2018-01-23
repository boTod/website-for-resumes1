(function(){ 
	"use strict";
	let on = true;
	var toggles = document.querySelectorAll(".toggle-hamburger");
	var toggle = toggles[0];
	toggleHandler(toggle);
	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			if(on === true){
				on = false;
				setTimeout(function(){
					on = true;
				},800);
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			}
		});
	}
})();

(function(){
	let onList = true;
	document.getElementById('gamburger').onclick = function(){
		if(onList === true){
			onList = false;
			setTimeout(function(){
				onList = true;
			},800);
			let togles;
			let s = 0;
			let a = document.querySelectorAll('div.line a');
			if(a[0].classList.contains('displayBlock') === true){
				let timeout = 0;
				for(var i = a.length -1; i >= 0; i--) {
					setTimeout(
						(function (n){
							return function() {
								a[n].className = 'displayNone';	
							}	
						})(i),timeout)
				timeout += 100;	
				};
				let q = 5;
				let stop = setInterval(function(){
					q--;
					if(a[q]){
						a[q].style.display = 'none';	
					}
					if(q < 1){
					clearInterval(stop);	
					}
				},300)	
			}
			else{
				let timeout = 0;
				for(var i = 0; i < a.length; i++) {
					setTimeout(
						(function (n){
							return function() {
							a[n].className = 'displayBlock';
							}
						})(i),timeout);
				timeout += 100;
				a[i].style.display = 'block';
				};
			}
		}
	}
})();

(function myFunction(){
	if(document.getElementById('magazPar')){
		let magazPar = document.getElementById('magazPar');
		let magazImg = document.getElementById('magazImg');
		let table = document.getElementById('numberPhone');
		let phone = document.getElementById('phone');
		table.onmouseover = function(event) {
			var target = event.target;
			phone.className = 'rotate';
		};
		magazPar.onmouseover = function(event) {
			var target1 = event.target1;
			magazImg.className = 'magazImage';
		};
		magazPar.onmouseout = function(event) {
			var target1 = event.target1;
			magazImg.className = '';
		};
		magazImg.onmouseover = function(event) {
			var target1 = event.target1;
		magazImg.className = 'magazImage';
		};
		magazImg.onmouseout = function(event) {
			var target1 = event.target1;
		magazImg.className = '';
		};
		table.onmouseout = function(event) {
			var target = event.target;
			phone.className = 'phone'
		};	
	}
})()
$(document).ready(function(){
	$(".link").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});


	

(function(){
	if(document.getElementById('slider-range')){
		$(function() {
			imgOnAndOf(120, 300);
			function imgOnAndOf(arg,arg2){
				console.log('s')
				let photo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
				let photo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
				let photo2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13, 14, 15, 16, 17, 18];
				let photo3 = [1, 2, 3, 4, 5, 6];
				let input = arg || $("input#amount").val();
				let input2 = arg2 || $("input#amount_1").val();
				console.log(input2)
				if(!document.getElementById('deleteWrap') &&
				   !document.getElementById('deleteWrap1') &&
				   !document.getElementById('deleteWrap2') &&
				   !document.getElementById('deleteWrap3') && !arg){
					if(!document.getElementById('magazP')){
					let mimg=document.createElement('p');
					mimg.innerHTML = 'За даною ціною не знайдено жодного результату';
					mimg.id = 'magazP';
					document.getElementById('product').appendChild(mimg);
					}
				}
				else{
					if(document.getElementById("magazP")){
					document.getElementById("magazP").remove();
					}
				}
				if(input <= 220 && input2 >= 220){
					if(!document.getElementById('deleteWrap3')){
						for(key of photo3){
							let mimg=document.createElement('img');
							mimg.src='магазин/220/' +key+'.jpg';
							mimg.className = 'photo';
							let wraper = document.createElement('div');
							wraper.className = 'wraper';
							wraper.id = 'deleteWrap3'
							let paragraph = document.createElement('p');
							paragraph.innerHTML = '220';
							document.getElementById('product').prepend(wraper);
							document.getElementById('deleteWrap3').prepend(mimg);
							document.getElementById('deleteWrap3').prepend(paragraph);
						}
					}
				}else{
					if(document.getElementById('deleteWrap3')){
						while(document.getElementById('deleteWrap3')){
							document.getElementById("deleteWrap3").remove();
						}
					}	
				}
				if(input <= 210 && input2 >= 210){
					if(!document.getElementById('deleteWrap2')){
						for(key of photo2){
							let mimg=document.createElement('img');
							mimg.src='магазин/210/' +key+'.jpg';
							mimg.className = 'photo';
							let wraper = document.createElement('div');
							wraper.className = 'wraper';
							wraper.id = 'deleteWrap2'
							let paragraph = document.createElement('p');
							paragraph.innerHTML = '210';
							document.getElementById('product').prepend(wraper);
							document.getElementById('deleteWrap2').prepend(mimg);
							document.getElementById('deleteWrap2').prepend(paragraph);
						}
					}

				}else{
					if(document.getElementById('deleteWrap2')){
						while(document.getElementById('deleteWrap2')){
							document.getElementById("deleteWrap2").remove();
						}
					}	
				}
				if(input <= 200 && input2 >= 200){
					if(!document.getElementById('deleteWrap1')){
						for(key of photo1){
							let mimg=document.createElement('img');
							mimg.src='магазин/200/' +key+'.jpg';
							mimg.className = 'photo';
							let wraper = document.createElement('div');
							wraper.className = 'wraper';
							wraper.id = 'deleteWrap1'
							let paragraph = document.createElement('p');
							paragraph.innerHTML = '200';
							document.getElementById('product').prepend(wraper);
							document.getElementById('deleteWrap1').prepend(mimg);
							document.getElementById('deleteWrap1').prepend(paragraph);
						}
					}
				}else{
					if(document.getElementById('deleteWrap1')){
						while(document.getElementById('deleteWrap1')){
							document.getElementById("deleteWrap1").remove();
						}
					}
				}
				if(input <= 180 && input2 >= 180){
					if(!document.getElementById('deleteWrap')){
						for(key of photo){
							let mimg=document.createElement('img');
							mimg.src='магазин/180/' +key+'.jpg';
							mimg.className = 'photo';
							let wraper = document.createElement('div');
							wraper.className = 'wraper';
							wraper.id = 'deleteWrap'
							let paragraph = document.createElement('p');
							paragraph.innerHTML = '180';
							document.getElementById('product').prepend(wraper);
							document.getElementById('deleteWrap').prepend(mimg);
							document.getElementById('deleteWrap').prepend(paragraph);
						}
					}
				}else{
					if(document.getElementById('deleteWrap')){
						while(document.getElementById('deleteWrap')){
							document.getElementById("deleteWrap").remove();
						}
					}
				}
			}
			$( "#slider-range" ).slider({
				step: 1,
				range: true,
				min: 110,
				max: 300,
				values: [ 100, 220 ],
				slide: function( event, ui ) {
					$( "#amount" ).val( ui.values[ 0 ] );
					$( "#amount_1" ).val( ui.values[ 1 ] );
					imgOnAndOf();
				}
			});
			$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
			$( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 1 ) );
			$("input#amount").change(function(){
				var value1=$("input#amount").val();
				var value2=$("input#amount_1").val();
				imgOnAndOf();
				if(parseInt(value1) > parseInt(value2)){
					value1 = value2;
					$("input#amount").val(value1);
				}
				$("#slider-range").slider("values",0,value1);	
			});
			$("input#amount_1").change(function(){
				var value1=$("input#amount").val();
				var value2=$("input#amount_1").val();
				imgOnAndOf();
				if(parseInt(value1) > parseInt(value2)){
					value2 = value1;
					$("input#amount_1").val(value2);
				}
				$("#slider-range").slider("values",1,value2);
			});
			jQuery('#amount, #amount_1').keypress(function(event){
				var key, keyChar;
				if(!event) var event = window.event;
				if (event.keyCode) key = event.keyCode;
				else if(event.which) key = event.which;
				if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
				keyChar=String.fromCharCode(key);
				if(!/\d/.test(keyChar))	return false;
			});
		});
	}
})();
(function(){
	if(document.getElementById('slider-range')){
		let hide = false;
		document.getElementById('product').onscroll = function(){
			let stopTimeInterval = 0;
			let scroll = document.getElementById('product').scrollTop;
			let divProduct = document.getElementById('product').scrollHeight - document.getElementById('product').clientHeight;
			if(scroll == divProduct ){
				hide = true;
			}
			if(scroll < divProduct && hide === true){
				let hideFooter = setInterval(function(){
				window.scrollBy(0,-1)	
				stopTimeInterval++
					if(stopTimeInterval === 100){
						clearInterval(hideFooter)
					}
				},5)
				hide = false;
			}
		}
	}
})();
