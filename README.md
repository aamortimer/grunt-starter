Basic Grunt Setup
=================

Starting point for grunt projects

You should work in the app directory, and not the generated public directory. Grunt will generate the public directory with all sass and js files minified and combined.

##Installation

```
cd project
npm install
npm install -g grunt-cli
grunt
```

All task are controlled from the **aliases.yaml** file located in the grunt folder.


---

##Using Twitter Bootstrap
If you would like to add bootstrap to your project add the following to main.scss

```csss
@import 'bower_components/sass-bootstrap/lib/bootstrap';
```

##Using Bourbon and Neat
If you would like to use bourbon or neat add the following to main.scss

```csss
@import 'bower_components/bourbon/dist/_bourbon';
@import 'bower_components/neat/app/assets/stylesheets/_neat';

```