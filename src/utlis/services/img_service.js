import { ReactComponent as AnestIcon } from '../../assets/serviceIcons/anesteziologiya.svg'
import { ReactComponent as GroupIcon } from '../../assets/serviceIcons/group.svg'
import { ReactComponent as DermIcon } from '../../assets/serviceIcons/dermatologiya.svg'
import { ReactComponent as EndocIcon } from '../../assets/serviceIcons/endokrinologiya.svg'
import { ReactComponent as FizIcon } from '../../assets/serviceIcons/fizioterapiya.svg'
import { ReactComponent as FlebIcon } from '../../assets/serviceIcons/flebologiya.svg'
import { ReactComponent as GastIcon } from '../../assets/serviceIcons/gastroenterologiya.svg'
import { ReactComponent as GemIcon } from '../../assets/serviceIcons/gematologicheskoeTestirovanie.svg'
import { ReactComponent as GinIcon } from '../../assets/serviceIcons/ginekologiya.svg'
import { ReactComponent as KardIcon } from '../../assets/serviceIcons/kardiologiya.svg'
import { ReactComponent as NevrIcon } from '../../assets/serviceIcons/nevrologiya.svg'
import { ReactComponent as OftalIcon } from '../../assets/serviceIcons/oftalmologiya.svg'
import { ReactComponent as OnkolIcon } from '../../assets/serviceIcons/onkologiya.svg'
import { ReactComponent as OrtopIcon } from '../../assets/serviceIcons/ortopediya.svg'
import { ReactComponent as OtorIcon } from '../../assets/serviceIcons/otorinolaringologiya.svg'
import { ReactComponent as ProkIcon } from '../../assets/serviceIcons/proktologiya.svg'
import { ReactComponent as PsikhIcon } from '../../assets/serviceIcons/psikhoterapiya.svg'
import { ReactComponent as PulmonIcon } from '../../assets/serviceIcons/pulmonologiya.svg'
import { ReactComponent as RevmatIcon } from '../../assets/serviceIcons/revmatologiya.svg'
import { ReactComponent as TerapIcon } from '../../assets/serviceIcons/terapiya.svg'
import { ReactComponent as UrolIcon } from '../../assets/serviceIcons/urologiya.svg'
import { ReactComponent as NeiroIcon } from '../../assets/serviceIcons/neirohirurgiya.svg'
import DoctorVoinich from '../../assets/images/Doctore.png'
import DoctorMisko from '../../assets/images/docotor-misko.png'
import DoctorAntux from '../../assets/images/doctore-antux.png'
import DoctorMisnik from '../../assets/images/doctor-misnik.png'
import DoctorDmitryi from '../../assets/images/dmitryiImage.png'

export const MED_SERVICE = [
   {
      id: 1,
      img: <GroupIcon />,
      title: 'Аллергология',
   },
   {
      id: 2,
      img: <AnestIcon />,
      title: 'Анестезиология',
   },
   {
      id: 3,
      img: <GemIcon />,
      title: 'Вакцинация',
   },
   {
      id: 4,
      img: <GinIcon />,
      title: 'Гинекология',
   },
   {
      id: 5,
      img: <DermIcon />,
      title: 'Дермотология',
   },
   {
      id: 6,
      img: <KardIcon />,
      title: 'Кардиология',
   },
   {
      id: 7,
      img: <NevrIcon />,
      title: 'Неврология',
   },
   {
      id: 8,
      img: <NeiroIcon />,
      title: 'Нейрохирургия',
   },
   {
      id: 9,
      img: <OnkolIcon />,
      title: 'Онкология',
   },
   {
      id: 10,
      img: <OrtopIcon />,
      title: 'Ортопедия',
   },
   {
      id: 11,
      img: <OtorIcon />,
      title: 'Оториноларингология',
   },
   {
      id: 12,
      img: <OftalIcon />,
      title: 'Офтальмология',
   },
   {
      id: 13,
      img: <ProkIcon />,
      title: 'Проктология',
   },
   {
      id: 14,
      img: <PsikhIcon />,
      title: 'Психтерапия',
   },
   {
      id: 15,
      img: <PulmonIcon />,
      title: 'Пульмонология',
   },
   {
      id: 16,
      img: <RevmatIcon />,
      title: 'Ревмотология',
   },
   {
      id: 17,
      img: <TerapIcon />,
      title: 'Терапия',
   },
   {
      id: 18,
      img: <UrolIcon />,
      title: 'Урология',
   },
   {
      id: 19,
      img: <FlebIcon />,
      title: 'Флебология',
   },
   {
      id: 21,
      img: <FizIcon />,
      title: 'Физиотерапия',
   },
   {
      id: 20,
      img: <EndocIcon />,
      title: 'Эндокринология',
   },
   {
      id: 23,
      img: <GastIcon />,
      title: 'Гастроэнтерология',
   },
]

export const mainMedService = [
   {
      id: 1,
      img: <GemIcon />,
      title: 'Вакцинация',
   },
   {
      id: 2,
      img: <KardIcon />,
      title: 'Кардиология',
   },
   {
      id: 3,
      img: <NevrIcon />,
      title: 'Неврология',
   },
   {
      id: 4,
      img: <DermIcon />,
      title: 'Дермотология',
   },
   {
      id: 5,
      img: <OftalIcon />,
      title: 'Офтальмология',
   },
   {
      id: 6,
      img: <TerapIcon />,
      title: 'Терапия',
   },
   {
      id: 7,
      img: <FizIcon />,
      title: 'Физиотерапия',
   },
   {
      id: 8,
      img: <OnkolIcon />,
      title: 'Онкология',
   },
   {
      id: 9,
      img: <UrolIcon />,
      title: 'Урология',
   },
]

export const doctorImages = [
   {
      id: 1,
      img: DoctorVoinich,
      name: 'Войнич Дарья',
      description: 'Врач-терапевт',
   },
   {
      id: 4,
      img: DoctorAntux,
      name: 'Антух Евгений',
      description: 'Врач-невролог',
   },
   {
      id: 3,
      img: DoctorDmitryi,
      name: 'Дмитроченко Дмитрий',
      description: 'Врач-уролог-андролог',
   },
   {
      id: 2,
      img: DoctorMisko,
      name: 'Мисько Екатерина',
      description: 'Врач-Педиатр',
   },

   {
      id: 5,
      img: DoctorMisnik,
      name: 'Мисник Елена',
      description: 'Врач эндокринолог',
   },
]
