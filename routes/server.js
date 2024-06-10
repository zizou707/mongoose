const mongoose= require("mongoose");
 require("dotenv").config({path:".env"});
 const uri=process.env.MONGO_URI;

 mongoose.connect(uri, { })
  .then(async () => {
    console.log('Connected to the database');
    const Person=require("./person_schema");
    const arrayOfPeople=[
        {name:"zahra", age:29, favoriteFoods:["Pizza", "Chips" , "Chocolat"]},
        {name:"eya", age:17 , favoriteFoods:["fastFood", "chocolate", "iceCream"]},
        {name:"mohamed", age:23, favoriteFoods:["spaguetti", "Pizza","salade", "cake"]}

    ]
   
     try {
        const people= await Person.create(arrayOfPeople)
        console.log('People is created', people);
     }
     catch (error) {
        console.error('Error:', error);
      }
      /*find Person by Name:
      const findedPerson= await Person.findOne({name:'mohamed'}).exec();
      console.log('people founded By Name:', findedPerson);
/
/find person by favoride food
const foodFavorite= await Person.findOne({favoriteFoods:'iceCream'})
 console.log('person is:', foodFavorite);
/
/ find Person by Id:
const personId= '664cb4c6e3fdef380cd428af';
const foundById= await Person.findById(personId);
console.log('person is', foundById);
*/
/* find , edit , save:
 const idPerson="664cb4c6e3fdef380cd428af"
 const findId= await Person.findById(idPerson).exec()
 if (findId){
   findId.favoriteFoods.push('hamburger')
 await findId.save()
 console.log('new food added:');

}
else{
    console.log('person not found')
}

  /
/ find and update
const personNameToUpdate='zahra'
const updatedPerson=await Person.findOneAndUpdate(
    { name: personNameToUpdate },
    { age: 20 },
    { new: true }
  ).exec();
console.log('updated', updatedPerson)
/
/ find and delete
const personIdToDelete='664cb4c6e3fdef380cd428b1'
const deletedPerson= await Person.findOneAndDelete(personIdToDelete).exec();
console.log('Deleted', deletedPerson);
/
/ delete many
const personNameToDelete='zahra'
const deletedName= await Person.deleteMany({name:personNameToDelete}).exec();
console.log('All Deleted', deletedName);*/


const peopleWhoLikeBurritos = await Person.find({ favoriteFoods: 'Pizza' })
        .sort('name')
        .limit(2)
        .select('-age')
        .exec();

      console.log('People who like pizza:', peopleWhoLikeBurritos);



})

.catch((error) => {
    console.error('Error connecting to the database:', error);
  });