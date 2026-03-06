
# 🚀 DevBook - Chat Temps Réel

DevBook est une application de chat moderne et responsive en temps réel, construite avec **Node.js**, **Express** et **Socket.IO**.

## ✨ Fonctionnalités

✅ **Authentification** - Créer un compte avec photo de profil  
✅ **Chat temps réel** - Messages instantanés avec Socket.IO  
✅ **Utilisateurs en ligne** - Liste des utilisateurs connectés  
✅ **Indicateur de saisie** - Voir "X est en train d'écrire..."  
✅ **Photos de profil** - Chaque message affiche la photo de l'utilisateur  
✅ **Notifications système** - Alertes d'arrivée/départ d'utilisateurs  
✅ **Design responsive** - Fonctionne sur desktop, tablette et mobile  
✅ **Interface moderne** - Design dark mode avec gradients  

## 📁 Structure du Projet

devbook/ ├── server.js # Serveur Node.js + Socket.IO ├── package.json # Dépendances du projet ├── README.md # Ce fichier └── public/ ├── login.html # Page de connexion ├── register.html # Page d'inscription ├── home.html # Page d'accueil └── chat.html # Page du chat (temps réel)

Code

## 🔧 Installation

### Prérequis
- **Node.js** (v14 ou plus) - [Télécharger](https://nodejs.org/)
- **npm** (inclus avec Node.js)

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/ykira3319-cell/davbot.git
cd davbot
Installer les dépendances
frapper
npm install
Lancer le serveur
frapper
npm start
Le serveur démarre surhttp://localhost:3000

Accéder à l'application Ouvrez votre navigateur et allez àhttp://localhost:3000
🚀 Utilisation
1. Créer un compte
Cliquez sur "Créer un compte"
Remplissez : nom, email, mot de passe, photo de profil
Vous êtes automatiquement connecté et redirigé vers l'accueil
2. Se connecter
Page de connexion avec email et mot de passe
Redirection vers l'accueil après connexion
3. Accueil
Affichez votre profil (nom, email, photo)
Fonctionnalités disponibles répertoriées
Bouton pour accéder au chat
4. Discussion
Sidebar gauche - Liste des utilisateurs en ligne
Zone principale - Messages et chat
Indicateur de saisie - Voir qui tape un message
Entrée en bas - Envoyer des messages
🛠️ Développement
Pour développer avec recharge automatique :

frapper
npm run dev
(Nécessite nodemon- installé automatiquement avec npm install)

📝 Technologie
Côté serveur : Node.js + Express.js
Temps réel : Socket.IO v4.5.4
Interface utilisateur : HTML5 + CSS3 + JavaScript natif
Stockage : LocalStorage (navigateur)
🎨 Design
Couleurs principales : Bleu (#1877f2) et Vert (#42b72a)
Thème : Dark mode moderne avec dégradés
Responsive : Mobile-first, optimisé pour tous les écrans
Animations : Transitions fluides et indicateurs animés
📱 Conception adaptative
✅ Ordinateur de bureau (1200 px et plus)
✅ Tablette (768 px - 1199 px)
✅ Mobile (320 px - 767 px)

🔐 Sécurité
⚠️ Note : Ce projet est une démo. Pour la production :

Utiliser une vraie base de données (MongoDB, PostgreSQL)
Hacher les mots de passe (bcrypt)
Implémenter JWT pour l'authentification
Valider les entrées côté serveur
Utiliser HTTPS/WSS
🎯 Améliorations futures
 Base de données continue
 Authentification JWT
 Chiffrement des messages
 Historique des messages
 Salons de discussion
 Partage de fichiers
 Notifications push
 Mode sombre/clair
📄 Licence
MIT - Libre d'utilisation

👨‍💻 Auteur
DevBook - 2026

Besoin d'aide? Consultez la documentation de Socket.IO ou Express.js
