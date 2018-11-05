import {connect} from 'react-redux';
import Register from '../src/components/register';
import register from '../src/redux/actions';


export default connect (
  state => ({user:state.user}),
  {register}
)(Register)
