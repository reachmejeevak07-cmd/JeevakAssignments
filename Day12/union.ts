type PaymentMethod = "UPI" | "CreditCard" | "PayPal" 


function makePayment(paymentname:PaymentMethod){


    if (paymentname==="UPI") {
        console.log("The Payment method is UPI");     
    }
}
makePayment("UPI")
makePayment("CreditCard")

