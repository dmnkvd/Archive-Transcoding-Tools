The Subjectivity of Classification
======
 
> Archive Transcoding tools are a set of different algorithmic strategies, seeking to find novel
> and exciting ways of representing artefacts from the archive of the Institute of Social History
> in Amsterdam. In doing so, the project touches down on the problems of taxonomy and representation,
> and wishes to explore visually what constitutes an artefact's "thisness". 

__________________________________________

The establishing research framework can be found at:
* https://www.notion.so/700ml/Archival-Resilience-2-0-1e8810953f164242aaaeb1c5fe92ad95.

The master document for the interpretative steps/backbone of transcodings can be found at:
* https://www.notion.so/700ml/BADGES-Master-Document-65955832ffd74de0927b75a91b648047.

##### KEYWORDS
| Haeccity, Relativism, Designed Objectivity, Meaning-Making, Semiotic Studies |

__________________________________________

### Personal learning goals:
* Improve my JavaScript (et. al.) skills: Data Structures, File Manipulation, client-server communication...
* Improve my programming ability for creating web-based experiences... websites as workshops, forums, spaces of participation...
* Build up a concise, didactic, accessible narrative dealing with the problems of classification / ordering
* Discuss the (my) Problem of Classification, my research-framework, through this practical application, via a limited number of artefacts
* Develop and tinker with playful transcoding tools along the way

__________________________________________

## 🏁 Input
The input is a collection of 20 colour-corrected photographs of badges, selected at random. 
☞ [Input](https://drive.google.com/open?id=1k7vdxrWdUg5r0helB_yeT7051W1r1Ttc)

In the intermediate steps of the project, I decided to proceeded with a distinctive, exemplary badge. In the final implementation, a selection of 3 - 5 will be implemented in the final narrative.

| Info | Data |  
|--|--|
|![Badge](https://search.iisg.amsterdam/Cover/Show?author=&callnumber=BG+AA5%2F651&size=small&title=%5BButton.%5D&pid=30051002121819&publication=pictoright)| 
**IISG Link** | [CSD BG V2/410 ](https://search.iisg.amsterdam/Record/1046576)
| **Physical Description** | Button, Badge.
| **Category** | Visual Document.
| **Meeting** | Campaign on Yugoslavia.

###### Final Input
The badges were cleaned up, with the scanned background removed.
☞ [Input-cleanup](https://drive.google.com/open?id=16yaqBnfxsEB8Vx6aOMcAG-fH5-W0PCgq)

## ▶︎ Tool 0 ◽️ IISG Image Scraper
###### W12
This first tool scrapes IISG's collection (of photographs) of Badges, and saves the image links, together with the link to the record, in a Python dictionary. 

#### Remarks:
* Build a download function.
* Add Pagination support.

## W13 ▶︎ Tool 1 ◽️ Main Colour HEX
Disclose the artefact by their predominant colour. Analogous to tagging an artefact with one singular tag. Creates a highly simplistic interpretation of the artefact.
* [TOOL 1 - outcomes](https://drive.google.com/open?id=1sZFAJHxdTo6kFFht144gDHAQaPNzByss)

#### Remarks:
* The colour average is purely based on histogram - could improve with K-clustering for more natural outcomes.
* I am evenetually creating a server/web interface, as a way to talk about the bigger narrative/story of the richness of classification.
* Development has taken place in Bash/Python. Should I continue developing these tools in a different programming environment?

## W14, 15 ▶︎ Tool 2 ◽️ Research, Semantic Analysis

From tinkering with an image-based approach, I shifted back to the wider metanarrative:
* I shifted towards a language-based disclosure, using the convenience of JavaScript Object Notation as an environment for semantic analysis of the badge

* [TOOL 2 - outcome](https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/tool_2-Semantic-analysis/semanticBadge.js)

## W16, W17 ▶︎ Tool 3 🟩 Gradual meaning-making
This week, I have been busy with drafting a little participatory app to describe a badge collectively, together, in steps. The idea is that each visitor draws according to the instructions given in the sentence prompt. After she has drawn all the steps, she proceeds to a webpage "gallery" of all drawings from all visitors. Showing a beautiful subjectivity of interpretation.

I built a local version with a download button (Tool 3), and a participatory, server-side version (Tool 3.1).

![Image of GIF Loop](https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/tool_3.1-drawStepsNodeJS/testWrite/GIF/loop.gif)
- [TOOL 3 - outcomes](https://drive.google.com/open?id=1D3NgR8H-Lq1dKw4yQjneVOM9Vh9uHi0I)

## W18 ▶︎ Tool 4 ◽️ /somewhat/ Participatory Story-Making
For next week, I wish to proceed with my Node.js web application, and intensively think of the framing of the outcomes...
* Write the narrative: Gradual Meaning-Making, Beauty of Subjectivity, Fuziness of Representation ...
* Revisit relevant sources from bibliography
* Continue developing web application -- Display outcomes of workshop in a story
  * Focus:
  * Subjectivity of classification, categorisation
  * Reminder that we all hold extremely different interpretations of "Haecceity / Thisness" 
  * Reminder to beware of the reductionist, false objectivty of a given taxonomy
* Could the outcomes be formatted and printed as a short story?

## Subdirectories of project:
* [*TOOL 0 - IISG Image Scraper*](https://github.com/dmnkvd/Archive-Transcoding-Tools/tree/master/tool_0-scraper)
* [*TOOL 1 - Main Colour HEX*](https://github.com/dmnkvd/Archive-Transcoding-Tools/tree/master/tool_1-HexCode)
* [*TOOL 2 - Semantic Analysis*](https://github.com/dmnkvd/Archive-Transcoding-Tools/tree/master/tool_2-Semantic-analysis)
* [*TOOL 3 - Gradual meaning-making*](https://github.com/dmnkvd/Archive-Transcoding-Tools/tree/master/tool_3-drawSteps)
* [*TOOL 3.1 - Participatory Gradual meaning-making*](https://github.com/dmnkvd/Archive-Transcoding-Tools/tree/master/tool_3.1-drawStepsNodeJS)

## Bibliography
To be compiled.
