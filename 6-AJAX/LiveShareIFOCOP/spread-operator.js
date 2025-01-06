var objet = {
  firstname: "Alex",
  age: 25,
  email: "alexandre.masson@virtuoworks.com",
  job: "Web Developer"
 };
 
 var objet2 = {
   ...objet,
   lastname: "Masson",
 };
 
 console.log('objet2: ', objet2);
 
 var { lastname, email, ...miettes } = objet2;
 
 console.log('lastname: ', lastname, 'email: ', email, 'miettes: ', miettes);
 
 // var firstname = objet.firstname;
 // var email = objet.email;
 // var job = objet.job;
 
 var { firstname, email, job } = objet;
 
 console.log('prénom : ', firstname, 'courriel : ', email, 'travail : ', job);
 
 var tableau = [{name: "Alex", age: 26}, {name: "William", age: 33}, {name: "Olivier", age: 40}];
 
 tableau.forEach(element => {
   console.log('name: ', element.name, 'age: ', element.age);
 });
 
// Avec la destructuration d'assignation...
 for (const { age, name } of tableau) {
   console.log('name: ', name, 'age: ', age);
 }