---
title: "Musical Instrument Recognition"
imageSummary: "/img/musical-recog.png"
images: ["/img/musical-recog.png"]
link: "https://github.com/ybhan/Musical-Instrument-Recognition"
description: "Use MATLAB and Python to classify musical instruments based on Gammatone filtering, Voice Activity Detection and CNN. Interface between two languages by SciPy."
tags: ["MATLAB", "Python", "PyTorch", "Machine Learning"]
featured: false
weight: 160
---

A musical instrument recognition model for isolated notes and solo phrases. First, Use **MATLAB** to extract acoustic features by Gammatone filtering. Then perform Voice Activity Detection to separate notes in solo phrases. Finally, Use **PyTorch** to build a 2-level CNN classifier based on Hornbostel–Sachs system. The .mat files **MATLAB** produces are further read by **Python** with the help of **SciPy**, which accomplishes the interface between two programming languages.
