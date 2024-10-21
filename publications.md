---
layout: page
title: "Publications"
permalink: /publications/
---

# Publications

{% for pub in site.data.publications %}
- **{{ pub.title }}**  
  *{{ pub.journal }}*, {{ pub.year }}.  
  [PDF]({{ pub.pdf_url }}) | [DOI]({{ pub.doi_url }})
  {% endfor %}