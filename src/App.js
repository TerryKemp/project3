import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';


const API_KEY = 'cad2d6dddccc9804f43e7c3af9e56f52';


class App extends React.Component {
    render(){
        return (
            <div>
                <Titles />
                <Form />
                <Weather />
            </div>
        )
    }
}

export default App





// class App extends Component {
//   render () {
//     return (
//       <div className='App'>
//         <header className='App-header'>
//           <img src='http://www.coresponsibility.com/wp-content/uploads/2016/06/air-pollution_cropped.jpg' className='App-logo' alt='logo' />
//           <h1 className='App-title'>HEIR POLLUTION</h1>
//         </header>
//         <p className='App-intro'>
//                         WELCOME TO HEIR POLLUTION.WHERE YOU HAVE INHERITED THE PROBLEMS OF PREVIOUS GENERATIONS < /p>
//       </div>
//     )
//   }
// }

// export default App
