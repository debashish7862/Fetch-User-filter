import './UserDetails.css'
import { useState,useEffect } from 'react'

export default function UserDetails(props) {

const [user,setUser]=useState([]) //use setstate



useEffect(()=>{    //use use effects
    allUser()
},[])



//my fetch method
const allUser=()=>{                
    fetch("https://randomuser.me/api/?results=20")
    .then((res)=>res.json())
    .then((data) =>{
        console.log(data)
       setUser(data.results) 
        
    })
}
console.log(user)



//for male filter

const maleUserList=user.filter((genderIs)=>{         

 return genderIs.gender==='male';    
})
console.log(maleUserList)





  //for male on change
const maleUser=()=>{                      
    
   setUser(maleUserList)
     
}


 //for female filter
const femaleUserList=user.filter((genderIs)=>{        

    return genderIs.gender==='female';    
   })
   console.log(femaleUserList)



     // female onchange switch

   const femaleUser=()=>{                       
    
    setUser(femaleUserList)
      
 }

  return (
    <div>
        <h3>User Details</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel iusto accusamus explicabo eaque perspiciatis similique eveniet deleniti soluta totam! Voluptate, sunt perspiciatis! Quis, atque laboriosam. Cupiditate libero minus, voluptatibus dolore quasi maiores asperiores quo optio sunt in nisi exercitationem aliquam error eaque laudantium, autem placeat dolor soluta recusandae reprehenderit repellendus quidem? Iure, reiciendis a quasi provident nam corrupti culpa fugiat iusto dolorum est laudantium, eveniet dicta doloremque qui quibusdam veniam laboriosam ex pariatur quisquam ea voluptatem expedita laborum. Id magni optio voluptatem est quod adipisci quam obcaecati animi, quae deleniti? Nobis recusandae provident possimus quae? Quia, quidem corrupti placeat accusantium rerum voluptatem voluptatibus magni earum tempore natus provident, aperiam nesciunt qui eligendi ducimus optio obcaecati cumque! Vel, maiores similique. Consequuntur dolorum incidunt non perspiciatis, iste voluptas. Vero ex excepturi nisi. Enim, autem odit. Molestias perferendis voluptas modi quia iure pariatur placeat natus? Itaque praesentium, eos ad doloribus suscipit distinctio blanditiis, quaerat culpa est, ipsam consequatur aliquam? Qui voluptatum magni maiores voluptatem, earum aut labore dolor quaerat exercitationem sunt ab accusantium in hic atque voluptatibus quia! Veritatis dolorum laboriosam cupiditate, libero vitae animi qui ut labore repellendus fugiat aliquid hic reprehenderit odio nobis, illum nostrum aut quidem debitis. Eveniet, accusantium.</p>
        <div className='button'>
            <div>
                <input type="radio" id='all' name='user' onChange={allUser} />
            <label  >All</label>
            </div>
            <div>
                <input type="radio" id='male' name='user' onChange={maleUser}  />
            <label >Male</label>
            </div>
            <div>
                <input type="radio" id='female' name='user' onChange={femaleUser}/>
            <label >Female</label>
            </div>
         </div>
    {
   user.length>0 && 
   <table cellPadding={10} style={{width:"95%",margin:"50px auto"}}>
            <thead >
                <tr className='tableHead'>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>GENDER</th>
                </tr>

            </thead>
            <tbody>
                { 
                user.map((ele)=>{
                    return<tr>
                        <td><img src={ele.picture.thumbnail}/></td>
                        <td>{ele.name.title}{" "}{ele.name.first}{" "}{ele.name.last}</td>
                        <td>{ele.email}</td>
                        <td>{ele.gender}</td>
                    </tr>
                })

                }

            </tbody>


        </table>
    }
         



        
        




    </div>
  )
}

