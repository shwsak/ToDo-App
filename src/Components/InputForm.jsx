function InputForm(props) {
    return ( 
        <form className='lists' onSubmit={props.handleSubmit}>
            <input type="text" value={props.toDo} onChange={(e) => props.setToDo(e.target.value)} placeholder="Your Task" />
            <button type="submit">Add</button>
        </form>
        
 );
}

export default InputForm;