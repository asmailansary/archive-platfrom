# Autonomous CMS - Production Architecture & Vision

## 1. Core Vision & Architecture
This CMS is a production-grade, highly secure, autonomous content management system designed to run on a serverless stack utilizing Supabase as the unified backend infrastructure (Database, Auth, Storage, and Governance Logs).

## 2. Infrastructure & Supabase Services
- **Database Schema**: 
  - `users_profile`: Manages identities, active statuses, and RBAC roles (`super_admin`, `editor`, `viewer`).
  - `articles`: Handles core governance content workflow (`draft` -> `submitted` -> `reviewing` -> `approved` -> `published`).
  - `audit_logs`: Immutable security audit trail tracking every modification, status change, and critical payload.
- **Authentication**: Native Supabase Auth supporting Role-Based Access Control (RBAC) and OAuth integration.
- **Storage**: Enterprise storage bucket (`cms-media`) for PDFs and media assets.

## 3. Automation & Deployment Pipeline
- Triggered automatically via GitHub Actions upon any push to `main` branch or update to `SITE_DESCRIPTION.md`.
- Secret-managed authentication using `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
