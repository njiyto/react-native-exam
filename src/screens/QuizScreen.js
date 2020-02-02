import React, { useState } from 'react'
import { View, Text, Button, Animated, StyleSheet } from 'react-native'
import { connect, useDispatch } from 'react-redux';

const QuizScreen = ({ questions, navigation }) => {
  const [item, setItem] = useState(0)
  const [answerBtn, setAnswerBtn] = useState(true)
  const [scoreBtn, setScoreBtn] = useState(false)
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showScore, setShowScore] = useState(false)

  const [mainSpin] = useState(new Animated.Value(0));
  const [showQ] = useState(new Animated.Value(1));
  const [showA] = useState(new Animated.Value(0));

  const spin = mainSpin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const restart = () => {
      setItem(0)
      setScore({ correct: 0, incorrect: 0 })
      setShowScore(false)
      Animated.parallel([
      Animated.timing(mainSpin, {
          toValue: 0,
          duration: 100
        }),
        Animated.timing(showQ, {
          toValue: 1,
          duration: 100
        }),
        Animated.timing(showA, {
          toValue: 0,
          duration: 100
        }),
      ]).start()
      setAnswerBtn(true)
      setScoreBtn(false)
  }

  const showAnwer = () => {
    Animated.parallel([
      Animated.timing(mainSpin, {
        toValue: 1,
        duration: 500
      }),
      Animated.timing(showQ, {
        toValue: 0,
        duration: 100
      }),
      Animated.timing(showA, {
        toValue: 1,
        duration: 100
      }),
    ]).start()
    setAnswerBtn(false)
    setScoreBtn(true)
  }

  const next = (type) => {
    const nextQuestion = questions[item + 1];
    setScore(prevState => ({...prevState, [type]: prevState[type] + 1 }))

    if (nextQuestion) {
      setItem(prevItem => (prevItem + 1))
      Animated.parallel([
      Animated.timing(mainSpin, {
        toValue: 0,
        duration: 500
      }),
      Animated.timing(showQ, {
        toValue: 1,
        duration: 100
      }),
      Animated.timing(showA, {
        toValue: 0,
        duration: 100
      }),
    ]).start()
      setAnswerBtn(true)
      setScoreBtn(false)
    } else {
      setShowScore(true)
    }
  }

  if (showScore) {
    return (
      <View style={[styles.container, {justifyContent: 'space-around'}]}>
        <View>
          <Text style={styles.title}>Your score</Text>
          <Text style={{marginTop: 10}}>questions: {questions.length}</Text>
          <Text style={{color: 'green'}}>correct: {score.correct}</Text>
          <Text style={{color: 'red'}}>incorrect: {score.incorrect}</Text>
        </View>
        <View style={{height: 100, width: '50%', alignSelf: 'center'}}>
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <Button
              title='Go Back'
              onPress={() => navigation.goBack()}
            />
            <Button
              title='Restart'
              onPress={restart}
            />
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item + 1}/{questions.length}</Text>
      <Animated.View
        style={[styles.card, { transform: [{ rotateX: spin }]}]}
      >
        <Animated.Text
          style={{ opacity: showQ, textAlign: 'center' }}
        >
          {questions[item].question}
        </Animated.Text>
        <Animated.Text
          style={{ opacity: showA, textAlign: 'center' }}
        >
          {questions[item].answer
        }</Animated.Text>
      </Animated.View>
      {answerBtn && (
        <Button
          title="Answer"
          onPress={showAnwer}
        />
      )}
      {scoreBtn && (
        <View style={{height: 100, width: '50%', alignSelf: 'center'}}>
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <Button
              title="Correct"
              onPress={() => next('correct')}
            />
            <Button
              title="inCorrect"
              onPress={() => next('incorrect')}
            />
          </View>
        </View>
      )}
    </View>
  )
}

const mapStateToProps = (state, {navigation}) => {
  const { key } = navigation.state.params

  return {
    questions: state[key].questions
  }
}

QuizScreen.navigationOptions = ({ navigation }) => ({
  title: `Quiz ${navigation.state.params.key}`,
})

export default connect(mapStateToProps)(QuizScreen)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 40
  },
  title: {
    fontSize: 24,
  },
  card: {
    borderWidth: 1,
    width: '90%',
    padding: 20,
    borderRadius: 6,
    backgroundColor: '#fbf',
    marginTop: 20,
    marginBottom: 20,
    height: 200
  }
})