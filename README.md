#portfolioFor216Digital

What is this project?
I would like the opportunity of working for 216Digital.  
I have created this project with the intent of demonstrating most of the "strengths" and "additional qualities"
specified in the job posting for a front-end developer on 216 Digital's website:
https://216digital.com/job-briefs/front-end-developer-job-brief.pdf

from this point on this will be an example of how i would normally write a README.md



Getting Started
The posting specified it wanted someone with experience working with Bootstrap as a starting point for projects.
Having experience with bootstrap i know there are a few ways to set up this project:
Set up the project using source materials, using a package manager, or use a CDN.
I chose to download bootstrap via npm.  

Here's why:
  The CDN method is fine for getting a basic prototype in place,
  however the CDN is not good for anyone looking to get the most out of bootstrap 4.
  Bootstrap 4 uses SASS.  If you plan on using mixins, or overriding bootstrap 4's default variables
  (such as colors) then it's not practical to do so using bootstraps CDN.

  If this was a website that i was planning on indexing, SEO would be important.
  By using npm we don't have to load all of bootstrap's features/modules.
  We only need to load the ones we want; This reduces load times.
  By reducing load times we  increase SEO, which is important for almost every client.

  Additionally, in my spare time i love to learn about developing.  I have been working with
  Vue.js a lot recently.  As a result i already had node.js and npm installed on my development laptop.

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


Bootstrap 4 requires jquery and popper.js in order to work properly.
I chose to use npm for installation once again for the same reasons as were mentioned above.
However i do not plan on modifying jquery or popper.js for this particular project,
so using a CDN should not have much of an effect on this project.
Please visit the following sites for detailed instructions on how to get up and running with these:

  jquery
  http://jquery.com/download/

  popper.js
  https://github.com/FezVrasta/popper.js#installation

!!!START RESTRUCTURING README.md HERE!!!

SASS
This entire project was written in scss.  To keep the integrity and allow for updating and
automatic maintanability of the bootstrap 4 source code, i added a custom folder with scss.

!!!THESE ARE THE ONLY .scss and .css files ON THE SITE THAT SHOULD BE EDITED!!!

  /src/scss
    varOverride.scss" for overriding default bootstrap variables
    loadOrder.scss' for specifying which bootstrap 4 files we will use, and specify the order they should load in.
    main.scss styles for main styling of the project.

After editing these will all need compiled from .scss to their respective .css and .min.css files found at
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

Atom Beautify - corrects indentation errors, making your code so much easier to read.
This is important when developing by yourself, but even more important when developing with a team.

atom-live-server - launches a live server so you can see what your coding will look like

Emmet - Allows for easy to remember shorthand that's almost guaranteed
to double your coding speed.

Git Plus - Allows you to use git easily within your project.
While i do prefer the command line for more finite control, this plugin does make regular commits much simpler.

SASS Autocompile - compiles your scss to .min.css, .compact.css, .nested.css, or just straight up .css
I highly advise compiling to .css for easy reading and double checking
in addition to .min.css for browser rendering

remote-ftp - allows you to ftp or sftp into your site.  Especially
