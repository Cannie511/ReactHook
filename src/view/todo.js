const Todo = ({ todo, deleteTodo }) => {
  const handleClickDel = (id) => {
    // alert("id: "+id);
    // console.log(id)
    deleteTodo(id)
  }
  return (
    <>
      <li key={todo.id}>{todo.title} -- <span onClick={() => handleClickDel(todo.id)}>Delete</span></li>
    </>
  );
};
export default Todo;
