import "../Styles/StudentRegisterStyles.css";

function StudentRegister() {
    return ( 
        <>
        <div className="stdreg-container">
            <div className="stdreg">
                <form>
                    <div className="grid1">
                        <div className="form-group-1">
                            <label htmlFor="email">Email</label>
                            <input name="email" placeholder="Example@gmail.com" />
                        </div>
                        <div  className="form-group-1">
                            <label htmlFor="indexNo">A/L Index No</label>
                            <input name="indexNo" placeholder="Index Number"/>
                        </div>
                        <div className="form-group-1">
                            <label htmlFor="age">Age</label>
                            <input name="age" placeholder="Age"/>
                        </div>
                    </div>

                    <div className="grid1">
                        <div className="form-group-1">
                            <label htmlFor="fname">First Name</label>
                            <input name="fname" placeholder="First Name"/>
                        </div>
                        <div  className="form-group-1">
                            <label htmlFor="lname">Last Name</label>
                            <input name="lname" placeholder="Last name"/>
                        </div>
                        <div className="form-group-1">
                            <label htmlFor="al-result1">A/L Results</label>
                            <div className="grid2">
                                <input  name="mathematics" placeholder="Mathamatics" />
                                <input className="input-wrapper"name="physics" placeholder="Physics"/>
                                <input className="input-wrapper" name="chemistry" placeholder="Chemistry"/>
                                <input className="input-wrapper" name="english" placeholder="Ad-English" />
                            </div>
                        </div>
                    </div>

                    <div className="grid1">
                        <div className="form-group">
                            <label htmlFor="phno">Phone Number</label>
                            <input name="phno" placeholder="+94 771234567" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input name="dob" placeholder="00/00/0000"/>
                        </div>
                        <div  className="form-group">
                            <label htmlFor="zscore">Z-Score</label>
                            <input name="zscore" placeholder="Z-Score"/>
                        </div>
                        <div  className="form-group">
                            <label htmlFor="rank">District Rank</label>
                            <input name="rank" placeholder="District Rank"/>
                        </div>
                    </div>

                    <div className="grid1">
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input name="address" placeholder="Address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="school">School</label>
                            <input name="school" placeholder="School" />
                        </div>
                    </div>
                    <button type="register" className="btn">
                        REGISTER
                    </button>
                </form>
            </div>
        </div>
        </>
     );
}

export default StudentRegister;