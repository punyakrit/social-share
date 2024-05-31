# Learn.md

## ShareHub

Welcome to **ShareHub**! This guide will help you get started with setting up the project locally and provide a detailed overview so beginners can understand and contribute effectively. ShareHub is a social sharing platform that integrates with MongoDB and Google for authentication.

## Table of Contents

# Table of Contents 
1. [Introduction](#introduction-)
2. . [Contributing](#contributing-)
   - [Development Workflow](#development-workflow)
   - [Issue Report Process](#issue-report-process)
   - [Pull Request Process](#pull-request-process-)
3. [Setting Up on your machine](#setting-up-on-your-machine-)
4. . [Resources for Beginners](#resources-for-beginners-)
   - [Basics of Git and GitHub](#basics-of-git-and-github-)
5. [Documentation](#documentation-)
6. [Code Reviews](#code-reviews-)
7. [Feature Requests](#feature-requests-)
8. [Spreading the Word](#spreading-the-word-)
9. [Motivation](#motivation-)

## Introduction 🖥️
Social Share is a platform that empowers you to build and customize your own personal page to showcase your online presence and share your content with the world.
## Contributing 📝
Raise and issue; Get assigned and then work on fixing the issue.
We welcome contributions to Social-Share! Follow these steps to contribute:

1. **Fork the Repository**: Create your own copy of the repository on your GitHub account.
![image](https://github.com/debangi29/social-share/assets/117537653/be4ef987-7672-4ad6-9682-f09f74cdda1c)


2. **Clone the Repository** : Clone the repository for making commits.
   ```bash
   git clone https://github.com/punyakrit/social-share.git
   ```
      <br>
   
![image](https://github.com/debangi29/social-share/assets/117537653/1a3333fe-57e5-42dc-8bdc-babfae189f00)



3. **Create a New Branch** for your feature or bug fix: Make a separate branch to work on specific features or fixes and switch to the correct branch.
```bash
git checkout -b <new-branch-name>
```
4. **Make Changes** and commit them: Implement your changes and save them with a descriptive commit message.
```bash
git add .
git commit -m "Describe your changes"
```
5. **Push Your Changes** to your fork: Upload your committed changes to your GitHub fork.
   ```bash
   git push origin <branch_name>
   ```
6. **Create a Pull Request ✅**: Propose your changes to be merged into the original repository.
   <br>

![image](https://github.com/debangi29/social-share/assets/117537653/92f154c4-6683-40ef-a30a-f9db706a7eb3)


### Development Workflow
- Always work on a new branch for each issue or feature.
- Keep your branch up to date with the main repository's master branch.
- Write clear and descriptive commit messages.
- Test your changes thoroughly before submitting a pull request.

### Issue Report Process
1. Go to the project's issues section.
2. Select the appropriate template for your issue.
3. Provide a detailed description of the issue.
4. Wait for the issue to be assigned before starting to work on it.

### **Pull Request Process 🚀**

1. Ensure that you have self reviewed your code.
2. Make sure you have added the proper description for the functionality of the code.
3. I have commented my code, particularly in hard-to-understand areas.
4. Add screenshot it help in review.
5. Submit your PR by giving the necesarry information in PR template and hang tight we will review it really soon.

# Setting Up on your machine ⚙️
*Run the command to install npm package*
```markdown
npm install
```

### STEPS TO CONNECT WITH THE MONGODB

 ```bash
 cp .env.example .env
```
```bash
Update all these env variables
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
NEXTAUTH_URL 
NEXTAUTH_SECRET 
MONGODB_URI 
 ```

 ### Commands to run the development server:

```markdown
# Using npm
npm run dev
```

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

```
## Resources for Beginners 📚
### Basics of Git and GitHub 📂
- [Forking a Repo](https://help.github.com/en/articles/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/articles/cloning-a-repository)
- [Creating a Pull Request](https://help.github.com/en/articles/creating-a-pull-request)
- [Getting Started with Git and GitHub](https://guides.github.com/introduction/git-handbook/)
- [Learn GitHub from Scratch](https://www.youtube.com/watch?v=w3jLJU7DT5E)


## 📍Documentation
- Document any significant changes or additions to the codebase.
- Provide clear explanations of the functionality, usage, and any relevant considerations.

## Code Reviews 🔎
- Be open to feedback and constructive criticism from other contributors.
- Participate in code reviews by reviewing and providing feedback.

## Feature Requests 🔥
- Suggest new features or improvements that would enhance the project.

## Spreading the Word 👐
- Share your experience and the project with others.
- Spread the word about the project on social media, developer forums, or any relevant community platforms.

Thank you for contributing to Social-Share! Together, we can make a significant impact. Happy coding! 🚀
## Don't forget to ⭐ the repository!
