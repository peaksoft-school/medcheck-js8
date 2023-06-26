import { Paper, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useToast from '../../hooks/useToast'
import { getAllPatientsById } from '../../api/patientsService'
import { fileInstance } from '../../api/instanses'
import { ReactComponent as File } from '../../assets/serviceIcons/File.svg'

function PatientResult() {
   const { id } = useParams()
   const { notify: notifyCall } = useToast()
   const [results, setResults] = useState([])
   console.log(results, 'resultss')
   const patientGetById = async () => {
      try {
         const { data } = await getAllPatientsById(id)
         setResults(data)
      } catch (error) {
         notifyCall('error', error.message)
      }
   }

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
         <HeaderPart>
            <P>
               <span>{results?.firstName} </span>
               <span>{results?.lastName}</span>
            </P>
         </HeaderPart>
         <PaperStyled>
            <PatientInfoBox>
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
            </PatientInfoBox>
            <Div>
               <div>
                  <Sercvietitle>Услуга:</Sercvietitle>
                  <p>
                     {results.results?.map((el) => (
                        <div>{el.services}</div>
                     ))}
                  </p>
               </div>
               <div>
                  <DateTitle>Дата и время:</DateTitle>
                  <p>
                     {results.results?.map((el) => (
                        <div>
                           {el.dateOfIssue}
                           <p style={{ color: '#4D4E51' }}>{el.timeOfIssue}</p>
                        </div>
                     ))}{' '}
                  </p>
               </div>
               <div>
                  <NumberTitle> Номер заказа:</NumberTitle>

                  <p style={{ color: ' #000000' }}>
                     {results.results?.map((el) => (
                        <div>{el.orderNumber}</div>
                     ))}
                  </p>
               </div>
               <div>
                  <LoadingTitle>Загруженный файл:</LoadingTitle>
                  <p style={{ color: ' #000000' }}>
                     {results.results?.map((el) => (
                        <ButtonStyle
                           type="button"
                           onClick={(e) => PDFFileHandler(e, el.file)}
                        >
                           <FileStyle />
                        </ButtonStyle>
                     ))}
                  </p>
               </div>
            </Div>
         </PaperStyled>
      </Container>
   )
}

export default PatientResult

const PatientInfoBox = styled('div')({
   height: '1374px',
})
const Container = styled('div')({
   background: 'rgba(245, 245, 245, 0.61)',
   padding: '20px 65px',
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
   width: '928px',
   height: 'fit-content',
   borderRadius: ' 8px',
   padding: '20px',
   color: '#000000',
})
const HeaderPart = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
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
   margin: 'auto',
   padding: '30px',
   fontFamily: 'Manrope',
})

const Sercvietitle = styled('div')({
   marginBottom: '20px',
})
const DateTitle = styled('div')({
   marginBottom: '20px',
})
const NumberTitle = styled('div')({
   marginBottom: '20px',
})
const LoadingTitle = styled('div')({
   marginBottom: '20px',
})
