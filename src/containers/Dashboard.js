import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import {removeCar} from '../redux/actions';
import {addCar} from '../redux/actions';
// import { removeCar } action here

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

// add mapDispatchToProps function here
// added this function so we can send data FROM our component
const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car)),
        removeCar: (index) => dispatch(removeCar(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)