# 💼 Portfolio - Alex Gafița

> A modern portfolio website showcasing software engineering projects and skills.  
> **Deployed on AWS** as a fully serverless, cloud-native application.

---

## ✨ Features

- 🎨 **Modern Design** - Responsive dark theme with smooth animations
- 📱 **Mobile Optimized** - iPhone safe area support (notch & home indicator)
- ⚡ **Fast Navigation** - Loading screen on route changes
- 🔍 **SEO Ready** - Open Graph and Twitter Cards optimized

---

## 🛠️ Tech Stack

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23-0055ff?style=flat&logo=framer)

### Infrastructure
![AWS](https://img.shields.io/badge/AWS-Serverless-FF9900?style=flat&logo=amazon-aws)
![S3](https://img.shields.io/badge/S3-Storage-569A31?style=flat&logo=amazon-s3)
![CloudFront](https://img.shields.io/badge/CloudFront-CDN-232F3E?style=flat&logo=amazon-aws)
![CodePipeline](https://img.shields.io/badge/CodePipeline-CI%2FCD-FF9900?style=flat&logo=amazon-aws)

---

## 🏗️ AWS Architecture

**Serverless deployment** demonstrating enterprise-grade infrastructure:

| Service | Purpose |
|---------|---------|
| 🪣 **S3** | Static site hosting |
| 🌐 **CloudFront** | Global CDN with edge caching (<10ms latency) |
| 🔗 **Route 53** | DNS management |
| 🔄 **CodePipeline** | Automated CI/CD with GitHub webhooks |
| 🔨 **CodeBuild** | Secure build environment (IAM least-privilege) |

### 🎯 Key CardHighlights

- ⚡ **Zero Cold Starts** - CloudFront Functions eliminate latency
- 🔒 **Secure** - Origin Access Control (OAC) for S3 protection
- 🚀 **Atomic Deployments** - Zero-downtime updates
- 💰 **Cost Optimized** - Pay-per-use serverless model
- 🤖 **Fully Automated** - No server management required

📖 See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed architecture.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

🌐 Open [http://localhost:3000](http://localhost:3000)

### 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |

---

## 🚢 Deployment

Automated via **AWS CodePipeline** on every push to `main`:

```
┌──────────────────┐     ┌──────────────┐     ┌───────────┐     ┌─────────────────┐
│ GitHub Main Push │ --> │ CodePipeline │ --> │ CodeBuild │ --> │ S3 + CloudFront │
└──────────────────┘     └──────────────┘     └───────────┘     └─────────────────┘
```

1. 🔔 GitHub webhook triggers CodePipeline
2. 🔨 CodeBuild executes `buildspec.yml`:
   - Builds Next.js static site
   - Syncs to S3 bucket
   - Invalidates CloudFront cache
3. ✅ Zero-downtime atomic deployment

---

## 👨‍💻 Author

**Alex Gafița**  
🌐 [alexgafita.com](https://alexgafita.com)  
💼 Software Engineer & Computer Science Student

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and AWS Serverless Architecture**

</div>
