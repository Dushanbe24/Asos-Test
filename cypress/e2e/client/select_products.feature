Feature: Select products and Add them to the Cart
The customers select products and add them to the shopping cart,
so they finally end up buying. 

Background: 
Given I navigate to the Home Page
And I click the cookiy button
And I select the button "WOMEN"
And The customer select "Sportwear" button


Scenario: In the Headroom user selects Primary nav
When Customer should see the following in the Shop by Product:
| Discover Sportswear   |
| View all              |
| Trainers              |
| Leggings              |
| Accessories           |
| Tops                  |
| Hoodies & Sweatshirts |
| Jackets               |
| Shorts                |
| Sports bras           |
And Customer selects the "Accessories" product from the dropdown
Then User should see the text "Women's Gym Accessories"
And User can click "View more"


Scenario: User can choose Accessories products and Saved Items
When Customer selects the "Accessories" product from the dropdown
And Customer select the Item saved
And Customer click the icon "Saved Items"
Then Customer viewing the Saved Items
And the User should see welcome message "Hey! Do you want to deliver to Spain?"
And The User select button "Deliver to Spain"


Scenario: Customer can Add to cart Products
When Customer selects the "Accessories" product from the dropdown
And Customer click sort button and choose "Price high to low"
And the User should see welcome message "Hey! Do you want to deliver to Spain?"
And The User select button "Deliver to Spain"
And Customer choose the Product Description
# Then the customer click "Add to bag" button
# And User select the mini bag Icon
# And User should click "Checkout" green button


Scenario: Sign in
When In the My Account icon user can select the "dropdown"
And the Client click "Sigh In"
And Client add cridentials "Email Adreess" and "Password"
Then Click "Sign In" button


