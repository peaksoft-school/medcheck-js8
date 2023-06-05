import { Paper, styled } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import useToast from '../../hooks/useToast'
import { getPatients } from '../../api/patientsService'
// import { mainApi } from '../../api/instanses'

function PatientResult() {
   const { id } = useParams()
   const { allDatas } = useSelector((state) => state.patient)
   console.log(allDatas)
   const { ToastContainer, notify: notifyCall } = useToast()
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

   const findPatient = useMemo(() => {
      return patients.find((el) => String(el.id) === id)
   }, [id, patients])
   // const PDFFileHandler = () => {
   //    mainApi
   //       .get('pdf', {
   //          responseType: 'arraybuffer',
   //          headers: {
   //             'Content-Type': 'application/json',
   //             Accept: 'application/pdf',
   //          },
   //       })
   //       .then((response) => {
   //          const url = window.URL.createObjectURL(new Blob([response.data]))
   //          const link = document.createElement('a')
   //          link.href = url
   //          link.setAttribute('download', 'file.pdf')
   //          document.body.appendChild(link)
   //          link.click()
   //       })
   //       .catch(() =>
   //          notifyCall('error', 'Что-то не так с сервером или данными')
   //       )
   // }
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
                  Услуга: <h5>{allDatas?.name}</h5>
               </p>
               <p>
                  Дата и время: <h5>{allDatas?.date} </h5>{' '}
               </p>
               <p>
                  Номер заказа:<h5>{allDatas?.orderNumber}</h5>
               </p>
               <p>Загруженный файл:{}</p>
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
