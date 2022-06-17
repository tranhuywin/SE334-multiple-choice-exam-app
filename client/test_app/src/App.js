import React, { Component, Suspense } from "react";
import './App.css';

import { Route, Routes} from 'react-router-dom';


const User = React.lazy(() => import("./pages/user.jsx"));
const SignIn = React.lazy(() => import("./pages/header/sign/sign-in.jsx"));
const SignUp = React.lazy(() => import("./pages/header/sign/sign-up.jsx"));
const Home = React.lazy(() => import("./components/home.jsx"));
const Exam = React.lazy(() => import("./components/exam/exam.jsx"));
const SubjectsList = React.lazy(() => import("./components/exam/subjects-list.jsx"));
const Test = React.lazy(() => import("./components/exam/tests.jsx"));
const ManualDocument = React.lazy(() => import("./components/manual-document.jsx"));
const Create = React.lazy(() => import("./components/create.jsx"));
const Results = React.lazy(() => import("./components/results.jsx"));

class App extends Component {
  render() {
    return(
      <React.StrictMode>
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
          <Routes>
              <Route path ="/" element={<SignIn/>}/>
              <Route path ="/signup" element={<SignUp/>}/>
              <Route path="/user" element={<User/>}>
                  <Route path = "/user" element={<Home/>}/>
                  <Route path = "/user/exam" element={<Exam/>}/>
                  <Route path = "/user/manual-document" element={<ManualDocument/>}/>
                  <Route path = "/user/create" element={<Create/>}/>
                  <Route path = "/user/results" element={<Results/>}/>
                  <Route path = "/user/exam/:name" element={<SubjectsList/>}/>
                  <Route path = "/user/exam/test" element={<Test/>}/>
              </Route>
          </Routes>
        </Suspense>
      </React.StrictMode>
    );
  }
}

export default App;
