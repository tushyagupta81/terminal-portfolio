---
title: Software Developer Intern
company: Everything Beautiful Retail
description: Built a scalable web scraping system to collect product data from Amazon, including pricing, availability, and metadata. Automated daily updates, optimized for performance and reliability, and prepared structured datasets for downstream analytics.
pubDate: 2025-08-01
startDate: 2025-06-08
endDate: 2025-07-31
image: /images/erb-desc-image.png
imageHeight: 250
imageWidth: 1000
tags: ["python", "web scrapping", "scripting", "automation"]
---
## Overview

During my internship at **Everything Beautiful**, I worked on a production-grade Amazon product-scraping system. The goal was to reliably gather product metadata, pricing changes, availability, and search-result patterns, then aggregate and store them for internal analytics.

## Key Contributions

### 1. Amazon Product Scraper Architecture

- Built a scraper focused on product metadata (title, price, rating, images, description, availability).
- Implemented request-layer handling for rotating headers, retry logic, and lightweight anti-bot evasion.
- Designed a modular crawler structure to support category pages, product detail pages, and search-result pages.

### 2. Data Normalization and Storage Layer

- Created schemas for storing normalized product entities and historical price snapshots.
- Implemented a pipeline to update only the changed fields to keep storage efficient.
- Added support for appending time-stamped deltas to track price movement over weeks.

### 3. Scaling and Performance Improvements

- Reduced failure rates on high-volume requests using batching, randomized backoff, and session persistence.
- Added parallel scraping flows to handle larger sets of ASINs without overloading the system.
- Built guardrails to avoid triggering captchas or throttling.

### 4. Automation and Scheduling

- Converted the scraper into an automated job with scheduled runs (daily/weekly).
- Implemented logic to detect stale entries and re-scrape them on a defined rotation.
- Ensured that incremental crawls were significantly faster than full scans.

### 5. Internal Developer Tools

- Added utilities for quickly onboarding new ASIN lists.
- Wrote helper functions to validate scraped HTML blocks and highlight structural changes in Amazon’s layout.
- Created simple CLI tools for triggering manual re-scrapes or debugging broken selectors.

## Impact

- Delivered a reliable Amazon scraping workflow ready for continuous, long-term use.
- Reduced scraping overhead using smarter batching and selector-change detection.
- Provided structured, clean data for downstream analytics and trend analysis.

## Tech Stack

- **Python** (requests, BeautifulSoup / lxml)
- **Task scheduling** (cron / internal scheduler)
- **CSV / JSON pipelines**, lightweight database schema
- **Automation tools** for repeated scraping cycles

## Summary

This internship centered around building a scalable Amazon scraping system, improving the reliability of data collection, and creating automation tools that made continuous product-tracking feasible for the team.
