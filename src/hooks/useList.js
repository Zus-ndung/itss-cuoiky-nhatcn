import React from "react"
const useList = () =>{
    const [studentList, setStudentList] = React.useState([
        {
            id: 1,
            name: "Huyen"
        },
        {
            id: 2,
            name: "Hoa"
        },
        {
            id: 3,
            name: "Hung"
        },
        {
            id: 4,
            name: "Long"
        }
    ])
    const [studentSearch, setStudentSearch] = React.useState({id: -1})
    const searchStudent = (name) => {
       const index = studentList.findIndex((item, index) => item.name === name);
       setStudentSearch(() => index > -1 ? studentList[index] : "")
    }
    return [studentList, studentSearch, {searchStudent}]
}
export default useList;