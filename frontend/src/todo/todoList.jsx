import React from "react";

export default props => {

    const list = props.list || []
    const renderRows = () => {
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}