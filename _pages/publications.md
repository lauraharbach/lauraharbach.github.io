---
title: Publications
permalink: /publications/
---

Here you can find a list of my academic publications, including peer-reviewed journal articles and preprints, reflecting my research in astrophysics and socio-environmental modelling.

*This section will be updated with a dynamic or manually curated list of publications.*

**Example Entry Format:**  
Author(s). (Year). "Title of Paper." *Journal Name*, Volume(Issue), Pages. DOI.

**External Profiles:**  
- [ORCID](#)  
- [Google Scholar](#)  
- [ResearchGate](#)---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
