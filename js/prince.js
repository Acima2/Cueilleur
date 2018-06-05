//Définition des variables appelées dans différentes fonctions
var total = 0; //Poussière d'étoile disponible
var multiplier = 1; //Valeur des clicks
var lvlClicker = 0;//Niveau de la fonction autoClicker
var time = 1000; //Temps de référence pour le setinterval 
				//et l'execution de la fonction anonyme

//Fonction qui incrémente au click
function stardust() {
	total += multiplier;
	document.getElementById('totalClicks').innerHTML = total;
}

//Fonction qui augmente la valeur des clicks
function updateMultiplier(){
	var cost = multiplier * multiplier;
	if (total >= cost) {
		total -= cost;
		multiplier++;

		document.getElementById('totalClicks').innerHTML = total;
		document.getElementById('multiplier').innerHTML = "Niveau " + multiplier;
		document.getElementById('costMultiplier').innerHTML = "Acheter pour " + multiplier * multiplier;
	} else {
		alert("Vous avez besoin de " + cost + " vous disposez seulement de " + total + " étoiles");
	}
}

//Fonction qui enlève le prix au total et lancement de la fonction auto 
function autoClicker() {
	var cost = 100;
	if (total >= cost) {
		total -= cost;
		lvlClicker++;
		document.getElementById('lvlClicker').innerHTML = "Niveau " + lvlClicker;
		document.getElementById('lvlClickerCompteur').innerHTML = lvlClicker;
		document.getElementById('costAutoClicker').innerHTML = "Acheter pour " + cost;
		document.getElementById('totalClicks').innerHTML = total;
		if (lvlClicker == 1){
			var interval; //création d'une var vide qu'on appellera après pour le setinterval
			auto(time);
		}
	} else {
		alert("Vous avez besoin de " + cost + " vous disposez seulement de " + total + " étoiles");

	}
}

/* Fonction qui ajoute au total le niveau du level
dans le temps défini par time qu'on a défini tout en haut*/
function auto(time){
		interval = setInterval(function(){ //fonction anonyme
		total += lvlClicker;
		document.getElementById('totalClicks').innerHTML = total;

	}, time);

}

/*Fonction qui arrête le setinterval
 interval pour ne pas qu'ils se lance en double quand
 on relance la fonction auto. Et retire 50 milisecondes au temps */
function timer(){
	if (typeof interval == 'undefined') { /* on fait en sorte de ne pas planter 
		 si le joueur n'a pas encore d'autoclickers*/
		alert("Vous n'avez pas encore d'auto-clicker");
	} else {
			var cost = 1000;
		if (total >= cost) {
			time -= 50;
			clearInterval(interval);
			auto(time);
			total -= cost;
			document.getElementById('totalClicks').innerHTML = total;
			document.getElementById('timer').innerHTML = time / 1000;/*Il faut diviser par 1000 afin
			 d'obtenir le tenps en secondes et non en millisecondes*/
			document.getElementById('costTimer').innerHTML = "acheter pour " + cost;
			document.getElementById('timePeriod').innerHTML = time / 1000;


		} else {
			alert("Vous avez besoin de " + cost + " vous disposez seulement de " + total + " étoiles");
		}
	}
	
}

function message(number){
	switch(number){
		case 0 : 
		alert("Les étoiles sont éclairées pour que chacun puisse un jour retrouver la sienne.");
		break;
		case 1 :
		alert("Où sont les hommes? reprit enfin le petit prince. On est un peu seul dans le désert... - On est seul aussi chez les hommes, dit le serpent.");
		break;
		case 2 :
		alert("- Pourquoi bois-tu ? lui demanda le petit prince. - Pour oublier, répondit le buveur. - Pour oublier quoi ? s'enquit le petit prince qui déjà le plaignait. - Pour oublier que j'ai honte, avoua le buveur en baissant la tête. - Honte de quoi ? s'informa le petit prince qui désirait le secourir. - Honte de boire ! acheva le buveur qui s'enferma définitivement dans le silence.");
		break;
		case 3 :
		alert("Au moins son travail a-t-il un sens. Quand il allume son réverbère, c'est comme s'il faisait naître une étoile de plus, ou une fleur.");
		break;
		case 4 :
		alert("Toutes les grandes personnes ont d'abord été des enfants. (Mais peu d'entre elles s'en souviennent.)");
		break;
		case 5 :
		alert("Si vous dites aux grandes personnes : J'ai vu une belle maison en briques roses, avec des géraniums aux fenêtres et des colombes sur le toit..., elles ne parviennent pas à s'imaginer cette maison. Il faut leur dire : J'ai vu une maison de cent mille francs. Alors elles s'écrient : Comme c'est joli!.");
		break;
		case 6 :
		alert("Les yeux sont aveugles il faut chercher avec le coeur.");
		break;
		case 7 :
		alert("Quand tu regarderas le ciel, la nuit, puisque j’habiterai dans l’une d’elles, puisque je rirai dans l’une d’elles, alors ce sera pour toi comme si riaient toutes les étoiles. Tu auras, toi, des étoiles qui savent rire");
		break;
		case 8 :
		aler("C'est le temps que tu as perdu pour ta rose qui rend ta rose importante.");
		break;		
	}
}

/*Fonction pour afficher des
 éléments en fonction du nombre de points*/
function easterEgg() {
	if ( total >= 100){
		var message = '<img src="img/petitprince1.jpg" id="petitprince" onclick="message(0)">';
		document.getElementById('message').innerHTML = message;
		document.getElementById('petitprince').className = "petitPrince";
	}

	if ( total >= 500){
		var message = '<img src="img/serpent.jpg" id="appear1" onclick="message(1)">';
		document.getElementById('serpent').innerHTML = message;
		document.getElementById('appear1').className = "star1";
	} else {
		var message = ""; /*pour vider le contenu de la balise*/
		document.getElementById('serpent').innerHTML = message;
	}

	if ( total >= 800){
		var message = '<img src="img/petitprince4.jpg" id="appear2" onclick="message(2)">';
		document.getElementById('buveur').innerHTML = message;
		document.getElementById('appear2').className = "star2";
	} else {
		var message = ""; /*pour vider le contenu de la balise*/
		document.getElementById('buveur').innerHTML = message;
	}	

	if ( total >= 1000){
		var message = '<img src="img/petitprince5.jpg" id="appear3" onclick="message(3)">';
		document.getElementById('allumeur').innerHTML = message;
		document.getElementById('appear3').className = "star3";
	} else {
		var message = ""; /*pour vider le contenu de la balise*/
		document.getElementById('allumeur').innerHTML = message;
	}

	if ( total >= 1200){
		var message = '<img src="img/boa.jpg" id="appear4" onclick="message(4)">';
		document.getElementById('boa').innerHTML = message;
		document.getElementById('appear4').className = "star4";
	} else {
		var message = ""; /*pour vider le contenu de la balise*/
		document.getElementById('boa').innerHTML = message;
	}

	if ( total >= 1500){
		var message = '<img src="img/comptable.jpg" id="appear5" onclick="message(5)">';
		document.getElementById('comptable').innerHTML = message;
		document.getElementById('appear5').className = "star5";
	} else {
		var message = ""; /*pour vider le contenu de la balise*/
		document.getElementById('comptable').innerHTML = message;
	}

	if ( total >= 1800){
		var message = '<img src="img/mouton.jpg" id="appear6" onclick="message(6)">';
		document.getElementById('mouton').innerHTML = message;
		document.getElementById('appear6').className = "star6";
	} else {
		var message = ""; /*pour vider le contenu de la balise*/
		document.getElementById('mouton').innerHTML = message;
	}

	if ( total >= 2000){
		var message = '<img src="img/renard.jpg" id="appear7" onclick="message(7)">';
		document.getElementById('renard').innerHTML = message;
		document.getElementById('appear7').className = "star7";
	} else {
		var message = ""; /*pour vider le contenu de la balise*/
		document.getElementById('renard').innerHTML = message;
	}

	if ( total >= 2300){
		var message = '<img src="img/rose.jpg" id="appear8" onclick="message(8)">';
		document.getElementById('rose').innerHTML = message;
		document.getElementById('appear8').className = "star8";
	} else {
		var message = ""; /*pour vider le contenu de la balise*/
		document.getElementById('rose').innerHTML = message;
	}
}

setInterval(easterEgg, 1000); /*On le met pour chaque seconde
il vérifie s'il peut afficher une image ou s'il doit l'enlever*/
