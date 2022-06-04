import { useState } from "react";

const { TableCell } = require("@mui/material");

function DownloadCell({fileName}){

    const [url,setUrl] = useState("");

    const download = ()=>{
        setUrl("http://localhost:4000/pdf/" + fileName);
    }

    const sty = {cursor:"pointer",color:"#000",textDecoration:"none"}

    return(
        <TableCell><p onClick={download}><b><a href={url} target="_blank" style={sty}>{fileName}</a></b></p></TableCell>
    );
}

export default DownloadCell;