import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Musicians from './components/Musicians'
class RootReduxed extends React.Component {

  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <div>Error</div>
    ) : (
      <BrowserRouter>
        <Route path="/musicians" component={Musicians} />
      </BrowserRouter>
    );
  }
}

export default RootReduxed;