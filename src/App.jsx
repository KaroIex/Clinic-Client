import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ReceiptList from "./pages/ReceiptList";
import MakeVisit from "./pages/MakeVisit";
import VisitsList from "./pages/VisitsList";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import Cookies from 'js-cookie';


class App extends React.Component {

  state = { userName: "", token: ""} 
  setUserName = (newName) =>{
    this.setState({userName: newName})
  }

  render() { 
    return (
      <>
        <div className="App">
          <Router>
            <Header/>
            <div className="inner-content">
              <Sidebar userName={this.state.userName}/>
              <Switch>
                <Route path="/" exact component={() => <SignIn setUserName={this.setUserName}> </SignIn> } />
                <ProtectedRoute
                  path="/ReceiptList"
                  exact
                  component={() => <ReceiptList token={this.state.token}></ReceiptList>}
                />
                <ProtectedRoute
                  path="/MakeVisit"
                  exact
                  component={MakeVisit}
                />
                <ProtectedRoute
                  path="/VisitsList"
                  exact
                  component={VisitsList}
                />
                <ProtectedRoute
                  path="*"
                  component={() => "404 NOT FOUND. TRY A EXISTING  ADDRESS"}
                />
              </Switch>
            </div>
          </Router>
        </div>
      </>
    );
  }
}
export default App;
