import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'widgets/Container/Preview.jsx'
import Button from 'widgets/Button/Preview.jsx'
import Picture from 'widgets/Picture/Preview.jsx'
import Link from 'widgets/Link/Preview.jsx'
import Swipe from 'widgets/Swipe/Preview.jsx'

class Vd extends React.Component {
  render() {
    return (
      <Container  attr={{ inline: false }}>
  <Button otherProps={{ style: { color: 'red' } }} attr={{ text: 'button text', draggable: false }} />
    <Container  attr={{ inline: false, draggable: false }}>
    <Button otherProps={{ style: { color: 'red' } }} attr={{ text: 'button text', draggable: false }} />
    <Button otherProps={{ style: { color: 'red' } }} attr={{ text: 'button text', draggable: false }} />
  </Container>
  <Picture  attr={{ url: 'https://avatars1.githubusercontent.com/u/1884248?s=460&v=4', draggable: false }} />
  <Link  attr={{ text: 'link text', draggable: false }} />
    <Swipe  attr={{ draggable: false }}>
    <Button otherProps={{ style: { color: 'red' } }} attr={{ text: 'button text', draggable: false }} />
    <Button otherProps={{ style: { color: 'red' } }} attr={{ text: 'button text', draggable: false }} />
  </Swipe>
</Container>
    );
  }
}

ReactDOM.render(
  <Vd/>, document.getElementById('root'),)
