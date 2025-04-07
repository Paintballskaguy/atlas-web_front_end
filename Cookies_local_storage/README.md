# Advanced Shopping Cart with Session Storage

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technical Implementation](#technical-implementation)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)


## Project Description
A vanilla JavaScript implementation of a shopping cart system that uses browser sessionStorage for temporary data persistence. The cart maintains state during a single browser session but clears when the tab is closed.

## Features
- **Product Catalog**: Displays available items (Shampoo, Soap, Sponge, Water)
- **Cart Functionality**:
  - Add items with quantity tracking
  - Remove individual items
  - Clear entire cart
- **Session Persistence**:
  - Maintains cart state during page refreshes
  - Isolated per browser tab
- **Interactive UI**:
  - Visual feedback for all actions
  - Clean, responsive design

## Technical Implementation
- **Pure Vanilla JavaScript** (no frameworks)
- **sessionStorage API** for client-side data persistence
- **Dynamic DOM manipulation** (no static HTML elements)
- **Modern ES6+ features**:
  - Arrow functions
  - Template literals
  - Destructuring assignment
- **CSS-in-JS** styling approach


## Usage

### Adding Items
- Click on any product in the "Available products" list
- Item will be added to your cart with quantity tracking

### Managing Cart
- **Remove item**: Click "(remove)" next to any item
- **Clear cart**: Click "Clear my cart" at top of cart
- **View cart**: Always visible below products list

### Session Behavior
- Cart persists through page refreshes
- New browser tabs start with empty cart
- Closing tab clears all cart data

## Testing

### Expected Behavior
- Add multiple items → quantities should increment
- Refresh page → cart should maintain state
- Open new tab → cart should be empty
- Close/reopen browser → cart should be empty