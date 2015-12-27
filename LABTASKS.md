#Lab Tasks

## Part 1: Exploring the project

##### What are the differences between the folder structure of this project and the previous one? Note that api/pets is server side routing, and the client folder is client-side handling.

##### How is app.js (at the project root) different from the ones in the previous two labs? GIve examples of the kinds of urls that app.js handles, and describe where each case will be routed. Experiment with the application.

##### The project connected to the database via mongoose. Where is this connection set?

##### Study the file api/pets.controller.js, answer the following questions:
-  What kind of documents would the database contain? What is the field in the document?
-  What functions are defined in the controller? How do they change the database data?
-  How dows one get or delete elements in the database?

##### What is the purpose of index.js in the api/pets? Where is it referenced?

##### What views are used in the project? What is the purpose of each view? If a view has its own controller, what does it do?

##### Where is the code for the navigation bar located? How is it connected to the pages of the project?

##### client/app.js performs client-side routing. How do you think it works?

## Part 2: Add another field to pet data.

- Add a numeric field to a pet document (say, for example, weight). Add a field to enter weight when a new pet is created. Add a field in the page to show the heaviest of all pets and its weight. Remember to practice TDD and perform frequent commits.

## Part 3: Add a GPA calculator

- Add a view to enter courses and display the GPA. Add a link on the navigation bar that leads to it; add the corresponding route. Entered courses (name, credits, letter grade) must be stored in the database. Practice TDD and perform frequent commits. Don't forget to add new files to git before committing. Use the refactoring menu when renaming files (this will rename then in the git repo as well). 
