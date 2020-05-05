[<img src="" width="100%">](#)
# The Relativity of Classification

> Haziness of Classification is the collective name for a set of algorithmic tools, united in the goal to find novel
> and exciting ways of representing artefacts from the archive of the Institute of Social History
> in Amsterdam. In doing so, the project touches down on the problems of taxonomy and representation,
> and wishes to explore visually what constitutes an artefact's "thisness". 

__________________________________________

The establishing research framework can be found at:
* https://www.notion.so/700ml/Archival-Resilience-2-0-1e8810953f164242aaaeb1c5fe92ad95.

The master document for the interpretative steps/backbone of transcodings can be found at:
* https://www.notion.so/700ml/BADGES-Master-Document-65955832ffd74de0927b75a91b648047.

###### KEYWORDS
Haeccity, Relativism, Classification, Typology, Meaning-Making

### Table of Contents
1. [Artefact](#Artefact)
    1. [Metadata](#Metadata)
2. [Research](#Research-h1)
3. [Transcoding](#Transcoding)
    1. [Transcoding No. 1](#Transcoding-no-1)
    2. [Transcoding Tool](#Transcoding-tool)
4. [Reflection](#Reflection)
5. [Outcome](#Outcome)
6. [Conclusion](#Conclusion)
7. [Bibliography](#Bibliography)

__________________________________________

__________________________________________

# Artefact

The input is a collection of 20 colour-corrected photographs of badges, selected at random. 
> [Input](https://drive.google.com/open?id=1k7vdxrWdUg5r0helB_yeT7051W1r1Ttc)

In the intermediate steps of the project, I decided to proceeded with a distinctive, exemplary badge. In the final implementation, a selection of 3 - 5 will be implemented in the final narrative.

## Metadata
| Tag | Data |  
|--|--|
**IISG Call Number** | [IISG BG AA5/651](https://search.iisg.amsterdam/Record/1189452)
| **Physical Description** | Aluminum Pin-Badge 
| **Type** | Object
| **Medium** | Badge, Button
| **Materials** | Metal, Plastic
| **Date** | ????
|<img src="https://search.iisg.amsterdam/Cover/Show?author=&callnumber=BG+AA5%2F651&size=small&title=%5BButton.%5D&pid=30051002121819&publication=pictoright" width="250" height="250">| This is literally a description of what you see in the image, make sure its a clear, complete and concise overview of the artefact. It should make sense for someone who doesn't see the image itself.  Our final *Catalogue of Resilience* might make use of one representative image from each student, so important to put your moneyshot here. You can build a gallery of additional artefact images below. 

###### Final Input
The badges were cleaned up, with the scanned background removed.
> [Input-cleanup](https://drive.google.com/open?id=16yaqBnfxsEB8Vx6aOMcAG-fH5-W0PCgq)

# Research (H1)

# Transcoding
The general role of transcoding...

## ⚽️Transcoding No. 1 - Capturing the Input
### Description
I attempted to capture the badge in 3d. Due to the limitations imposed by the archhive this proved difficult.

### Methods

### Tools 
- 3d scanning software
- Blender

### Results

## 🏀Transcoding No. 2 - Assign one single stereotype to the Artefact
### Description
Disclose the artefact by their predominant colour. Analogous to tagging an artefact with one singular tag. Creates a highly simplistic interpretation of the artefact.

### Methods

### Tools 
- bash
- Terminal
- ImageMagick

### Results
<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/x-proccess/Screenshots/tool_1/tool-1__1.png" width="400" height="400">
> [TOOL 1 - outcomes](https://drive.google.com/open?id=1sZFAJHxdTo6kFFht144gDHAQaPNzByss

## 🏐Transcoding No. 2 - Exploring Different ways of disclosing a Badge
### Description
From tinkering with an image-based approach, I shifted back to the wider metanarrative:
* Returning to language-based disclosure, I used the convenience of JSON as an environment for semantic analysis of the badge

### Methods
JSON
Semantic Interpretation

### Tools 
- JavaScript

### Results
> [TOOL 2 - outcome](https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/tool_2-Semantic-analysis/semanticBadge.js)

## ⚾️Transcoding No. 3 - Gradual Meaning-Making
### Description
a little participatory app to describe a badge collectively, together, in steps. The idea is that each visitor draws according to the instructions given in the sentence prompt. After she has drawn all the steps, she proceeds to a webpage "gallery" of all drawings from all visitors. Showing a beautiful subjectivity of interpretation.

### Methods


### Tools 
-- participatory tool

### Results

## 🥎Transcoding No. 4 - Participatory Narrative Workshop
### Description
The final transcoding shall happen as part of a workshop, held at a specific location. After responding to the ten steps of the prompt, the images will be incorporated a final narrative.

The main points of the narrative concern:
  * Subjectivity of classification, categorisation
  * Reminder that we all hold extremely different interpretations of "Haecceity / Thisness" 
  * Reminder to beware of the reductionist, false objectivty of a given taxonomy
  * Reminder that it is important to have a precise, deterministic classification system

### Methods


### Tools 
-- participatory tool

### Results
  
## Tools

## Transcoding Tool 1: IISG Image Scraper
### Description
This first tool scrapes IISG's collection (of photographs) of Badges, and saves the image links, together with the link to the record, in a Python dictionary.

### Aims
To simplify and remove selectio bias from my pick of artefacts.

### Methods
Dependencies used:
- Python
- Beautiful Soup

### Results
Sample of a data collection search.

### Source Links
Please include links to the tools, sources etc used during the coding. E.g. the resources used for making your coding tool.  

## Transcoding Tool 2: HEX Color Code Classifier
### Description

### Aims
* The colour average is purely based on histogram - could improve with K-clustering for more natural outcomes.
* I am evenetually creating a server/web interface, as a way to talk about the bigger narrative/story of the richness of classification.
This first tool scrapes IISG's collection (of photographs) of Badges, and saves the image links, together with the link to the record, in a Python dictionary. 

### Methods
Dependencies used:
- Python
- Beautiful Soup

### Results
PNG images.

### Source Links
Please include links to the tools, sources etc used during the coding. E.g. the resources used for making your coding tool.  

## Transcoding tool 3: Draw by Instructions and Download your Drawing
### Description

### Aims

### Methods

### Results
<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/x-proccess/Screenshots/tool_3/tool-3__1.png" width="400" height="400">

I built a local version with a download button, and a server-side version.

## Transcoding tool 4: Collaborative Drawing-App
### Description

### Aims

### Methods

### Results
<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/x-proccess/Screenshots/tool_3/tool-3__1.png" width="400" height="400">

## Transcoding tool 5: Narrative and Gallery of User-Made Drawings
### Description

### Aims

### Methods

### Results

### Source Links

--------------------
# Reflection
My personal learning goals this semester were:
* Improve my JavaScript (et. al.) skills: Data Structures, File Manipulation, client-server communication...
* Improve my programming ability for creating small, interactive experiences... Websites as workshops, forums, spaces of participation...
* Write a poetic, didactic, accessible narrative dealing with the problems of classification / ordering
* Discuss the (my) Problem of Classification, my research-framework through this practical application, via a limited number of artefacts
* Develop a methodology for producing illustrated stories that are different with every user group
* Develop and tinker with playful transcoding tools along the way

# Outcomes
- code-based outcomes
- practical outcomes
- outcomes of the use of the tool

### Outcome Links
> website

# Conclusion 

## Bibliography
To be compiled.
