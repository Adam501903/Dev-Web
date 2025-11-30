Sorry MRS but I will write this in English, I can explain the project even more, I'll include a french translation at the end of the file if necessary

Project : A crossword game project allowing the user to enter the words in a specefic box, choosing the direction of the word ( horizontal or vertical) and its index and then submit via clicking the allocated button or pressing enter.
If the word, direction and index are correct , then the correct answer shows up, else nothing happens

Technologies used :
HTML5: For the page structure, the crossword grid, and the clues.
CSS (with Bootstrap): For styling the grid, inputs, and responsive layout (using classes like d-flex, justify-content-center, form-control, btn-primary).
JavaScript: For the game logic, including grid generation, revealing correct words, input management, and submission event (click or Enter key).

Main Functions :
Creates a grid with the appropriate letters being transparent at the page loading
Awaits the user's input and compares each letter entered with the correct letter so if u mistype a word, it will show the correct letters and ignore the wrong ones


Link to Github Pages : https://Adam501903.github.io/Dev-Web/

New things learned:
The creation of constant arrays to fit my needs, it's not about arrays but about the logic itself

Difficulties : 
Creating a huge grid (14*17) with disabled and enabled fields without having to do it manually
Starting with a blank grid and then filling it with letters without having to define 238=14*17 different ID's.
Creating a solid logic that allows the comparaison process to be fluid  

AND in order to solve that :
I used AI to come up with the idea of a loop that creates the grid, but letters placement was incorrect so that meant more work for me
Discussed the idea of transparent letters instead of empty grid with my roomate, who is more advanced than me in web developpement and he also came up with the idea of an array who contains the coordinates of the initial letter of each word
to solve a problem already mentionned in github commits




Projet : Un projet de jeu de mots croisés permettant à l'utilisateur de saisir les mots dans une boîte spécifique, en choisissant la direction du mot (horizontale ou verticale) et son indice, puis de soumettre via un clic sur le bouton alloué ou en appuyant sur Entrée.
Si le mot, la direction et l'indice sont corrects, la réponse correcte s'affiche, sinon rien ne se passe.
Technologies utilisées :
HTML5 : Pour la structure de la page, la grille de mots croisés et les indices.
CSS (avec Bootstrap) : Pour le style de la grille, des inputs et le layout responsive (utilisation de classes comme d-flex, justify-content-center, form-control, btn-primary).
JavaScript : Pour la logique du jeu, y compris la génération de la grille, la révélation des mots corrects, la gestion des inputs et l'événement de soumission (clic ou touche Entrée).
Fonctionnalités principales :
Crée une grille avec les lettres appropriées étant transparentes au chargement de la page.
Attend la saisie de l'utilisateur et compare chaque lettre entrée avec la lettre correcte, donc si vous tapez mal un mot, il affichera les lettres correctes et ignorera les mauvaises.
Lien vers GitHub Pages : https://Adam501903.github.io/Dev-Web/
Nouveautés apprises :
La création de tableaux constants pour répondre à mes besoins, ce n'est pas tant sur les tableaux mais sur la logique elle-même.
Difficultés rencontrées :
Créer une grande grille (1417) avec des champs désactivés et activés sans avoir à le faire manuellement.
Commencer avec une grille vide puis la remplir avec des lettres sans avoir à définir 238=1417 ID différents.
Créer une logique solide qui permet au processus de comparaison d'être fluide.
ET afin de résoudre cela :
J'ai utilisé l'IA pour proposer l'idée d'une boucle qui crée la grille, mais le placement des lettres était incorrect, ce qui signifiait plus de travail pour moi.
Discuté l'idée de lettres transparentes au lieu d'une grille vide avec mon colocataire, qui est plus avancé que moi en développement web, et il a aussi proposé l'idée d'un tableau contenant les coordonnées de la lettre initiale de chaque mot pour résoudre un problème déjà mentionné dans les commits GitHub.
