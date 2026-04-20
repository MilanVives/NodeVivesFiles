const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const Author = mongoose.model('Author', new mongoose.Schema({
  name: String,
  bio: String,
  website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
}));

async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course
    .find()
    .select('name author');  // 'author' must be selected for populate() to show in output
  console.log(courses);
}

createAuthor('Vives', 'My bio', 'My Website');

// Step 1: copy the _id from the output above, paste it below, then uncomment:
// createCourse('Node Course', 'PASTE_AUTHOR_ID_HERE');

// Step 2: once a course exists, uncomment to list courses:
// listCourses();
