---
title: Gérez vos alias avec z-alias
author: Benjamin Caradeuc
date: 2020-05-03T20:55:17.867Z
tags:
  - bash
  - alias
  - cli
  - labo
featured_image: /images/uploads/z-alias.png
thumbnail: /images/uploads/z-alias.png
---
N'avez-vous jamais voulu utiliser la ligne de commande comme un pro, mais n'avez jamais été foutu de vous souvenir de cette commande dont vous avez tant besoin ?

> Ça m'arrive tout le temps.

Vous n'en avez pas marre d'écrire cette commande si longe dans votre terminal quand vous pourriez n'écrire qu'un caractère ?

> Tous les jours...

Ne voulez-vous pas remplacer une commande existante avec une autre dont la sortie est bien plus lisible ?

> Oh, si!

Ça vous saoule pas de ne jamais vous rappeler comment créer un alias et le rendre permanent ?

> Coupable 😇️

---

## Voici la solution

[https://github.com/benavern/z-alias](https://github.com/benavern/z-alias)

(prononcer `ði ˈeɪliəs`, comme "The alias")

C'est un petit utilitaire en ligne de commande que j'ai créé en 1 journée. Il m'aide à gérer mes alias, les éditer, les supprimer, et ça marche même avec [Zsh](https://www.zsh.org/)!

---

## Comment ça marche

### Installation

D'abord, installez-le de manière globale

```bash
npm i -g z-alias
```

### Utilisation

Ensuite vous pouvez l'utiliser. Vous pouvez afficher l'aide en tapant

```bash
z-alias -h
```

```
  Usage
    $ z-alias
 
  Options
    --list, -l    List all aliases
    --open, -o    Open aliases file in editor
    --search, -s  Search in aliases
    --add, -a     Add an alias
    --edit, -e    Edit an alias
    --remove, -r  Remove an alias

    --help, -h    Display help
    --version, -v Print z-alias version
 
  Examples
    $ z-alias -l
    $ z-alias -o
    $ z-alias -s [<searchTerm>, <searchTerm2>, ...]
    $ z-alias -a [<aliasName> "<aliasCommand>"]
    $ z-alias -e [<aliasName> "<aliasCommand>"]
    $ z-alias -r [<aliasName> <aliasName2> ...]
```

L'option de recherche prend 1 ou plusieurs termes de recherche.

Les options d'ajout, d'édition et de suppression prennent des paramètres optionnels, vous pourrez toujours revenir dessus une fois que vous aurez appuyé sur ENTRER.

### Réglages

Vous pouvez changer le chemin du fichier qui contient les alias en exportant la variable d'environnement `Z_ALIAS_PATH` dans votre `.bashrc`.


Vous pouvez également le faire fonctionner avec Zsh et autres shells alternatifs en ajoutant ces lignes à la fin de votre `.zshrc` par exemple

```
if [ -f ~/.bash_aliases ]; then
    source ~/.bash_aliases
fi;
```

---

## Contribuer

N'hésitez pas à contribuer au projet. Je serais heureux de lire vos issues et d'aider, de regarder vos merge-requests.

Si cet outil vous est utile, vous pouvez m'acheter une bière [ici](https://paypal.me/benjamincaradeuc)
