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

##Grunt Tasks
The followin grunt tasks are available

```grunt``` to run the default tasks below

* clean
* bower-install-simple
* concat
* newer:sass
* newer:jshint
* newer:uglify  
* newer:sprite

```grunt server``` to run a local test server

* connect:default
* open:default:livereload
* watch

```grunt docs``` to generate styleguides for css, and the create a local server for viewing them

* clean:docs
* newer:sass:app
* styleguide
* connect:docs

```grunt bower``` to install bower components

* bower-install-simple

---

##Grunt Bump
Use grunt bump to update the package version and create a new git tag [read docs](https://github.com/vojtajina/grunt-bump)

---

##Using Twitter Bootstrap
[http://getbootstrap.com](http://getbootstrap.com)

If you would like to add bootstrap to your project add the following to **assets/sass/main.scss**

```csss
@import 'bower_components/sass-bootstrap/lib/bootstrap';
```

##Using Bourbon and Neat
[Bourbon.io](http://bourbon.io)

[neat.bourbon.io](http://neat.bourbon.ioo)


If you would like to use bourbon or neat add the following to **assets/sass/main.scss**

```css
@import 'bower_components/bourbon/dist/_bourbon';
@import 'bower_components/neat/app/assets/stylesheets/_neat';

```

---

##Sprites
Grunt will combine all **png** images located in the app/assets/sprites folder the sprite image that this generates will be moved in to **public/assets/imgs/sprite.png** to use the sprites inside your project make sure you import the _sprites.scss file in to main.scss.




