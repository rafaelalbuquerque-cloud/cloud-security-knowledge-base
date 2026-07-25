# AGENTS.md

## Project purpose

This repository is a professional Cloud Security knowledge base, learning
system, and technical portfolio.

## Writing standards

- Use professional English.
- Keep documentation clear, practical, and technically accurate.
- Explain architectural decisions, alternatives, and trade-offs.
- Prefer official vendor documentation as a reference.
- Include examples only when they are safe, fictional, and reusable.
- Label content maturity from one to five stars.
- Connect major topics to documentation, labs, infrastructure as code, field
  cases, certification practice, checklists, and quizzes.

## Security rules

- Never commit credentials, tokens, private keys, or secrets.
- Never include real customer names or confidential information.
- Never publish cloud account IDs, tenant IDs, internal IP addresses, or
  production resource IDs.
- Use placeholders such as `<AWS_ACCOUNT_ID>`, `<TENANT_ID>`, and `<REGION>`.
- Anonymize every enterprise case study.
- Do not create production resources automatically.

## Infrastructure as code

- Use reusable Terraform modules.
- Format and validate examples.
- Pin providers and modules where appropriate.
- Include documentation for every module.
- Use fictional identifiers and safe defaults.

## Git workflow

- Never commit directly to `main` when contributing through an agent.
- Use feature branches and pull requests for significant changes.
- Keep commits small and descriptive.
- Summarize validation in every pull request.
