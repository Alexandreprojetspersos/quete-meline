const enigme1 = `
	<h2> Bravo, du as réussis la première enigme <h2>
	<p> Le premier code est donc : 
	
	La première anecdote dont j'ai envie de te faire part est une histoire assez drôle. Je ne sais pas si tu te souviens mais l'année dernière pour la fin de l'année Monsieur Daoudal t'avais fais donner des bonbons secs. 
	J'ai gardé celui que tu m'avais donné et je l'ai emmené comme porte bonheur à chacune des épreuves du bac (il a l'air plutôt efficace pour le moment).</p>` ;
	
const enigme2 = `

	<h2> Bien joué c'est la bonne réponse</h2>
	<p> La seconde anecdote que je vais te raconter est un moment qui m'a marqué. En effet, j'ai toujours eu envie de passer davantage de temps avec toi pour apprendre à te connaître et j'avais pour projet de venir te parler
	durant le voyage dans le Vercors. Bien que je n'ai finalement pas osé par peur de te déranger, je me rappel de cette soirée jeux de sociétés durant laquelle toi et les autres filles s'étaient enfermées dans la salle commune de
	votre aile avec Felix l'Animateur pour apprendre une dans sur un Logobi. Bien qu'on est arrivé un peu tard avec Roman (c'était la dernière répétition), je me rappellerai toujours que lorsque l'on est entrés dans la pièce, tu étais 
	en face de moi et que tu m'as fait signe de nous joindre à cette danse. C'était vraiment très sympa de ta part. </p>` ;
	
const enigme3 = `

<p> La troisième anecdote porte sur un sujet plus sérieux. En effet, lorsque je suis arrivé à Sainte Thérèse l'année dernière, je venais de redoubler et j'étais vraiment au plus bas. J'avais perdu toute confiance en moi mais je voyais en 
même temps ce moment comme une chance de repartir sur de nouvelles bases dans un nouvel environnement. J'avoue que lorsque je t'ai remarquée au bout d'environ 1 mois de cours, tu as été l'élément déclencheur qui m'a fait prendre conscience 
que je devais m'investir et me dépasser si je voulais ne serais ce que pouvoir faire jeu égal avec toi être un prétendant possible. C'est grâce à cet amour que je me suis dépassé sur de nombreux domaines et je t'en suis vraiment reconnaissant bien
que ça se soit passé à ton insu. </p>`;

const enigme4 = `

<p> Ma quatrième anecdote t'es directement liée. En effet, je suppose que tu as remarqué les efforts que j'ai fait de temps en temps pour me rapprocher de toi en venant te poser des questions sur les concepts des maths expertes. Bon j'imagine 
que l'approche était cramée à des kilomètres mais c'était la seule manière pour moi de pouvoir tenter d'engager le contact. Si lors de ces dicussions, je semblais un peu destabilisé, agité ou je ne te regardais pas dans les yeux, ce n'est pas 
parce que tu n'avais pas d'intéret à mes yeux </p>` ;

const enigme5 = `

<p>La cinquième anecdote est un besoin personnel de terminer quelque chose que j'avais commencé mais que je n'avais pas été en mesure de terminer. La fois où j'étais venu te demander à quelle heure tu finissais les cours et qu'Alicia avait 
interrompu la converation, je voulais te demander si ça te disais qu'on aille parler et manger quelque chose dans quimper. Je voulais que tu saches que la proposition est toujours d'actualité et je serais vraiment super heureux de partager 
ce moment avec toi. </p>` ;

const enigme6 = `
	
	<p> Je vais ici expliquer ma démarche artistique lorsque j'ai créé ces dessins que je voulais t'offrir. En effet, je n'est pas choisi le handball au hasard. Bien que nous ne nous soyons pas énormément parlé au cours de ces deux années
	au lycée, j'ai pu constater ta passion pour le sport et en particulier le Handball. Par curiosité (et en temps que sportif/compétiteur), je suis allé voir les performances que tu as pu réaliser dans ton club (j'ai pas mal de potes qui 
	ont été joueurs à Handball forestois donc je connaissais un peu le club déjà, j'ai même failli m'y inscrire avant de faire du tennis). J'ai alors découvert que tu étais très impliquée dans ton club et les regards sur les photos m'ont 
	montré une fille détermoinée et forte, capable d'être hyperconcentrée et combative. C'était un côté que j'vais déjà remarqué chez toi mais c'était encore plus visible dans cet environnement et c'est quelque chose qui m'impressionne énormément.
	`; 
	
const enigme7 = `

<p> Anecdote : Je me suis pris à la dernière minute pour préparer ce cadeau donc j'ai mis uniquement une semaine pour faire ces quatres dessins (en partant de 0 expérience mais ce fut vraiment chouette, j'ai adoré apprendre à dessiner et je te 
recommande vraiement de t'y mettre si c'est quelque chose qui t'attires. Le site web était une idée pour marquer le coup et faire quelque chose d'original. Je l'ai créé sur seulement 2 jours et je suis très fier de ce que j'ai réussi à accomplir. 
J'espère t'avoir changé les idées ou que tu es au moins passé un bon moment. </p> `; 


function verifierEpreuve1() {
const r = document.getElementById('input1').value.toLowerCase().trim();
const zone = document.getElementById('zone-anecdote-1');

    if (r === "boussole") { 
        zone.innerHTML = enigme1;
    } else {
        alert("Ce n'est pas ça...");
    }
}

function verifierEpreuve2() {
const r = document.getElementById('input2').value.toLowerCase().trim();
const zone = document.getElementById('zone-anecdote-2');

    if (r === "miel") { 
        zone.innerHTML = enigme2;
    } else {
        alert("Ce n'est pas ça...");
    }
}

function verifierEpreuve3() {
const r = document.getElementById('input3').value.toLowerCase().trim();
const zone = document.getElementById('zone-anecdote-3');

    if (r === "phi" || r=== "nombre d'or"){ 
        zone.innerHTML = enigme3;
    } else {
        alert("Ce n'est pas ça...");
    }
}

function verifierEpreuve4() {
const r = document.getElementById('input4').value.toLowerCase().trim();
const zone = document.getElementById('zone-anecdote-4');

    if (r === "traverser") { 
        zone.innerHTML = enigme4;
    } if (r ==="rester") {
        alert("Bravo ! Le code est : XX");
    }
}

function verifierEpreuve5() {
const r = document.getElementById('input5').value.toLowerCase().trim();
const zone = document.getElementById('zone-anecdote-5');

    if (r === "die with a smile") { 
        zone.innerHTML = enigme5;
    } else {
        alert("Ce n'est pas ça...");
    }
}

function verifierEpreuve6() {
const r = document.getElementById('input6').value.toLowerCase().trim();
const zone = document.getElementById('zone-anecdote-6');

    if (r === "championne") { 
        zone.innerHTML = enigme6;
    } else {
        alert("Ce n'est pas ça...");
    }
}

function verifierEpreuve7() {
const r = document.getElementById('input7').value.toLowerCase().trim();
const zone = document.getElementById('zone-anecdote-7');

    if (r === "speciale") { 
        zone.innerHTML = enigme7;
    } else {
        alert("Ce n'est pas ça...");
    }
}

function verifierEpreuveFinale() {
const r = document.getElementById('input8').value.toLowerCase().trim();
const zone = document.getElementById('zone-anecdote-8');

    if (r === "ton_mot_secret") { 
        zone.innerHTML = enigme8;
    } else {
        alert("Ce n'est pas ça...");
    }
}