// import React from 'react';
import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { initAction } from 'src/store/actions';

import './home.less';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // 初始化state值
    this.state = {
      myState: 1
    };
  }

  handleSubmit = e => {
    const { history, init } = this.props;
    e.preventDefault();
    init({}, resposne => {
      if (!resposne.success) {
        return false;
      }
      history.push({
        pathname: '/user'
      });
    });
  };

  render() {
    return (
      <Button onClick={this.handleSubmit}>
        <div className="test">test api</div>
      </Button>
    );
  }
}
const mapStateToProps = state => {
  return {
    a: state.a,
    init: state.init
  };
};

const mapDispatchToProps = dispatch => ({
  init(params, callback) {
    initAction(params, callback)(dispatch);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);
