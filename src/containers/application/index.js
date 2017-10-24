import { connect } from 'react-redux';
import Application from '../../components/application';
import { searchQuery } from '../../actions';

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    results: state.results
  }
};

export default connect(
  mapStateToProps,
  { searchQuery }
)(Application);
