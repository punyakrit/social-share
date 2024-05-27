# SHAREHUB

![ShareHub](<Share_hub.png>)


## FOLLOW THESE STEPS TO SET LOCALLY
1. Fork the repository (Click the Fork button in the top right on Github)
2. Clone the forked repository to your local machine.

```markdown
git clone https://github.com/yourusername/social-share.git
```
*Run the command to install npm package*
```markdown
npm install
```

### STEPS TO CONNECT WITH THE MONGODB

 ```bash
 cp .env.example .env
```
```bash
Update all these variables
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

```markdown
# Using yarn
yarn dev
```

```markdown
# Using pnpm
pnpm dev
```

```markdown
# Using bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

<p align="right">(<a href="#top">Back to top</a>)</p>
