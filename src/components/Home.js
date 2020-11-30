import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Typography, withStyles } from '@material-ui/core';

import MyResponsiveBar from './MyResponsiveBar';
import MyResponsiveBarDemo from './MyResponsiveBarDemo';
// TODO: replace this with real data from backend
import { testBarData, testBpmData } from '../util/testData';

const Home = ({}) => {
  return (
    <div>
      <Typography variant='h2' component='h2' align='center'>
        Beatport Analysis
      </Typography>
      <MyResponsiveBar data={testBpmData} title={'Average BPM by genre'} />
      <div style={{ paddingBottom: 50 }}></div>
      <MyResponsiveBarDemo data={testBarData} title={'My Bar Chart 1'} />
    </div>
  );
};

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

const styles = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
