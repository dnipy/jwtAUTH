function userVALID (req,res,next) {
    const {username , password , admin_Role} = req.body
    
    if (typeof username == "string" && typeof password == "string" , typeof admin_Role == "number"){
        if (username.length > 0 && password.length > 0 ){
            return (
                next()
            )
        }
        else {
            return(
                res.send('length is not valid')
            )
            }
    }
    else{
        return(
            res.send('type is not valid')
        )
    }

}


export {
    userVALID
}