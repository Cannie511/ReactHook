const Todo = (props) => {
  const todo = props.todo;
  console.log(">>check props: ", props);
  return (
    <>
      <li key={todo.id}>{todo.title}</li>
    </>
  );
};
export default Todo;
