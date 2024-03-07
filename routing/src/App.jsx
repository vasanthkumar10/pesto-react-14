import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// import { About } from "./pages/About";
// import { Home } from "./pages/Home";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <HashRouter>
      <h1>App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h2>Loading....</h2>}>
              <Home />
            </Suspense>
          }
        />
        {/* <Route path="/about/:name/:age" element={<About />} /> */}
        <Route
          path="/about/:profile/:id"
          element={
            <Suspense fallback={<h2>Loading....</h2>}>
              <About />
            </Suspense>
          }
        />
        <Route path="*" element={<h1>Page not found</h1>} />

        <Route
          path="/about/company"
          element={
            <>
              <About /> <h1>Company</h1>
            </>
          }
        />

        {/* <Route path="/admin" element={<h1>Admin</h1>} />
        <Route path="/admin/login" element={<h1>Admin login</h1>} />
        <Route path="/admin/signup" element={<h1>Admin signup</h1>} /> */}

        <Route path="/admin">
          <Route index element={<h1>Admin</h1>} />
          <Route path="login" element={<h1>Admin login page</h1>} />
          <Route path="signup" element={<h1>Admin signup page</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
