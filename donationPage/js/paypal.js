
  paypal.Buttons({
      style:{
        color:'black',
        background:'white',
        shape:'pill'
      },
    createOrder: function(data, actions) {
        const value=((document.querySelector('.amount-preset > span.active')==null ? null : document.querySelector('.amount-preset > span.active').textContent) || document.getElementById('custom-donation').value).replace('₹','')
        console.log(value)
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: value
        }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Transaction completed by ' + details.payer.name.given_name);
      });
    },
    onCancel:function(data){
        console.log("Payment canceled",data);
    }
  }).render('#paypal-button-container'); // Display payment options on your web page
