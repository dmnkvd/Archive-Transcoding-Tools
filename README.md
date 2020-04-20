# Archive-Transcoding-Tools
 
Archive Transcoding tools are a set of different algorithmic strategies, seeking to find novel and exciting ways of representing artefacts from the archive of the Institute of Social History in Amsterdam. In doing so, the project touches down on the problems of taxonomy and representation, and wishes to explore visually what constitutes an artefact's "thisness". 

The starting point is a collection of well-classified artefacts, Badges. 

The establishing research framework can be found at https://www.notion.so/700ml/Archival-Resilience-2-0-1e8810953f164242aaaeb1c5fe92ad95.

The master document for the interpretative steps/backbone of transcodings can be found at https://www.notion.so/700ml/BADGES-Master-Document-65955832ffd74de0927b75a91b648047.

Personal learning goals:
- Improve my JavaScript skills: Intermediate Data Structures, Objects, accessing them...
- Build up a narrative, dealing with the problems of classification / ordering
- Discuss the Problem of Classification, my research-framework, through this practical application, through a limited number of artefacts
- Develop and tinker with playful transcoding tools along the way

## Input
The input is a collection of 20 colour-corrected photographs of badges, selected at random. 
- [Input](https://drive.google.com/open?id=1k7vdxrWdUg5r0helB_yeT7051W1r1Ttc)

The badges were cleaned up, with the scanned background removed.. 
- [Input-cleanup](https://drive.google.com/open?id=16yaqBnfxsEB8Vx6aOMcAG-fH5-W0PCgq)

## W12: Tool 0 - IISG Image Scraper
This first tool scrapes IISG's collection (of photographs) of Badges, and saves the image links, together with the link to the record, in a Python dictionary. 

#### Remarks:
- Add a download function.
- Add Pagination

## W13: Tool 1 - Main Colour HEX
Disclose the artefact by their predominant colour. Analogous to tagging an artefact with one singular tag. Creates a highly simplistic interpretation of the artefact.
- [TOOL 1 - outcomes](https://drive.google.com/open?id=1sZFAJHxdTo6kFFht144gDHAQaPNzByss)

#### Remarks:
- The colour average is purely based on histogram - could improve with K-clustering for more natural outcomes.
- I am evenetually creating a server/web interface, as a way to talk about the bigger narrative/story of the richness of classification.
- Development has taken place in Bash/Python. Should I continue developing these tools in a different programming environment?

## W14, 15: Tool 2 - Research, Semantic Analysis

From tinkering with an image-based approach, I shifted back to the wider metanarrative:
- What are some different, new, interesting ways in which the artefact (badge) can be transcoded?
- I shifted towards a language-based disclosure, using the convenience of JavaScript Object Notation as an environment for semantic analysis of the badge

## W16: Tool 3 - Gradual meaning-making
This week, I have been busy with drafting a little participatory app to describe a badge collectively, together, in steps. 

QUESTIONS:
..* *QUESTION 1* The step increments when the user clicks on the "next" button. It seems very break-able... What would be a more foolproof way of implementing progress tracking?
..* *QUESTION 2* I am also using the 'step' variable in the download function to remember the filename -- Is it bad practice to declare a variable gloablly like this? What would be a better solution?
..* *QUESTION 3* This is a draft mockup. How to approach running this app from a server, and save the files to a subfolder there? Node? Requests?
..* *QUESTION 4* How to implement a multi-user solution that saves each users's drawings with a unique ID in the filename? Cookies?

- The images are currently saved with a function on button click. How to save the canvas images to a server?
- How to display all the images together in the end?


## Code:
- [*TOOL 0 - IISG Image Scraper*](https://github.com/dmnkvd/Archive-Transcoding-Tools/tree/master/tool_0-scraper)
- [*TOOL 1 - Main Colour HEX*](https://github.com/dmnkvd/Archive-Transcoding-Tools/tree/master/tool_1-HexCode)
- [*TOOL 2 - Semantic Analysis*](https://github.com/dmnkvd/Archive-Transcoding-Tools/tree/master/tool_2-Semantic-analysis)
- [*TOOL 3 - Gradual meaning-making*](https://github.com/dmnkvd/Archive-Transcoding-Tools/tree/master/tool_3-drawSteps)


