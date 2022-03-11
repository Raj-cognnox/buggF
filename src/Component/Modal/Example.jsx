import React from 'react';
import SkyLight from 'react-skylight';

class Example extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <section>
          <h1>React SkyLight</h1>
          <button onClick={() => this.untitled.show()}>Open Modal</button>
        </section>
        <SkyLight 
          hideOnOverlayClicked
          ref={ref => this.untitled = ref}
        >
        I'm an untitled modal!
      </SkyLight>
      </div>
    )
  }
}

Example.displayName = 'Example';

export default Example;