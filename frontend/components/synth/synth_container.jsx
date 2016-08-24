import {connect} from 'react-redux';
import {keyPressed, keyReleased} from '../../actions/note_actions';
import Synth from './synth';


const mapStateToProps = ( {notes} ) => ({
  notes
});

const mapDispatchToProps = dispatch => ({
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);
