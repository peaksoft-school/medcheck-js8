import { BrowserRouter } from 'react-router-dom'
import MyNotes from './layout/myNotes/MyNotes'
// import Footer from './components/footer/Footer'
// import Header from './components/header/Header'
// import { DoctorDetailsPage } from './components/pages/DoctorDetailPage'
// import Service from './components/service/Service'
// import CardApplication from './components/UI/card/CardApplication'
// import { FeedbackSlider } from './components/feedback-slider/FeedbackSlider'
// import { AboutClinic } from './components/pages/AboutClinic'

function App() {
   return (
      <div>
         <BrowserRouter>
            <MyNotes />
            {/* <Header /> */}
            {/* <AboutClinic /> */}
            {/* <FeedbackSlider /> */}
            {/* <CardApplication /> */}
            {/* <Service /> */}
            {/* <DoctorDetailsPage /> */}
            {/* <Footer /> */}
         </BrowserRouter>
      </div>
   )
}
export default App
