#!/bin/bash
# Create GitHub repository for EpsteinMiner

GITHUB_TOKEN="${GITHUB_TOKEN}"
REPO_NAME="epsteinminer"
REPO_DESCRIPTION="Elite Island Mining Operation - Solana dApp with 8% Daily APR"

# Create repository using GitHub API
curl -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d "{
    \"name\": \"$REPO_NAME\",
    \"description\": \"$REPO_DESCRIPTION\",
    \"private\": false,
    \"has_issues\": true,
    \"has_projects\": false,
    \"has_wiki\": false,
    \"auto_init\": false
  }"

echo "Repository created successfully!"
