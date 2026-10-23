import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
const IndustryExperience = lazy(() => import('./pages/IndustryExperience'))
const LonghornRocketry = lazy(() => import('./pages/LonghornRocketry'))
const Research = lazy(() => import('./pages/Research'))
const Skills = lazy(() => import('./pages/Skills'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))

// URLs from the previous version of the site, so old links still land somewhere useful
const legacyRedirects = [
  ['/experience', '/industry'],
  ['/projects', '/rocketry'],
  ['/education', '/skills'],
  ['/reference', '/'],
  ['/contact', '/'],
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Pages other than Home are lazy-loaded; Suspense sits inside the transition so animations still run
function PT({ children }) {
  return <PageTransition><Suspense fallback={null}>{children}</Suspense></PageTransition>
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                               element={<PT><Home /></PT>} />
        <Route path="/industry"                       element={<PT><IndustryExperience /></PT>} />
        <Route path="/industry/impress"               element={<PT><ProjectPage slug="impress" /></PT>} />
        <Route path="/industry/wavedrone"             element={<PT><ProjectPage slug="wavedrone" /></PT>} />
        <Route path="/industry/dzyne-uav"             element={<PT><ProjectPage slug="dzyne-uav" /></PT>} />
        <Route path="/industry/moontower-daq"         element={<PT><ProjectPage slug="moontower-daq" /></PT>} />
        <Route path="/industry/modular-fpv-uas"       element={<PT><ProjectPage slug="modular-fpv-uas" /></PT>} />
        <Route path="/industry/endotracheal-tube"     element={<PT><ProjectPage slug="endotracheal-tube" /></PT>} />
        <Route path="/rocketry"                       element={<PT><LonghornRocketry /></PT>} />
        <Route path="/rocketry/rocket-v9"             element={<PT><ProjectPage slug="rocket-v9" /></PT>} />
        <Route path="/rocketry/tvc-flight-computer"   element={<PT><ProjectPage slug="tvc-flight-computer" /></PT>} />
        <Route path="/rocketry/airbrakes"             element={<PT><ProjectPage slug="airbrakes" /></PT>} />
        <Route path="/rocketry/fin-tabs"              element={<PT><ProjectPage slug="fin-tabs" /></PT>} />
        <Route path="/rocketry/thrust-vector-control" element={<PT><ProjectPage slug="thrust-vector-control" /></PT>} />
        <Route path="/rocketry/motor-test-stand"      element={<PT><ProjectPage slug="motor-test-stand" /></PT>} />
        <Route path="/research"                       element={<PT><Research /></PT>} />
        <Route path="/research/atomic-strain"         element={<PT><ProjectPage slug="atomic-strain" /></PT>} />
        <Route path="/research/hunch-medical-devices" element={<PT><ProjectPage slug="hunch-medical-devices" /></PT>} />
        <Route path="/research/hunch-lunar-wheels"    element={<PT><ProjectPage slug="hunch-lunar-wheels" /></PT>} />
        <Route path="/skills"                         element={<PT><Skills /></PT>} />
        {legacyRedirects.map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  )
}
