---
title: "Chess Engine"
description: "C-based chess engine with Alpha-Beta search and PyTorch evaluation model."
pubDate: 2025-11-12
image: "/images/chess-engine-showcase1.png"
imageWidth: 300
tags: ["c", "chess", "alpha-beta", "pytorch", "neural-network", "fen"]
---

## Chess Engine

The **Chess Engine** is a C-based chess engine designed for fast and accurate move evaluation. It combines classical **Alpha-Beta search** with a **PyTorch neural network** trained on Stockfish-generated data to predict **centipawn values**, enabling both **player vs bot** and **bot vs bot** matches.

### Motivation

This project explores integrating classical search algorithms with machine learning-based evaluation. Using Rust or Python alone would limit performance testing; C ensures low-level control, while PyTorch provides flexible model training on high-quality Stockfish data.

### Architecture

- **Core Engine:** Written in **C**, using Alpha-Beta pruning for efficient search.  
- **Evaluation Function:** PyTorch model predicts centipawn values, trained on Stockfish outputs.  
- **FEN Parsing:** Supports standard **FEN strings** for board representation.  
- **Game Modes:** Player vs Bot, Bot vs Bot.  
- **Testing:** Uses **Unity test framework** to ensure correctness of move generation and evaluation.  
- **Dynamic Arrays:** Custom dynamic arrays implemented in C for move storage and game state management.

### Features

- Alpha-Beta search with neural evaluation.  
- Integration of machine learning model for board scoring.  
- Multiple game modes (player vs bot, bot vs bot).  
- FEN parsing for standardized board input/output.  
- Comprehensive testing via Unity.  

### Tech Stack

- **Language:** C (core engine), Python (PyTorch model training)  
- **Search Algorithm:** Alpha-Beta pruning  
- **ML Framework:** PyTorch  
- **Testing Framework:** Unity  
- **Data:** Stockfish-generated positions for model training  

<!-- <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem;"> -->
<!--   <Image src={img1} alt="Chess Engine Screenshot 1" style={{ maxHeight: "400px", height: "auto", width: "auto" }} /> -->
<!--   <Image src={img2} alt="Chess Engine Screenshot 2" style={{ maxHeight: "400px", height: "auto", width: "auto" }} /> -->
<!-- </div> -->

### Future Enhancements

- Full neural network integration for move evaluation during search.  
- GUI integration for interactive play and visualization.  
- Iterative deepening and parallel search optimizations.  
- Performance benchmarking across multiple hardware configurations.  

<div style="text-align: center; margin-top: 2rem;">
  <a href="https://github.com/tushyagupta81/chess_engine_c" target="_blank" rel="noopener noreferrer">
    GitHub Repository
  </a>
</div>
