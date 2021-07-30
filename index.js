const mysql=require('mysql')
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Sbc565678',
    port:'3306',
    database:'MyBlog'
})
//connection
con.connect()

//exe sql
//const sql='select * from users;'
//const sql='select id,username from users'
const sql='update users set realname="CCC" where username="aaa"'
con.query(sql,(err,result)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(result)
})

//close connection
con.end()