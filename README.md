# Willy Holguin
## DEV2501-O 01
**Assignments:**
- 01_Components (Reusable Component Library)
- 02_CRUD_Interface
- 03_Routing & Hooks (React Router, Hooks, & Recharts)
- 04_UserProfile (API, Hooks, User Profile)

This project includes four related parts:

1. A reusable component library built with CSS-in-JS (`styled-components`) and dynamic props.
2. A CRUD interface implementation built on top of the component structure.
3. A multi-page routed application using React Router, Functional Hooks, and Recharts.
4. A dynamic User Profile built with the Random User Generator API and a custom Notifications dropdown feature.

---

## 01_Components – Reusable Component Library

A one page React application demonstrating reusable components using CSS-in-JS and prop-driven UI.

### Rules

- No `useState` (stateless UI)
- CSS-in-JS only (`styled-components` inside each component)
- Dynamic text via props (no hardcoded UI text)
- Only allowed styling library:`styled-components`
- React Icons used where required (search, settings, edit, delete)

### Components Included

- **Button** – Reusable button with hover styles
- **Form** – Post title + post description inputs
- **Header** – Logo, search with icon, avatar + settings icons
- **LeftNavigation** – Newsfeed, Messages, Watch
- **AdCard** (x2) – Image, title, subtitle via props
- **PostCard** – Avatar, title, description, edit/delete icons

---

## 02_CRUD_Interface

Extends the component structure into a working CRUD interface.

Implements:
- Create
- Read
- Update
- Delete

Built using the reusable components from 01_Components.

---

## Branch Guide

- **dev**
  Ongoing development branch for the month.

- **01_Components**
  Submission branch for the reusable component library.

- **02_CRUD_Interface**
  Submission branch for the CRUD interface implementation.

- **03_Routing & Hooks**
  Submission branch for the Route navigation, Hooks, and Recharts feature implementations.

- **04_API**
  Submission branch for the final React API integration and user profile.

---

## 03_Routing & Hooks

Implements React Router navigation, transitions Class components to Functional Components using React Hooks, and adds data visualization through Recharts.

### Features

- Uses `react-router-dom` to establish a routing shell navigating between `/Dashboard`, `/Newsfeed`, `/Messages`, `/Settings`, and `/Profile` views.
- Refactored older Class-components into Functional-components to implement `useState` and `useEffect` Hooks.
- Embedded data visualization `<BarChart>` and `<LineChart>` elements to the Dashboard via the `recharts` library.
- Completely strictly styled utilizing CSS-in-JS `styled-components` without any dependency on standard raw `.css` files.

---

## 04_UserProfile (API Integration)

Implements a dynamic user profile view using React Hooks and the Random User Generator API.

### Features

- Explored short-term memory through Component State (`useState`).
- Incorporated `useEffect` combined with `async/await` and `fetch` to retrieve API data.
- Built the new `/UserProfile` route connecting the Header Avatar to dynamic user information (first name, last name, phone, address, location, credentials, etc.)
- Added a Custom Notifications Drop-down menu in the `Header.jsx` mapped to a new Notification Bell icon using React Hooks.

---

## How to Run

### 1) Install dependencies

```bash
npm install

