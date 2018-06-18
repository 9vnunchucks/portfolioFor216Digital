#portfolioFor216Digital

What is this project?
I would like the opportunity of working for 216Digital.  
I have created this project with the intent of demonstrating most of the "strengths" and "additional qualities"
specified in the job posting for a front-end developer on 216 Digital's website:
https://216digital.com/job-briefs/front-end-developer-job-brief.pdf

Why you'll find no js on this page?
You'll find no js on this page (with the exception of what bootstrap 4 automatically integrates - ie the collapsed navbar).
The biggest reason i decided not to include js in this is because from an onsite SEO perspective CSS keeps the user engaged.
It provides enough interactivity and loads much faster.
I had started to write a code that detected the scroll position to enable elements to come on screen when scrolled upon (can be viewed in main.js).
I refrained from using it because i didn't like the load it could potentially put on someone's computer memory.
Additionally many libraries handle this function anyhow, calling one could have been very simple, but i felt it wasn't beneficial to the user experience.
If you'd like i will develop you some javascript code to do whatever you'd like.
I just couldn't think of an example that this site would benefit from.

All that being said, my load times are not great.  I will revisit this in the future (look at future considerations for more information on this)




from this point on this will be an example of how i would normally write a README.md






Future considerations:
Tidy up code - Written in a bit of a hurry, the code isn't as clean as i'm used to writing

Lessen loading time - comment out unneeded plugins for bootstrap in loadorder.scss files, reduce image sizes, provide better hosting, etc

Create tutorial for others so that others can learn how to create a similar page.  

Add transparent decorational overlay to cards

Use AWS for contact form and add captcha as opposed to current method
current method was just quicker and still involved an http post method.

Create more pages

Include Javascript, jquery, and potentially vue on the page

revisit the "correct way" to implement an svg for the sake of animation

fix scss for parallax - margin on right hand screen for mobile





Getting Started:

The posting specified it wanted someone with experience working with Bootstrap as a starting point for projects.
Having experience with bootstrap i know there are a few ways to set up this project:
Set up the project using source materials, using a package manager, or use a CDN.
I chose to download bootstrap via npm.  

Here's why:
  The CDN method is fine for getting a basic prototype in place,
  however the CDN is not good for anyone looking to get the most out of bootstrap 4.
  Bootstrap 4 uses SASS.  If you plan on using mixins, or overriding bootstrap 4's default variables
  (such as colors) then it's not practical to do so using the CDN.

  If this was a website that i was planning on indexing, SEO would be important.
  By using npm we don't have to load all of bootstrap's features/modules.
  We only need to load the ones we want; This reduces load times.
  By reducing load times we  increase SEO, which is important for almost every client.

  Additionally, in my spare time i love to learn about developing.
  I have been working with Vue.js a lot recently.  As a result i already had node.js and npm installed on my development laptop.

You will need to have a local version of bootstrap 4 installed if you wish to get the most
customizable experience out of this project.

I run ubuntu studio as an operating system so my installation instructions for this portion will be different than most.
Please visit the following sites for more detailed instructions on how to get up and running with bootstrap 4:

  Node.js
  https://nodejs.org/en/download/

  npm
  https://www.npmjs.com/get-npm

  bootstrap 4.1
  https://getbootstrap.com/docs/4.1/getting-started/download/


Bootstrap 4 requires jquery and popper.js (not tether as other tutorials specify) in order to work properly.
I chose to use npm for installation once again for the same reasons as were mentioned above.
However i do not plan on modifying jquery or popper.js for this particular project,
so using a CDN for these should not have any effect on this project.
Please visit the following sites for detailed instructions on how to get up and running with these:

  jquery
  http://jquery.com/download/

  popper.js
  https://github.com/FezVrasta/popper.js#installation


SASS
This entire project was written in scss.  To keep the integrity and allow for updating and
automatic maintanability of the bootstrap 4 source code, i added a custom folder with scss.


  /src/scss
    varOverride.scss" for overriding default bootstrap variables

    loadOrder.scss' for specifying which bootstrap 4 files we will use, and specify the order they should load in.

    main.scss styles for main styling of the project.


After editing, these will all need compiled from .scss to their respective .css and .min.css files found at:
  /src/css

For more information on installation and how to use SASS please visit:
  https://sass-lang.com/install
  https://sass-lang.com/documentation/file.SASS_REFERENCE.html



Dev Environment
I run ubuntu studio on my development laptop.  

For code editing i use Atom, and i would highly advise you to do the same.
Download instructions can be found at:
  https://flight-manual.atom.io/getting-started/sections/installing-atom/

Additionally, i highly recommend the following plugins for atom.

Atom Beautify - corrects indentation errors, making your code much easier to read.
This is important when developing by yourself, but even more important when developing with a team.

atom-live-server - launches a live server so you can see what your coding will look like

Emmet - Allows for easy to remember shorthand that's almost guaranteed
to double your coding speed.

SASS Autocompile - compiles your scss to .min.css, .compact.css, .nested.css, or just straight up .css
I highly advise compiling to .css for easy reading and double checking
in addition to .min.css for browser rendering



I'd also recommend using git for version control.  I used git through ubuntu's built in command line.
While git is not necessary to build this website it is helpful if you want to revert to a previous version of your finished product.
Instructions to download can be found here:
https://git-scm.com/downloads

Filezilla was used to FTP into the server.  Download can be found here
https://filezilla-project.org/


Other programs used were adobe illustrator and GIMP.  I will update this "tutorial" by using a program such as inkscape instead of illustrator so everyone has access to these tools.
Gimp can be found here:
https://www.gimp.org/downloads/
Inkspace can be found here:
https://inkscape.org/en/release/0.92.3/

Server:
Awardspace.com was used for this project due to its free tier and free domain name.
It is not the fastest service, but it is cost effective and gets the job done.
For SEO reasons i'd highly advise using something like rackspace if you plan on this being more than an example site or learning experience.





Scope:  The idea of this project was to create a project that incorporated the use of bootstrap 4 as a starting point for a project.  
To use SCSS instead of css due to it's efficient preprocessing abilities.
I will admit i took snippets of various examples on bootstraps 4 website.
That being said, the biggest complaint i get about various bootstrap websites i've developed in the past is:
All bootstrap websites look the same

I attempted to design this website to make sure it didn't look like every other bootstrap website.

Additionally i attempted to include examples of the following:
  HTML
  CSS (can be found inline in my svg code)
  Bootstrap 4 (the entire site was written in bootstrap 4)
  Editing and uploading files using ftp(filezilla as well as the ftp-remote and ftp-remote-edit plugins for atom)
  Chrome and firefox consoles and element inspectors (quite usefull forthe scss parallax mixin)
  HTTP request (Post method used for the contact form)
  Adobe Products (while i used GIMP to create the iphone from scratch, the svg was created using Adobe Illustrator)
  Web Security (it's hard to hack a static site. captcha was integrated through POST method service)
  Onsite SEO (the entire site was designed behind a theme of "seeing how i fit")
  Sass (entire site was written in scss)
  Linux Command line (i run ubuntu studio, though i plan on switching to ubuntu mate, and git was utilized through this environment)
  git (used via the linux command line)
  tabs (i've always used tabs and used a plugin that converts one tab press  to 2 or 4 spaces depending on the team i was working with at the time)

Things i did not integrate:
CMS or cart: I had planned on making a wordpress template from this bootsrap 4 template.
  I did not have the time to do so.  If you'd like a demonstration of this ability i'd be happy to write an example.
PHP, node.js, or other backend languages -
  i didn't see any need for this due to the fact all content that needed to be displayed could be done as just a static site.
  this is better for seo purposes.
Javascript - I really wanted to include this, i couldn't figure out what i should do that would involve it and thought onsite SEO would benefit from slower load times.
  I'm happy to give an example of my abilities though (I'd just like an idea)
Relational database - if i would have integrated this into a wordpress template, i would have used mariadb (not a fan of oracle products, though i can use them).
  (I'm excited about the concept of using mongodb or cassandradb, though i've rarely seen where those could be of any use)
  Once again, this was a static site with very little content, it just didn't seem practical to integrate a db as a result.


The rest should be pretty self explanatory, though i do plan on updating this README by site section in the future.


index.html - / - demonstrates bootstrap 4, html, and inline css (svg animation only)

SCSS - /src/scss/ - all mixins, and styling i did (aside from svg) can be found here.

js - /src/js/ - i didn't do any custom js (though i'd be happy to give a demonstration).
  i did leave a commented out snippet for a scroll function in main.js

assets - /assets/ - all pictures can be found Here




--------------------------------------
-- Rewrite rest of Readme           --
--------------------------------------
Switch from ubuntu studio
packages great, real time kernel not so much
try:
  Ubuntu mate
  Ubuntu (original)

  Describe each section
