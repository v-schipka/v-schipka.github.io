---
title: "Virtual Environments for Docs Projects"
date: 2025-09-27T18:04:34+06:00
description: Why use Virtual Environments for Documentation Projects
menu:
  sidebar:
    name: Virtual Environments for Docs
    identifier: venv
    weight: 36
hero: hero.png
tags: ["Static Site Generators", "MkDocs", "Best Practices"]
---

After 4 years of maintaining a single MkDocs documentation project, it finally happened: I was tasked with setting up a second project.
And this means handling different project dependencies.

Working with documentation in a docs-as-code environment usually involves Static Site Generators such as MkDocs or Sphinx. These tools transform plain text files into documentation websites. But they usually also come with dependencies - and that's where virtual environments come in.
Virtual environments are self-contained workspaces for Python projects.

{{< alert type="info" >}}
Docusaurus and other Node-based static site generators don’t use Python-style virtual environments. Instead, they isolate dependencies using **`package.json` + `node_modules/`**, sometimes paired with a lockfile (`package-lock.json` or `yarn.lock`).
{{< /alert >}}

## Without Virtual Environments

Installing documentation tools globally on your machine can lead to the following problems:

- **Version Conflicts**: Different documentation projects may need different versions of the same tool. For example, Project A might use MkDocs 1.5, while Project B needs MkDocs 1.6 with a plugin that doesn’t exist in 1.5.
- **Cluttering Mess**: The system’s Python or Node environment gets cluttered with packages only needed for one project.
- **Reproducibility Issues**: If a teammate or CI pipeline installs slightly different versions, your docs may render differently—or break entirely.
- **Harder Debugging**: When something fails, it’s harder to know whether it’s the project setup or your global environment causing the problem.

## With Virtual Environments

In a virtual environment your project’s dependencies are self-contained. Each documentation project can have its own environment with exactly the right versions of Python packages or other tools.

Benefits:
- ✅ **Isolation**: Dependencies for one project don’t affect another.
- ✅ **Consistency**: Everyone working on the project can install the same versions via `requirements.txt` or `package.json`.
- ✅ **Reproducibility**: Your CI/CD pipeline can recreate the environment exactly, avoiding “works on my machine” issues.
- ✅ **Clean System**: Your computer stays free of unnecessary global installations.

## How to

Use the following commands to create, activate and set up a virtual environment:

- Create a virtual environment inside your project folder (this only needs to be done once):
    ```bash
    python -m venv .venv
    ```
- Activate the virtual environment:
    ``` bash
    .venv\Scripts\activate.bat
    ```
- Install all project dependencies inside the virtual environment (this only needs to be done once):
    ```bash
    pip install -r requirements.txt
    ```
- Run MkDocs inside the virtual environment:
    ```bash
    mkdocs serve
    ```
- When done, deactivate the virual environment:
    ``` bash
    deactivate
    ```

Make sure to activate the virtual environment every time you run a local preview of your project.

{{< alert type="info" >}}
If you already have a documentation project, you can use the command `mkdocs get-deps > requirements.txt` to write the dependencies of your project to a `requirements.txt` file.
Alternatively, you can use the command `pip freeze > requirements.txt` to write a list of all installed Python packages on your machine to a `requirements.txt` file - including their version number.
You can then activate your virtual environment and install all packages using `pip install -r requirements.txt`.
{{< /alert >}}
