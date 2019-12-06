import { Navbar, Menubar } from "..";
export default ({ children }) => (
  <div>
    <Navbar></Navbar>
    <Menubar></Menubar>
    {children}
  </div>
);
