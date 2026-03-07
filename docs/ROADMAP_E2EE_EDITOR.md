# Apex Scholar Feature Roadmap

## High-Priority Features

### 1. End-to-End Encryption (E2EE) for Cloud Sync
**Goal:** Ensure user data is encrypted client-side before storage in puter.js KV, with zero-knowledge architecture.

**User Story:**
As a researcher, I want my unpublished research data to be securely stored with end-to-end encryption, so that only I can access it (not even the server admins).

**Acceptance Criteria:**
- [ ] All data written to puter KV is encrypted client-side using AES-256-GCM (or libsodium)
- [ ] Encryption keys are derived from user's password (or generated and stored only in browser IndexedDB)
- [ ] Decryption happens client-side only; server never sees plaintext
- [ ] Existing data migration path: unencrypted data can be encrypted on next sync
- [ ] User can export/import encrypted backup (key included)
- [ ] UX: transparent to user after initial setup (no manual encrypt/decrypt steps)

**Technical Approach:**
- Use Web Crypto API (subtle.crypto) or `libsodium-wrappers` (pure JS, cross-browser)
- Key derivation: PBKDF2 or scrypt from user's auth password (or separate encryption password)
- Data format: `{ iv, ciphertext, authTag, salt? }` stored as base64 in KV
- Cache decrypted data in memory (IndexedDB) for session; clear on logout
- Metadata (paper titles, etc.) could remain unencrypted if needed for search, but body/content encrypted

**Open Questions:**
- Use user's puter auth password as encryption key? (Risk: if they change password, need re-encrypt)
- Separate encryption password? (More secure but UX friction)
- How to handle multi-device sync? Need to share key across devices securely

---

### 2. Collaborative Editor (Overleaf/Google Docs Style)
**Goal:** Real-time collaborative writing environment with LaTeX support, reference insertion, and export.

**User Story:**
As a research team, we want to write papers/theses together in real-time with LaTeX rendering, reference management, and AI assistance.

**Acceptance Criteria:**
- [ ] Rich text editor with real-time collaboration (CRDT-based, e.g., Yjs)
- [ ] LaTeX math support (KaTeX/MathJax inline and block)
- [ ] Reference insertion: search Apex Scholar paper database and insert citations in chosen format (APA, MLA, Chicago, etc.)
- [ ] Export to PDF, Word, and LaTeX (.tex)
- [ ] Version history and rollback
- [ ] Commenting/annotation system
- [ ] AI writing assistant: sentence completions, grammar, research-specific suggestions
- [ ] Works offline with local changes syncing when online (using puter KV for sync)

**Technical Approach:**
- Editor core: TipTap (ProseMirror) or Slate.js with Yjs for CRDT
- Real-time sync: Yjs WebRTC provider or puter's real-time KV subscriptions
- LaTeX: KaTeX with custom node types for blocks/inline
- Citations: integrate with existing paper search; store as Zotero-like CSL JSON
- Export: `html2pdf`, `docx`, `latex` generators
- AI: puter AI API or external LLM; prompt engineering for research writing

**Phases:**
1. **Phase 1 (MVP):** Single-user rich text editor with LaTeX and export (no collaboration)
2. **Phase 2:** Add Yjs collaboration (peer-to-peer or via puter signaling)
3. **Phase 3:** Reference insertion and AI assistant
4. **Phase 4:** Version history, comments, offline mode

**Dependencies:**
- E2EE may affect collaboration: need to consider key sharing for shared documents
- puter's real-time capabilities (latency, subscription limits)

---

## Dependencies & Order

**Recommended order:**
1. Finish E2EE first (security foundation)
2. Build editor MVP (single-user) with export
3. Add collaboration (Yjs)
4. Integrate references & AI

**Why E2EE first:** It's cross-cutting; should be baked into storage layer before building complex features.

---

## Rough Estimation

- E2EE: 1-2 weeks (including testing, migration, UX)
- Editor MVP: 2-3 weeks
- Collaboration: 1-2 weeks
- References + AI: 1-2 weeks

Total ~5-8 weeks for full feature set (depending on complexity and bugs).

---

## Open Questions

**E2EE:**
- How to handle password reset? (User loses data if keys only in browser)
- Key backup/sync across devices?
- Performance impact of encrypting large documents?

**Collaboration:**
- Will collaboration work with E2EE? Need to share keys with collaborators (requires key exchange)
- Conflict resolution for simultaneous edits to same paragraph
- Max concurrent users per document?

---

## Success Metrics

- E2EE: % of users enabling it; zero data breaches reported
- Editor: # of documents created; average session length; export conversion rate
- Collaboration: % of documents with >1 author; collaboration satisfaction (NPS)

---

*Document created: 2025-03-07*
*Status: Draft — awaiting technical review*
