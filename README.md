<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">SHROOMLEARNING</h1>
</p>
<p align="center">
    <em>Your guide to understanding mushrooms through machine learning</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/LZ1337-1/ShroomLearning?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/LZ1337-1/ShroomLearning?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/LZ1337-1/ShroomLearning?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/LZ1337-1/ShroomLearning?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Jupyter-F37626.svg?style=flat&logo=Jupyter&logoColor=white" alt="Jupyter">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Python-3776AB.svg?style=flat&logo=Python&logoColor=white" alt="Python">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## Collaborative work from <span style="color:blue;">Costes Sylvain</span> & <span style="color:blue;">Amiar Abd Rezak</span>


### Main Interface

![Main Interface](image.png)

_Description: This screenshot shows the main interface of the web application, where users can enter characteristics of a mushroom to predict its category._

### Results Page

## Quick Links

- [Overview](#overview)
- [Features](#features)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Project Roadmap](#project-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

**ShroomLearning** is a machine learning project designed to classify mushrooms as edible, poisonous, or inedible based on their physical characteristics like color, shape, and surface texture. This project utilizes data from [Ultimate Mushroom](https://ultimate-mushroom.com) and aims to educate users on mushroom types. It's important to note that this tool is not a substitute for professional advice from a mycologist or pharmacist.

---

## Features

- **Data Collection:** Utilizes web scraping to gather data on mushrooms.
- **Machine Learning Models:** Includes models like SVM and Decision Trees to predict mushroom categories.
- **Interactive Web Interface:** Features a web interface where users can input mushroom characteristics and receive predictions.
- **Educational Tool:** Provides insights into data science and machine learning through practical application.

---

##  Repository Structure

```sh
└── ShroomLearning/
    ├── 2ejalon.ipynb
    ├── ShroomLearning.py
    ├── arbre
    │   └── arbre_decision.dot
    ├── data
    │   ├── champignons.csv
    │   └── champignons_processed.csv
    ├── model
    │   ├── modele_svm.joblib
    │   ├── modele_svm_scaled.joblib
    │   ├── modele_tree.joblib
    │   └── modele_tree_scaled.joblib
    ├── projetExpress
    │   ├── formulaire.html
    │   ├── index.js
    │   ├── package.json
    │   └── public
    │       ├── Edible.png
    │       ├── Inedible.png
    │       ├── Poisonous.png
    │       ├── favicon.ico
    │       ├── jdza.png
    │       ├── js
    │       │   └── css.js
    │       ├── mushroom.jpg
    │       ├── sh.png
    │       └── style.css
    └── script
        └── predict.py
```
## Getting Started

To get started with ShroomLearning, you will need to have Python installed along with the libraries listed in `requirements.txt`.

### Installation

```sh
git clone https://github.com/LZ1337-1/ShroomLearning
cd ShroomLearning
pip install -r requirements.txt
```

```sh
cd projetExpress
node index.js
```

## Project Roadmap

- [X] Initial web scraping implementation.
- [X] Basic machine learning model integration.
- [ ] Enhance data preprocessing and model accuracy.
- [ ] Expand dataset to include more mushroom types.
- [ ] Implement additional features based on user feedback.

## Contributing

Contributions are welcome! Here’s how you can help:

- **Submit Pull Requests**: Review open PRs or submit your own.
- **Report Issues**: Submit bug reports or feature requests.
- **Enhance Documentation**: Help improve or expand the documentation.

### How to Contribute

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them.
5. Push your changes to GitHub.
6. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Special thanks to all contributors and testers.
- Grateful for the data provided by Ultimate Mushroom.
- Inspired by the vibrant Python community.

[**Back to Top**](#quick-links)
