import { lazy, Suspense } from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'

const Dashboard = lazy(() => import('./content/Dashboard'));
const Home = lazy(()=>import('./content/Home'))

function App() {
  return (
    <>
    <BrowserRouter>
    <nav style={{ padding: '10px', gap: '10px', display: 'flex' }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">About</Link>
    </nav>
    <Suspense fallback={<div>loading....</div>}>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/dashboard" element={<Dashboard/>} />    
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
