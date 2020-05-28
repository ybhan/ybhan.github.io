---
title: "Mushroom Edibility Rules"
imageSummary: "/img/mushroom-rules.png"
images: ["/img/mushroom-rules.png"]
link: "https://github.com/ybhan/Mushroom-Edibility-Rules"
description: "Two approaches to extract logical rules for mushroom edibility: Neural Networks; Genetic Algorithm + Decision Tree. Implemented using Python with intuitive visulization."
tags: ["Python", "PyTorch", "Pandas", "Machine Learning", "LaTeX"]
featured: true
weight: 140
---

Apply both Neural Networks and Genetic Algorithms to extract logical rules for mushroom edibility. Firstly use **NumPy** and **Pandas** to assign continuous variables into discrete one-hot representation. The Neural Network is implemented by **PyTorch**. It involves an auxiliary cost function term to force weights to approach ±1 or 0, so the network can be interpreted as a tree-like logic graph. For the second approach, GA cooperates with Decision Tree, where the accuracy of Decision Tree built by GA selected features serves back as the GA fitness function. The training process is visualized by **Matplotlib**. The project report written by **LaTeX** is available [here](https://github.com/ybhan/Mushroom-Edibility-Rules/blob/master/Two-Approaches-to-Extract-Logical-Rules-for-Mushroom-Edibility--Neural-Networks-and-Genetic-Algorithm.pdf).
