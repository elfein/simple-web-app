import React, { Component } from 'react'
import { Table } from 'semantic-ui-react';

export default class PersonRow extends Component {
    render() {
        return (
            <Table.Row>
                <Table.Cell>{this.props.name}</Table.Cell>
                <Table.Cell>{this.props.email}</Table.Cell>
                <Table.Cell>{this.props.jobTitle}</Table.Cell>
            </Table.Row>
        )
    }
}
