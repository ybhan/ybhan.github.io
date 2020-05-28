---
title: "Bear Maps"
imageSummary: "/img/bearmaps.png"
images: ["/img/bearmaps.png"]
link: "https://github.com/ybhan/BearMaps"
deploy: "https://bearmaps1.herokuapp.com/"
description: "Map app with rastering, labeling, auto-completion and navigation. Implement Heap, Trie, K-D Tree, A* search in Java. Object-oriented programming. Test with JUnit. Built by Maven."
tags: ["Java", "JUnit", "Maven", "jQuery", "Web App"]
featured: true
weight: 110
---

This is a fast and interactive map web app for Berkeley, CA. Features include rastering, labeling, auto-completion and navigation.

- Location nodes are stored in a **K-D Tree** to quickly find their nearest street point.
- Auto-completion of the search field is supported by a prefix **Trie** of all the location names.
- Navigation depends on **A\* search** using a binary **Heap** as Priority Queue.
- Route directions are computed from relative bearing based on haversine distance.

All the data structures and algorithms mentioned above are implemented from scratch in **Java**. Appropriate object-oriented designs significantly accelerate the program. The front end is also improved using jQuery, HTML and CSS. Use **Maven** to build and manage the project. Deployed on Heroku.
