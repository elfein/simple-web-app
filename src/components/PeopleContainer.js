import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import PeopleList from './PeopleList';

export default class PeopleContainer extends Component {
    render() {
        return (
            <div>
                <h2>All People</h2>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Job Title</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <PeopleList />
                </Table>
            </div>
        )
    }
}
