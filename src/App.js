import { MyProvider } from './Myprovider/MyProvider';
import MyRoutes from './routes/MyRoutes';

function App() {
  return (
    <MyProvider>

    <div className="App">
        <MyRoutes/>
    </div>
  </MyProvider>
  );
}

export default App;
