---
layout: page
title: Research
eyebrow: "ls -la ./research"
subtitle: "Computational modeling across two disciplines — from stellar plasma to human migration."
permalink: /research/
---

<div class="research-page">

<!-- ==================== ASTROPHYSICS ==================== -->
<div class="research-domain astro">
  <div class="domain-heading">
    <div class="domain-icon-badge">🪐</div>
    <div>
      <h2>Astrophysics</h2>
      <p class="domain-sub">// Imperial College London · PhD 2019–2023</p>
    </div>
  </div>

  <p class="domain-intro">
    My foundational research investigated the atmospheric evolution and habitability of close-in exoplanets orbiting M-dwarf stars. Using 3D Magnetohydrodynamic (MHD) simulations, I modelled the complex plasma interactions between magnetized stellar winds and planetary atmospheric outflows — demonstrating that stellar winds play a significant, often dominant, role in driving atmospheric escape beyond classic photoevaporation models.
  </p>

  <div class="projects-grid">

    <div class="project-entry">
      <h3>Space Weather &amp; AU Mic b — Lyman-alpha Signatures</h3>
      <p>Modelled the impact of Extreme Coronal Mass Ejections from AU Microscopii on the escaping atmosphere of AU Mic b. Produced synthetic Lyman-alpha absorption transit spectra showing how space weather dramatically alters observable signatures, providing direct tools to constrain atmospheric escape from telescope data.</p>
      <p class="project-meta">Astrophysical Journal, 2022 · with Cohen, Drake, Garraffo, Alvarado-Gómez, Fraschetti</p>
    </div>

    <div class="project-entry">
      <h3>Stellar Winds Drive Evaporative Outflow Variations</h3>
      <p>Demonstrated through 3D MHD simulations that magnetized stellar winds create strong, time-variable distortions to exoplanet atmospheric outflows. Showed how the morphology of the planetary magnetosphere directly modulates transit absorption signatures, challenging models that treat evaporation as purely radiatively-driven.</p>
      <p class="project-meta">Astrophysical Journal, 2021 · with Moschou, Garraffo, Fraschetti, Cohen, Drake</p>
    </div>

    <div class="project-entry">
      <h3>Water-Rich &amp; Complex Atmospheric Chemistry</h3>
      <p>Developed novel 1D multifluid hydrodynamic models moving beyond simple hydrogen/helium compositions. Tracked how heavier elements — specifically water and oxygen — alter evaporative mass loss rates, challenging conventional single-fluid analytic models used for atmospheric escape estimation.</p>
      <p class="project-meta">Imperial College London · PhD Research</p>
    </div>

  </div>

  <div class="collab-list">
    <span class="collab-label">// collaborators</span>
    <span class="collab-tag">Ofer Cohen</span>
    <span class="collab-tag">Sofia P. Moschou</span>
    <span class="collab-tag">Cecilia Garraffo</span>
    <span class="collab-tag">Jeremy J. Drake</span>
    <span class="collab-tag">Julián D. Alvarado-Gómez</span>
    <span class="collab-tag">Federico Fraschetti</span>
  </div>
</div>

<!-- ==================== ABM / MIGRATION ==================== -->
<div class="research-domain abm">
  <div class="domain-heading">
    <div class="domain-icon-badge">🗺️</div>
    <div>
      <h2>Agent-Based Modeling &amp; Migration</h2>
      <p class="domain-sub">// Brunel University London · Current</p>
    </div>
  </div>

  <p class="domain-intro">
    I now apply the same computational modeling rigour to humanitarian crises. Using Agent-Based Models (ABMs), I simulate how individual human decisions — shaped by economic status, weather awareness, and social observation — aggregate into population-level displacement patterns. My focus is transparent, rule-based models that NGOs and policymakers can audit and trust, rather than black-box machine learning.
  </p>

  <div class="projects-grid">

    <div class="project-entry">
      <h3>DFlee — Flood-Induced Population Displacement</h3>
      <p>Lead developer of DFlee, built on the conflict-driven Flee toolkit. Integrates USGS riverine and coastal flood frequency classifications with agent behavioral algorithms. Successfully reproduces key dynamics: preference for nearest safe shelter, heterogeneous evacuation timing based on social observation, and rapid population return once floodwaters recede. Scales to 160,000+ agents in under 10 minutes on HPC.</p>
      <p class="project-meta">Preprint, Research Square 2025 · with Groen, Suleimenova, Jahani, Ghorbani, Xue</p>
    </div>

    <div class="project-entry">
      <h3>Ukrainian Refugee Return Forecasting</h3>
      <p>Developed a predictive ABM prototype for the UNHCR forecasting potential return pathways of Ukrainian refugees. The model maps push factors (conflict, infrastructure damage) and pull factors (safety, economic opportunity, family ties) to simulate return trajectories under multiple recovery scenarios. Presented ahead of the 2024 Ukraine Recovery Conference.</p>
      <p class="project-meta">2024 · UNHCR Collaboration · with Groen, Suleimenova</p>
    </div>

    <div class="project-entry">
      <h3>Coping Mechanisms in Bangladesh Flooding</h3>
      <p>Developed conceptual agent models mapping how individuals in flood-prone Bangladesh respond to climate disasters. Proactive behaviors (food/water storage, property fortification) and reactive behaviors (cyclone shelter evacuation) are modeled as functions of economic status, flood severity history, and weather forecast awareness.</p>
      <p class="project-meta">ICCS 2024 · with Groen, Jahani, Ghorbani, Xue</p>
    </div>

    <div class="project-entry">
      <h3>Qualitative Uncertainty Quantification in Humanitarian Models</h3>
      <p>Researching how to rigorously assess and communicate uncertainty in ABM assumptions for humanitarian stakeholders. Develops frameworks for evaluating confidence in structural model assumptions, behavioral rules, and limited-data scenarios — so policymakers understand the reliability boundaries of simulation forecasts.</p>
      <p class="project-meta">SSRN 2024 · with Groen</p>
    </div>

  </div>

  <div class="collab-list">
    <span class="collab-label">// collaborators</span>
    <span class="collab-tag">Derek Groen</span>
    <span class="collab-tag">Diana Suleimenova</span>
    <span class="collab-tag">Alireza Jahani</span>
    <span class="collab-tag">Maziar Ghorbani</span>
    <span class="collab-tag">Yani Xue</span>
    <span class="collab-tag">UNHCR</span>
    <span class="collab-tag">ExCALIBUR / SEAVEA</span>
  </div>
</div>

</div>

My research centres on developing and applying advanced computational models to understand complex dynamic systems. My work spans several interconnected areas:

### Astrophysical Simulations

My foundational research lies in computational astrophysics, focusing on understanding exoplanet atmospheres and their evolution. My Master of Physics (MPhys) year abroad at the Harvard-Smithsonian Center for Astrophysics provided early research experience in this field. My PhD research at Imperial College London delved specifically into photoevaporation from exoplanet atmospheres, investigating atmospheric escape driven by intense stellar radiation, with a particular interest in atmospheres that may be water-rich or dominated by heavier elements. I used sophisticated simulations, including Magnetohydrodynamic (MHD) and hydrodynamic models, to study complex physical systems and phenomena such as the interaction between stellar winds and planetary atmospheres.

### Migration and Disaster Modelling

I apply and develop computational models to explore the dynamics of human migration and the impacts of disasters. A core methodology I employ is Agent-Based Modelling (ABM). My work in this area includes:

- **Modelling Returnee Movements to Ukraine (UNHCR Funded Project):** Using ABM to explore how different factors and evolving scenarios might influence return decisions and patterns for displaced populations.
- **Modelling Flood-Induced Displacement:** Adapting frameworks like the Flee model to simulate evacuation and migration patterns in response to natural hazards.
- **Understanding Climate-Driven Migration:** Developing models to explore the interplay between environmental changes and human movement patterns.
- **Simulating Community Resilience and Coping Mechanisms:** Modelling how communities respond to environmental shocks.

### Computational Methods and High-Performance Computing

A strong emphasis of my work is on computational methodologies, ensuring models are reliable and efficient, particularly on high-performance computing (HPC) resources. I focus on developing efficient simulation code and approaches for understanding and quantifying the trustworthiness of model predictions.

My engagement with initiatives like the ExCALIBUR programme highlights an interest in high-performance and exascale computing. As part of this, I have been involved with projects such as SEAVEA, which develops open-source software tools for Verification, Validation, and Uncertainty Quantification (VVUQ) for complex simulations.

My research involves Uncertainty Quantification (UQ) and Sensitivity Analysis, which are vital for understanding the range of possible outcomes and the confidence that can be placed in predictions from complex models.

You can find more detailed explanations of these computational methods and my approach on the [Methodology](/methodology) page.