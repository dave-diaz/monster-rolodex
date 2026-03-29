import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { id: 1, name: 'David Diaz', email: 'david@example.com' },
        { id: 2, name: 'Sarah Connor', email: 'sarah@example.com' },
        { id: 3, name: 'Bruce Wayne', email: 'bruce@example.com' },
        { id: 4, name: 'Tony Stark', email: 'tony@example.com' },
        { id: 5, name: 'Natasha Romanoff', email: 'natasha@example.com' },
        { id: 6, name: 'Peter Parker', email: 'peter@example.com' },
        { id: 7, name: 'Clark Kent', email: 'clark@example.com' },
        { id: 8, name: 'Diana Prince', email: 'diana@example.com' },
        { id: 9, name: 'Steve Rogers', email: 'steve@example.com' },
        { id: 10, name: 'Wanda Maximoff', email: 'wanda@example.com' },
        { id: 11, name: 'Stephen Strange', email: 'stephen@example.com' },
        { id: 12, name: 'Scott Lang', email: 'scott@example.com' },
      ],
      searchField: ''
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>

        <input
          type="search"
          placeholder="Search monsters"
          value={searchField}
          onChange={this.handleSearchChange}
        />

        <div className="card-list">
          {filteredMonsters.map(monster => (
            <div key={monster.id} className="card">
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;