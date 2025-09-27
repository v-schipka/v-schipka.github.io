---
title: "How to Use Structured Data in MkDocs"
date: 2025-05-16T10:04:34+06:00
description: How to Use Schema.org in MkDocs with Material theme
menu:
  sidebar:
    name: Structured Data in MkDocs
    identifier: schema
    weight: 22
hero: hero.png
tags: ["MkDocs", "Structured Data"]
---

Have you ever wondered how some documentation pages show up in search results with features like expandable FAQs, breadcrumb trails, or instructional step-by-steps? 
That’s the power of structured data.
Structured data refers to a standardized format for providing information about a web page and classifying its content. 
It helps search engines understand the content of the page more accurately and display it in enhanced ways directly in search results.

The [Material](https://squidfunk.github.io/mkdocs-material/) theme for MkDocs already offers a solid foundation for SEO, but there are still ways to fine-tune and improve how individual pages are indexed and presented.
In this post I’ll show you how to add structured data to your MkDocs documentation using schema types defined by [Schema.org](https://schema.org/).

### Schema Types for Documentation

For documentation, common schema types include:

- [`TechArticle`](https://schema.org/TechArticle) – For technical documentation and how-to guides.
- [`Article`](https://schema.org/Article) – For general content.
- [`FAQPage`](https://schema.org/FAQPage) – For sections that include frequently asked questions.
- [`SoftwareApplication`](https://schema.org/SoftwareApplication) – For documentation related to an app or tool.

Each schema type comes with a set of properties that you can use to add context to your documentation, e.g., name of the author, date of plublication, language, etc.

{{< alert type="info" >}}
You can refer to Google's [feature guide](https://developers.google.com/search/docs/appearance/structured-data/article) for examples and best practices.
{{< /alert >}}


### JSON-LD in the MkDocs Material Theme

The most maintainable way to add structured data to your documentation is by embedding **JSON-LD** (JavaScript Object Notation for Linked Data) into your site’s HTML.
If you use the Material theme, you can include a **JSON-LD** script as an `extrahead` block in your page templates.
For more details, see [Extending the theme](https://squidfunk.github.io/mkdocs-material/customization/#overriding-blocks) in the Material for MkDocs documentation.

Copy and paste the following code block into your template and replace the placeholders (`<placeholder>`) with actual values:

```html
{% extends "base.html" %}

{% block extrahead %}
{% if page.meta %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "<schema-type>",
  "<property1>": "<type1>",
  "<property2>": "<type2>",
  ...
}
</script>
{% endif %}
{% endblock %}
```

You can create a separate template for each schema type and reference it in the frontmatter of your Markdown files (or even mass-assign a template using Material's build-in [meta plugin](https://squidfunk.github.io/mkdocs-material/plugins/meta/)):

```yaml
---
title: "Getting Started"
description: "How to set up and use myProduct."
template: TechArticle.html
---
```


#### Example: TechArticle

This is the **JSON-LD** script I added to my `main.html` template that is used by the majority of my documentation pages:

```html
{% extends "base.html" %}

{% block extrahead %}
{% if page.meta %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "{{ page.title }}",
  "description": "{{ page.meta.description | default('Technical documentation page.') }}",
  "author": {
    "@type": "Person",
    "name": "Your Name or Organization"
  },
  "datePublished": "{{ git_creation_date_localized | default('2024-01-01') }}", 
  "url": "{{ page.canonical_url }}"
}
</script>
{% endif %}
{% endblock %}
```

If you do not use the [mkdocs-git-revision-date-localized-plugin](https://timvink.github.io/mkdocs-git-revision-date-localized-plugin/) plugin, but track the date in the frontmatter of your .md files, you can replace `git_creation_date_localized` with `page.meta.date`. 
In this case, your frontmatter requires a `date` item. 
Example:

```yaml
---
title: "Getting Started"
description: "How to set up and use myProduct."
date: 2025-05-10
---
```

#### Example: SoftwareApplication

This is the **JSON-LD** script I added to my `home.html` template that is used by my landing page.

```html
{% extends "base.html" %}

{% block extrahead %}
  {% if page.meta %}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "myProduct",
    "operatingSystem": "Windows",
    "applicationCategory": "BusinessApplication",
    "url": "https://myCOmpany.com/myProduct/",
    "description": "{{ page.description | default('Technical documentation of myProduct.') }}",
    "author": {
      "@type": "Organization",
      "name": "myCompany",
      "url": "https://myCompany.com/"
    }
  }
  </script>
  {% endif %}
{% endblock %}
```


### Apply Changes and Check the Schema

After publishing or updating structured data, [submit the updated pages to the Google Search Console](./google-search-console.md), [Bing Webmaster Tools](https://www.bing.com/webmasters/about) or other tools so that the search enginges can re-crawl the page, validate the structured data and update how the page appears in search results.


You can also validate your schema manually (and immediately) using the [Schema Markup Validator](https://validator.schema.org/) or Google's [Rich Results Test](https://search.google.com/test/rich-results).

