import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  static defaultProps = {
    total: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    //positivePercentage: 0,
  };

  IncreamentGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  IncreamentNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  IncreamentBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    this.setState(state => ({
      total: state.good + state.neutral + state.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    // const totalFeedback = this.countTotalFeedback();
    return (
      <Layout>
        <Feedback
          onAddGood={this.IncreamentGood}
          onAddNeutral={this.IncreamentNeutral}
          onAddBad={this.IncreamentBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={0}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
