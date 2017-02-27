export default function() {
  // this.urlPrefix = '';
  // this.namespace = '';
  //this.timing = 1400;

  this.get('/eventos');
  this.post('/eventos');
  this.get('/eventos/:id');
  this.put('/eventos/:id');
  this.patch('/eventos/:id');
  this.del('/eventos/:id');
}
