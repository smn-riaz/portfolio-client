export const projectsInfo = [
  {
    id: "project101",
    name: "MediCommerce",
    description:"MediCommerce is a full-stack e-commerce platform for purchasing medicines online. Developed using the MERN stack , it offers a seamless experience for both customers and administrators.",
    features:[
      "Users can register and log in securely with JWT-based authentication.",
      "Browse and search for medicines products.",
      "Add products to the cart and place orders.",
      "User get order status throw email",
      "Specific medicines need to upload prescription",
      "Secure online payments integrated with SSL Commerze.",
      "Admins can manage users, view orders, and monitor site activity.",
      "Admins can manage products by adding, updating, or removing items.",
      "Admins can process and update the status of customer orders."
    ],
    github: {
      frontend: "https://github.com/smn-riaz/medimart-6-mediCommerce-client",
      backend: "https://github.com/smn-riaz/medimart-6-mediCommerce-server",
    },
    live: {
      frontend: "https://medicommerce-client.vercel.app",
      backend: "https://medimart-server-three.vercel.app",
    },
    images: {
      fullScreen: "https://i.ibb.co.com/LzzG4yyP/full-Screen.png",
      topBanner: "https://i.ibb.co.com/W4gKHDv1/topbannar.png",
      products: "https://i.ibb.co.com/x8LhLtK9/products.png",
      login: "https://i.ibb.co.com/zHJ2ZYQL/register.png",

      dashboard: [
        {
          title: "Create Product",
          img: "https://i.ibb.co.com/R4p5D8jH/createproduct.png",
          features: ["Admin Can crate product","Multiple images can be uploaded"],
        },
        {
          title: "All Orders",
          img: "https://i.ibb.co.com/bj27DNyT/orders.png",
          features: ["Admin can manage orders"],
        },
        {
          title: "Dashboard",
          img: "https://i.ibb.co.com/39KW8Q9r/dashboard.png",
          features: ["Admin can see overall summary of the system"],
        },
        {
          title: "All Medicines",
          img: "https://i.ibb.co.com/rGKKyn3x/all-medicines.png",
          features: ["Admin can see all the medicines","update, delete medicines."],
        },
      ],
      mobile: ["https://i.ibb.co.com/8DMvntNK/mobile.png"],
    },
    technologies: [
      "Next js",
      "Typescript",
      "Redux",
      "Tailwind CSS",
      "Node js",
      "Express js",
      "MongoDB",
      "Bcrypt",
      "JWT",
      "Nodemailer",
      "Framer Motion",
    ],
    challenges: ["Implementing secure and persistent authentication with JWT.",
  "Integrating the SSLCommerze payment gateway for seamless transactions.",
  "Ensuring real-time product availability and stock management.",
  "Handling complex product search and filtering functionality.",
  "Designing a responsive and user-friendly interface across devices.",
  "Maintaining data consistency between frontend and backend."],
    futurePlans: [
      "Add realtime-chat option using socket.io",
      "Add order tracking and delivery status updates for customers.",
  "Introduce product reviews and ratings for better user feedback.",
  "Implement discount codes and promotions for customer engagement.",
  "Add a recommendation system based on user preferences and purchase history.",
  "Expand the product catalog to include additional healthcare items.",
    ],
  },
  {
    id: "project102",
    name: "CycleHouse",
    description:"Cycle House is an online bicycle store where users can sign up, browse bikes, place orders, and make secure payments. Admins can manage bikes, users, and orders from a dashboard.",
    features: [
      "Users can register, log in, and browse bicycles.",
      "Search and filter bicycles by name, category, and price.",
      "View detailed information about each bicycle.",
      "Place orders and pay securely using SSLCOMMERZ.",
      "Customers can view their orders in a dashboard.",
      "Admins can manage bicycles, users, and orders."
    ],
    github: {
      frontend: "https://github.com/smn-riaz/biCycle-store-frontend-4",
      backend: "https://github.com/smn-riaz/biCycle-store-backend-4",
    },
    live: {
      frontend: "https://bicycle-store-assignment4-client.vercel.app",
      backend: "https://bicycle-store-assignment4-backend.vercel.app",
    },
    images: {
      fullScreen: "https://i.ibb.co.com/ns3XjdTY/fullPage.png",
      topBanner: "https://i.ibb.co.com/jZhTv5Vq/topbanner23.png",
      products: "https://i.ibb.co.com/nMXFVKZB/cycles.png",
      login: "https://i.ibb.co.com/Hf832FWX/login.png",

      dashboard: [
        {
          title: "All Users",
          img: "https://i.ibb.co.com/Mx6KJPhh/user33.png",
          features: [""],
        },
        {
          title: "All Orders",
          img: "https://i.ibb.co.com/sdZvRTFW/orders33.png",
          features: [""],
        },
        {
          title: "Dashboard",
          img: "https://i.ibb.co.com/6dmCnhb/dashboar33.png",
          features: [""],
        },
        {
          title: "All Products",
          img: "https://i.ibb.co.com/8gf47sc2/cycles33.png",
          features: [""],
        },
      ],
      mobile: ["https://i.ibb.co.com/7JQRPcHH/mobile33.png"],
    },
    technologies: [
      "React js",
      "Typescript",
      "Redux",
      "Tailwind CSS",
      "Node js",
      "Express js",
      "MongoDB",
      "Bcrypt",
      "JWT",
    ],
    challenges: ["Implementing secure authentication and role-based access.",
      "Configuring Redux Toolkit with persistent state using redux-persist.",
  "Handling real-time search and filtering efficiently.",
  "Managing product stock and order data consistently.",
  "Designing a clean, responsive UI for all devices."],
    futurePlans: [ "Add product reviews and ratings from customers.",
      "Implement realtime order tracking and delivery updates.",
      "Introduce discount codes and promotional offers.",
      "Enable add to like and save-for-later features.",
      "Add real-time chat support for customer queries."],
  },
  {
    id: "project103",
    name: "MediHelp",
    description:"A hospital management web application developed using the MERN stack. It is designed to streamline administrative and clinical operations within a healthcare facility.",
    features:[
      "People can register and sign in using their email and password.",
      "Registered users can book appointments by selecting a doctor and can also admit themselves into the hospital.",
      "The platform offers user-specific dashboards with tailored features for both patients and staff.",
      "A maximum of 3 patients can book appointments with the same doctor per day.",
      "Staff members can view and manage all patient details, including appointments and admission information.",
      "Information about doctors and available services is also accessible."
    ],
    github: {
      frontend: "https://github.com/smn-riaz/mediHelp-hospital-webapp",
      backend: "https://github.com/smn-riaz/medihelp-server",
    },
    live: {
      frontend: "https://medihelp-5c899.web.app",
      backend: "https://medihelp-server.vercel.app",
    },
    images: {
      fullScreen: "https://i.ibb.co.com/Fq534s1v/screencapture-medihelp-5c899-web-app-2025-05-03-09-33-37.png",
      topBanner: "https://i.ibb.co.com/W4gKHDv1/topbannar.png",
      products: "https://i.ibb.co.com/JwctDq2t/screencapture-medihelp-5c899-web-app-doctors-2025-05-03-09-35-12.png",
      login: "https://i.ibb.co.com/1YnNjL15/screencapture-medihelp-5c899-web-app-login-2025-05-03-09-34-39.png",

      dashboard: [
        {
          title: "Profile",
          img: "https://i.ibb.co.com/Q7LBD2HW/dash55.png",
          features: [""],
        }
      ],
      mobile: ["https://i.ibb.co.com/yc89XWqM/screencapture-medihelp-5c899-web-app-2025-05-03-09-34-22.png"],
    },
    technologies: [
      "React js",
      "Bootstrap",
      "Node js",
      "Express js",
      "MongoDB",
      "Firebase"
    ],
    challenges: [
      "Ensuring secure and scalable user authentication for sensitive medical data.",
      "Handling real-time appointment availability and preventing booking conflicts.",
      "Designing role-based access control for patients and staff.",
      "Providing a responsive and user-friendly UI for all user types.",
      "Managing asynchronous communication between frontend and backend, especially for bookings and admissions."
    ],
    futurePlans: [ "Integrate online payment gateways for appointment and admission fees.",
      "Add a real-time chat feature between patients and doctors.",
      "Implement push/email notifications for appointment reminders.",
      "Introduce analytics dashboards for hospital management insights."],
  },
  {
    id: "project104",
    name: "Cosmetics",
    description:"Cosmetics E-commerce is an online store for browsing and purchasing cosmetics. Users can securely register, browse products, view details, add items to the cart. Admins can manage products, categories, and user accounts.",
    features:[
      "Users can register and log in securely.",
  "Browse and search for cosmetics by category",
  "View detailed product pages with descriptions, ingredients, and images.",
  "Add products to the cart and proceed to checkout.",
  "Admin dashboard to manage products, categories, and user roles."
    ],
    github: {
      frontend: "https://github.com/smn-riaz/cosmetics-ecommerce-client",
      backend: "https://github.com/smn-riaz/cosmetics-ecommerce-server",
    },
    live: {
      frontend: "https://cosmetics-ecommerce.vercel.app",
      backend: "https://cosmetics-ecommerce-server.onrender.com",
    },
    images: {
      fullScreen: "https://i.ibb.co.com/60kjgyB1/fullpage66.png",
      topBanner: "https://i.ibb.co.com/MyVS7ZGx/to66.png",
      products: "",
      login: "https://i.ibb.co.com/G4ScWWfC/login66.png",

      dashboard: [
       
      ],
      mobile: ["https://i.ibb.co.com/TD4hqjcw/mobile66.png"],
    },
    technologies: [
      "React js",
      "Tailwind CSS",
      "Node js",
      "Express js",
      "MongoDB",
    ],
    challenges: [
     "Implementing secure authentication and role-based access control.",
  "Ensuring real-time product availability and stock management.",
  "Providing detailed product information, including ingredients and usage instructions.",
  "Designing a responsive and user-friendly interface across devices.",
  "Managing product variations (e.g., shades, sizes) efficiently."
    ],
    futurePlans: [ 
      "Add product reviews and ratings to enhance customer trust.",
  "Introduce discount codes and promotions for customer engagement.",
  "Expand the product catalog to include additional cosmetics and skincare items.",
  "Develop a mobile app to provide a more personalized shopping experience."
    ],
  },
];
