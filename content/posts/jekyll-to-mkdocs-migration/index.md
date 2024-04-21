---
title: "Migrating from Jekyll to MkDocs"
date: 2022-04-20T08:06:25+06:00
description: Migrating our documentation from Jekyll to MkDocs
menu:
  sidebar:
    name: Jekyll to MkDocs
    identifier: migration
    weight: 05
hero: graphics.png
tags: ["Jekyll", "MkDocs", "Migration"]
---

Our company (or rather I as the technical editor responsible for our documentation) has recently decided to say goodbye to our current docs-as-code solution for documentation: [Jekyll](https://jekyllrb.com/). 
Instead, we are now working on moving our existing content to [MkDocs](https://www.mkdocs.org/).

This post will to tell you a little bit about the reasons behind this decision.

### Status Quo

We currently use Jekyll 3 to build our documentation.

Jekyll is a static site generator that uses static Markdown files and converts them to a website.
The main focus of jekyll is the creation of websites and blogs.
While there are multiple [documentation themes](https://jekyllthemes.io/jekyll-documentation-themes) available for Jekyll, most of them provide only basic features.
This is why an external web-developer was hired to provide additional functionality and a UI that matches our needs. 

We use Jekyll for 2 Website; an Online Help and a Knowledge Base.
- The Online Help covers 8 different products with similar content.
- The Knowledge Base covers in-depth articles that involve use cases or 3rd-party-tools. Some articles apply to multiple products.

### Why change a Running System?

After 5 years of writing documentation with Jekyll, the following pain points have caused us to reconsider our approach:

- Dated UI
- Bad performance (long build time)
- No analytics options implemented
- Any changes involve an external developer
- The search functionality is a blackbox 
- The search returns results for all products unless a filter is applied, the Knowledge Base does not even have a filter
- The Knowledge Base does not separate between products

### Alternatives, Alternatives...

When first discussing options, the continued usage of markdown files in combination with a static site generator was not a requirement.
After looking into alternatives, I still went for a static site generator, because I like the flexibility, accessibility and easy setup process they offer.

Some solutions I looked into:

|    |  Pro   | Con |
|----------|:-----:|:-----:|
| [Jekyll 4](https://jekyllrb.com/) | Faster than Jekyll 3 <br>Recycling of UI and custom plugins possible | Urge to reuse (subpar) layout and functionalities would be too high |
| [Hugo](https://gohugo.io/) | Good performance | Steep learnign curve <br>Documentation is not the focus (missing functionalities) <br>--> we'd have to build our own UI, no human resources |
| [HelpDocs](https://www.helpdocs.io/) | Markdown support <br> Reusable content snippets <br> Search tags | We'd need a custom layout to cover multiple products<br> Migration of existing content would be time consuming.|
| [ProProfs](https://www.proprofs.com/) | Supports multiple sites (single source) <br> Reusable content snippets | Limited markdown support (WYSIWYG editor) <br> Search functionality is not clear <br>Migration of existing content would be time consuming.|


### Why MkDocs?

[MkDocs](https://www.mkdocs.org/) is a static site generator that is geared towards technical documentation. 
Like Jekyll, it uses in Markdown files to create websites.
But what makes it more favorable than Jekyll and the other alternatives?

MkDocs in combination with the [Material](https://squidfunk.github.io/mkdocs-material/) theme meets our requirements more than any other solution I tested.
The following requirements are the result of a long discussion during a team workshop:

Must-Have-Features:
- Modern UI (clear navigation)
- Search: suggestions, auto-complete, each product has its own search
- Ability to make small frontent or backend changes in-house (overriding the theme & installation of external plugins to add functionalities)
- Reusable content snippets: Content must be available in multiple products (macros plugin)
- Table of content on each page (optional: highlights the active section)
- Option to combine / put Online Help and Knowledge Base on the same website (again: clear navigation)

Nice-to-Have Features 
- Integration with ticket system
- Community features (comments, time to read, etc) 
- Tags to add keywords that can be looked up in the search (we use limited terminology for consistency, but if users try to look things up using different words, they might get stuck)

It should be noted that the main selling point for MkDocs was the option to install plugins and the Material theme by [squidfunk](https://github.com/squidfunk).
The theme already provides an extensive list of build-in features and comes with a modern and highly customizable UI.

One highlight of the Material theme is the projects plugin, which enables us to manage different products separately from each other.

### Migration from Jekyll to MkDocs

After some fundamental planning, we started migrating the shortest documentation of one of our products as a PoC.
The migration included:
1. Creating a new gitHub repository with the new folder structure (new product folders)
2. Moving the product relevant markdown files from Online Help and Knowledge Base into the new repository (the Online Help and Knowledge Base will be combined into a single website)
3. Adjusting links (internal links and links to images)
4. Customizing UI elements
5. Adding plugins for additional features
6. Getting feedback from colleagues (more customization)
7. Setting up gitHub Pages and a custom domain to host the new documentation
8. Setting up Google Analytics
9. Marking the old resources as "deprecated" and announcing the new documentation

At the time of this post, the documentation of our first product has been live for a month.
The feedback from colleagues and customers so far has been positive.

The plan is to migrate all products until the end of the year (2024).

#### Appendix

If anyone is interested: here are the slides of the presentation I used when pitching MkDocs to my team leader:

{{< embed-pdf src="/files/MkDocs-Material.pdf" >}}
