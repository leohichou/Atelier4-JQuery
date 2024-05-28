# Atelier JavaScript et jQuery

Ce projet contient quatre exercices pour pratiquer JavaScript et jQuery. Chaque exercice est conçu pour améliorer les compétences en manipulation DOM, gestion des événements, AJAX, et interaction avec une base de données MySQL.

## Contenu

1. [Exercice 1 : Formulaire](#exercice-1--formulaire)
2. [Exercice 2 : QCM Interactif](#exercice-2--qcm-interactif)
3. [Exercice 3 : Calculatrice](#exercice-3--calculatrice)
4. [Exercice 4 : Listes Déroulantes Dynamiques avec AJAX](#exercice-4--listes-déroulantes-dynamiques-avec-ajax)

## Exercice 1 : Formulaire

Ce premier exercice consiste à créer un formulaire de contact avec validation en JavaScript/jQuery.

### Fonctionnalités

- Validation des champs de formulaire (nom, email, message)
- Affichage des messages d'erreur en cas de validation incorrecte

### Fichiers

- `Formulaire.html` : Structure HTML du formulaire
- `validateForm.js` : Logique JavaScript pour la validation du formulaire

## Exercice 2 : QCM Interactif

Le deuxième exercice est un quizz interactif où l'utilisateur peut répondre à des questions à choix multiple et obtenir son score sans recharger la page.

### Fonctionnalités

- Affichage des questions et réponses
- Vérification des réponses et calcul du score
- Affichage des résultats sans rechargement de la page

### Fichiers

- `QCM.html` : Structure HTML du QCM
- `qcm.js` : Logique JavaScript pour la gestion des réponses et du score

## Exercice 3 : Calculatrice

Ce troisième exercice consiste à créer une calculatrice simple avec une interface utilisateur en HTML/CSS et des fonctionnalités de calcul en JavaScript/jQuery.

### Fonctionnalités

- Opérations de base : addition, soustraction, multiplication, division
- Affichage des résultats en temps réel

### Fichiers

- `Calculatrice.html` : Structure HTML de la calculatrice
- `calculator.js` : Logique JavaScript pour les opérations de calcul
-  `style.css` : Styler la calculatrice

## Exercice 4 : Listes Déroulantes Dynamiques avec AJAX

Le quatrième exercice consiste à créer des listes déroulantes dépendantes (Pays, État, Ville) en utilisant AJAX pour charger dynamiquement les options en fonction de la sélection de l'utilisateur.

### Fonctionnalités

- Chargement dynamique des options des listes déroulantes
- Interaction fluide sans rechargement de la page

### Fichiers

- `index.html` : Structure HTML avec les listes déroulantes
- `getData.php` : Script PHP pour récupérer les données depuis la base de données
- `dropdown.js` : Logique JavaScript pour les requêtes AJAX et la mise à jour des listes
- `database.txt`  : Base données utilisées

### Base de données

- `Country`, `State`, `City` : Tables MySQL contenant les données nécessaires pour les listes déroulantes

## Instructions

1. Cloner le dépôt depuis GitHub.
2. Configurer la base de données MySQL et importer les fichiers SQL fournis.
3. Mettre à jour les fichiers de configuration PHP pour correspondre aux paramètres de votre base de données.
4. Ouvrir les fichiers HTML dans un navigateur pour tester chaque exercice.

## Auteur

Ce projet a été réalisé pour améliorer les compétences en JavaScript, jQuery et interactions avec des bases de données MySQL.
