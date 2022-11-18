# kredoinc
REST API Challenge

Challenge Overview 

 

Create a small app that has a .NET Core backend that feeds data to a React / NextJS front end. This app will display a set of categories, then the products in those categories, then the details of a product. 

 

There are general outlines of what the types of data are. It is up to you on how you relate categories to products. 

 

As a bonus it would be great if this app ran in a docker container. 

Technology Stack 

MERN STACK

React / NextJS using JSX or TypeScript 

In-Memory Database 

 

API Requirements 

This API will be used to display products in categories 

 

Data Model 

Category 

ID: Guid 

Name: string (250 chars) 

 

Product 

ID: Guid 

Name: string (250 chars) 

Price: decimal 

Description: string (1500 chars) 

 

End Points 

GET /api/category 

This will get all the categories 

 

GET /api/category/{id} 

This will get all the products inside a category. 

 

GET /api/product/{id} 

This will get the details of a product 
