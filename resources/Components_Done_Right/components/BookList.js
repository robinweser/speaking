import { Component } from "react";

import BookListItem from "./BookListItem";
import Loading from "./Loading";

export default class BookList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      books: [],
      isLoading: false
    };
  }

  fetchData = () => {
    const update = this.setState.bind(this);

    update({
      isLoading: true
    });

    setTimeout(
      () =>
        fetch("/static/BookData.json")
          .then(res => res.json())
          .then(data =>
            update({
              books: data,
              isLoading: false
            })
          ),
      2000
    );
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { books, isLoading } = this.state;

    return (
      <div
        style={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: "absolute",
          display: "flex",
          overflow: "auto",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        {isLoading ? (
          <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
            <Loading size={50} />
          </div>
        ) : (
          Object.keys(books).map(id => (
            <BookListItem
              key={id}
              id={id}
              author={books[id].author}
              title={books[id].title}
            />
          ))
        )}
      </div>
    );
  }
}
