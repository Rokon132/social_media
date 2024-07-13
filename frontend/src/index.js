import React from 'react';
import ReactDOM from 'react-dom/client';





// import App from './App.jsx';
// import Car from './Car.jsx';

// import FootBall from './FootBall.jsx';

import RegisterForm from './RegisterForm';



// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";



// export default function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path="blogs" element={<Blogs />} />
//                     <Route path="contact" element={<Contact />} />
//                     <Route path="*" element={<NoPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RegisterForm />);