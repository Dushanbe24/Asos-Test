
Feature: Shoping Web Page
The online store customers can see the pages to select products, 
and add them to the shopping cart.

Background: 
Given I navigate to the Home Page
And I click the cookiy button
When I select the button "WOMEN"


Scenario: Header
Then I should see in the header "ASOS" logo
And I can see the floornav "WOMEN" and "MEN"


Scenario: Customer can see the Search form
Then I should see the search form "Search for items and brands"


Scenario Outline: User can see the Widgets and <dropdown>
When User see in the header widget icon "My Account"
And In the My Account icon user can select the "dropdown"
And the <dropdown> User should see field
Then User should be see "Saved Items" and "Mini Bag Icon"
 Examples:
 | dropdown            |
 | Sign In             |
 | Join                |
 | My Account          |
 | My Orders           |
 | My Returns          |
 | Returns Information |
 | Contact Preferences |       


Scenario: User can select the Heedroom
Then Customer viewing for a "WOMEN" page
And I should see the following headroom:
| New in      |
| Clothing    |
| Dresses     |
| Shoes       |
| Sportswear  |
| Accessories |
| Winter      |
| Topshop     |
| Face + Body |
| Brands      |
| Marketplace |
| Outlet      |

