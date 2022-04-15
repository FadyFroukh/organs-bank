import { Typography } from "@mui/material";

function SettingsMenu(){
    return(
        <div className="settings-menu">
            <Typography variant="h5">Settings</Typography>
            <div className="profile">
                <Typography>View Profile</Typography>
            </div>
        </div>
    );
}

export default SettingsMenu;