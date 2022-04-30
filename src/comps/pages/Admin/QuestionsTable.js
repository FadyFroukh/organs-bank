import { useEffect } from "react";
import DeleteCell from "./DeleteCell";
import EditCell from "./EditCell";
const { TableContainer, Table, TableHead, TableRow, 
    TableCell, TableBody, Paper, FormControl, InputLabel, Select, MenuItem 
} = require("@mui/material");

function QuestionsTable(questions,questionsSort,setQuestionsSort,setError,setErrorMsg,
    questionsFilter,setQuestionsFilter,setLoading){

        useEffect(()=>{
            if(questionsSort === ""){
                setQuestionsFilter(questions);
            }else if (questionsSort === 0){
                setQuestionsFilter([]);
            }else if (questionsSort === 1){
                setQuestionsFilter([]);
            }
        },[questionsSort,questions])

    return(
        <>
            <div className="admin-filter">
                <FormControl sx={{m:1,minWidth:200}}>
                    <InputLabel variant="outlined">Filter By</InputLabel>
                <Select className="sort-data" value={""} onChange={(e)=>setQuestionsSort(e.target.value)}>
                    <MenuItem value={0}>Last Added</MenuItem>
                    <MenuItem value={1}>First Added</MenuItem>
                </Select>
                </FormControl>
                <div className="admin-reset">
                    <span onClick={()=>setQuestionsSort("")}>Reset Filter</span>
                </div>
            </div>
            <div className="questions-table table">
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Question ID</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>Message Topic</TableCell>
                                <TableCell>Message Body</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                questions.length > 0? questionsFilter.length > 0 ? 
                                questionsFilter?.map(question=>(
                                    <TableRow key={question._id}>
                                        <TableCell>{question._id}</TableCell>
                                    </TableRow>
                                )) : <TableRow><TableCell>No Data</TableCell></TableRow> : 
                                <TableRow><TableCell>No Data</TableCell></TableRow> 
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default QuestionsTable;