// import React, { useState } from "react";
// import { useTodo } from "../context/TodoContext";

// const AddTodoModal = () => {
//     const [todo, setTodo] = useState('')
//     const {addTodo} = useTodo()

    
//   return (
//     <dialog id="my_modal_2" className="modal">
//       <div className="modal-box">
//         <form onSubmit={() => addTodo(todo)} className="flex flex-col justify-center space-y-3 h-[30vh]">
//             <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" className="outline-none rounded-md border px-2 py-1 border-third-color" />
//             <button type="submit" className="bg-third-color px-4 py-2 rounded-md text-white w-[50%] mx-auto">Add Todo</button>
//         </form>
//       </div>
//       <form method="dialog" className="modal-backdrop">
//         <button>close</button>
//       </form>
//     </dialog>
//   );
// };

// export default AddTodoModal;















import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const AddTodoModal = () => {
    const [todo, setTodo] = useState('');
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    };

    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-3 h-[30vh]">
                    <input
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        type="text"
                        className="outline-none rounded-md border px-2 py-1 border-third-color"
                    />
                    <button type="submit" className="bg-third-color px-4 py-2 rounded-md text-white w-[50%] mx-auto">
                        Add Todo
                    </button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default AddTodoModal;
