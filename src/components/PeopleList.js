import React, { Component } from 'react'
import { Table } from 'semantic-ui-react';
import PersonRow from './PersonRow';
import axios from 'axios';

export default class PeopleList extends Component {
    state = {
        apiPeople: []
    }

    getPeopleData = async () => {
        const webApiUrl = 'https://api.salesloft.com/v2/people.json'
        const token = process.env.REACT_APP_API_KEY
        const response = await axios.get(webApiUrl, { headers: { "Authorization" : `Bearer ${token}` } })
        console.log(response)
    }

    componentDidMount = () => {
        this.getPeopleData()
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
