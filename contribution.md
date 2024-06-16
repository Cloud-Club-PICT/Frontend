# Contribution Guide

Thank you for considering contributing to our project! We appreciate your interest and look forward to collaborating with you. To ensure effective cooperation, please adhere to the guidelines provided in this document.

## Naming Conventions

### Commit Messages

#### Single Change Format

**Please follow this format for commit messages:**

**Message**: `<type>(<scope>): <subject>`

**Types**: new, add, fix, docs, style, refactor, test

**Examples**:
- `new(home): created home page`
- `add(auth): added login functionality`
- `fix(navbar): resolve dropdown issue`

#### Multiple Changes Format

**Please follow this format for multiple changes:**

**Message**: `<Action>`

**Description**: `[ <type>(<scope>): <subject> ]`

**Actions**: Major changes, Minor changes, Bug fixes

**Examples**:
- **Message**: `Minor changes`
- **Description**: 
  - `add(auth): added login functionality`
  - `fix(navbar): resolve dropdown issue`

### Component Naming

For React components:
- **Component Names:** Use PascalCase.
  - Example: `UserProfile`, `LoginButton`
- **File Names:** Match the file name and use `.jsx` for pages and `.js` for components.
  - Example: `UserProfile.jsx`
