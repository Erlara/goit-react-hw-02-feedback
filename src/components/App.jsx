import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
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

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.state.total) * 100);
  };

  render() {
    return (
      <Layout>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onAddGood={this.IncreamentGood}
            onAddNeutral={this.IncreamentNeutral}
            onAddBad={this.IncreamentBad}
            onTotal={this.countTotalFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.state.total !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
