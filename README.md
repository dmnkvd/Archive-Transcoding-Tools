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
My chosen artefact is a badge. More precisely,

> [Input](https://drive.google.com/open?id=1k7vdxrWdUg5r0helB_yeT7051W1r1Ttc)

## Metadata
| Tag | Data |  
|--|--|
**IISG Call Number** | [IISG BG AA5/651](https://search.iisg.amsterdam/Record/1189452)
| **Physical Description** | Aluminum Pin-Badge 
| **Type** | Object
| **Medium** | Badge, Button
| **Materials** | Metal, Plastic
| **Date** | 1999
|<img src="https://search.iisg.amsterdam/Cover/Show?author=&callnumber=BG+AA5%2F651&size=small&title=%5BButton.%5D&pid=30051002121819&publication=pictoright" height="100" width="100">| The badge.

###### Final Input
The badges were cleaned up, with the scanned background removed.
> [Input-cleanup](https://drive.google.com/open?id=16yaqBnfxsEB8Vx6aOMcAG-fH5-W0PCgq)

# Research (H1)
## What is a Badge?
In my research, I explore different ways in which a badge could be described...

# Transcoding
Throughout the duration of this project, I went over several transcoding steps.

## Transcoding No. 1 - Capturing the Input with various Sensors
### Description
I attempted to capture the badge in various ways, to obtain diverse physical measurements.

### Methods

### Tools 
- Trnio
- Blender

### Results

## Transcoding No. 2 - A Badge as...
A badge may be described in numerous different ways - I decided to thoroughly explore some different genealogies and descriptive sequences that would arrive at the answer of: A Badge.

### Methods
Transcoding with Bash / Python.

### Tools 
No self-made tools were used for this.

### Results
> [Different ways of looking at a Badge](https://drive.google.com/open?id=1sZFAJHxdTo6kFFht144gDHAQaPNzByss

## Transcoding No. 3 - Disclose the badges by one main colour
### Description,
The artefacts are disclosed by their predominant colour. Analogous to tagging an object with one singular tag. Creates a highly simplistic, stereotyped interpretation of the artefact.

### Methods
Transcoding with Bash / Python.

### Tools 
- Tool 2

### Results
<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/x-proccess/Screenshots/tool_1/tool-1__1.png" width="400" height="400">
> [TOOL 1 - outcomes](https://drive.google.com/open?id=1sZFAJHxdTo6kFFht144gDHAQaPNzByss)

## Transcoding No. 4 - Semantic (Structural) Analysis of a Badge
### Description
I discovered that JSON is a great environment for writing-out a thorough semantic analysis of the badge.

### Methods
JSON
Semantic Interpretation

### Tools 
- JavaScript

### Results
<details><summary>JSON</summary>
<p>
```JavaScript
code = codeHere
```
</p>
</details>

> [TOOL 2 - outcome](https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/tool_2-Semantic-analysis/semanticBadge.js)

## Transcoding No. 5 - Disclosing the Artefact, one-step-at-a-time
### Description
A simple participatory app to describe a badge collectively, together, in steps. The idea is that each visitor draws according to the instructions given in the sentence prompt. After she has drawn all the steps, she proceeds to a webpage "gallery" of all drawings from all visitors. Showing a beautiful subjectivity of interpretation.

### Methods


### Tools 
-- participatory tool

### Results

## Transcoding No. 6 - Participatory Meaning-Making Workshop
### Description
The final transcoding will happen as part of a workshop. After responding to the prompt, the images will be incorporated into a final narrative, about the fuziness of classification.

The main points of the narrative concern:
  * Subjectivity of classification, categorisation
  * Reminder that we all hold extremely different interpretations of "Haecceity / Thisness" 
  * Reminder to beware of the reductionist, false objectivty of a given taxonomy
  * Reminder that it is important to have a precise, deterministic classification system

### Methods


### Tools 
-- participatory web application

### Results
  
## 🛠⚙️🗜Tools

## Transcoding Tool 1: IISG Image Scraper
### Description
This tool scrapes IISG's online archive of Badges and saves the image links, together with the link to the record, into a Python dictionary. 

### Aims
To automate the process and eliminate selection bias from my choice of artefacts.

### Methods
Dependencies used:
- Python
- Beautiful Soup

### Results
Sample of a data collection search.

### Source Links
Please include links to the tools, sources etc used during the coding. E.g. the resources used for making your coding tool.  

## Transcoding Tool 2: Generate HEX Color Tile from Main Color in Image
### Description

### Aims
* The colour average is purely based on histogram - could improve with K-clustering for more natural outcomes.
* I am eventually developing a participatory web application, as a way to talk about the bigger narrative/story of the richness of classification.

### Methods
Dependencies used:
- Bash
- Python
- ImageMagick

### Results
PNG images.

### Source Links


## Transcoding tool 3: Draw by Instructions and Download your Drawing!
### Description

### Aims

### Methods

### Results
<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/x-proccess/Screenshots/tool_3/tool-3__1.png" width="400" height="400">

I built a local version with a download button, and a server-side version.

## Transcoding tool 4: Collaborative Drawing App
### Description
Continuing from the local version, this version is server-based and allows each visitor of the website to save their drawing to a directory on the server.

### Aims

### Methods

### Results
<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/x-proccess/Screenshots/tool_3/tool-3__1.png" width="400" height="400">

## Transcoding tool 5: Narrative Page and Gallery of User-Made Drawings
### Description

### Aims
The final tool aims to bring together aspects of my personal research, a selection of artefacts, and the user-made drawings into a dynamic, evolving narrative page, that tells a story of the subjectivity of classification, and meaning-making.

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
> [TOOL 1 - outcomes](https://drive.google.com/open?id=1sZFAJHxdTo6kFFht144gDHAQaPNzByss


# Conclusion 

## Bibliography
To be compiled.
