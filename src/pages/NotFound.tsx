import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#dfdcd3]">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold font-['Montserrat'] text-[#1f3759]">404</h1>
        <p className="mb-4 text-xl font-['Anek_Kannada'] font-semibold text-[#1f3759]/80">Oops! Page not found</p>
        <a href="/" className="text-[#960f1e] font-['Montserrat'] font-semibold underline hover:text-[#960f1e]/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
