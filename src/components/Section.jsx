import { Component } from 'react';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <>
        <h2>{title}</h2>
        {children}
      </>
    );
  }
}

export default Section;
