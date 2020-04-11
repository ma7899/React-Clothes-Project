import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import './App.css';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component.jsx';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

import HomePage from './Pages/homepage/homepage.component';



 class App extends React.Component {
   constructor(){
     super();
     this.state= {
       currentUser:null
     }
   }


   unsubscribeFromAuth = null

   componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({currentUser:userAuth});
     });
   }
  
   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }

  render(){
    return(
      <div>
      <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignUp}/>
          </Switch>
      </div>
    );
  }

}

export default App;