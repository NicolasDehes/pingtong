import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import styles from './styles/styles';
import IScore from './interfaces/IScore';

type Props = {}

type State = {
  scores: IScore[]
}

export default class Score extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
  
    this.state = {
      scores: []
    }
  }

  componentDidMount(): void {
    // fetch('BLABALABALBALBA')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       scores: data
    //   })
    // })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Scores</Text>
        <Table borderStyle={styles.tableBorder}>
          <TableWrapper style={styles.wrapper}>
          {
            this.state.scores.map((score, index) => (
              <Row
                key={index}
                data={[score.user1, score.score1]}
                style={styles.row}
              />
            ))
          }
          </TableWrapper>
        </Table>
      </ScrollView>
    )
  }
}

