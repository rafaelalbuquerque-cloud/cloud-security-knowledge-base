# Security and public-information policy

This is a public educational repository. Every contribution must be safe for
unrestricted internet publication.

## Information classification

Only public, reusable, and vendor-documented information belongs here.
Anonymized field experience is allowed only when it cannot identify a customer,
employer, account, workload, incident, or internal operating model.

## Prohibited information

Never commit or publish:

- credentials, tokens, private keys, certificates, or session material;
- cloud account, subscription, tenancy, project, organization, or tenant IDs;
- customer, employer, partner, or employee names without explicit permission;
- internal domains, IP addresses, CIDR ranges, hostnames, or resource IDs;
- production logs, screenshots, support cases, incident timelines, or tickets;
- confidential architecture diagrams, commercial terms, or security findings;
- generated examples containing real identifiers copied from a working system.

Use obvious placeholders such as `<AWS_ACCOUNT_ID>`, `<TENANT_ID>`, `<REGION>`,
`<EXAMPLE_CIDR>`, and `example.com`.

## Publication checklist

Before merging content:

1. Search the full diff for secrets and real identifiers.
2. Confirm every case study is anonymized and non-attributable.
3. Confirm code examples use fictional names and least-privilege defaults.
4. Confirm Terraform state, plan output, local environment files, and logs are
   excluded.
5. Verify external links point to authoritative public documentation.

## Reporting

Do not open a public issue containing sensitive data. Remove the material from
the proposed change and notify the repository owner privately. If a secret was
committed, revoke or rotate it first; deleting the file is not sufficient.
