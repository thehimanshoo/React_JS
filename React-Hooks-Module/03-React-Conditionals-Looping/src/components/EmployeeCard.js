import React, {useState} from "react";

let EmployeeCard = () => {
    let [employees , setEmployees] = useState([
        {
            sno : 'AAA100',
            name : 'Rajan',
            age : 25,
            designation : 'Software Engineer',
            location : 'Hyderabad'
        },
        {
            sno : 'AAA101',
            name : 'Mahesh',
            age : 35,
            designation : 'Sr.Software Engineer',
            location : 'Bangalore'
        },
        {
            sno : 'AAA103',
            name : 'John',
            age : 40,
            designation : 'Project Manager',
            location : 'Chennai'
        },
        {
            sno : 'AAA104',
            name : 'Wilson',
            age : 55,
            designation : 'Director',
            location : 'Bangalore'
        }
    ]);

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        {
                            employees.map(employee => {
                                return(
                                    <div key={employee.sno} className="card m-2">
                                        <div className="card-body bg-light">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    SNO : {employee.sno}
                                                </li>
                                                <li className="list-group-item">
                                                    NAME : {employee.name}
                                                </li>
                                                <li className="list-group-item">
                                                    AGE : {employee.age} Yrs
                                                </li>
                                                <li className="list-group-item">
                                                    DESIGNATION : {employee.designation}
                                                </li>
                                                <li className="list-group-item">
                                                    LOCATION : {employee.location}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default EmployeeCard;
