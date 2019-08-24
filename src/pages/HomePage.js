import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Columns, Column } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


class HomePage extends React.Component {
    state = {
      users: [],
      isLoading: true,
    }

    componentDidMount() {
      axios.get('http://api.additivasia.io/api/v1/assignment/employees')
        .then(response => {
            let data = [...response.data]; //use spread operator to copy the res into a new array
            this.setState({
              users: data,
              isLoading: false,
            })
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
    }

    render() {
       const { users, isLoading } = this.state;
        return (
          <div>
            <section className="section is-paddingless-horizontal">
              <div className="container grid is-large">
                  <div className="firstsection">
                  <h1 className="title" id="viewTitle">Employee Explorer</h1>
                    <div className="content">
                      <form id="addName-form" onSubmit={e => this.addName(e)}>
                        <div className="columns" id="mainColumns">
                          <div className="column is-one-quarter">
                            <div className="field">
                              <div className="control">
                                <input onChange={e => this.handleChange(e)} className="input is-info is-medium" type="text" name="name" value={users}  placeholder="..search" />
                              </div>
                            </div>
                          </div>
                          <div className="column is-one-fifth">
                            <div className="field">
                              <div className="control">
                                <button className="button is-medium is-info is-fullwidth" type="submit" value="Submit"  id="updateName">SEARCH</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      {/*<div className="columns">
                       <div className="column is-three-fifths is-offset-one-fifth">
                          {this.state.addNewName.map((name) => {
                            return <h3 className="title" id="viewTitle">{name}</h3>
                          })}

                          <h3 id="viewTitle">New Name: {newName}</h3>
                       </div>
                      </div>
                      <form id="addName-form" onSubmit={e => this.addName(e)}>
                        <div className="columns">
                          <div className="column is-three-fifths is-offset-one-fifth">
                          <h1 className="title" id="viewTitle">Update Name of Shipment</h1>
                            <div className="columns">
                              <div className="column">
                                <div className="field">
                                  <div className="control">
                                    <input onChange={e => this.handleChange(e)} className="input is-info is-large" type="text" name="name" value={newName}  placeholder="..enter new Name" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="columns">
                              <div className="column ">
                                <div className="field">
                                  <div className="control">
                                    <button className="button is-large is-info is-fullwidth" type="submit" value="Submit"  id="updateName">Update Name</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>*/}
                    </div>
                 </div>
              </div>
            </section>
        </div>
    );
  }
}


export default HomePage
