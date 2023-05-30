import { Paper, styled } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import useToast from '../../hooks/useToast'
import { getPatients, getResults } from '../../api/patientsService'

function PatientResult() {
   const { id } = useParams()
   const [results, setResults] = useState([])
   const { ToastContainer, notifyCall } = useToast()
   const [patients, setPatients] = useState([])
   const getAllPatients = async () => {
      try {
         const { data } = await getPatients()
         return setPatients(data)
      } catch (error) {
         return notifyCall('error', error.response?.data.message)
      }
   }
   useEffect(() => {
      getAllPatients()
   }, [])
   console.log(results)

   const findPatient = useMemo(() => {
      return patients.find((el) => String(el.id) === id)
   }, [id, patients])
   const getPatientsResults = async () => {
      try {
         const { data } = await getResults()
         return setResults(data)
      } catch (error) {
         return notifyCall('error', error.response?.data.message)
      }
   }

   useEffect(() => {
      getPatientsResults()
   }, [])

   return (
      <Container>
         {ToastContainer}
         <HeaderPart>
            <P>{}</P>
         </HeaderPart>
         <PaperStyled>
            <div>
               <h3>
                  {findPatient?.firstName}
                  {findPatient?.lastName}
               </h3>{' '}
               <br />
               <p>
                  имя: <br /> {findPatient?.firstName}
               </p>{' '}
               <br />
               <p>
                  фамиля: <br />
                  {findPatient?.lastName}
               </p>{' '}
               <br />
               <p>
                  номер телефона: <br />
                  {findPatient?.phoneNumber}
               </p>{' '}
               <br />
               <p>
                  email: <br />
                  {findPatient?.email}
               </p>{' '}
               <br />
            </div>
            <Div>
               <p>Услуга{}</p>
               <p>
                  Дата и время: <h5>{results?.date}</h5>{' '}
               </p>
               <p>Номер заказа:{findPatient?.date}</p>
               <p> Загруженный файл:</p>
            </Div>
         </PaperStyled>
      </Container>
   )
}

export default PatientResult

const Container = styled('div')({
   background: '#9B9690',
})

const P = styled('p')({
   fontSize: '22px',
   marginTop: '40px',
   marginLeft: '7%',
})
const Div = styled('div')({
   display: 'flex',
   justifyContent: 'space-around',
   background: '#DBEBFF',
   height: '200px',
   width: '928px',
   marginRight: '43px',
   marginTop: '20px',
   borderRadius: ' 8px',
})
const HeaderPart = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
})
const PaperStyled = styled(Paper)({
   display: 'flex',
   justifyContent: 'space-between',
   width: '1300px',
   height: '1300px',
   margin: 'auto',
   marginTop: '20px',
   '& div': {
      paddingTop: '20px',
      marginLeft: '20px',
   },
})
