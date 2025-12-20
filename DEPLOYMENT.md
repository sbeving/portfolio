# GitHub Pages Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: Select **GitHub Actions**

### 2. Push to Main Branch

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

The site will automatically build and deploy when you push to the `main` branch.

### 3. Access Your Site

Your portfolio will be available at:
```
https://<your-username>.github.io/<repository-name>/
```

Or if using a custom domain, configure it in **Settings** → **Pages** → **Custom domain**

## Manual Deployment

To manually trigger a deployment:
1. Go to **Actions** tab in your repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Local Testing

Test the static export locally:
```bash
npm run build
npx serve@latest out
```

## Configuration

The deployment is configured in:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `next.config.js` - Next.js static export settings
- `package.json` - Build scripts

## Troubleshooting

If deployment fails:
1. Check the **Actions** tab for error logs
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the workflow has proper permissions
4. Check that all dependencies are correctly listed in package.json
