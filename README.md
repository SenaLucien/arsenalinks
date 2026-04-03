# Arsena Bio - Modern Linktree Generator

![Arsena Bio](https://img.shields.io/badge/Arsena-Bio-ff0055?style=for-the-badge)

A modern, customizable Linktree alternative with dark aesthetic themes, custom backgrounds, and automatic icon detection.

## 🎯 Features

- ✅ **User Authentication** - Secure JWT + bcrypt password hashing
- ✅ **Custom Themes** - Dark Neon, Clean Minimal, Gold Luxury
- ✅ **Custom Backgrounds** - Upload or use image URLs
- ✅ **Auto Icon Detection** - 15+ platforms (YouTube, Instagram, TikTok, etc.)
- ✅ **Drag & Drop Links** - Reorder your links easily
- ✅ **Live Preview** - See changes in real-time
- ✅ **Download HTML** - Export your bio as standalone HTML
- ✅ **Responsive Design** - Mobile-first approach

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- MongoDB (local or MongoDB Atlas)

### Installation

1. Clone the repository
```bash
git clone <repo-url>
cd arsena-bio
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables

Create `.env.local` file:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/arsena-bio
JWT_SECRET=your-super-secret-jwt-key-change-this
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🗿

## 📁 Project Structure

```
arsena-bio/
├── app/
│   ├── api/              # API routes
│   │   ├── login/
│   │   ├── register/
│   │   └── user/[username]/
│   ├── dashboard/        # Protected dashboard
│   ├── login/           # Login page
│   ├── register/        # Register page
│   ├── [username]/      # Public profile pages
│   └── page.js          # Landing page
├── components/          # React components
├── lib/                 # Utilities (mongodb, jwt)
├── models/             # Mongoose models
├── utils/              # Helper functions
└── public/             # Static assets
```

## 🎨 Themes

### Dark Neon
Black background with red/pink gradients and glow effects

### Clean Minimal  
White/gray minimal design for professional look

### Gold Luxury
Black background with golden accents and luxury vibes

## 🔐 Security Features

- Password hashing with bcrypt
- JWT authentication with 7-day expiry
- Protected API routes
- Input validation
- Secure cookie storage

## 🌐 API Endpoints

### Public
- `GET /api/user/[username]` - Get user profile

### Protected (requires JWT)
- `POST /api/register` - Register new user
- `POST /api/login` - Login user
- `PUT /api/user/[username]` - Update profile
- `DELETE /api/user/[username]` - Delete account

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### MongoDB Atlas Setup

1. Create cluster at [mongodb.com](https://mongodb.com)
2. Get connection string
3. Add to `.env.local`

## 📝 TODO

- [ ] Dashboard with full edit capabilities
- [ ] Drag & drop link reordering
- [ ] Image upload functionality
- [ ] HTML export feature
- [ ] Click statistics
- [ ] Custom domain support

## 🗿 Built With

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **React Icons** - Icon library

## 👨‍💻 Author

**Arsena** (Arsena Luciendra / Sena DeLuca)

Built with dark aesthetic vibes 🗿

## 📄 License

MIT License - do whatever you want
