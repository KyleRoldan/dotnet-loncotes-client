import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import PatronsList from "./components/tickets/PatronsList";
import PatronDetails from "./components/tickets/PatronDetails";
import UpdatePatron from "./components/tickets/UpdatePatron";
import CheckoutList from "./components/tickets/CheckoutsLIst";
import BrowseList from "./components/tickets/BrowseList";
import OverdueCheckouts from "./components/OverdueCheckouts";
import CreateCheckoutForm from "./components/tickets/AddCheckout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
          <Route path="available">
          <Route index element={<BrowseList />} />
          <Route path="addCheckout" element={<CreateCheckoutForm />} />
          </Route>
          </Route>
          <Route path="patrons">
          <Route index element={<PatronsList />} />
          <Route path=":id" element={<PatronDetails />} />
          <Route path="update/:id" element={<UpdatePatron />} />
          </Route>
          <Route path="checkouts" element={<CheckoutList />}></Route>
          <Route path="checkouts/overdue" element={<OverdueCheckouts />}></Route>









      
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
