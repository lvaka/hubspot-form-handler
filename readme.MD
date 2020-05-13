# HubSpot Form Handler Snippet 
This is a simple class that will handle JavaScript logic for custom forms.  Requires Axios library to work.  You could also easily switch out the axios code for the native Fetch feature in ES6.
 
Build the form in normal HTML5 format.  Make sure names of inputs match the Hubspot form name.  The form should have an ID, this allows multiple form handlers on the same page in the case you have multiple forms. 
 
Initialize form with ```new FormHandler(formId, hubKeys, fields, context ~optional)``` 
 
formId - a string which should be the ID of the form  
hubKeys - an object that contains the portalId and formId of your HubSpot form ie ```{portalId: hs-portalID, formId: hs-formId}```.  You can get these values from the embed snippet.  
fields - an array of the field names.  This quickly finds the fields and values in your form on submit.  
context - an object to provide context of hubspot capture.  This is optional, but helpfull for tracking  



