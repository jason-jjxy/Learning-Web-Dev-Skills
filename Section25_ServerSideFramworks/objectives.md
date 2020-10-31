# Introduction to Express

* What is a framework? How is it different from a library?
    - inversion of control is the difference
    - when you call a library, you are in control
    - with a framework, the framework calls you
    - frameworks take common stuff and basic stuff and prepackages everything
    - without having to do the constant reorganization
* What is Express?
    - web dev framework
    - frameworks that help make mobile apps, games, web apps
    - E.g flasks, django, rails, node, sails.js, etc.
* Why are we using Express?
    - express is the most popular node web dev framework
    - most people contributing, most downloads on npm
    - lots of tutorials
    - lightweight framework

---------------------------------------------------------------
    
# Our First Express App!!!!!
* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express app!

---------------------------------------------------------------

# NPM Init and Package.json
* Use the `--save` flag to install packages
    - take package name and automatically save it inside the package.json
* Explain what hte package.json file does
    - hold metadata related to its specific project subject
    - node modules not included on github, but in the express package
    - when sharing code, dont need to download all the baggage each time the file is accessed
        - rather, we can downlaoad from lookking at the package.json
        - Like looking at a recipe to use, rather then sending the ingredients and the steps to making the recipe
* USe `npm init` to create a new package.json

----------------------------------------------------------
# More Routing!

* Show the '*' route matcher
* Write routes containing route parameters
* Discuss route order