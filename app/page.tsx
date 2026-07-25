"use client";

import { useMemo, useState } from "react";

const domains = ["All", "AWS", "Azure", "OCI", "Kubernetes", "Terraform"];

const topics = [
  {
    domain: "AWS",
    code: "AWS",
    title: "Organizations",
    description: "Multi-account strategy, OUs, SCPs, delegated administration, and enterprise guardrails.",
    level: 4,
    resources: "18 resources",
    accent: "amber",
  },
  {
    domain: "AWS",
    code: "AWS",
    title: "Identity & Access",
    description: "Identity Center, federation, permission boundaries, ABAC, and access governance.",
    level: 3,
    resources: "24 resources",
    accent: "amber",
  },
  {
    domain: "Azure",
    code: "AZ",
    title: "Landing Zones",
    description: "Management groups, policy initiatives, platform subscriptions, and secure connectivity.",
    level: 4,
    resources: "15 resources",
    accent: "blue",
  },
  {
    domain: "OCI",
    code: "OCI",
    title: "Security Zones",
    description: "Compartments, Cloud Guard, security recipes, and preventive controls at scale.",
    level: 3,
    resources: "11 resources",
    accent: "red",
  },
  {
    domain: "Kubernetes",
    code: "K8S",
    title: "Workload Security",
    description: "Admission control, pod security, network policies, secrets, and runtime protection.",
    level: 4,
    resources: "19 resources",
    accent: "blue",
  },
  {
    domain: "Terraform",
    code: "TF",
    title: "Secure IaC",
    description: "Reusable modules, policy as code, state protection, scanning, and delivery pipelines.",
    level: 3,
    resources: "21 resources",
    accent: "violet",
  },
];

const learningLoop = [
  ["01", "Official docs", "Build a precise mental model"],
  ["02", "Skill Builder", "Follow the guided learning path"],
  ["03", "Hands-on lab", "Create a multi-account sandbox"],
  ["04", "Terraform", "Automate OUs and guardrails"],
  ["05", "Field case", "Recover landing zone drift"],
  ["06", "Exam questions", "Test Security Specialty depth"],
  ["07", "Checklist", "Validate production readiness"],
  ["08", "Quiz", "Lock in the knowledge"],
];

const careerPath = [
  ["01", "Cloud Engineer", "Core cloud, networking, Linux, IAM"],
  ["02", "Cloud Administrator", "Operations, monitoring, cost controls"],
  ["03", "Cloud Security Engineer", "Detection, response, secure delivery"],
  ["04", "Cloud Architect", "Landing zones, trade-offs, resilience"],
  ["05", "Senior Cloud Architect", "Multi-cloud strategy and governance"],
  ["06", "Principal Architect", "Platforms, standards, organizational influence"],
  ["07", "Enterprise Architect", "Business alignment and transformation"],
];

function Stars({ level }: { level: number }) {
  return (
    <span className="stars" aria-label={`Maturity level ${level} of 5`}>
      {"★".repeat(level)}
      <span>{"★".repeat(5 - level)}</span>
    </span>
  );
}

export default function Home() {
  const [activeDomain, setActiveDomain] = useState("All");
  const [query, setQuery] = useState("");

  const filteredTopics = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return topics.filter((topic) => {
      const matchesDomain = activeDomain === "All" || topic.domain === activeDomain;
      const matchesQuery =
        !normalized ||
        `${topic.domain} ${topic.title} ${topic.description}`.toLowerCase().includes(normalized);
      return matchesDomain && matchesQuery;
    });
  }, [activeDomain, query]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Cloud Security Codex home">
          <span className="brand-mark">C</span>
          <span>
            Cloud Security
            <strong>Codex</strong>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#explore">Explore</a>
          <a href="#learning-path">Learning paths</a>
          <a href="#field-notes">Field notes</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#explore">
          Browse the Codex <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Field-tested cloud security knowledge</p>
          <h1>From first principles to <em>enterprise scale.</em></h1>
          <p className="hero-lead">
            A practical knowledge base for architects building secure, governed,
            and resilient cloud platforms across AWS, Azure, OCI, and Kubernetes.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#explore">
              Start exploring <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#learning-path">
              View learning path <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="trust-line">
            <span>Built from real CCoE practice</span>
            <span>Vendor-neutral thinking</span>
            <span>Safe, reusable examples</span>
          </div>
        </div>

        <div className="knowledge-map" aria-label="Cloud security knowledge map">
          <div className="map-header">
            <span>KNOWLEDGE GRAPH</span>
            <span className="live"><i /> GROWING WEEKLY</span>
          </div>
          <div className="map-core">
            <span>Cloud Security</span>
            <strong>CODEX</strong>
          </div>
          <div className="map-nodes">
            <div className="map-node node-aws"><b>AWS</b><small>roadmap</small></div>
            <div className="map-node node-azure"><b>AZURE</b><small>roadmap</small></div>
            <div className="map-node node-oci"><b>OCI</b><small>roadmap</small></div>
            <div className="map-node node-k8s"><b>K8S</b><small>roadmap</small></div>
            <div className="map-node node-iac"><b>IaC</b><small>roadmap</small></div>
            <div className="map-node node-ai"><b>AI</b><small>roadmap</small></div>
          </div>
          <div className="map-lines" aria-hidden="true">
            <i className="line l1" /><i className="line l2" /><i className="line l3" />
            <i className="line l4" /><i className="line l5" /><i className="line l6" />
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Codex metrics">
        <div><strong>06</strong><span>starter topics</span></div>
        <div><strong>01</strong><span>guided path</span></div>
        <div><strong>05</strong><span>lab backlog</span></div>
        <div><strong>04</strong><span>field patterns</span></div>
      </section>

      <section className="explore section" id="explore">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Explore the knowledge base</p>
            <h2>Find your next challenge.</h2>
          </div>
          <p>Every topic connects architecture, implementation, security, cost, and hard-won field lessons.</p>
        </div>

        <div className="search-row">
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">Search the Codex</span>
            <input
              type="search"
              placeholder="Search topics, services, patterns..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <kbd>⌘ K</kbd>
          </label>
          <div className="filters" aria-label="Filter by domain">
            {domains.map((domain) => (
              <button
                type="button"
                key={domain}
                className={activeDomain === domain ? "active" : ""}
                onClick={() => setActiveDomain(domain)}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        <div className="topic-grid">
          {filteredTopics.map((topic) => (
            <article className="topic-card" key={`${topic.domain}-${topic.title}`}>
              <div className="topic-top">
                <span className={`topic-icon ${topic.accent}`}>{topic.code}</span>
                <Stars level={topic.level} />
              </div>
              <p className="topic-domain">{topic.domain}</p>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <div className="topic-meta">
                <span>{topic.resources}</span>
                <a href="#complete-loop" aria-label={`Explore ${topic.title}`}>Explore <b>→</b></a>
              </div>
            </article>
          ))}
          {filteredTopics.length === 0 && (
            <div className="empty-state">
              <strong>No topic found yet.</strong>
              <span>Try a broader term or another domain.</span>
            </div>
          )}
        </div>
      </section>

      <section className="loop-section section" id="complete-loop">
        <div className="section-heading inverse">
          <div>
            <p className="section-kicker">A complete learning system</p>
            <h2>One topic. The whole journey.</h2>
          </div>
          <p>Not another collection of articles. Each subject becomes a practical path from concept to confident execution.</p>
        </div>

        <div className="loop-layout">
          <div className="loop-list">
            {learningLoop.map(([number, title, description], index) => (
              <div className={`loop-item ${index === 3 ? "featured" : ""}`} key={number}>
                <span>{number}</span>
                <div><strong>{title}</strong><small>{description}</small></div>
                <b aria-hidden="true">{index === 3 ? "↗" : "✓"}</b>
              </div>
            ))}
          </div>
          <article className="spotlight-card">
            <div className="spotlight-label"><span>AWS</span> FEATURED PATH</div>
            <p className="spotlight-pretitle">Governance at scale</p>
            <h3>AWS Organizations</h3>
            <p>
              Design a secure multi-account environment with organizational units,
              service control policies, delegated administration, and auditable guardrails.
            </p>
            <div className="spotlight-progress">
              <div><span>Path progress</span><strong>0 / 8</strong></div>
              <i><b /></i>
            </div>
            <div className="spotlight-details">
              <div><span>MATURITY</span><Stars level={4} /></div>
              <div><span>EST. TIME</span><strong>6h 40m</strong></div>
              <div><span>LABS</span><strong>03</strong></div>
            </div>
            <a className="button button-light" href="#field-notes">Open learning path <span>→</span></a>
          </article>
        </div>
      </section>

      <section className="career section" id="learning-path">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Career learning path</p>
            <h2>Know where you are.<br />See what comes next.</h2>
          </div>
          <p>A progressive map of knowledge, labs, certifications, and portfolio projects for every stage of a cloud career.</p>
        </div>

        <div className="career-track">
          {careerPath.map(([number, role, focus], index) => (
            <article className={index === 2 ? "current" : ""} key={role}>
              <div className="career-number">{number}</div>
              <div className="career-copy">
                <span>{index === 2 ? "CURRENT FOCUS" : index < 2 ? "FOUNDATION" : "NEXT HORIZON"}</span>
                <h3>{role}</h3>
                <p>{focus}</p>
              </div>
              <span className="career-arrow" aria-hidden="true">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="field section" id="field-notes">
        <div className="section-heading">
          <div>
            <p className="section-kicker">From the field</p>
            <h2>Practice, patterns, and proof.</h2>
          </div>
          <a className="text-link dark" href="#about">View all field notes <span>→</span></a>
        </div>

        <div className="field-grid">
          <article className="field-card field-feature">
            <div className="field-visual">
              <div className="architecture-diagram">
                <span>MANAGEMENT</span>
                <div><b>Security OU</b><b>Infrastructure OU</b></div>
                <i>DRIFT DETECTED</i>
                <div><b>Log Archive</b><b>Audit</b><b>Workloads</b></div>
              </div>
            </div>
            <div className="field-content">
              <span className="content-type">CASE STUDY · ENTERPRISE</span>
              <h3>Landing Zone Drift Recovery</h3>
              <p>An anonymized recovery pattern covering decisions, trade-offs, automation, rollback, and lessons learned.</p>
              <div className="tag-row"><span>Control Tower</span><span>Governance</span><span>Runbook</span></div>
              <a href="#about">Read case study <b>→</b></a>
            </div>
          </article>

          <article className="field-card compact">
            <span className="content-type green">HANDS-ON LAB · 90 MIN</span>
            <div className="terminal-window" aria-hidden="true">
              <div><i /><i /><i /></div>
              <code>$ terraform plan</code>
              <code className="success">+ 6 guardrails ready</code>
              <code>Plan: 6 to add, 0 to change.</code>
            </div>
            <h3>Deny unapproved AWS Regions with SCPs</h3>
            <p>Build, test, and safely roll out a region restriction policy.</p>
            <a href="#about">Start lab <b>→</b></a>
          </article>

          <article className="field-card compact adr-card">
            <span className="content-type blue-text">ADR · ARCHITECTURE</span>
            <div className="adr-number">ADR <strong>007</strong></div>
            <h3>Centralize or federate cloud security tooling?</h3>
            <p>A decision framework for ownership, visibility, cost, and operational autonomy.</p>
            <div className="decision"><span>STATUS</span><strong>ACCEPTED</strong></div>
            <a href="#about">Review decision <b>→</b></a>
          </article>
        </div>
      </section>

      <section className="ecosystem section" id="about">
        <div className="ecosystem-copy">
          <p className="section-kicker">Built as an ecosystem</p>
          <h2>Knowledge that compounds.</h2>
          <p>
            Markdown remains the source of truth. GitHub preserves the history.
            The Codex connects documentation, labs, decisions, and future AI retrieval
            into one living professional asset.
          </p>
        </div>
        <div className="ecosystem-flow" aria-label="Cloud Security Codex ecosystem">
          {["Markdown", "GitHub", "Knowledge base", "Labs & cases", "Semantic search"].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < 4 && <b>→</b>}</div>
          ))}
        </div>
      </section>

      <section className="closing">
        <p className="eyebrow"><span /> Build. Validate. Share.</p>
        <h2>Turn experience into<br /><em>enduring knowledge.</em></h2>
        <p>Start with one topic. Grow a reference for the cloud security community.</p>
        <a className="button button-primary" href="#explore">Explore the Codex <span>→</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">C</span>
          <span>Cloud Security<strong>Codex</strong></span>
        </a>
        <p>Practical knowledge for secure cloud architecture.</p>
        <div><a href="#explore">Knowledge base</a><a href="#learning-path">Learning paths</a><a href="#field-notes">Field notes</a></div>
        <span>© 2026 Cloud Security Codex</span>
      </footer>
    </main>
  );
}
