The Haziness of Classification
======


> Haziness of Classification is the collective name for a set of algorithmic experiments, united in the goal to find novel
> and exciting ways of representing artefacts from the archive of the Institute of Social History
> in Amsterdam. In doing so, the project touches down on the problems of taxonomy and representation,
> and wishes to explore visually what constitutes an artefact's "thisness". 

__________________________________________

The establishing research framework can be found at:
* https://www.notion.so/700ml/Archival-Resilience-2-0-1e8810953f164242aaaeb1c5fe92ad95.

The master document for the interpretative steps/backbone of transcodings can be found at:
* https://www.notion.so/700ml/BADGES-Master-Document-65955832ffd74de0927b75a91b648047.

###### KEYWORDS
`Haeccity, Relativism, Designed Objectivity, Meaning-Making, Semiotics`

__________________________________________

### Personal learning goals:
* Improve my JavaScript (et. al.) skills: Data Structures, File Manipulation, client-server communication...
* Improve my programming ability for creating small, interactive experiences... Websites as workshops, forums, spaces of participation...
* Write a poetic, didactic, accessible narrative dealing with the problems of classification / ordering
* Discuss the (my) Problem of Classification, my research-framework through this practical application, via a limited number of artefacts
* Develop a methodology for producing illustrated stories that are different with every user group
* Develop and tinker with playful transcoding tools along the way

__________________________________________

## 🏁 Input
The input is a collection of 20 colour-corrected photographs of badges, selected at random. 
> [Input](https://drive.google.com/open?id=1k7vdxrWdUg5r0helB_yeT7051W1r1Ttc)

In the intermediate steps of the project, I decided to proceeded with a distinctive, exemplary badge. In the final implementation, a selection of 3 - 5 will be implemented in the final narrative.

| Info | Data |  
|--|--|
|<img src="https://search.iisg.amsterdam/Cover/Show?author=&callnumber=BG+AA5%2F651&size=small&title=%5BButton.%5D&pid=30051002121819&publication=pictoright" width="250" height="250">| --  
**IISG Link** | [CSD BG V2/410 ](https://search.iisg.amsterdam/Record/1046576)
| **Physical Description** | Button, Badge.
| **Category** | Visual Document.
| **Meeting** | Campaign on Yugoslavia.

###### Final Input
The badges were cleaned up, with the scanned background removed.
> [Input-cleanup](https://drive.google.com/open?id=16yaqBnfxsEB8Vx6aOMcAG-fH5-W0PCgq)

## Tool 0 ◽️ IISG Image Scraper
###### W12
This first tool scrapes IISG's collection (of photographs) of Badges, and saves the image links, together with the link to the record, in a Python dictionary. 

#### Remarks:
* Build a download function.
* Add Pagination support.

## Tool 1 ◽️ Main Colour HEX
###### W13
<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/x-proccess/Screenshots/tool_1/tool-1__1.png" width="400" height="400">
Disclose the artefact by their predominant colour. Analogous to tagging an artefact with one singular tag. Creates a highly simplistic interpretation of the artefact.
> [TOOL 1 - outcomes](https://drive.google.com/open?id=1sZFAJHxdTo6kFFht144gDHAQaPNzByss)

#### Remarks:
* The colour average is purely based on histogram - could improve with K-clustering for more natural outcomes.
* I am evenetually creating a server/web interface, as a way to talk about the bigger narrative/story of the richness of classification.

## Tool 2 ◽️ Research, Semantic Analysis
###### W14, 15

From tinkering with an image-based approach, I shifted back to the wider metanarrative:
* Returning to language-based disclosure, I used the convenience of JSON as an environment for semantic analysis of the badge

> [TOOL 2 - outcome](https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/tool_2-Semantic-analysis/semanticBadge.js)

## Tool 3 ◽️ Gradual meaning-making
###### W16, 17
This week, I have been busy with drafting a little participatory app to describe a badge collectively, together, in steps. The idea is that each visitor draws according to the instructions given in the sentence prompt. After she has drawn all the steps, she proceeds to a webpage "gallery" of all drawings from all visitors. Showing a beautiful subjectivity of interpretation.

<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/x-proccess/Screenshots/tool_3/tool-3__1.png" width="400" height="400">

I built a local version with a download button (Tool 3), and a participatory, server-side version (Tool 3.1).

![Image of GIF Loop](https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/tool_3.1-drawStepsNodeJS/testWrite/GIF/loop.gif)
> [TOOL 3 - outcomes](https://drive.google.com/open?id=1D3NgR8H-Lq1dKw4yQjneVOM9Vh9uHi0I)

## Tool 4 ◽️ Participatory Story-Making

The final tool shall function as part of a workshop, held at a specific location. After responding to the ten steps of the prompt, the images will be incorporated a final narrative. 

The main points of the narrative concern:
  * Subjectivity of classification, categorisation
  * Reminder that we all hold extremely different interpretations of "Haecceity / Thisness" 
  * Reminder to beware of the reductionist, false objectivty of a given taxonomy
  * Reminder that it is important to have a precise, deterministic classification system
  
#####  Questions
- I am a bit stuck with understanting cookies, Express-Session, and multiple users...
- The server stops after 2 - 3 images have been written. How to make it work for multiple clients connected at the same time?

Questions are marked with `// [QUESTION]`
> [index.js](https://drive.google.com/open?id=1D3NgR8H-Lq1dKw4yQjneVOM9Vh9uHi0I)

##### IN-PROGRESS
- [ ] Finalise the narrative...
- [ ] Group the narrative images into folders by step ...
- [ ] Work further on readme...

## Bibliography
To be compiled.
