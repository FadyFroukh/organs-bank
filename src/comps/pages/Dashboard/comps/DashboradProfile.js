import { Close } from "@mui/icons-material";
import { Typography } from "@mui/material";

function DashboardProfile({setShowProfile,user}){
    return(
        <div className="dashboard-profile">
            <div className="profile-items">
                <header>
                    <Typography paragraph>Profile Data</Typography>
                    <Close onClick={()=>setShowProfile(false)}/>
                </header>
                <div className="profile-data">
                    <div className="profile-data-section">
                        <div className="profile-data-field">User ID : <b>{user._id}</b></div>
                        <div className="profile-data-field">First Name : <b>{user.firstName}</b></div>
                        <div className="profile-data-field">Last Name : <b>{user.lastName}</b></div>
                    </div>
                    <div className="profile-data-section">
                        <div className="profile-data-field">E-mail Address : <b>{user.email}</b></div>
                        <div className="profile-data-field">User Address : <b>{user.address}</b></div>
                        <div className="profile-data-field">User Phone Number : <b>0{user.phone}</b></div>
                    </div>
                    <div className="profile-data-section">
                        <div className="profile-data-field">User Age : <b>{user.age}</b></div>
                        <div className="profile-data-field">User Personal ID : <b>{user.id}</b></div>
                        <div className="profile-data-field">User Gender : <b>
                            {user.sex === "m" ? "Male" : "Female"}
                            </b></div>
                    </div>
                    <div className="profile-data-section">
                        <div className="profile-data-field">Account Status : <b>
                            {user.status === 0 ? "Pending" : null}
                            {user.status === 1 ? "Denied" : null}
                            {user.status === 2 ? "Accepted" : null}
                            </b></div>
                        <div className="profile-data-field">User Rule : <b>
                            {user.rule === 0 ? "Not Known Yet" : null}
                            {user.rule === 1 ? "Patient" : null}
                            {user.rule === 2 ? "Donor" : null}
                            </b></div>
                        <div className="profile-data-field"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardProfile;