This project was coded with the assistance of Gemini. 

### Frontmatter Reference Template
Example frontmatter for fanfic markdown files stored in `src/content/fanfics`:

```markdown
---
title: "The Overarching Work Title"
chapterTitle: "The Specific Title of This Chapter"
summary: "A brief, compelling teaser or summary of what happens in this specific file."
pubDate: 2026-07-09
year: 2026
fandoms:
  - "Original Work"
  - "Secondary Fandom Crossover"
pairings:
  - "Character A/Character B"
  - "Character C & Character D"
wordCount: 2450
isMultiChapter: true
chapterNumber: 1
chaptersTotal: "?"
seriesName: "The Grand Astro Chronicle"
seriesPart: 1

# AO3 Square Metadata Fields (Ordered Top-Left to Bottom-Right)
rating: "Teen"           # 1. Top-Left: General, Teen, Mature, Explicit
category: "M/M"          # 2. Top-Right: M/M, F/F, F/M, Multi, Gen, Other
warnings:                # 3. Bottom-Left: Content alerts
  - "No Archive Warnings Apply"
status: "In Progress"    # 4. Bottom-Right: Complete, In Progress, Hiatus
---

Start typing the actual body prose of your story right here below the three dashes.

```

---

### Field-by-Field Reference Guide

| Frontmatter Key | Type | Acceptable Values / Examples | Notes |
| --- | --- | --- | --- |
| `title` | String | `"Midnight Coffee"` | The overarching story title. Matches across all chapters of a multi-chapter work. |
| `chapterTitle` | String | `"The Awakening"` | The title for *this specific chapter*. (Leave blank or omit for One-Shots). |
| `summary` | String | `"A quiet night at the café."` | Used by `FicBlurb` for the search card feed and the top of the story page. |
| `pubDate` | Date | `2026-07-09` | Format strictly as `YYYY-MM-DD`. Used to sort your archives newest-first. |
| `year` | Number | `2026` | Helpful backup field for custom archival groupings. |
| `fandoms` | Array | `["Fandom A", "Fandom B"]` | Generates clickable filter tags. Supports single items or crossovers. |
| `pairings` | Array | `["A/B", "C & D"]` | Use `/` for romantic, `&` for platonic. Generates relationships filters. |
| `rating` | String | `"General"`, `"Teen"`, `"Mature"`, `"Explicit"` | **Case-Sensitive.** Controls the color code icon block in the blurb. |
| `category` | String | `"M/M"`, `"F/F"`, `"F/M"`, `"Multi"`, `"Gen"`, `"Other"` | **Case-Sensitive.** Indicates the relationship dynamics format inside the square block metadata. |
| `warnings` | Array | `["Graphic Depictions Of Violence"]` | Lists content tags. Use `["No Archive Warnings Apply"]` if no warnings are relevant. |
| `status` | String | `"Complete"`, `"In Progress"`, `"Hiatus"` | **Case-Sensitive.** Controls the completion tracker and archive filters. |
| `wordCount` | Number | `1500` | Numbers only (no commas). The code runs `.toLocaleString()` automatically. |
| `isMultiChapter` | Boolean | `true` or `false` | Set to `true` to activate the dynamic dropdown selection menu. |
| `chapterNumber` | Number | `1` | Used to line up items in sequence. Set to `1` for the main index feed. |
| `chaptersTotal` | String/No | `"?"` or `12` | Use `"?"` if ongoing, or a number if you have a hard chapter target. |
| `seriesName` | String | `"The Grand Astro Chronicle"` | Include only if this story is part of an overarching collection. |
| `seriesPart` | Number | `1` | Tracks numerical entry sequence inside a specific series page. |

```

```
