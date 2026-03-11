import { Router, Route } from 'preact-router'
import { ThemeProvider } from './theme'
import { Landing } from './pages/Landing'
import { Projects } from './pages/Projects'
import { Header } from './components/Header'
import './app.css'

/**
 * Root component: theme provider, header, and router for Landing and Projects.
 */
export function App() {
  return (
    <ThemeProvider>
      <div class="app">
        <Header />
        <main class="app__main">
          <Router>
            <Route path="/" component={Landing} />
            <Route path="/projects" component={Projects} />
          </Router>
        </main>
      </div>
    </ThemeProvider>
  );
}
