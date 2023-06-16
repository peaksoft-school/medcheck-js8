import { Paper, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useToast from '../../hooks/useToast'
import { getAllPatientsById } from '../../api/patientsService'
import { fileInstance } from '../../api/instanses'
import { ReactComponent as File } from '../../assets/serviceIcons/File.svg'

function PatientResult() {
   const { id } = useParams()
   const { ToastContainer, notify: notifyCall } = useToast()
   const [results, setResults] = useState([])

   const patientGetById = async () => {
      try {
         const { data } = await getAllPatientsById(id)
         setResults(data)
      } catch (error) {
         notifyCall('error', error.message)
      }
   }
   console.log(results)

   useEffect(() => {
      patientGetById()
   }, [])

   const PDFFileHandler = (e, file) => {
      e.stopPropagation()
      fileInstance
         .get(
            `api/s3/download/${file
               .split('https://medcheckbucket.s3.eu-central-1.amazonaws.com/')
               .join('')}`,
            {
               responseType: 'arraybuffer',
               headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/pdf',
               },
            }
         )
         .then((response) => {
            const element = document.createElement('a')
            const file = new Blob([response.data], {
               type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            })
            element.href = URL.createObjectURL(file)
            element.download = 'your-filename.docx'
            document.body.appendChild(element)
            element.click()
            document.body.removeChild(element)
         })
         .catch((error) => notifyCall('error', error.message))
   }

   return (
      <Container>
         {ToastContainer}
         <HeaderPart>
            <P>
               <span>{results?.firstName} </span>
               <span>{results?.lastName}</span>
            </P>
         </HeaderPart>
         <PaperStyled>
            <div>
               <h3>
                  <span>{results?.firstName} </span>
                  <span>{results?.lastName}</span>
               </h3>
               <br />
               <p>
                  имя: <br /> {results?.firstName}
               </p>{' '}
               <br />
               <p>
                  фамиля: <br />
                  {results?.lastName}
               </p>{' '}
               <br />
               <p>
                  номер телефона: <br />
                  {results?.phoneNumber}
               </p>{' '}
               <br />
               <p>
                  email: <br />
                  {results?.email}
               </p>{' '}
               <br />
            </div>
            <Div>
               <p style={{ color: ' #000000' }}>
                  Услуга:{' '}
                  <PStyle>
                     {results.results?.map((el) => (
                        <div>{el.services}</div>
                     ))}
                  </PStyle>
               </p>
               <p style={{ color: ' #000000' }}>
                  Дата и время:{' '}
                  <PStyle>
                     {results.results?.map((el) => (
                        <div>
                           {el.dateOfIssue}
                           <p style={{ color: '#4D4E51' }}>{el.timeOfIssue}</p>
                        </div>
                     ))}{' '}
                  </PStyle>{' '}
               </p>
               <p style={{ color: ' #000000' }}>
                  Номер заказа:
                  <PStyle>
                     {results.results?.map((el) => (
                        <div>{el.orderNumber}</div>
                     ))}
                  </PStyle>
               </p>
               <p style={{ color: ' #000000' }}>
                  Загруженный файл: <br />
                  <div>
                     {results.results?.map((el) => (
                        <ButtonStyle
                           type="button"
                           onClick={(e) => PDFFileHandler(e, el.file)}
                        >
                           <FileStyle />
                        </ButtonStyle>
                     ))}
                  </div>{' '}
               </p>
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
const PStyle = styled('p')({
   marginTop: '10px',
   color: ' #222222',
   marginLeft: '-20px',
})
const FileStyle = styled(File)`
   margin: 6px;
   width: 14px;
   height: 18px;
   fill: #346efb;
   :hover {
      fill: #ffffff;
   }
`
const ButtonStyle = styled('button')`
   margin-left: 50px;
   background-color: #ffffff;
   border-radius: 4px;
   border-color: #ffffff;
   margin-top: 15px;
   width: 32px;
   height: 32px;
   display: flex;
   :hover {
      background-color: #346efb;
   }
`
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
