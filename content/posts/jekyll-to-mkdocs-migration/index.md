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

Our company (or rather I as the technical writer responsible for our documentation) recently decided to say goodbye to our current solution for creating documentation: [Jekyll](https://jekyllrb.com/). 
Instead, we are now working on moving our existing content to [MkDocs](https://www.mkdocs.org/).

In this post I want to tell you a little bit about the reasons behind this decision.

### Status Quo

Currently, we still use Jekyll 3 to build our documentation.

Jekyll is a static site generator that uses static Markdown files and converts them to a website.
The main focus of Jekyll is the creation of websites and blogs.
While there are multiple [documentation themes](https://jekyllthemes.io/jekyll-documentation-themes) available for Jekyll, most of them provide only basic features.
This is why an external web-developer was hired to provide additional functionality and a UI that matches our needs. Side note: this all happened before I joined the company.

We use Jekyll for 2 Website:
- An Online Help that covers 8 different products with similar content.
- A Knowledge Base that covers in-depth articles that involve use cases or 3rd-party-tools. Because a lot of articles apply to multiple products, the Knowledge Base does not explicitly separate between the products.

### Why change a Running System?

After >5 years of writing documentation with Jekyll, the following pain points have caused us to reconsider our approach:

- Dated UI
- **Any changes involve an external developer**
- Bad performance (long build time)
- No analytics implemented
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
Like Jekyll, it uses markdown files to create websites.
But what makes it more favorable than Jekyll and the other alternatives?

MkDocs in combination with the [Material](https://squidfunk.github.io/mkdocs-material/) theme meets our requirements more than any other solution I tested.
The requirements (that are the result of a long discussion during a team workshop) are as follows:

Must-Have-Features:
- Modern UI (clear navigation)
- Search: suggestions, auto-complete, each product has its own search
- Ability to make small frontent or backend changes in-house (overriding the theme & installation of external plugins to add functionalities)
- Reusable content snippets: Content must be available in multiple products (macros plugin)
- Table of content on each page (optional: highlights the active section)
- Option to combine / put Online Help and Knowledge Base on the same website (again: clear navigation)

Nice-to-Have Features 
- Integration with ticket system (jitbit)
- Community features (comments, time to read, etc.) 
- Tags that add keywords to pages and that can be looked up in the search (we use limited terminology in our documentation for consistency reasons, which unfortunately limits the search functionality for users that use different terms)

It should also be noted that the main selling point for MkDocs was the option to install additional plugins / functionalities. That said, the Material theme by [squidfunk](https://github.com/squidfunk) already provides an extensive list of build-in features and comes with a modern and highly customizable UI.

One highlight of the Material theme is the projects plugin, which enables us to manage different products separately from each other.

### Migration from Jekyll to MkDocs

After some fundamental planning, we started migrating the shortest product documentation as a PoC.
The migration included:
1. Creating a new GitHub repository with a new folder structure (e.g., new product folders, fodler for text snippets, etc.).
2. Moving the product relevant markdown files from Online Help and Knowledge Base into the new repository (the Online Help and Knowledge Base are now combined in a single product specific "HelpCenter").
3. Adjusting links (internal links to files and images).
4. Customizing UI elements.
5. Adding and testing additional plugins.
6. Getting feedback from colleagues (-> more customization).
7. Setting up GitHub Pages and a custom domain to host the new documentation.
8. Setting up Google Analytics.
9. Marking the old resources as "deprecated" and announcing the new documentation.

At the time of this post, the documentation of the first product has been live for a month.
The feedback from colleagues and customers so far has been positive.

The plan is to migrate all products until the end of the year (2024).

#### Appendix

For thos interested: here are some slides of the presentation I used when pitching MkDocs to my team leader:

{{< embed-pdf src="/files/MkDocs-Material.pdf" >}}
