import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
  // Route,
  // Link,
  // NavLink,
} from 'react-router-dom';
import routes from '../routes';
import PrivateRoute from '../services/PrivateRoute';
import PublicRoute from '../services/PublicRoute';
import Header from './header/Header';
import Footer from './Footer/Footer';

// import Modal from "../components/modal/Modal";
// import TotalCostsSumAndIncomeSum from './totalCostsSumAndIncomeSum/TotalCostsSumAndIncomeSum';
// import OperationList from './operationList/OperationList';
// import ContactsPage from '../Pages/teamPage/TeamPage';
// import HomePage from '../Pages/homePage/HomePage';
// import IncomeList from '../incomeList/IncomeList';
// import OperationForm from './addOperationForm/AddOperationForm';
// import BallanceRedactor from "./operationsHeader/BallanceRedactor/BallanceRedactor";
// import CategoriesFilter from "./categoriesFilter/CategoriesFilter";
// import Chart from '../components/chart/Chart';
// import GoToMono from './categoriesFilter/monoBank/GoToMono';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* <TotalCostsSumAndIncomeSum /> */}
        <Switch>
          {routes.map((route) => {
            return route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute
                key={route.label}
                {...route}
                restricted={route.restricted}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Suspense>
      {/* <GoToMono /> */}
      {/* <OperationForm /> */}
      {/* <BallanceRedactor/>
      <OperationForm />
      <OperationList />
      {/* <IncomeList /> */}
      {/* <CategoriesFilter/> */}
      {/* <Chart /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
