# Archive-Transcoding-Tools
 
Archive Transcoding tools are a set of different algorithmic strategies, seeking to find novel and exciting ways of representing artefacts from the archive of the Institute of Social History in Amsterdam. In doing so, the project touches down on the problems of taxonomy and representation, and wishes to explore visually what constitutes an artefact's "thisness". 

The starting point is a collection of well-classified artefacts, Badges. 

The establishing research framework can be found at https://www.notion.so/700ml/Archival-Resilience-2-0-1e8810953f164242aaaeb1c5fe92ad95.

The master document for the interpretative steps/backbone of transcodings can be found at https://www.notion.so/700ml/BADGES-Master-Document-65955832ffd74de0927b75a91b648047.

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

## W14: Tool 2 - Disclosing meaning gradually
From diving into a image-based methodology, I shifted back to the wider metanarrative:
- What does the gradual disclosing of an object imply in terms of didactic value?
- What does it afford?
- What are my intentions?
- Could this be made into a forum, that discusses meaning-formation as an iterative, ungraspable, fuzzy process?

## Code:
- [*TOOL 0 - IISG Image Scraper*](https://github.com/dmnkvd/Archive-Transcoding-Tools/tree/master/tool_0-scraper)
- [*TOOL 1 - Main Colour HEX*](https://github.com/dmnkvd/Archive-Transcoding-Tools/tree/master/tool_1-HexCode)

