
import './App.css';
import { Posts } from './Posts';
import { LoadingPosts } from './LoadingPosts';

function App() {
  return (
    <div className="container p-2">
       {/* <LoadingPosts />*/}
       <Posts /> 
    </div>
  );
}

export default App;
