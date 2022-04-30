import { FormControl,  InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow }
 from "@mui/material";
import { useEffect } from "react";
import DeleteCell from "./DeleteCell";
import EditCell from "./EditCell";
function UsersTable({users,usersSort,setUsersSort,setError,setErrorMsg,usersFilter,setUsersFilter,setShow,setInfo,setLoading}){

    useEffect(()=>{
        if(usersSort === ""){
            setUsersFilter(users);

        }else if (usersSort === "m"){
            setUsersFilter(users.filter(user=>user.sex == "m"));
        }
        else if (usersSort === "f"){
            setUsersFilter(users.filter(user=>user.sex == "f"));
        }else if (usersSort === 0){
            setUsersFilter(users.filter(user=>user.status == 0));
        }
        else if (usersSort === 10){
            setUsersFilter(users.filter(user=>user.status == 1));
        }
        else if (usersSort === 20){
            setUsersFilter(users.filter(user=>user.status == 2));
        }
        else if (usersSort === 30){
            setUsersFilter(users.filter(user=>user.rule == 0));
        }
        else if (usersSort === 40){
            setUsersFilter(users.filter(user=>user.rule == 1));
        }
        else if (usersSort === 50){
            setUsersFilter(users.filter(user=>user.rule == 2));
        }
    },[usersSort,users])

    return(
        <>
        <div className="admin-filter">
        <FormControl sx={{m:1,minWidth:200}}>
            <InputLabel variant="outlined">Filter By</InputLabel>
            <Select className="sort-data" value={usersSort} onChange={(e)=>setUsersSort(e.target.value)}>
                <MenuItem value="m">Gender : Male</MenuItem>
                <MenuItem value="f">Gender : Female</MenuItem>
                <MenuItem value={0}>Status : Pending</MenuItem>
                <MenuItem value={10}>Status : Denied</MenuItem>
                <MenuItem value={20}>Status : Accepted</MenuItem>
                <MenuItem value={30}>Rule : Not Known</MenuItem>
                <MenuItem value={40}>Rule : Patient</MenuItem>
                <MenuItem value={50}>Rule : Donor</MenuItem>
            </Select>
        </FormControl>
        {/* Add Search Here */}
        <div className="admin-reset">
            <span onClick={()=>setUsersSort("")}>Reset Filter</span>
        </div>
    </div>
        <div className="users-table table">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                           <TableCell>User ID</TableCell>
                           <TableCell>FirstName</TableCell>
                           <TableCell>LastName</TableCell>
                           <TableCell>Password (Encrypted)</TableCell>
                           <TableCell>Phone</TableCell>
                           <TableCell>Address</TableCell>
                           <TableCell>Email</TableCell>
                           <TableCell>Age</TableCell>
                           <TableCell>ID Number</TableCell>
                           <TableCell>Gender</TableCell>
                           <TableCell>Status</TableCell>
                           <TableCell>Rule</TableCell>
                           <TableCell>Delete</TableCell>
                           <TableCell>Edit</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                users.length > 0 ?  usersFilter.length > 0 ? 
                                usersFilter?.map(user=>(
                                    <TableRow key={user._id}>
                                        <TableCell>{user._id}</TableCell>
                                        <TableCell>{user.firstName}</TableCell>
                                        <TableCell>{user.lastName}</TableCell>
                                        <TableCell>{user.password}</TableCell>
                                        <TableCell>{user.phone}</TableCell>
                                        <TableCell>{user.address}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.age}</TableCell>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>
                                            {user.sex === "m" ? "Male" : "Female"}
                                        </TableCell>
                                        <TableCell>
                                        {
                                            user.status === 0 ? "Pending" : user.status === 1 ? "Denied" : 
                                            user.status === 2 ? "Accepted" : null
                                        }
                                        </TableCell>
                                        <TableCell>
                                        {
                                            user.rule === 0 ? "Not Known Yet" : user.rule === 1 ? "Patient" : 
                                            user.rule === 2 ? "Donor" : null
                                        }
                                        </TableCell>
                                        <DeleteCell endPoint="users" id={user._id} setError={setError} 
                                        setErrorMsg={setErrorMsg} setItemsFilter={setUsersFilter} items={users}
                                        setLoading={setLoading}
                                        />
                                        <EditCell item={user} setShow={setShow} setInfo={setInfo}/>
                                    </TableRow>
                                ))
                                 : <TableRow><TableCell>No Data</TableCell></TableRow> :
                                 <TableRow><TableCell>No Data</TableCell></TableRow>
                              
                            }
                        </TableBody>
                    </Table>
            </TableContainer>        
        </div>
    </>
    );
}

export default UsersTable;