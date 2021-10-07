/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {
	
});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	blanco: 'blanco.jpg',
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'say': {
		name: '<p align=\"center\">Gato de Schrodinger',
		color: '#5bcaff',
		sprites: {
			unico: 'cat-fofo.gif',
		},
	},
});

monogatari.script ({
	// The game starts here.

	'Start': [
	
		'show scene #f7f6f6',

		'show character say unico with fadeIn',
		'show image blanco paredona',
		'centered Oi, eu sou o gato de Schrodinger e gostaria de te fazer pensar um pouquinho!',
		'centered <font size = \"10\" color=\"#ff0000\">Aperte espaço',
		{
			'Input': {
				'Text': 'Primeiro, pode me dizer o seu nome?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'Se não houver um nome como vou te chamar?!'
			}
		},
		'centered Bem, {{player.name}}, suponha que exista uma caixa onde blablablalabla',
		{
		}
	],
});

