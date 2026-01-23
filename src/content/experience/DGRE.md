---
title: Project Intern
company: Defence Geoinformatics Research Establishment, DRDO
description: Developed a high-throughput pipeline to extract features from continuous seismic data and train machine learning models (RF/XGB) for event detection and classification. Streamlined large-scale data handling, parallel processing, and predictive analytics for research workflows.
pubDate: 2026-01-22
startDate: 2024-10-16
endDate: 2026-10-28
image: /images/dgre-desc-image.jpeg
imageHeight: 300
imageWidth: 900
tags: ['ml', 'python', 'data analysis']
---

## Overview

This project focuses on building scalable pipelines for extracting features from continuous seismic data and applying machine learning models to detect and classify seismic events. The goal is to automate large-scale sensor data processing, reduce memory footprint, and enable predictive analytics for research and monitoring.

## Key Contributions

### 1. Continuous Data Handling

- Processed continuous seismic recordings across multiple sensor directories.
- Optimized trace loading to minimize redundant I/O operations for long-term datasets.

### 2. Feature Extraction Pipeline

- Developed a modular `FeatureExtractor` to compute time-series features from raw seismic traces.
- Produced sensor-level feature CSVs, standardizing outputs for downstream analytics and modeling.
- Ensured compatibility with recursive directory structures and multi-sensor setups.

### 3. Streaming Large Data

- Replaced in-memory feature collection with streaming writers to handle extremely long traces.
- Incrementally wrote CSV rows to reduce memory usage and allow scalable feature extraction across months of data.

### 4. Multiprocessing and Performance

- Parallelized feature extraction with Python `multiprocessing` for multi-core execution.
- Implemented flexible CPU usage limits and cross-platform support (macOS/Linux).
- Optimized folder and file iteration to avoid unnecessary overhead.

### 5. Aggregation and Main Feature Files

- Built “main” feature files per sensor location based on sampling ratios and metadata windows.
- Consolidated multiple sensors’ features into unified datasets for model training.

### 6. Machine Learning Modeling

- Trained **Random Forest (RF)** and **XGBoost (XGB)** classifiers on extracted features to detect and classify seismic events.
- Implemented supervised learning pipelines with feature selection, normalization, and cross-validation.
- Tracked performance metrics to ensure models generalized well across sensors and time periods.
- Enabled incremental updates to incorporate new data without retraining from scratch.

### 7. Debugging and Pipeline Reliability

- Implemented error handling for incomplete files and edge-case sensor data.
- Ensured reproducibility for repeated pipeline runs on large multi-month datasets.
- Automated logging to monitor data quality and model performance.

## Tech Stack

- **Python** (pandas, pathlib, obspy, scikit-learn, xgboost)
- **Multiprocessing**, streaming CSV writes
- **Custom feature-extraction logic**
- **Machine Learning pipelines** (RF, XGB, evaluation)
- **Automation scripts** for recursive folder processing

## Impact

- Scalable pipeline capable of handling continuous seismic data for months.
- Reduced memory usage and improved runtime efficiency.
- Produced structured datasets and trained models for predictive seismic analytics.
- Provided tools for ongoing research and automated monitoring of seismic events.

## Summary

This project combines high-throughput data engineering with machine learning to transform raw seismic sensor data into actionable insights. It demonstrates expertise in feature extraction, parallel processing, streaming large datasets, and training predictive models (RF/XGB) on complex time-series data.
