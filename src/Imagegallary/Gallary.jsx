import React, { useState } from 'react'
import Menu from './Menu'
import "./Menu.css"
import Table from 'react-bootstrap/Table';


const Gallary = () => {

      const [items, setItems] = useState(Menu);

      const filterItem=(categItem)=>{
            const updatedItems = Menu.filter((curElem)=>{
                  return curElem.category === categItem;
                  
            })
            setItems(updatedItems);
            console.log("updated items",updatedItems);
            
      }
  return (
    <>
    {/* <Menu/> */}
      <h1 className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
      <hr/>
      <div className='menu-tabs container'>
      <div className='menu-tab d-flex justify-content-around'>
            <button className='btn btn-warning' onClick={()=> filterItem('breakfast')}>Breakfast</button>
            <button className='btn btn-warning' onClick={()=> filterItem('lunch')}>Lunch</button>
            <button className='btn btn-warning' onClick={()=> filterItem('dinner')}>Evening</button>
            <button className='btn btn-warning' onClick={()=> filterItem('evening')}>Dinner</button>
            <button className='btn btn-warning' onClick={()=> filterItem(Menu)}>All</button>


      </div>
      </div>

   {/* my main items section */}
   <div className='menu-items container-fluid mt-5'>
      <div className='row'>
      <div className='col-11 mx-auto'>
      <div className='row my-5'>


          {items.map((elem ) => {
                   const {name, image, price, discription} = elem;
                  console.log("name here",name,image,price,discription);
                   return (
                        

            // <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5'>
            //   <div className='row item-inside'>
            //   {/* for images */}
            //       <div className='col-12 col-md-12 col-lg-4 img-div'>
            //       <img src={image} alt={name} className='img-fluid'/>

            //       </div>
            //       {/* menu discription */}
            //       <div className='col-12 col-md-12 col-lg-8'>
            //       <div className='main-title pt-4 pb-3'>
            //             <h3>{name}</h3>
            //             <p>{discription}</p>
            //       </div>
            //       <div className='menu-price-book'>
            //             <div className='price-book-divide d-flex justify-content-between align-item-center'>
            //                   <h4>price:{price}</h4>

            //                         <button  className='btn btn-primary'>Order Now</button>
            //             </div>
            //             <p>*prices may vary on selected date.</p>
            //       </div>

            //       </div>

            //   </div>    
            // </div>

            <Table striped bordered hover>       
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Price</th>
                <th>Discription</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{image}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{discription}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>

                   )
            })
        }

      </div>

      </div>

      </div>
   </div>

    </>
  )
}


export default Gallary


