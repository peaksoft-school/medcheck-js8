import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
// import { DoctorDetailsPage } from './components/pages/DoctorDetailPage'
// import Service from './components/service/Service'
import CardApplication from './components/UI/card/CardApplication'
import { FeedbackSlider } from './components/feedback-slider/FeedbackSlider'
import { AboutClinicLayout } from './components/pages/AboutClinicLayout'
import AppRoutes from './routes/Routes'

function App() {
   return (
      <div>
         <BrowserRouter>
            <Header />
            <AboutClinicLayout />
            <FeedbackSlider />
            <CardApplication />
            {/* <Service /> */}
            {/* <DoctorDetailsPage /> */}
            <Footer />
         </BrowserRouter>
         <AppRoutes />
      </div>
   )
}
export default App
