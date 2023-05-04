import { Text, View, TextInput, Button } from "react-native";
import React, { Component } from "react";

type Props = {
  matchId: number;
  playerA: string;
  playerB: string;
  onSaveScore: (matchId: number, scoreA: number, scoreB: number) => void;
};

type State = {
  scoreA: number;
  scoreB: number;
};

export default class AddScore extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      scoreA: 0,
      scoreB: 0,
    };
  }

  handleSubmit = () => {
    const { matchId, onSaveScore } = this.props;
    const { scoreA, scoreB } = this.state;
    onSaveScore(matchId, scoreA, scoreB); // Ils sont typé en entier, donc pas besoin de parseInt
  };

  render() {
    const { playerA, playerB } = this.props;
    const { scoreA, scoreB } = this.state;
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>
          {playerA} — {playerB}
        </Text>
        <TextInput
          placeholder="Score A"
          keyboardType="numeric"
          value={scoreA.toString()}
          onChangeText={(text) => this.setState({ scoreA: parseInt(text) })}
        />
        <TextInput
          placeholder="Score B"
          keyboardType="numeric"
          value={scoreB.toString()}
          onChangeText={(text) => this.setState({ scoreB: parseInt(text) })}
        />
        <Button title="Enregistrer" onPress={this.handleSubmit} />
      </View>
    );
  }
}
