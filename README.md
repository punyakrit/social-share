<div align="center">
  <h1 style="font-size: 36px; font-weight: bold;">ShareHub</h1>

<img src="Share_hub.png" alt="ShareHub" width="800" height="500" />

</div>

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [Setting Up Locally](#setting-up-locally)
- [Connecting to MongoDB](#connecting-to-mongodb)
- [Creating Google Credentials](#creating-google-credentials)
- [Running the Development Server](#running-the-development-server)
- [Learn More](#learn-more)
- [License](#license)
- [Open Source Programs](#open-source-programs)
- [Acknowledgements](#acknowledgements)
- [Contributors](#contributors)




## Code of Conduct
Please read our [CODE OF CONDUCT](CODE_OF_CONDUCT.md) for detailed guidelines.
## How to Contribute?
We welcome contributions from anyone who is interested in improving this project. If you'd like to contribute, here are some ways you can get started:

Submit a bug report if you find any issues with the application.
Suggest new features or improvements.
Submit a pull request to fix a bug or add a feature.
To submit a pull request, please follow these steps:

1. Fork this repository.

2. Clone the forked repository.

```bash
git clone https://github.com/punyakrit/social-share.git
```

3. Navigate to the project directory.

```bash
cd Games-and-Go
```

4. Add a refernce(remote) to the original repository.

```bash
git remote add upstream https://github.com/ssitvit/Games-and-Go.git
```

5. Check remotes for this repository.

```bash
git remote -v
```

6. Always take a pull from the main upstream repository.

```bash
git pull upstream main
```

7. Create a new branch.

```bash
git checkout -b <your_branch_name>
```

8. Make changes to the code base.

9. Stage your changes.

```bash
git add -A
```

10. Commit your changes.

```bash
git commit -m "relevant message"
```

11. Push your local commits to the remote repo.

```bash
git push -u origin <your_branch_name>
```

12. Create a pull request from your branch to the original repository.

Congratulations! 🎉 you've made your contribution.


## Contributing
If you would like to contribute to the project, please follow our [CONTRIBUTING](contributing.md) guidelines.

## FOLLOW THESE STEPS TO SET LOCALLY

1. Fork the repository (Click the Fork button in the top right on Github)
2. Clone the forked repository to your local machine.

```markdown
git clone https://github.com/punyakrit/social-share.git
```

_Run the command to install npm package_

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
BUCKET
S3_ACCESS_KEY
S3_SECRET_ACCESS_KEY
```

### Steps to create your own google credentials

```bash
https://console.cloud.google.com/
```

### Create a new project and name it

<img src="Screenshot 2024-06-07 at 11.14.04 AM.png" alt="Dashboard" style="width: 50%; height: auto;" />
<img src="image.png" alt="Alt text" style="width: 50%; height: auto;" />

### Select the project

<img src="image-4.png" alt="Alt text" style="width: 50%; height: auto;" />

### By click external, Add email and project name click on next

<img src="image-5.png" alt="Alt text" style="width: 50%; height: auto;" />

### Add data as same as in the given image

<img src="image-3.png" alt="Alt text" style="width: 50%; height: auto;" />

Save and Copy the GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET

## Add these data as same as it is given inside .env file

### NEXTAUTH_URL

```bash
 http://localhost:3000
```

### NEXTAUTH_SECRET

```bash
test

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

## License
This project is licensed under [License](LICENSE)

## Learn More
To learn more about the project, check out our [Learn More](Learn.md) page.

<!-- Open Source Programs -->
<div>
    <h2><img src="https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/blob/master/Emojis/Hand%20gestures/Flexed%20Biceps.png?raw=true" width="35" height="35" > Open Source Programs </h2>
</div>

This project is a part of GirlScript Summer of code. We welcome contibutions from the community to help improve the project social-share.

![gssoc](https://github.com/d1vyadharsh1n1/social-share/assets/146218077/78025380-2327-45a3-bc22-b119bebc35ff)

<!-- Acknowledgement -->
<div>
<h2><img src = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png" width="35" height="35"> Acknowledgement </h2>

We would like to express our gratitude to the following contributors for their valuable contributions to Social Share

<!-- Cotributors -->
<div>
  <h2><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png" width="35" height="35"> Contributors</h2>
</div>

<a href="https://github.com/punyakrit/social-share/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=punyakrit/social-share" />
</a>

<br/>
<p align="center">
	Developed with ❤️ by The <a href="https://github.com/punyakrit/social-share"><strong>Social Share Team</strong></a>
</p>

<p align="right">(<a href="#top">Back to top</a>)</p>
