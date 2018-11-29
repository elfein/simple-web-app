import React, { Component } from 'react'
import { Table } from 'semantic-ui-react';

export default class PeopleList extends Component {
    state = {
        apiPeople: ["Joe"]
    }

    render() {

        let peopleList = []
        if (this.state.apiPeople) {
            peopleList = this.state.apiPeople.map((person, i) => {
                return person
            })
        }

        return (
            <Table.Body>
                {peopleList}
            </Table.Body>
        )
    }
}
