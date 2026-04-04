# financeDashboard

# 💰 Finance Dashboard

## 📌 Overview

A responsive and interactive finance dashboard to track transactions, visualize spending patterns, and simulate role-based user interactions.
Built with a focus on clean UI, modular architecture, and scalable state management.

---

## 🚀 Tech Stack

* **Frontend:** React
* **Styling:** Tailwind CSS
* **State Management:** Zustand
* **Charts:** Recharts

---

## ✨ Features

### 📊 Dashboard Overview

* Summary cards (Total Balance, Income, Expenses)
* Time-based visualization (Line Chart)
* Category-based visualization (Pie Chart)

---

### 📋 Transactions Management

* View transactions with:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)

* Advanced features:

  * 🔍 Search (category-based)
  * 🎯 Filter (income / expense)
  * ↕️ Sorting (date & amount)
  * 📄 Pagination
  * 🗑️ Delete with confirmation

---

### ➕ Add / Edit Transactions

* Modal-based form (modern UX)
* Add new transactions
* Edit existing transactions (pre-filled form)
* Real-time UI updates using Zustand

---

### 👤 Role-Based UI

* **Viewer:** Read-only access
* **Admin:** Add, edit, delete transactions
* Role switcher with visual badge
* Conditional rendering based on role

---

### 🧠 Insights Section

* Highest spending category
* Monthly comparison
* Derived financial observations

---

### 🎨 UI / UX Enhancements

* Responsive design (mobile + desktop)
* Clean card-based layout
* Hover states & transitions
* Empty state handling
* Modal interactions

---

### 🌙 Dark Mode

* Custom theme using CSS variables
* Consistent UI across components
* Fixed hover and contrast issues

---

### 💾 Data Persistence

* Local storage integration
* Data persists across refresh

---

## 🧠 Approach

* Used **Zustand** for lightweight global state management
* Implemented **derived state** for filtering, sorting, and calculations
* Built reusable and modular components
* Focused on real-world UX patterns (modals, pagination, role-based actions)

---

## 📁 Folder Structure

```id="folder-structure"
src/
├── assets/                # Static assets
├── components/
│   ├── cards/             # Dashboard summary cards
│   │   └── SummaryCard.jsx
│   │
│   ├── charts/            # Chart components
│   │   ├── LineChart.jsx
│   │   └── PieChart.jsx
│   │
│   ├── common/            # Shared UI components
│   │   ├── Navbar.jsx
│   │   └── RoleSwitcher.jsx
│   │
│   ├── table/             # Transaction-related components
│   │   ├── Addtransaction.jsx
│   │   ├── AddtransactionPopUpModel.jsx
│   │   └── TransactionsTable.jsx
│   │
│   └── Insights.jsx       # Insights section
│
├── data/
│   └── mockData.js        # Mock transaction data
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   └── NotFound.jsx
│
├── store/
│   └── useStore.js        # Zustand store
│
├── utils/                 # Utility functions (if any)
```

---

## ⚙️ Setup & Run

```bash id="setup-run"
npm install
npm run dev
```

---

## 🎯 Key Highlights

* Modular and scalable folder structure
* Clean separation of concerns
* Real-world dashboard features
* Efficient state management with Zustand
* Enhanced UX with modals and interactions

---

## 🧪 Future Improvements

* Export transactions (CSV/JSON)
* API integration
* Custom dropdown (Headless UI / Radix)
* Advanced analytics and insights

---

## 👨‍💻 Author

Ranjeet Yadav
