function TaskList(props) {
  return (
    <ul>
      {
        props.toDos.map((t) => (
          <li key={t.id}>
            {
              props.editId == t.id ?
                <input className="textToDo" placeholder={t.toDo} ref={props.editRef} /> :
                <input className="textToDo" value={t.toDo} readOnly style={{ background: "transparent", border: "none" }} />
            }
            {
              props.editId == t.id ?
                <button onClick={props.saveEdit}>Save</button> :
                <>

                  <button onClick={ () =>  props.handleEdit(t.id) }>Edit</button>
                  <button onClick={() =>  props.handleDelete(t.id)}>Delete</button>
                </>
            }
          </li>

        ))}
    </ul>
  );
}

export default TaskList;