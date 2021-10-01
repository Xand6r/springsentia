import NavBar from 'components/navbar';
import Landing from './components/landing';
import Process from './components/process';
import Values from './components/values';

export default function Home() {
  return (
    <div>
        {/* the navbar */}
        <NavBar />
        {/* the navbar */}

        {/* the landing page */}
        <Landing />
        {/* the landing page */}

        {/* the process page */}
        <Process />
        {/* the process page */}

        {/* the values page */}
        <Values />
        {/* the values page */}
    </div>
  )
}