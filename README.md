# Event Finder

A React application for viewing and searching upcoming events with real-time filtering.

## Features

- **Event Listing** - Display upcoming events sorted by soonest date
- **Real-time Search** - Filter events by name or location
- **Empty State** - User-friendly messaging when no events match

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development
- **React Router** for navigation
- **Jest** for testing
- **ESLint + Prettier + Stylelint** for code quality
- **Husky + lint-staged** for pre-commit hooks
- **CSS Modules** with kebab-case naming

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage
```

**Test Coverage:**

- **8 test cases** covering all event listing functionality
- Show upcoming events
- Filtering logic (name, location)
- Empty state handling
- Event count after filtering

### Code Quality

```bash
# Lint TypeScript
npm run lint
npm run lint:fix

# Lint CSS
npm run lint:css
npm run lint:css:fix

# Format code
npm run format
```

### Git Hooks

Pre-commit hooks automatically run:

- ESLint on staged JS/TS files
- Stylelint on staged CSS files
- Prettier formatting

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/) format.

### Testing Strategy

- **Dynamic dates** - One event always set to "tomorrow" to prevent test failures over time

## Potential Improvements

- Expand design tokens (spacing, font-size, font-family etc.)
- Pagination/Lazy Loading - Handle large datasets
- Add unit tests for Lib and Utils
- Accessibility
- Add reusable Card and TextInput components
