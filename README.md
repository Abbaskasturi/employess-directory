# 💼 Employee Directory UI

A **responsive and interactive Employee Directory web interface** built using **HTML, CSS, JavaScript, and Freemarker templating**.  
This project simulates **employee management operations on the frontend without a backend or API**.

---

## ⚙️ Setup & Run Instructions

### 🔹 Option 1: Run with Live Server (For Development)

1. Clone or download this repository.
2. Open the project in **VS Code**.
3. Right-click `index.html` → click **“Open with Live Server”**.
4. All changes are handled **in-memory with mock data**.

### 🔹 Option 2: Serve Freemarker Template via Java (Optional)

- Ensure your **Java backend** is configured to serve templates from `/resources/templates`.
- Map `employee.ftlh` or `index.ftlh` through **Spring Boot** or any Java-based server with Freemarker support.

---

## 📁 Project Structure

employee-directory/
├── index.html
├── template/
│ └── index.ftlh
├── src/
│ └── main/
│ └── resources/
│ ├── static/
│ │ ├── css/
│ │ │ └── styles.css
│ │ └── js/
│ │ ├── data.js
│ │ └── app.js
│ └── templates/
│ └── index.ftlh
├── README.md


---

## ✨ Features

- ✅ **Add/Edit/Delete employees**
- ✅ **Live search** by name/email
- ✅ **Sort** by First Name or Department
- ✅ **Filter** employees by First Name / Department / Role
- ✅ **Pagination** (10, 25, 50, 100 per page)
- ✅ **Freemarker integration** for dynamic HTML rendering
- ✅ **Responsive design** (mobile, tablet, desktop)

---

## 💡 Reflection

### ⚠️ Challenges Faced

- Ensuring **real-time updates** (edit/delete/search/filter) work seamlessly using only in-memory data.
- Making the app **fully responsive** across screen sizes.
- Integrating **Freemarker logic** into a static frontend-focused project without a backend engine.

### 🔮 What I’d Improve If Given More Time

- Add **proper routing** (e.g., separate pages/views using JS).
- Integrate **local storage or IndexedDB** for data persistence.
- Improve **UX/UI with animations and transitions**.
- Add **unit tests** for modular JS logic.

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (Vanilla, Flexbox, Media Queries)
- **JavaScript (ES6)**
- **Freemarker**

---

## 📨 Submission Info

✅ This project **meets all the assignment requirements**.  
✅ All functionality is **tested and working without backend dependencies**.  
✅ Designed to **simulate a clean and complete employee directory system**.

---

## 📎 License

This project is licensed for **educational and personal use**.
