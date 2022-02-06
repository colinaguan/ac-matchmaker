const ADMIN = "Admin"
const SPONSOR = "Sponsor"
const VOLUNTEER = "Volunteer"

const UserType = (usertype) => {
    switch (usertype) {
        case 1: 
            return ADMIN
        case 2: 
            return SPONSOR
        case 3: 
            return VOLUNTEER
        default: return ("User type has not been defined")
    }
}

export default UserType