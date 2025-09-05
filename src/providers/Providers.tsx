import { ToastContainer } from "react-toastify";



export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ToastContainer position="top-right" closeButton   autoClose={2000} />
      {children}
    </>
  );
}
