# 🐱 GWI Cat Lover App - Lefteris Katmadas

A responsive, mobile first, themeable, and accessible cat image gallery built with modern React tools. Developed as part of a technical interview for GWI.

---

## Demo

[https://gwinew.webappcreative.co/](https://gwinew.webappcreative.co/)

## 🚀 Tech Stack

This project uses a modern frontend toolchain focused on performance, accessibility, and developer experience:

- **React 19** – App foundation

- **Vite** – Fast dev/build tooling

- **TypeScript** – Type safety and DX

- **React Router DOM v7** – Client-side routing

- **TanStack React Query v5** – Data fetching & caching

- **Axios** – HTTP client

- **Emotion** – Themeable CSS-in-JS styling

- **Lodash.debounce** – Optimized input handling

- **React Content Loader** – Skeletons during data loading

---

## 🧹 Code Quality & Formatting

This project uses:

- **ESLint** – For static code analysis and best practices

- **Prettier** – For consistent code formatting

- **TypeScript ESLint Plugin** – For advanced TypeScript linting

**Useful scripts:**

```bash

# Lint all files

npm  run  lint



# Fix lint issues automatically

npm  run  lint:fix



# Format code using Prettier

npm  run  format

```

> The project is linted and formatted consistently to ensure maintainability and readability.

---

## ♿ Accessibility (a11y)

The portal is built with accessibility in mind and validated using **axe DevTools** to catch potential issues and ensure keyboard navigability and semantic markup.

---

## 🎨 Theming

The app supports **light** and **dark** themes using `@emotion/react`. Users can toggle between themes, and preferences are **persisted in localStorage**.

```ts
localStorage.setItem('theme', 'dark') // or 'light'
```

---

## 🧪 Testing Strategy

This project implements both **unit testing** and **end-to-end (E2E) testing**.

### ✅ Unit Tests

- **Framework:** [Vitest](https://vitest.dev/)

- **Libraries:**

- `@testing-library/react`

- `@testing-library/jest-dom`

- `@testing-library/user-event`

> ⚠️ Full unit coverage is not implemented. However, existing tests demonstrate structure, conventions, and testing potential.

**Run unit tests:**

```bash

npm  run  test

# or with coverage

npm  run  test:coverage

```

---

### 🧪 E2E Tests

- **Tool:** [Cypress](https://www.cypress.io/)

- E2E tests cover both homepage (`home.cy.ts`) and breed results (`breeds.cy.ts`)

- Scenarios tested include:

- UI rendering and interactions

- Modal behavior

- API-driven content loading

**Run Cypress:**

```bash

# GUI mode

npm  run  cypress:open



# Headless mode

npm  run  cypress:run

```

---

## 📁 Project Structure

```

src/

├── components/ # Reusable UI elements

├── views/ # Feature-based pages

├── types/ # Shared types

├── api/ # Axios setup and endpoints

├── hooks/ # Custom React hooks

├── styles/ # Emotion themes and global styles

├── tests/ # Unit tests

```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+

- npm

### Setup

```bash

git  clone  https://github.com/lkatmadas/platform-react-challenge

yarn  install

yarn  dev

```

Open your browser to [http://localhost:5173](http://localhost:5173).

---

## 🔍 API Usage Tip

To improve the relevance of initial results (e.g., to get images with breed details early on), you can modify the image search endpoint like so:

```ts
;`${API_ENDPOINTS.images.search}?limit=${limit}&page=${page}&has_breeds=true&order=${order}&size=${size}&mime_types=${mime_types}&format=json`
```

Setting `has_breeds` to `true` helps ensure that returned images include breed metadata.

---

## 🔐 Environment Variables

A `.env` file is used to store environment config, including the API key for TheCatAPI.

> **⚠️ Note:** The `.env` file is excluded from version control. The `VITE_API_KEY` is intentionally not shared. If needed, I can provide a valid API key privately for demonstration purposes.

---

## 📌 What Could Be Improved

- Increase unit test coverage and CI test reports

- Add integration tests for key flows

- Internationalization (i18n) support

---

## 📝 Summary

This project demonstrates:

- Modern tech adoption and clean architecture

- Accessible, testable UI practices

- Production-level structure with extensibility in mind

- Theme management with persistence

Feel free to reach out for any clarifications or code walkthroughs
