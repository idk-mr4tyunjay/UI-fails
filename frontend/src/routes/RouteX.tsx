import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure correct imports
import Home from '../pages/Home'; // Import Home properly as a component
import PopupHell from '../pages/UI/PopupHell';
import ContactUs from '../pages/UI/ContactUs';

// Define the type for each route object
type RouteConfig = {
  route: string;
  element: JSX.Element;
};

const RouteX: React.FC = () => {
  // Define routes with type annotations
  const routes: RouteConfig[] = [
    {
      route: '/',
      element: <Home />,
    },
    {
      route: '/ui/popuphell',
      element: <PopupHell />,
    },
    {
      route: '/ui/contactus',
      element: <ContactUs />,
    },
  ];

  return (
    <Routes>
      {routes.map((item, i) => (
        <Route key={i} path={item.route} element={item.element} />
      ))}
    </Routes>
  );
};

export default RouteX;
