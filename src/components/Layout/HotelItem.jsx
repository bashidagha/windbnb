import Icon from '../UI/Icon';
import './hotelitem.scss'


const HotelItem = (props) => {

    const hotelInformation = props.hotel;

  return (
    <div className='item'>

        <img src={hotelInformation.photo} alt={hotelInformation.title}></img>

        <div className='item-data'>

            <div className='item-desc'>
                {hotelInformation.superHost && <div className='superhost'>Super Host</div>}
                {hotelInformation.type + " "}
                {hotelInformation.beds && <>{" . " + hotelInformation.beds + " beds"}</>}
            </div>

            <div className='item-rating'>
                <Icon name="star"/>
                {hotelInformation.rating}
            </div>
        </div>

        <h3>{hotelInformation.title}</h3>
        
    </div>
  )
}

export default HotelItem