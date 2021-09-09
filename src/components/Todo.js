import {useState} from "react"
import useList from "../hooks/useList"
function Todo({props}) {
    const [studentList,studentSearch,handleFunction] = useList();
    const [name, setName] = useState("")
    return (
        <div style={{margin:"5%", fontWeight:"bold", width:"20%"}}>
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                <h4>{"学生一覧 :"} &nbsp;</h4>
                <div>[{studentList.map((item, index) => {
                    return item.name
                }).join(", ")}]</div>
            </div>
            <br />
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                <label htmlFor="name">{"検索名前 :"}&nbsp;</label>
                <input value={name} onChange={(event) => setName(event.target.value)} id="name" style={{padding:"5px 5px", marginRight:"10px"}}/>
            </div>
            <br />
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline", justifyContent: "flex-end"}}>
                <button onClick={()=>{handleFunction.searchStudent(name)}} style={{padding:"5px"}}>{"確定"}</button>
            </div>
            <br />
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                <h4>{"検索名前 :"}&nbsp;</h4>
                <div>{name}</div>
            </div>
            <br />
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                <h4>{"位置 : "}&nbsp;</h4>
                <div>{parseInt(studentSearch?.id) == -1?"":parseInt(studentSearch.id)}</div>
            </div>
        </div>
    );
}
export default Todo