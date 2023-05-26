import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import styles from './styles/styles';
import IScore from './interfaces/IScore';

type Props = {
  playerA?: string;
}

type State = {
  scores: IScore[]
}

export default class Scores extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
  
    this.state = {
      scores: [
        {
          user1: {id: "1", name: "James"},
          score1: 11,
          user2: {id: "1", name: "Jessie"},
          score2: 3,
          date: new Date()
        }
      ]
    }
  }

  componentDidMount(): void {
    // if(this.props.playerA) {
    //   fetch('http://localhost:3000/scores')
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({
    //         scores: data
    //     })
    //   })
    // } else {
    //   fetch('http://localhost:3000/scores')
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({
    //         scores: data
    //     })
    //   })
    // }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Scores</Text>
        {
          this.state.scores.map(({user1, user2, score1, score2}, index) => (
            <View
              key={index}
              style={styles.row}
            >
              <Text>
                {typeof user1 == 'object'? 
                  user1.name
                :
                  user1
                }
              </Text>
              <Text  style={(score1>score2)? styles.winner : styles.loser}>
                {score1.toString()}
              </Text>
              <Text style={(score2>score1)? styles.winner : styles.loser}>
                {score2.toString()}
              </Text>
              <Text>
                {typeof user2 == 'object'? 
                  user2.name
                :
                  user2
                }
              </Text>
            </View>
          ))
        }
      </ScrollView>
    )
  }
}

