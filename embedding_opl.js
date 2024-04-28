const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId){
  const course = await Course.findById(courseId);
  course.author.name = 'M. Dima';
  course.save();
}


async function updateAuthor(courseId){
  const course = await Course.findByIdAndUpdate({
    _id: courseId}, {
      $set: {
        'author.name': 'Vives'
      }
    })
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save()

}

async function removeAuthor(courseId, authorId){
  const course = await Course.findById(courseId);
  const index = course.authors.findIndex((obj) => obj._id == authorId);
  course.authors.splice(index, 1);
  course.save();  
}

/* OLD WAY TO REMOVE AUTHOR

async function removeAuthor(courseId, authorId){
    const course = await Course.findById(courseId);
    const author = course.authors.id(authorId);
    author.remove();
    course.save();   //Opgelet vorige versies author.save()
}
*/



//Variables for courses
const courseName = 'Node Course';
const authors= [ new Author({ name: 'Vives' }), new Author({ name: 'M. DIma'})]
/*
createCourse(courseName, authors);
*/


//Variables for update, add and remove Author
const courseId = '';
const authorId = '';

//updateAuthor('courseId');
//addAuthor('courseId', new Author({name: 'test'}))
//removeAuthor('courseId','authorId');
