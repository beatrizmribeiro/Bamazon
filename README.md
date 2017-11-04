# Bamazon

### Overview
In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this week. 
The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to 
track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.
Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.


1. Running bamazonCustomer.js application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
<img width="935" alt="picture1" src="https://user-images.githubusercontent.com/26562326/32402902-36732140-c0eb-11e7-9f74-49f4797a4e48.png">


2. The app should then prompt users with two messages.
* The first should ask them the ID of the product they would like to buy.
* The second message should ask how many units of the product they would like to buy.
<img width="937" alt="picture2" src="https://user-images.githubusercontent.com/26562326/32402911-521c9d36-c0eb-11e7-82bc-d59689b7ecb3.png">

3. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request. if your store does have enough of the product, you should fulfill the customer's order. Once the update goes through, show the customer the total cost of their purchase.
<img width="936" alt="picture3" src="https://user-images.githubusercontent.com/26562326/32402912-58d95024-c0eb-11e7-9d41-39c0ba76b318.png">


4. if not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
<img width="934" alt="picture4" src="https://user-images.githubusercontent.com/26562326/32402915-5e5636ca-c0eb-11e7-9647-053ec429ef42.png">
<img width="935" alt="picture5" src="https://user-images.githubusercontent.com/26562326/32402920-687e691a-c0eb-11e7-93f6-3cdd9da7b1c3.png">
