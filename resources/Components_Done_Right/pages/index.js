import BookList from "../components/BookList";

const css = `
  * {margin: 0; padding: 0;font-family: Inter UI}
`;

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <BookList />
  </div>
);
