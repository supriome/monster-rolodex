import React from 'react'
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  static context = ThemeContext
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}

export default ThemedButton;