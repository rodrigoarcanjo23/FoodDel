import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    fistName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',

  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrder = async (event) => {
      event.preventDefault();
      let orderItems = [];
      food_list.map((item) =>{
        if (cartItems[item._id]>0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo)
        }
      })
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2,
      }
      let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
      if (response.data.success) {
        const {session_url} = response.data;
        window.location.replace(session_url);
      }
     else{
      alert("Falha ao fazer o pedido");
     }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0)
    {
      navigate('/cart')
    }
  },[])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className='title'>Informações de Entrega</p>
        <div className="multi-fields">
          <input required name='fistName' onChange={onChangeHandler} value={data.fistName} type="text" placeholder='Nome' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Sobrenome' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Endereço de Email' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Rua' />
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='Cidade' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='Estado' />
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='CEP' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='País' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Telefone' />
      </div>
      <div className="place-order-right">

        <div className="cart-total">
          <h2>Totais do carrinho</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>R${getTotalCartAmount()},00</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Taxa de entrega</p>
              <p>R${getTotalCartAmount() === 0 ? 0 : 2},00</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>R${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2},00</b>
            </div>
          </div>
          <button type='submit'>CONFIRMAR PAGAMENTO</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
