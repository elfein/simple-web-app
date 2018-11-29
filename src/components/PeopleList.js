import React, { Component } from 'react'
import { Table } from 'semantic-ui-react';
import PersonRow from './PersonRow';

export default class PeopleList extends Component {
    state = {
        apiPeople: [
            {
                name: "Joe",
                email: "joe@here.com",
                jobTitle: "Manager"
            },
            {
                name: "Joe",
                email: "joe@here.com",
                jobTitle: "Manager"
            }
        ]
    }

    render() {

        let peopleList = []
        if (this.state.apiPeople) {
            peopleList = this.state.apiPeople.map((person, i) => {
                return <PersonRow
                    name={person.name}
                    email={person.email}
                    jobTitle={person.jobTitle}
                />
            })
        }

        return (
            <Table.Body>
                {peopleList}
            </Table.Body>
        )
    }
}
