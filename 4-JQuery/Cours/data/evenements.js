content.evenements = { title: 'Événements',
values: [
	{
		h3:`Navigateur`
	},
  {
		description: `Lien à l'évènement de changement de taille.`,
		method: `.resize()`,
		code: `$(window).resize(function(){
		$('#bas').hide();
	});`
	},
	{
		description: `Lien à l'évènement de mouvement d'ascenseur.`,
		method: `.scroll()`,
		code: `$('#article').scroll(function(){
		$('#contenu').show();
});`
	},
	{
		h3:`Document - chargement`
	},
	{
		description: `Lien à l'évènement de chargement du DOM`,
		method: `.ready()`,
		code: `$(document).ready(function(){
		$('.elements').hide();
	})`
	},
	{
		h3:`Évènements attachés`
	},
	{
		description: `Ajout d'une ou plusieurs gestion d'évènements aux éléments visés.`,
		method: `.on()`,
		code: `$('#info').on('click',function(){
		$('header img').hide();
	});`
	},
	{
		description: `Suppression d'une ou plusieurs gestion d'évènements aux éléments visés.`,
		method: `.off()`,
		code: `$('#info').off('click');`
	},
	{
		description: `Ajout d'une ou plusieurs gestion d'évènements aux éléments visés. L'évènement ne se déclenchera qu'une seule fois.`,
		method: `.one()`,
		code: `$('article .ajout').one('hover',function(){
			$('footer p').show();
		});`
	},
	{
		description: `Déclenchement d'un évènement sans action de l'utilisateur.`,
		method: `.trigger()`,
		code: `$('#message').trigger('click');`
	},
	{
		description: `Déclenche d'un évènement sans action de l'utilisateur.`,
		method: `.triggerHandler()`,
		code: `$('.textes').triggerHandler('focus');`
    },
	{
		description: `Ajoute une fonction de retour à un ou plusieurs évènements pour tous les éléments qui correspondent au sélecteur indiqué, y compris les éléments ajoutés ensuite au DOM.`,
		method: `.delegate()`,
		code: `$('body').delegate('#message','click',function(){
			$(this).after('&lt;p&gt;Un autre texte&lt;/p&gt;');
		});`
	},
	{
		description: `Supprime une gestionnaire d'évènement pour tous les éléments qui correspondent au sélecteur indiqué.`,
		method: `.undelegate()`,
		code: `$('body').undelegate('#message','click');`
	},
	{
		h3:`Formulaire`
	},
	{
		description: `Lien à l'évènement de focus sur un élément.`,
		method: `focus()`,
		code: `$('#cible').focus(function(){
			$('#info').show();
		});`
	},
	{
		description: `Lien à l'évènement de perte du focus sur l'élément.`,
		method: `blur()`,
		code: `$('#cible').blur(function(){
			$('#info').hide();
		});`
	},
	{
		description: `Lien à l'évènement de changement de valeur d'un élément.`,
		method: `change()`,
		code: `$('#formulaire textarea').change(function(){
			$('#message').text('vous avez saisi :' + $(this).val());
		});`
	},
	{
		description: `Lien à l'évènement de focus sur un élément ou un de ses enfants.`,
		method: `focusin()`,
		code: `$('form').focusin(function(){
			$('form input').css('borderColor','red');
		});`
	},
	{
		description: `Lien à l'évènement de perte du focus sur un élément ou un de ses enfants.`,
		method: `focusout()`,
		code: `$('form').focusout(function(){
			$('form input').css('borderColor','grey');
		});`
	},
	{
		description: `Lien à l'évènement de sélection d'un texte.`,
		method: `select()`,
		code: `$('p').select(function(){
			$(this).css('fontStyle','italic');
		});`
	},
	{
		description: `Lien à l'évènement de soumission d'un formulaire.`,
		method: `.submit()`,
		code: `$('form').submit(function(){
			$('#information').animate({
				opacity:1,
				width:'60%'
			},1200);
		});`
    },
{
  h3:`Clavier`
},

	{
		description: `Lien à l'évènement d'appui sur la touche du clavier.`,
		method: `keyup()`,
		code: `$('article').keyup(function(){
			$('#decoration').show();
		});`
	},
	{
		description: `Lien à l'évènement d'appui et maintien sur la touche du clavier.`,
		method: `keypress()`,
		code: `$('#content').keypress(function(){
			$('.infos').css('color','red');
		});`
	},
	{
		description: `Lien à l'évènement de relâchement d'une touche du clavier`,
		method: `keydown()`,
		code: `$('footer').keydown(function(){
			$('#decoration').hide();
		});`
	},
	{
		h3:`Souris`
	},
	{
		description: `Lien à l'évènement du clique.`,
		method: `.click()`,
		code: `$('#boite').click(function(){
			$('#img').width('350');
		});`
	},
	{
		description: `Lien à l'évènement du double clique.`,
		method: `.dblclick()`,
		code: `$('img').dblclick(function(){
			$('#contenu').css('backgroundColor','yellow');
		});`
	},
	{
		description: `Lien à l'évènement du survol du curseur de la souris.`,
		method: `.horver()`,
		code: `$('img').hover(function(){
			$('#bloc').show();
		});`
	},
	{
		description: `Lien à l'évènement du mouvement du curseur de la souris.`,
		method: `.mousemove()`,
		code: `$('img').mousemove(function(){
			$('#contenu').css('backgroundColor','yellow');
		});`
	},
	{
		description: `Lien à l'évènement de la présence du curseur de la souris sur l'élément .`,
		method: `.mouseover()`,
		code: `$('img').mouseover(function(){
			$('#contenu').css('backgroundColor','yellow');
		});`
	},
	{
		description: `Lien à l'évènement de l'entrée du curseur de la souris.`,
		method: `.mouseenter()`,
		code: `$('img').mouseenter(function(){
			$(this).css('borderWidth','5px');
		});`
	},
	{
		description: `Lien à l'évènement de l'arrêt du survol du curseur de la souris.`,
		method: `.mouseleave()`,
		code: `$('img').mouseleave(function(){
			$(this).css('borderWidth','0px');
		});`
	},
	{
		description: `>Lien à l'évènement de l'arrêt du survol du curseur de la souris.`,
		method: `.mouseout()`,
		code: `$('img').mouseout(function(){
			$('#contenu').css('backgroundColor','transparent');
		});`
	},
	{
		description: `Lien à l'évènement de la pression sur un bouton de la souris.`,
		method: `.mousedown()`,
		code: `$('img').mousedown(function(){
			$('#message').html('Vous avez appuyez sur un bouton de la souris.');
		});`
	},
	{
		description: `Lien à l'évènement du relâchement d'un bouton de la souris .`,
		method: `.mouseup()`,
		code: `$('img').mouseup(function(){
			$('#message').html('Vous ne touchez plus à un bouton.');
		});`
	}
]};

