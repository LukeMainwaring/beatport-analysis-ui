import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Typography, withStyles } from '@material-ui/core';

import LineChart from './charts/LineChart';
import MyResponsiveLineDemo from './charts/MyResponsiveLineDemo';

// TODO: replace this with real data from backend
import { testLineData, testBeatportLineData } from '../util/testData';

const Home = ({}) => {
  // TODO: allow attributes and measure to be picked dynamically, i.e. drop-down picking attr. Genre then measure Score/Popularity
  const attribute = 'Genre';
  const measure = 'Score';

  return (
    <div>
      <Typography variant='h2' component='h2' align='center'>
        Beatport Analysis
      </Typography>
      <LineChart
        data={testBeatportLineData}
        title={'Beatport attribute over time'}
        attribute={attribute}
        measure={measure}
      />

      <div style={{ paddingBottom: 90 }}></div>
      <MyResponsiveLineDemo data={testLineData} title={'Line chart demo'} />
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
