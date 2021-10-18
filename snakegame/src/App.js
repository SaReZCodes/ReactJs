import React, { Component } from 'react';
import Item from './components/item';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: this.getFoodPosition(),
      segments: [this.getFoodPosition()],
      speed: {
        x: 1,
        y: 0
      },
      direction: 'ArrowRight',
      forbidden_direction: 'ArrowLeft'
    }

  }

  componentDidMount() {
    setInterval(() => {
      this.update();
    }, 300);
    document.addEventListener('keydown', this.keyPressEvent);
  }

  keyPressEvent = (event) => {
    let direction = event.key;
    // this.state.direction = direction;
    let forbidden_direction = this.get_orbidden_direction(direction);

    if (direction !== this.state.direction && direction !== this.state.forbidden_direction) {
      this.setState({
        direction: direction,
        speed: {
          x: direction === 'ArrowRight' ? 1 : direction === 'ArrowLeft' ? -1 : 0,
          y: direction === 'ArrowDown' ? 1 : direction === 'ArrowUp' ? -1 : 0,
        },
        forbidden_direction: forbidden_direction
      });
    }
  }

  get_orbidden_direction(direction) {
    switch (direction) {
      case 'ArrowRight':
        return 'ArrowLeft';
        break;
      case 'ArrowLeft':
        return 'ArrowRight';
        break;
      case 'ArrowUp':
        return 'ArrowDown';
        break;
      case 'ArrowDown':
        return 'ArrowUp';
        break;
      default:
        break;
    }
  }

  update() {
    let segments = this.state.segments;
    let head = segments[segments.length - 1];
    segments.shift();

    segments.push(this.setOnBox({
      column: head.column + this.state.speed.x,
      row: head.row + this.state.speed.y
    }));
    this.setState({
      segments: segments
    })
  }

  setOnBox(cell) {
    if (cell.column > 19) {
      cell.column = 0;
    } else if (cell.column < 0) {
      cell.column = 19;
    }

    if (cell.row > 19) {
      cell.row = 0;
    } else if (cell.row < 0) {
      cell.row = 19;
    }
    return cell;
  }

  getFoodPosition() {
    return {
      column: Math.floor(Math.random() * 20),
      row: Math.floor(Math.random() * 20),
    }
  }

  render() {
    return (
      <div className="box">
        {this.draw()}
      </div>
    );
  }

  draw() {
    let items = [];
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        if (i === this.state.food.row && j === this.state.food.row)
          items.push(<Item className='food'></Item>);
        else {
          items.push(<Item className='item'></Item>);
        }
      }
    }
    for (let i = 0; i < this.state.segments.length; i++) {
      let segment = this.state.segments[i];
      items[segment.row * 20 + segment.column] = <Item className='snake' />
    }

    return items;
  }
}

export default App;