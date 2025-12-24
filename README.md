# Portfolio Website

A production-ready portfolio website showcasing software engineering projects and technical skills. Built with Next.js and deployed as a fully serverless, cloud-native application on AWS.

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Declarative animations

### Infrastructure & DevOps
- **AWS S3** - Static site hosting
- **CloudFront** - Global CDN with edge caching
- **Route 53** - DNS management
- **CodePipeline** - Automated CI/CD pipeline
- **CodeBuild** - Secure build environment

## Architecture

The application is deployed as a serverless, cloud-native solution on AWS:

| Service | Purpose |
|---------|---------|
| **S3** | Static site hosting |
| **CloudFront** | Global CDN with edge caching (<10ms latency) |
| **Route 53** | DNS management |
| **CodePipeline** | Automated CI/CD with GitHub webhooks |
| **CodeBuild** | Secure build environment with IAM least-privilege |

### Key Features

- **Zero Cold Starts** - CloudFront Functions eliminate Lambda cold start latency
- **Security** - Origin Access Control (OAC) for S3 protection
- **Atomic Deployments** - Zero-downtime updates
- **Cost Optimized** - Pay-per-use serverless model
- **Fully Automated** - No server management required

For detailed architecture documentation, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## Deployment

Deployment is automated via AWS CodePipeline. Every push to the `main` branch triggers:

1. **GitHub Webhook** - Triggers CodePipeline
2. **CodeBuild** - Executes `buildspec.yml`:
   - Builds Next.js static site
   - Syncs to S3 bucket
   - Invalidates CloudFront cache
3. **Atomic Deployment** - Zero-downtime update

```
GitHub Push → CodePipeline → CodeBuild → S3 + CloudFront
```


## License

This project is private and proprietary.


**Gafița Claudiu-Alexandru**  
Software Developer & Cloud Engineer | Computer Science Student

- Website: [alexgafita.com](https://alexgafita.com)
- GitHub: [@Alex-Clau](https://github.com/Alex-Clau)
- LinkedIn: [alex-gafita](https://www.linkedin.com/in/alex-gafita)
