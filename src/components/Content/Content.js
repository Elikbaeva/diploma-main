import { GradientTitle } from '../GradientTitle/GradientTitle'
import { IconButton } from '../IconButton/IconButton'
import { Slider } from '../Slider/Slider'
import photo_1 from '../../assets/images/mebel.jpeg'
import photo_2 from '../../assets/images/uyout.jpeg'
import photo_3 from '../../assets/images/vaza.jpeg'
import photo_4 from '../../assets/images/kott.jpeg'
import photo_5 from '../../assets/images/посуда.jpeg'
import photo_6 from '../../assets/images/flowers.jpeg'
import './Content.css'

const sliderData = [
  {
    label: 'with us, you are always comfortable',
    title: '',
    img: photo_1
  },
  {
    label: 'with us, you are always comfortable',
    title: '',
    img: photo_2
  },
  {
    label: 'with us, you are always comfortable',
    title: '',
    img: photo_6
  },
  {
    label: 'with us, you are always comfortable',
    title: '',
    img: photo_3
  },
  {
    label: 'with us, you are always comfortable',
    title: '',
    img: photo_4
  },
  {
    label: 'with us, you are always comfortable',
    title: '',
    img: photo_5
  },
  
]

export const Content = () => (
  <div className="content">
    <GradientTitle>Welcome to the world of home goods</GradientTitle>
          <p>Create your dream home: At HomeHarmony you will find
            everything you need to create a cozy and stylish environment
            in your home. From kitchen utensils to stylish interior accessories,
            our range will please even the most discerning customers.</p>
    <Slider data={sliderData} />
  </div>
)