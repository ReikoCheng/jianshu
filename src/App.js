import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';


function App() {
  return (
    <Provider store={store}>
       
         
         <BrowserRouter> 
         <div>
         <Header /> 

          <Routes>   
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/write" exact element={<Write />}></Route>
            <Route path="/detail/:id" exact element={<Detail />}></Route>
          </Routes> 
          </div> 
         </BrowserRouter>
                
      </Provider>
  );
}


// class App extends Component {
//   render(){
//     return (
//       <Provider store={store}>
//         <div>
//          <Header />
//          <BrowserRouter> 
//           <Routes>    
//             <Route path="/" exact element={Home}></Route>
//             <Route path="/detail" exact element={Detail}></Route>
//           </Routes> 
//          </BrowserRouter>
//         </div>         
//       </Provider>
//     );
//   }
// }

export default App;
