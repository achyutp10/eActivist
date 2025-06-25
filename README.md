# eActivist

**eActivist** is a full-stack web application that enables users to create, manage, and attend community-driven activities. Built with **ASP.NET Core Web API** and **React**, it provides a real-time, responsive, and intuitive interface for event-based collaboration.

---

## 🔥 Features

- ✅ **User Authentication** – Secure login/register using ASP.NET Core Identity  
- 📝 **Activity Management** – Create, edit, and delete community events  
- 🙋 **RSVP System** – Join and leave events with one click
- 💬 **Real-Time Comments** – Chat-like comment system powered by SignalR 
- 🔄 **Infinite Scroll** – Paginated event listing with smooth UX  
- 👤 **User Profiles** – View other users and their joined events  
- ⚡ **Real-Time Updates** – Optional SignalR support for instant activity changes  
- 📱 **Mobile Responsive** – Built with Material UI (MUI) for a sleek UI  

---

## ⚙️ Tech Stack

| Layer       | Technologies                                         |
|-------------|------------------------------------------------------|
| **Backend** | ASP.NET Core Web API, Entity Framework Core, SQLite |
| **Frontend**| React, TypeScript, MUI, MobX, React Query            |
| **Auth**    | ASP.NET Core Identity                                |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/achyutp10/eActivist.git
```

### 2. Setup Backend (API)

```bash
cd eActivist
cd API
dotnet ef database update    # Apply migrations
dotnet run                   # Start the Web API
```

### 3. Setup Frontend (React)

```bash
cd client
npm install
npm run dev
```

