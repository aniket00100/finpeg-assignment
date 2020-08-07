import React from "react";
import _ from "lodash";

import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import Funds from "../../assets/funds.json";

class CardGroup extends React.Component {
  state = {
    allFunds: [],
    currentPage: 1,
    fundsPerPage: 10,
    indexOfLastFund: 10,
    indexOfFirstFund: 0,
    currentFunds: [],
  };

  componentDidMount() {
    let allFunds = Funds.result.funds;
    let currentFunds = allFunds.slice(
      this.state.indexOfFirstFund,
      this.state.indexOfLastFund
    );

    this.setState({
      ...this.state,
      allFunds: allFunds,
      currentFunds: currentFunds,
    });
  }

  getCards = (record) => {
    return (
      <Card
        name={record.name}
        key={record.UID}
        cardID={record.finpegCode}
      ></Card>
    );
  };

  paginate = () => {};

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            {_.map(this.state.currentFunds, this.getCards)}
          </div>
        </div>
        <Pagination
          fundsPerPage={this.state.fundsPerPage}
          totalFunds={this.state.allFunds.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}
export default CardGroup;
