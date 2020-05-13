/*
 * This is a form handler class.  Depends on Axios
 * Initializes with
 * formId - string - this is the id of the form element in HTML
 * hubKeys - object - {portalId: string, formId:string} - this takes the portalId and formId of Hubspot form
 * fields - array - an array of strings of the names of the fields to submit
 * context - object - and object of key value pairs for post context - optional
 * */

class FormHandler {
  constructor(formId, hubKeys, fields, context){
    this.form = document.getElementById(formId);
    this.hubKeys = hubKeys;
    this.fields = fields;
    this.context = context;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.form.addEventListener('submit', this.handleSubmit)
  }
  
  handleSubmit(e){
    e.preventDefault();
    const formData = [];
    for(let field of this.fields){
      formData.push({
        name: field,
        value: this.form.elements[field].value
      });
    }
    const data = {
        fields: formData
    }
    if(this.context){
      data['context'] = this.context;
    }
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${this.hubKeys.portalId}/${this.hubKeys.formId}`;
    axios.post(endpoint, data)
    .then(res => {
      alert(res.data.inlineMessage);
    })
    .catch(e => console.log(e));
  }
}

