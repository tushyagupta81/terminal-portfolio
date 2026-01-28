---
title: "Interpreter in Zig"
description: "A Zig-based interpreter built while following the Crafting Interpreters architecture, redesigned for more flexible memory control."
pubDate: 2025-07-31
tags: ["zig", "interpreter", "parsing", "compiler"]
---

## Interpreter-zig

**Interpreter-zig** is an interpreter implemented in **Zig**, continuing the architectural ideas explored in my earlier Rust prototype.  
The move to Zig provides more direct control over memory management and simplifies experimentation with interpreter internals.

The design follows the structure presented in **Crafting Interpreters**, with several implementation differences adapted for Zig.

### Working Demo

A live demo is available at:

<a href="https://tushyagupta81.github.io/interpreter-zig" target="_blank" rel="noopener noreferrer">
  [https://tushyagupta81.github.io/interpreter-zig]
</a>

The backend may require 1–2 minutes to cold-start.

---

## Current Progress

### Core Infrastructure
- [x] File reading
- [x] GPA allocator integration
- [x] REPL mode
- [x] Tokenization and scanning  
    - [x] Multiline comment support
- [x] Parser
    - [x] Arena allocator as a temporary memory solution
    - [x] Detection of binary operations missing a left-hand operand
    - [ ] Comma operator
    - [ ] Ternary operator

### Interpreter
- [ ] Define behavior for number–string comparisons
- [x] Number-to-string coercion
- [x] Divide-by-zero handling

### Statements
- [x] Expressions, print, variables (scoped and unscoped)
- [x] Conditionals
- [x] Logical operators
- [x] Loops
- [ ] REPL: distinguish expressions from statements
- [ ] Runtime error for uninitialized variables
- [ ] Additional branching constructs
- [ ] `break` support

### Functions
- [x] Return statements
- [x] Local functions (supported after moving environments to the heap)
- [ ] Improve runtime argument-count checking
- [ ] Anonymous functions

### Resolver
- [x] Lexical scoping
- [x] Environment capture during function creation
- [x] Resolve-time error reporting
- [x] HashMap-based expression keying
- [ ] Detect unused local variables
- [ ] Replace HashMap lookups with index–distance based resolution

---

## Known Issues

1. **interpreter.zig**  
   `evaluate_binary`: string concatenation limit (4096 bytes)

2. **token.zig**  
   `LiteralValue.to_string`: string size limit (4096 bytes)

3. **environment.zig**  
   `get`: string concatenation limit (4096 bytes)
