[<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/Documentation/readme/CoverImage.png" width="100%">](#)
# The Relativity of Classification

> Relativity of Classification is the collective name for a set of algorithmic tools, united in the goal to find novel
> and exciting ways of representing artefacts from the archive of the Institute of Social History
> in Amsterdam. In doing so, the project touches down on the problems of taxonomy and representation,
> and wishes to explore visually what constitutes an artefact's "thisness". 

###### KEYWORDS
Haeccity, Relativism, Classification, Typology, Meaning-Making

__________________________________________
### Table of Contents
1. [Artefact](#Artefact)
    1. [Metadata](#Metadata)
2. [Research](#Research-h1)
3. [Transcodings](#Transcoding)
    1. [Transcoding 1 - Capturing the Input](#Transcoding-1)
    2. [Transcoding 2 - A Badge as...](#Transcoding-2)
    3. [Transcoding 3 - Disclose the Badges by one Main Colour](#Transcoding-3)
    4. [Transcoding 4 - Semantic (Structuralist) Analysis of a Badge](#Transcoding-4)
    5. [Transcoding 5 - Disclosing the Artefact, one-step-at-a-time](#Transcoding-5)
    6. [Transcoding 6 - Participatory Meaning-Making Workshop](#Transcoding-6)
4. [Transcoding Tools](#Transcoding)
    1. [Tool 1: IISG Image Scraper](#Tool-1:-IISG-Image-Scraper)
    2. [Tool 2](#Transcoding-no-1)
    3. [Tool 3](#Transcoding-no-1)
    4. [Tool 4](#Transcoding-no-1)
    5. [Tool 5](#Transcoding-no-1)
5. [Reflection](#Reflection)
6. [Outcomes](#Outcome)
7. [Conclusion](#Conclusion)
8. [Bibliography](#Bibliography)
__________________________________________

# Artefact
My chosen artefact is an aluminum Pin-Badge. More precisely, a selection of twenty badges, selected at random. Due to the visual similarity of the badges, I found them to be a perfect testing ground for challenging my explorations and researches on the topics of Haecceity, Thisness, etc (read more in the research section).

> [Input](https://drive.google.com/open?id=1k7vdxrWdUg5r0helB_yeT7051W1r1Ttc)

#### Disclaimer
For testing purposes, I selected one badge to be used as the central part of the transcoding process.

## Metadata

| Tag | Data |  
|--|--|
**IISG Call Number** | [IISG BG AA5/651](https://search.iisg.amsterdam/Record/1189452)
| **Physical Description** | Aluminum Pin-Badge 
| **Type** | Object
| **Medium** | Badge, Button
| **Materials** | Metal, Plastic
| **Date** | 1999
|<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/tool_5-NarrativePage/public/images/page/badge.jpeg" width="30%">| The badge.

# Research
### What is a Badge?
In my research, I explore different ways in which a badge could be described...

### Thissness, Haecceity, Taxonomy, Classification, Typology
Thissness is defined as etc.<a href="#note1" id="note1ref"><sup>1</sup></a>

# Transcoding
Transcoding within the scope of this project refers to a selection of tools and programs I wrote to activate my research, and contextualise the subsequent steps.

## Transcoding 1
### Description
I attempted to capture the badge in various ways, to obtain diverse physical measurements.

### Methods
[<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_1/BlenderBadge-1.png" width="50%">](https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_1/BlenderBadge-1.png)

### Tools 
- Trnio (app)
- Blender

### Results

## Transcoding 2
A badge may be described in an infinite number of different ways - I decided to thoroughly explore some different genealogies and descriptive sequences that would arrive at the answer of: A Badge.

### Methods
I looked at the most suitable ways of describing the badge, and arrived at the following categorisations:

The badge is...
- the final step of a production process
- a combination of natural resources
- a physical object
- an extension of the wearer's identity
- a cultural artefact
- an entry in a classification system

### Tools 
This transcoding did not require the use of self-made tools.

### Results
<details>
  <summary>Badge as Industrial Product</summary>
  
```
Aluminum, magnesium 0.25 to 0.6%, copper 0.25 to 0.6%, iron 0.5 to 1.5%, silicon 11 to 13.5%, chromium 0.25 to 0.4%, a maximum of 3% zinc, a maximum of 0.5% manganese and a maximum of 0.2% of each of titanium, nickel, tin and lead.

**Aluminum Alloy.**

Balsam Fir.

Wood Fibers.

Cellulose ((C6H10O5)n.).

+

Clay (aluminum silicate).

T[itanium dioxide](https://www.britannica.com/science/titanium-dioxide) (TiO2).

[Calcium carbonate](https://www.britannica.com/science/calcium-carbonate) (CaCO3) [carbon dioxide](https://www.britannica.com/science/carbon-dioxide) (CO2), sodium carbonate,( Na2CO3).

Cationic starch.

**Paper.**

Vinyl chloride-vinyl acetate copolymer, a polymeric amide, 2-methoxy-1-methylethyl acetate, N-butyl acetate, butan-2-OL, petroleum distillate, disperse and/or solvent dyes, propylene glycol and one or more acetates.

**Sublimation Ink.**

Polyvinyl chloride ( PVC ).

**Plastic.** 

Disc made of Aluminium Alloy. 

Bearing with pin, made of Aluminum Alloy.

Paper, cut into a 3.8mm circular disc.

Plastic sheet, cut into a 4.0mm circular disc.

**Sublimation Ink.**

**[Plastic sheet]**, heat-formed over **[paper with dye applied to it]**, impressed over **[stamped disc, made of aluminium alloy]**.

**A badge.**
```
</details>

## Transcoding 3
### Description
The artefacts are disclosed by their predominant colour. Analogous to tagging an object with one singular tag. Creates a highly simplistic, stereotyped interpretation of the artefact.

### Methods
Transcoding with Bash / Python.

### Tools 
- Tool 2

### Results

## Transcoding 4 - Semantic (Structuralist) Analysis of a Badge
### Description
JSON is a great environment for writing-out a thorough semantic analysis of the badge.

### Methods
JSON
Syntax Analysis

### Tools 
- JavaScript
### Results
<details>
  <summary>JSON Semantic Analysis</summary>
  
```javascript
badgeSemantics = {
    'A',
    'pink': {
        'denotation': {
            '#DA9BB0'
        }
        'connotation': {
            'gentle',
            'flesh',
            'skin',
            'personal'
        }
    },
    'metallic badge': {
        'metallic'; {
            'denotation': {
                'made of metal'
            }
            'connotation': {
                'sturdy'
                'permanent'
            }
        }
        'badge' {
            'circular object': {
                'circle'
                'round'
            },
            'accessory': {
                'worn',
                'identity',
                'identification',
                'social cause',
                'subculture',
                'belonging'
            }
        }
    },
    'with'
    'capitalised black English text:': {
        'capitalised': {
            'important',
            'loud',
            'significant',
            'public'
        }
        
        'black': {
            'denotation': {
                '#0D0D0D'
            }
            'connotation': {
                'serious'
            }
        },
        'English text': {
            'English' : {
                'Language'
            }
            'text': {
                'typeface': 
                    'DIN': {
                        'denotation': {
                        }
                        'connotation': {
                            'official',
                            'serious',
                            'rigid',
                            'commanding',
                            'imperative'
                        }
                    }
                'line': {
                    'word': {
                        'letter': 'P',
                        'letter': 'E',
                        'letter': 'A',
                        'letter': 'C',
                        'letter': 'E'
                    }
                },
                'line': {
                    'word': {
                        'letter': 'I',
                        'letter': 'N'
                    }
                    'word': {
                        'letter': 'T',
                        'letter': 'H',
                        'letter': 'E'
                    }
                },
                'line': {
                    'word': {
                        'letter':'B',
                        'letter':'A',
                        'letter':'L',
                        'letter':'K',
                        'letter':'A',
                        'letter':'N',
                        'letter':'S'
                    }
                }
            }
        };
    }
    '"PEACE IN THE BALKANS".': {
        'denotation': {
            'Sentence': {
                'Noun Phrase': {
                    'PEACE': {
                        'connotation' : {
                            'ceasefire',
                            'stop of violence'
                        }
                    }
                }
                'Preposition Phrase': {
                    'Preposition': {
                        'IN'
                    }
                    'Noun Phrase': {
                        'Determiner': {
                            'THE'
                        }
                        'Noun': {
                            'BALKANS': {
                                'denotation': {
                                    'Geographic Area in the south of Europe.'
                                }
                                'connotation': {
                                    'the South',
                                    'conflicted area'
                                }
                            }
                        }
                    }
                }
            }
        },
        'connotation': {
            '1990s independence conflicts',
            'dissolution of Yugoslavia',
            'civil wars',
            'UN interventions',
            'massacre',
            'genocide'
            },
        }
    }
}
```
</details>

## Transcoding 5 - Disclosing the Artefact, one-step-at-a-time
### Description
A simple participatory app to describe a badge collectively, together, in steps. The idea is that each visitor draws according to the instructions given in the sentence prompt.

### Methods

### Tools 
-- participatory tool

### Results

## Transcoding 6 - Participatory Meaning-Making Workshop
### Description
The final transcoding is a participatory workshop, expanded from the local "drawing room". The participants' responses are incorporated and displayed in a final narrative, discussing the relativity of classification. 

The main points of the narrative concern:
  * Subjectivity of classification, categorisation
  * Reminder that we all hold extremely different interpretations of "Haecceity / Thisness" 
  * Reminder to beware of the reductionist, designed objectivty of archival administration
  
### Methods


### Tools 
-- participatory web application

### Results
  
# 🛠⚙️🗜Transcoding Tools

## Tool 1: IISG Image Scraper
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

## Tool 2: Generate HEX Color Tile from Main Color in Image
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


## Tool 3: Draw by Instructions and Download your Drawing!
### Description

### Aims
To create an instruction-based drawing app with a download function.

### Methods
- HTML, CSS, JavaScript.

### Results
<pictures>

## Tool 4: Collaborative Drawing App
### Description
Continuing from the local version, this version is server-based and allows each visitor of the website to save their drawing to a directory on the server.

### Aims

### Methods

### Results
<pictures>

## Tool 5: Narrative, featuring dataset of User-Made Drawings
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
* Work towards creating small, interactive experiences... Websites as workshops, forums, spaces of participation...
* Write a poetic, didactic, accessible narrative dealing with the problems of classification / ordering
* Discuss the (my) Problem of Classification through this practical application, via a limited number of artefacts
* Develop a methodology for producing illustrated stories that are different with every user group
* Develop and tinker with playful transcoding tools along the way

I am quite satisfied with the areas of knowledge that I opened up within this project. I am also very satisfied with the fact that I was able to resolve most coding difficulties on my own.

# Outcomes
The final outcome of this semester is a collaborative web-application, which touches down on various aspects of classification and taxonomy through a participatory workshop.

# Going Forward
I would be curious to expand this project to include all twenty badges, or a whole different class of objects from the Archive -- how would the UI of the drawing process look in that case? How would the story change? I believe focusing on typology, and what that means, would be an interesting next step for this project.

### Outcome Links
> website

# Conclusion
The narrative produced within the scopes of this assignment aims to open various discussion points, rather than give conclusive judgement. It is a distillation of several research directories. 

## Bibliography
<a id="note1" href="#note1ref"><sup>1</sup></a> Reference 1. Link. Author. Date.
