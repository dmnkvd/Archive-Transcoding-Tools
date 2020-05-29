[<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/Documentation/readme/CoverImage.png" width="100%">](#)
# The Relativity of Classification

> Within a given (public) archive, new artefacts and acquisitions are generally classified without exposing them to the public eye in any
> way. Relativity of Classification is the collective name for a set of algorithmic tools, united in the goal to find novel
> and exciting ways of representing artefacts from the archive of the Institute of Social History
> in Amsterdam. In doing so, the project touches down on the problems of taxonomy and representation,
> and wishes to explore visually what constitutes an artefact's "thisness". The project hopefully marks a step closer towards the
> engagement of the public with the diverse, fascinating and complex collection of historical items in the archive collection. 

###### KEYWORDS
Haeccity, Relativism, Classification, Collective Memory, Typology, Meaning-Making

__________________________________________
### Table of Contents
1. [Artefact](#Artefact)
    1. [Metadata](#Metadata)
2. [Research](#Research-h1)
3. [Transcodings](#Transcoding)
    1. [Transcoding 1 - Capturing the Input](#Transcoding-1)
    2. [Transcoding 2 - A Badge as...](#Transcoding-2)
    3. [Transcoding 3 - Disclose the Badges by one Main Colour](#transcoding-3---disclose-the-badges-by-one-main-colour)
    4. [Transcoding 4 - Semantic (Structuralist) Analysis of a Badge](#transcoding-4---semantic-structuralist-analysis-of-a-badge)
    5. [Transcoding 5 - Disclosing the Artefact, one-step-at-a-time](#transcoding-5---disclosing-the-artefact-one-step-at-a-time)
    6. [Transcoding 6 - Participatory Meaning-Making Workshop](#transcoding-6---participatory-meaning-making-workshop)
    6. [Transcoding 7 - Installation Proposal](#transcoding-7---installation-proposal)
4. [Transcoding Tools](#Transcoding)
    1. [Tool 1: IISG Image Scraper](#tool-1-IISG-Image-Scraper)
    2. [Tool 2: Generate HEX Color Tile from Main Color in Image](#tool-2-generate-hex-color-tile-from-main-color-in-image)
    3. [Tool 3: Draw by Instructions and Download your Drawing!](#tool-3-draw-by-instructions-and-download-your-drawing)
    4. [Tool 4: Collaborative Drawing App](#tool-4-collaborative-drawing-app)
    5. [Tool 5: Narrative, featuring dataset of User-Made Drawings](#tool-5-narrative-featuring-dataset-of-user-made-drawings)
5. [Reflection](#Reflection)
6. [Outcomes](#Outcome)
7. [Conclusion](#Conclusion)
    1. [Going Forward](#Going-Forward)
8. [Bibliography](#Bibliography)
__________________________________________

# Artefact
The central case study is an aluminum Pin-Badge. More precisely, a selection of twenty badges, selected at random. Due to the visual similarity of the badges, I found them to be a perfect testing ground for challenging my explorations and researches on the topics of Thissness (Haecceity) and the Subjectivity of Classification.
> [Input](https://drive.google.com/open?id=1k7vdxrWdUg5r0helB_yeT7051W1r1Ttc)

#### Disclaimer
For deductive testing purposes, I selected one badge as the central artefact of the transcoding process.

## Metadata

| Tag | Data |  
|--|--|
**IISG Call Number** | [IISG BG AA5/651](https://search.iisg.amsterdam/Record/1189452)
| **Physical Description** | Aluminum Pin-Badge 
| **Type** | Object
| **Medium** | Badge, Button
| **Materials** | Metal, Plastic
| **Date** | 1975 - 1999
|<img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/tool_5-NarrativePage/public/images/page/badge.jpeg">| An alluminum-plastic pin-badge with text "PEACE IN THE BALKANS". The badge is classified in the collection Campaign on Yugoslavia. The classificiation of the badge, and its specified historical time, significantly influences the meaning one might deduce from simply looking at the image.

# Research
Out of my initial selection of twenty badges, I decided to proceed with this one. Coming from the Balkan region myself, I am well-acquainted with the historicised discourse surrounding peace in the Balkans. Moreover, the rather specific message, gave, in my opinion, a great starting ground for discussing its meaning, connotations, and the socio-historical context of its signification.

<table>
<colgroup>
    <col width="100%">
</colgroup>
<tbody>
  <tr>
    <td align="center"><a href="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/Documentation/readme/twentyBadges.png"><img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/Documentation/readme/twentyBadges.png" width="75%"></a></td>
  </tr>
</tbody>
</table>

### The Badge - a Thing with Lots of Meanings
The badge offers several points of interest to examination. First, it is an arbitrary sign, designed with the specific purpose of conveying a message at a given point in time, for a given cause. Secondly, the badge might be considered an ephemeral object, made to support one specific event, to be retired from use or discarded afterwards. The effectiveness of a badge's message is extremely contextual. The understanding of a badge is heavily dependent upon the semantic knowledge / frame of reference of the beholder. The archive collects all badges in a cabinet, decontextualising them completely from their original circumstances. The badge becomes solely a container of meaning, imprinted upon a (most often) circular disc. In a presentation context (for example within an archive), a badge often needs further contextualisation for decreasing the ambiguity of its possible interpretations. It is therefore extremely important what descriptors, tags, classification schemes or grouping methods are chosen when representing such an arbitrary object.

Another point of interest in the particular medium of the badge is the fact that it is intend to be worn, and thus communicates the wearer's identity, thoughts, and position on the related issue. It could be considered an extension of the wearer's identity.

### Thissness, Haecceity, Taxonomy, Classification, Typology
In medieval philsoophy, the concept of thissness referred to the 

# Transcoding
Transcoding within the scope of this project refers to a selection of tools and programs I wrote to activate my research, and contextualise the subsequent steps.

## Transcoding 1
### Description
I attempted to capture the badge in various ways, to obtain diverse physical measurements.

### Methods
<table>
<colgroup>
    <col width="50%">
    <col width="50%">
</colgroup>
<tbody>
  <tr>
    <td><a href="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_1/BlenderBadge-2.png"><img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_1/BlenderBadge-2.png"></a></td>
    <td><a href="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_1/BlenderBadge-1.png"><img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_1/BlenderBadge-1.png"></a></td>
  </tr>
</tbody>
</table>

### Tools 
- Trnio
- Blender

### Results
Cleaned-up 3D model of the badge.

<table>
<colgroup>
    <col width="100%">
</colgroup>
<tbody>
  <tr>
    <td align="center"><a href="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_1/BlenderBadge-6.png"><img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_1/BlenderBadge-6.png" width="75%"></a></td>
  </tr>
</tbody>
</table>

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
    <summary><b>Badge as Industrial Product</b></summary>
  
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

## Transcoding 3 - Disclosing the artefacts by One Main Colour
### Description
The artefacts are disclosed by their predominant colour. Analogous to tagging an object with one singular tag. Creates a highly simplistic, stereotyped interpretation of the artefact.

### Methods
I wrote a small Bash script to automate the process.

### Tools 
- Tool 2

### Results
<table>
<colgroup>
    <col width="50%">
    <col width="50%">
</colgroup>
<tbody>
  <tr>
    <td align="center"><a href="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_3/tool_2_11.png"><img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_3/tool_2_11.png"></a></td>
    <td align="center"><a href="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_3/tool_2_2.png"><img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_3/tool_2_2.png"></a></td>
  </tr>
</tbody>
</table>

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
    <summary><b>JSON Semantic Analysis</b></summary>
  
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
- [Tool 3: Draw by Instructions and Download your Drawing!](#tool-3-draw-by-instructions-and-download-your-drawing)

### Results
<table>
<colgroup>
    <col width="100%">
</colgroup>
<tbody>
  <tr>
    <td align="center"><a href="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_5/tool_3_1.png"><img src="https://github.com/dmnkvd/Archive-Transcoding-Tools/blob/master/transcoding_5/tool_3_1.png" width="50%"></a></td>
  </tr>
</tbody>
</table>

## Transcoding 6 - Participatory Meaning-Making Workshop
### Description
The final transcoding is a participatory workshop, expanded from the local "drawing room". The participants' responses are incorporated and displayed in a final narrative, discussing the relativity of classification. 

The main points of the narrative concern:
  * Subjectivity of classification, categorisation
  * Reminder that we all hold extremely different interpretations of "Haecceity / Thisness" 
  * Reminder to beware of the reductionist, designed objectivty of archival administration
  
### Methods


### Tools 
- [Tool 5: Narrative, featuring collection of User-Made Drawings](#tool-5-narrative-featuring-dataset-of-user-made-drawings)

### Results
<-- STAY TUNED -->
  
# ---- Transcoding Tools ----

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
Collection of results.

## Tool 2: Generate HEX Color Tile from Main Color in Image
### Description

### Aims
* The colour average is purely based on histogram - could improve with K-clustering for more natural outcomes.

### Methods
Dependencies used:
- Bash
- Python
- ImageMagick

### Results
100x100 px PNG images, populated with the top Histogram read-out.

## Tool 3: Draw by Instructions and Download your Drawing!
### Description
A HTML Canvas, with colour selection and the option to download your drawing.

### Aims
To create an instruction-based drawing app with a download function.

### Dependencies Used
- HTML, CSS, JavaScript.

## Tool 4: Collaborative Drawing App
### Description
Continuing from the local version, this version is server-based and allows each visitor of the website to save their drawing to a directory on the server.

### Aims

### Dependencies Used
Dependencies used:
- NodeJS, Express, 

### Results
See [Transcoding 5](#transcoding-5---disclosing-the-artefact-one-step-at-a-time).

## Tool 5: Narrative, featuring dataset of User-Made Drawings
### Description
A generative installation, fed by the visual material created within the Drawing App.

### Aims
The final tool seeks to bring together an inclusive narrative, a selection of artefacts, and the user-made drawings into an interpretative, evolving experience, that discusses the subjectivity of classification, and complexity of meaning-making.
Given the restrictions imposed in light of Covid-19, I developed a first prototype for a web-based experience. The original exhibition proposal is a spatial installation within the Institute of International Social History in Amsterdam, where visitors can contribute their drawings to the dataset and experience the narrative in a physical space via a two-channel generative installation.

### Methods
Dependencies Used:
- HTML, CSS, JavaScript
- NodeJS
- Express
- Pug

### Results
<-- TBD -->

--------------------
# Reflection
My personal learning goals this semester were:
* Improve my JavaScript (et. al.) skills: Data Structures, File Manipulation, client-server communication...
* Work towards creating small, interactive experiences... Websites as workshops, forums, spaces of participation...
* Write a poetic, didactic, accessible narrative dealing with the problems of classification / ordering
* Discuss the (my) Problem of Classification through this practical application, via a limited number of artefacts
* Develop and tinker with playful transcoding tools along the way

I am quite satisfied with the areas of knowledge that I opened up within this project. I am also very satisfied with the fact that I was able to resolve most coding difficulties on my own. I wish there would be more time to focus on this project exclusively, to dive deeper into the code, and produce a larger-scale outcome. Hence, I intend to continue to develop this product in the upcoming weeks.

# Outcomes
There are two main results of the project:
1. A participatory Drawing Room, which explores the subjectivity of interpretation.
2. A dynamic installation, incorporating the drawings from the prior stage, which seeks to raise discussion about the objectivity of archiving and classification.

# Conclusion
The original goal of this project was to develop diverse tools to encourage the conservation of cultural memory of a given artefact from the IISG. The process has unfolded in several different directions – it is important to note that the realised translation is only one small step in a newly-begun bigger exploration.

I would be curious to expand this project so that it may correspond with any given typology of items from the Archive. In the long-term, a visual folksonomy might arise from this methodology. In the greater scheme, the desired outcome would be the establishment of a public-facing interactiv experience for the collective discovery and reflection on new artefacts and acquisitions of the IISG.

# Notes on Methodology
The narrative produced within the scopes of this assignment aims to open various discussion points, rather than give conclusive answers. It is an abridged distillation of several tangential research directions. Expanding the narrative into a substantial theoretical framework is the next step in this research.

## Bibliography
<a id="note1" href="#note1ref"><sup>1</sup></a> Foucault, Michel. <i>The Order of Things</i>. Routledge, 2005 (orig. 1970).</br>
<a id="note2" href="#note2ref"><sup>2</sup></a> Ham, F. Gerald. <i>The Archival Edge</i>. Society of American Archivists, 1975.</br>
<a id="note3" href="#note3ref"><sup>3</sup></a> Munari, Bruno. <i>The Discovery of the Circle</i>. G. Wittenborn, 1965.</br>
<a id="note4" href="#note4ref"><sup>4</sup></a> Derrida, Jacques. <i>Archive Fever: A Freudian Impression</i>. University of Chicago Press, 1998.</br>
<a id="note5" href="#note5ref"><sup>5</sup></a> Russell, Bertrand.<i> A History of Western Philosophy</i>. A Touchstone Book. New York u.a: Simon and Schuster, 1972.</br>
<a id="note6" href="#note6ref"><sup>6</sup></a> Bortolini, Eugenio. <i>'Typology and Classification'</i>. The Oxford Handbook of Archaeological Ceramic Analysis, 8 December 2016. https://doi.org/10.1093/oxfordhb/9780199681532.013.38.</br>
<a id="note7" href="#note6ref"><sup>7</sup></a> Cagle, Kurt. <i>‘Taxonomies vs. Ontologies’</i>. Forbes. Accessed 29 May 2020. https://www.forbes.com/sites/cognitiveworld/2019/03/24/taxonomies-vs-ontologies/.
