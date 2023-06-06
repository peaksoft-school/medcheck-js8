import { Paper, styled } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import useToast from '../../hooks/useToast'
import { getPatients, getResultsById } from '../../api/patientsService'
import { fileInstance } from '../../api/instanses'
// import { mainApi } from '../../api/instanses'

function PatientResult() {
   const { id } = useParams()
   const { allDatas } = useSelector((state) => state.patient)
   console.log(allDatas)
   const { ToastContainer, notify: notifyCall } = useToast()
   const [patients, setPatients] = useState([])
   const [results, setResults] = useState([])
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

   const patientGetById = async () => {
      try {
         const { data } = await getResultsById(id)
         setResults(data)
      } catch (error) {
         notifyCall('error', error.message)
      }
   }

   useEffect(() => {
      patientGetById()
   }, [id])
   const findPatient = useMemo(() => {
      return patients.find((el) => String(el.id) === id)
   }, [id, patients])
   const findPatientById = useMemo(() => {
      return results.find((el) => String(el.patientId) === id)
   }, [id, results])
   console.log(findPatientById)
   const PDFFileHandler = () => {
      fileInstance
         .get(`api/s3/download/${findPatientById.file}`, {
            responseType: 'arraybuffer',
            headers: {
               'Content-Type': 'application/json',
               Accept: 'application/pdf',
            },
            params: { link: findPatientById.file },
         })
         .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'file.pdf')
            document.body.appendChild(link)
            link.click()
         })
         .catch(() =>
            notifyCall('error', 'Что-то не так с сервером или данными')
         )
   }
   return (
      <Container>
         {ToastContainer}
         <HeaderPart>
            <P>
               <span>{findPatient?.firstName} </span>
               <span>{findPatient?.lastName}</span>
            </P>
         </HeaderPart>
         <PaperStyled>
            <div>
               <h3>
                  <span>{findPatient?.firstName} </span>
                  <span>{findPatient?.lastName}</span>
               </h3>
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
               <p>
                  Услуга: <h5>{findPatientById?.name}</h5>
               </p>
               <p>
                  Дата и время: <h5>{findPatientById?.date} </h5>{' '}
               </p>
               <p>
                  Номер заказа:<h5>{findPatientById?.orderNumber}</h5>
               </p>
               <button type="button" onClick={PDFFileHandler}>
                  Загруженный файл:
               </button>
            </Div>
         </PaperStyled>
      </Container>
   )
}

export default PatientResult

const Container = styled('div')({
   background: '#9B9690',
})

const P = styled('h3')({
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
