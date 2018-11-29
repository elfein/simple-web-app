import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

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
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>John</Table.Cell>
                            <Table.Cell>John@here.com</Table.Cell>
                            <Table.Cell>Manager</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}
