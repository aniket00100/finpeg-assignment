import React from "react";
import _ from "lodash";

class Pagination extends React.Component {
  state = {
    pageNumbers: [],
    pageWindow: [],
    windowPosition: 1,
    windowSize: 3,
  };

  componentDidMount() {
    let pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.totalFunds / this.props.fundsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    let pageWindow = [];
    for (let i = 1; i <= 3; i++) {
      pageWindow.push(i);
    }
    this.setState({
      ...this.state,
      pageWindow: pageWindow,
      pageNumbers: pageNumbers,
    });
  }

  pageClick = (i) => {};

  getListItem = (i) => {
    return (
      <li className="page-item">
        <a className="page-link" href="!#" onClick={() => this.pageClick(i)}>
          {i}
        </a>
      </li>
    );
  };

  render() {
    console.log(this.state);
    return (
      <div className="p-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {_.map(this.state.pageWindow, this.getListItem)}
          </ul>
        </nav>
      </div>
    );
  }
}
export default Pagination;
