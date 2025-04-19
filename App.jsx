import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import AICourse from './AICourse';
import CloudCourse from './CloudCourse';
import CyberCourse from './CyberCourse';
import WebCourse from './WebCourse';
import CourseDetails from './CourseDetails';
import EnrollmentPage from './EnrollmentPage';
import AISyllabus from './AISyllabus';
import CloudSyllabus from './CloudSyllabus';
import CyberSyllabus from './CyberSyllabus';
import WebSyllabus from './WebSyllabus';
import SmartLearningPage from './SmartLearningPage';
import Profile from './Profile';
import RegistrationPage from './RegistrationPage';

function ProtectedRoute({ element }) {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SmartLearningPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/course/ai" element={<AICourse />} />
        <Route path="/course/cloud" element={<CloudCourse />} />
        <Route path="/course/cybersecurity" element={<CyberCourse />} />
        <Route path="/course/web" element={<WebCourse />} />
        <Route path="/course/:courseId" element={<ProtectedRoute element={<CourseDetails />} />} />
        <Route path="/enroll/:courseId" element={<EnrollmentPage />} />
        <Route path="/course/ai/syllabus" element={<AISyllabus />} />
        <Route path="/course/cloud/syllabus" element={<CloudSyllabus />} />
        <Route path="/course/cybersecurity/syllabus" element={<CyberSyllabus />} />
        <Route path="/course/web/syllabus" element={<WebSyllabus />} />
      </Routes>
    </Router>
  );
}

export default App;