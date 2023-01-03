import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import FormVisit from "./components/FormVisit";
import EditVisit from "./components/EditVisit";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CardError from "./components/CardError";
import Panel from "./pages/Panel";
import DetailVisit from "./pages/DetailVisit";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/detailVisit/:id" element={<DetailVisit />} />
        <Route path="/register" element={<Register />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/newvisit" element={<FormVisit />} />
        <Route path="/editvisit/:id" element={<EditVisit />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<CardError />} />
        {/* <Route path="/register" element={<Register />} />
         <Route
        // element={
        //   <ProtectedRoutes
        //     protectedEndpoints={['/backoffice']}
        //     redirectPath="/login"
        //   >
        //     <ClientLayout />
        //   </ProtectedRoutes>
        // }
        > 
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/newvisit" element={<FormVisit />} />
          <Route path="/backoffice" element={<BackofficeContainer />} />
        {/* </Route> *
        */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
