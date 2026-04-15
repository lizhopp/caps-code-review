# Skill Tree Builder

## Overview

Skill Tree Builder is a simple full-stack app for creating learning paths as skill trees. For the current code review milestone, the app focuses on one core feature: creating and viewing skill trees.

## Problem Statement

People often plan learning goals with scattered notes or checklists. This project explores a cleaner way to organize those goals by saving each path as a named skill tree.

## Current Goal

This version is intentionally limited for code review.

Implemented:

- create a skill tree
- view all saved skill trees

Temporarily removed for now:

- authentication
- skill nodes
- prerequisites
- progress tracking
- visual tree rendering

## Core Feature

Users can enter a tree title and description, submit the form, and immediately see the new skill tree in the list.

This gives the project one clear end-to-end feature to review:

- React form
- API request
- Express route
- local data persistence
- dynamic rendering of saved data

## Tech Stack

- React
- Vite
- Node.js
- Express
- local JSON file storage

## Architecture Overview

### Frontend

- `client/src/pages` contains the main page
- `client/src/components` contains the form, navbar, and tree card
- `client/src/data` contains API requests
- `client/src/styles` contains the app styles

### Backend

- `server/src/routes` contains API routes
- `server/src/controllers` contains request handlers
- `server/src/data` contains simple JSON persistence
- `server/src/utils` contains shared helpers

## Implemented API Endpoints

- `GET /api/trees`
- `POST /api/trees`

## Folder Structure

```text
CapS./
├── client/
│   └── src/
│       ├── components/
│       ├── data/
│       ├── pages/
│       └── styles/
├── server/
│   └── src/
│       ├── controllers/
│       ├── data/
│       ├── routes/
│       └── utils/
├── CODE_REVIEW_CHECKLIST.md
├── INSTRUCTOR_MEETING_NOTES.md
└── README.md
```

## Setup

### 1. Install dependencies

```bash
cd server
npm install
cd ../client
npm install
```

### 2. Start the backend

```bash
cd server
npm run dev
```

### 3. Start the frontend

```bash
cd client
npm run dev
```

Backend runs on `http://localhost:3001`.

Frontend runs on `http://localhost:5173`.

## How to Test the Core Feature

1. Open the app in the browser.
2. Enter a tree title and description.
3. Submit the form.
4. Confirm the new tree appears in the list.

## Future Scope

After code review, the next planned features are:

- authentication
- skill nodes
- prerequisite relationships
- progress tracking
- visual tree layout
