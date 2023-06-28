// import React from "react";

// // components

// import AdminNavbar from "./components/Navbars/AdminNavbar.js";
// import Sidebar from "./components/Sidebar/Sidebar.js";
// import HeaderStats from "./components/Headers/HeaderStats.js";
// import FooterAdmin from "./components/Footers/FooterAdmin.js";

// export default function Admin({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       {/* <Sidebar /> */}
//       <div className="relative md:ml-64 bg-blue-100">
//         <AdminNavbar />
//         {/* Header */}
//         <HeaderStats />
//         <div className="px-4 md:px-10 mx-auto w-full ">
//           {children}
//           {/* <FooterAdmin /> */}
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";
const VendorDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default VendorDashboardLayout;
