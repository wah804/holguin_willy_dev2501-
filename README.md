# Willy Holguin
## DEV2501-O 01
**Assignments:**
- 01_Components (Reusable Component Library)
- 02_CRUD_Interface

This project includes two related parts:

1. A reusable component library built with CSS-in-JS (`styled-components`) and dynamic props.
2. A CRUD interface implementation built on top of the component structure.

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

---

## How to Run

### 1) Install dependencies

```bash
npm install
