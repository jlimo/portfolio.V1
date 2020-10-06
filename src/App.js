import React from 'react';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import {
  About,
  Home,
  Stacks,
  Projects,
} from "./pages";
import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import customTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Navbar />
   <Router>
     <Switch>
       <Route exact path="/">        
           <Home />
       </Route>
       <Route path="/about">  
          <About />
       </Route>
       <Route path="/projects">
       <Projects />
       </Route>
       <Route path="/stacks">
       <Stacks />
       </Route>
     </Switch>
     <Footer />
   </Router>
   </ThemeProvider>
  );
}

export default App;


