const todos = [
    {
        id:1,
        todo:"Buy milk",
        complete: false
    },
    {
        id:2,
        todo:"Walk dogs",
        complete: false
    },
]


function Todo() {
    return (
        <div>
            <h2> Todo List</h2>

            <ul>
                {
                    todos.map(t =>
                            //here we are not working with strings
                            //key to create something unique identifier
                            <li key={t.todo}>{t.todo}</li>
                        //other way is adding an id in the object an using it in here (key={t.id})


                    )

                }

            </ul>

        </div>

    )
}
export default Todo;