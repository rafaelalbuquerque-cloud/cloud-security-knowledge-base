# Cloud Security Codex

Cloud Security Codex is a practical, field-tested knowledge system for cloud
security architects, engineers, platform leaders, and CCoE teams.

It connects architecture guidance, implementation examples, hands-on labs,
enterprise patterns, case studies, runbooks, certification preparation, and
career learning paths. Markdown is the source of truth; the website is the
curated front door.

## Knowledge domains

- AWS, Azure, and OCI
- Kubernetes and container security
- Terraform and secure infrastructure as code
- DevSecOps and software supply chain security
- FinOps and cost-aware security
- AI security and future semantic retrieval
- Governance, identity, networking, and incident response
- Landing zones and enterprise architecture patterns

## How the ecosystem fits together

```text
Markdown knowledge base
        ↓
GitHub review and history
        ↓
Cloud Security Codex website
        ↓
Labs · Case studies · ADRs · Roadmaps
        ↓
Semantic retrieval and AI-assisted discovery (future)
```

## Repository map

| Area | Purpose |
| --- | --- |
| `docs/` | Cloud services, patterns, and technical guidance |
| `labs/` | Safe, reproducible hands-on exercises |
| `case-studies/` | Anonymized enterprise scenarios and lessons |
| `adrs/` | Architecture decision records |
| `roadmap/` | Career and certification learning paths |
| `templates/` | Consistent authoring templates |
| `app/` | Public knowledge portal |

## Local development

```bash
npm install
npm run dev
```

## Content principles

- Prefer official vendor documentation as the primary reference.
- Explain decisions, alternatives, trade-offs, cost, and operational impact.
- Use fictional identifiers and reusable examples.
- Never publish customer names, credentials, account IDs, internal addresses,
  production resource IDs, or confidential company information.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the content workflow and
[SECURITY.md](SECURITY.md) for disclosure and confidentiality guidance.

## License

Code and original documentation are available under the MIT License unless a
file states otherwise.
