import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import ModalExchangeRates from '../modal/ModalExchangeRates';
import { useSelector } from 'react-redux';

import { ReactComponent as ArrowBack } from './arrowBack/back.svg';
import { ReactComponent as PrevMonth } from './arrowBack/leftArrow.svg';
import { ReactComponent as NextMonth } from './arrowBack/rightArrow.svg';
import { ReactComponent as Exchange } from './img/exchange.svg';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import exchangeRatesSelectors from '../../redux/exchange/exchangeRatesSelectors';
import financeSelectors from '../../redux/finance/financeSelectors';
import CurrencyBar from '../currencyBar/CurrencyBar';
import exchangeRatesOperations from '../../redux/exchange/exchangeRatesOperations';

import styles from './StatisticsHeader.module.css';
import Media from 'react-media';

class StatisticsHeader extends Component {
  state = {
    date: '',
    isShowModal: false,
  };

  componentDidMount() {
    // this.props.onFetchEchangeRates();
    const getRates = currentRates => {
      console.log('object', currentRates);
      if (currentRates.length === 0) {
        return this.props.onFetchEchangeRates();
      } else {
        return currentRates;
      }
    };
    const rates = getRates(this.props.exchangeRates);

    console.log('rates', rates);
    const currentTime = moment().format();
    this.setState({
      date: currentTime,

      //   currentDate: currentTime,
    });
  }

  handleChangeMonth = ({ target }) => {
    const { name } = target;
    const { date } = this.state;
    if (name === 'prevMonthBtn') {
      this.setState({
        date: moment(date).add(-1, 'month').format(),
      });
    }
    if (name === 'nextMonthBtn') {
      this.setState({
        date: moment(date).add(1, 'month').format(),
      });
    }
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  openModal = () => {
    this.setState({ isShowModal: true });
  };

  render() {
    const { exchangeCurrency, balance, exchangeRates } = this.props;
    console.log(exchangeCurrency);
    // console.log(exchangeRates)

    const { date } = this.state;
    return (
      <div className={`${styles.statisticsHeaderWrapper} container`}>
        <div className={styles.leftBar}>
          <div className={styles.buttonGoBack}>
            <Link to="/">
              <ArrowBack />
              <Media query="(min-width: 768px)">
                {matches =>
                  matches ? (
                    <p className={styles.buttonText}>На главную</p>
                  ) : (
                    <p></p>
                  )
                }
              </Media>
            </Link>
          </div>

          <div className={styles.currencyBar}>
            <CurrencyBar />
          </div>

          <div className={styles.exchangeRates}>
            {this.state.isShowModal && (
              <ModalExchangeRates closeModal={this.closeModal} />
            )}
            <label>
              <button
                className={styles.button}
                type="button"
                onClick={this.openModal}
              >
                <Exchange />
              </button>
              <Media query="(min-width: 768px)">
                {matches =>
                  matches ? <p className={styles.buttonText}>Курс</p> : <p></p>
                }
              </Media>
            </label>
          </div>
        </div>
        <div className={styles.rightBar}>
          <div className={styles.calendarWrapper}>
            <Media query="(min-width: 768px)">
              {matches =>
                matches ? (
                  <p className={styles.buttonText}>Текущий период</p>
                ) : (
                  <p></p>
                )
              }
            </Media>

            <div className={styles.calendarContainer}>
              <button
                className={styles.button}
                type="button"
                name="prevMonthBtn"
                onClick={this.handleChangeMonth}
              >
                <PrevMonth />
              </button>
              <p className={styles.calendarText}>
                {date && moment(date).format(' MMMM YYYY')}
              </p>
              <button
                className={styles.button}
                type="button"
                name="nextMonthBtn"
                onClick={this.handleChangeMonth}
              >
                <NextMonth />
              </button>
            </div>
          </div>

          <div>
            <div>
              <p className={styles.balance}>
                Баланс на <span>{moment().format('L')}:</span>
              </p>
              <div className={styles.statisticsHeaderBalance}>
                <span className={styles.statisticsSpan}>{balance} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exchangeRates: exchangeRatesSelectors.getExchangeRates(state),
    isLoadingExhangeRates: exchangeRatesSelectors.getLoading(state),
    exchangeCurrency: exchangeRatesSelectors.getCurrentCurrency(state),
    balance: financeSelectors.getBalance(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchEchangeRates: () =>
    dispatch(exchangeRatesOperations.fetchCurrentExchangeRates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsHeader);
