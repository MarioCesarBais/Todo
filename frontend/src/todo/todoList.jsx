import React from "react";

export default props => {

    const renderRows = () => {
        return (
            <tr><td>ok</td></tr>
        )
    }

    return (
    <table className="table">
        <thead>
            <tr>
                <th>Descriçãp</th>
            </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
    </table>
    )
}