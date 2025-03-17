# React Router Project Documentation

## Table of Contents

1. Introduction
2. Installation
3. Folder Structure
4. Routing Setup
5. Components & Pages
6. Customization
7. Deployment
8. Seller Customization
9. Support

---

## 1. Introduction

This React project is built with React Router for seamless navigation, Tailwind CSS for styling, and various libraries to enhance user experience. It is designed for easy customization and scalability.

---

## 2. Installation

### Prerequisites:

Ensure you have the following installed:

- Node.js (latest LTS version recommended)
- npm or yarn

### Steps:

1. Extract the package.
2. Open a terminal and navigate to the project folder:
   ```sh
   cd BazPay
   ```
3. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
4. Start the development server:
   ```sh
   npm start  # or yarn start
   ```
   The project will run at `http://localhost:3000/` by default.

---

## 3. Folder Structure

```
/BazPay/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── animation/
│   ├── components/
│   ├── context/
│   ├── layout/
│   ├── pages/
│   ├── routers/
│   │   ├── Loader.js
│   │   ├── Router.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
```

---

## 4. Routing Setup

The project uses React Router for page navigation. Routes are defined in `src/routers/Router.jsx`:

```js
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Error from '../pages/Error';
import Home from '../pages/Home';
import HomeV2 from '../pages/HomeV2';
import Features from '../pages/Features';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';
import Licenses from '../pages/Licenses';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfServices from '../pages/TermsOfServices';
import PricingDetails, { LoadSinglePricingData } from '../pages/PricingDetails';
import BlogDetails, { loadSingleBlogData } from '../pages/BlogDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Main layout wrapper
    errorElement: <Error />, // Fallback error page
    children: [
      { path: '/', element: <Home /> },
      { path: 'homev2', element: <HomeV2 /> },
      { path: 'features', element: <Features /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'contact', element: <Contact /> },
      { path: 'licenses', element: <Licenses /> },
      { path: 'privacypolicy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <TermsOfServices /> },
      {
        path: 'pricing/:id',
        element: <PricingDetails />, 
        loader: LoadSinglePricingData // Using the reusable loader
      },
      {
        path: 'blog/:id',
        element: <BlogDetails />,
        loader: loadSingleBlogData 
      }
    ]
  }
]);

export default router;
```

---

## 5. Components & Pages

- **Components:** Located in `src/components/`, these are reusable UI elements.
- **Pages:** Found in `src/pages/`, these represent individual sections of the website.

Example `Home.js` page:

```js
import React from 'react';

const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
    </div>
  );
};

export default Home;
```

---

## 6. Customization

- **Theme & Styles:** Modify Tailwind CSS styles in `src/styles/`.
- **Navigation:** Edit `src/routers/Router.jsx` to add/remove routes.
- **Assets:** Replace images and icons in `src/assets/`.
- **Configuration:** Update `src/config.js` for global settings.

---

## 7. Deployment

If the user wants to use the ready-to-production build, follow these steps to deploy:

1. **Run the production build:**
   ```sh
   npm run build  # or yarn build
   ```
2. **Deploy the **``** folder to a server:**
   - **Netlify:** Drag and drop the `dist/` folder into the Netlify dashboard.
   - **Vercel:** Run `vercel deploy` in the terminal inside the `dist/` directory.
   - **FTP/SFTP:** Upload the contents of `dist/` to your web hosting provider.
   - **cPanel:** Use the File Manager to upload and extract the `dist/` folder, then point your domain to the `index.html` file.

---

## 8. Seller Customization

If you are reselling this theme on ThemeForest or another marketplace, consider the following:

- Add unique branding by modifying global styles in `tailwind.config.js`.
- Customize navigation and footer elements to match your brand.
- Modify `README.md` with your support and documentation links.
- Ensure all assets comply with licensing rules.

---

## 9. Support

For any issues, feel free to contact support via:

- Email: [contact.uibazar@gmail.com](mailto\:contact.uibazar@gmail.com)
- Documentation: [your-website.com/docs]

Thank you for choosing our React Router theme!

