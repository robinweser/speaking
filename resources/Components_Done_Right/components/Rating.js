import { Component } from "react";

import Loading from "./Loading";
import Stars from "./Stars";

export default class Rating extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      rating: undefined,
      isLoading: false,
      error: false
    };
  }

  fetchData = () => {
    const { id } = this.props;
    const update = this.setState.bind(this);

    update({ isLoading: true });
    setTimeout(
      () =>
        fetch("/static/RatingData.json")
          .then(res => res.json())
          .then(data =>
            update({
              rating: parseInt(data[id]),
              isLoading: false,
              error: false
            })
          ),
      Math.random() * 5000
    );
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { rating, isLoading } = this.state;

    if (isLoading) {
      return <Loading size={20} />;
    }

    return <Stars count={rating} />;
  }
}
