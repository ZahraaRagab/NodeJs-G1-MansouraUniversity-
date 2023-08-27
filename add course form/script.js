var Course = /** @class */ (function () {
    function Course(title, price, instructor, description) {
        this.title = title;
        this.price = price;
        this.instructor = instructor;
        this.description = description;
    }
    Course.prototype.displayCourseInfo = function () {
        console.log("Title: ".concat(this.title));
        console.log("Price: ".concat(this.price));
        console.log("Instructor: ".concat(this.instructor));
        console.log("Description: ".concat(this.description));
    };
    return Course;
}());
var CourseForm = /** @class */ (function () {
    function CourseForm() {
    }
    CourseForm.addCourse = function (event) {
        event.preventDefault();
        var titleInput = document.getElementById('title');
        var priceInput = document.getElementById('price');
        var instructorInput = document.getElementById('instructor');
        var descriptionInput = document.getElementById('description');
        var title = titleInput.value;
        var price = parseFloat(priceInput.value);
        var instructor = instructorInput.value;
        var description = descriptionInput.value;
        var course = new Course(title, price, instructor, description);
        course.displayCourseInfo();
        CourseForm.addCourseToTable(course);
        // Reset the form
        document.getElementById('courseForm').reset();
    };
    CourseForm.addCourseToTable = function (course) {
        var tableBody = document.getElementById('courseTableBody');
        var newRow = tableBody.insertRow();
        var titleCell = newRow.insertCell();
        titleCell.textContent = course.title;
        var priceCell = newRow.insertCell();
        priceCell.textContent = course.price.toString();
        var instructorCell = newRow.insertCell();
        instructorCell.textContent = course.instructor;
        var descriptionCell = newRow.insertCell();
        descriptionCell.textContent = course.description;
        var deleteCell = newRow.insertCell();
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            tableBody.removeChild(newRow);
        });
        deleteCell.appendChild(deleteButton);
    };
    return CourseForm;
}());
var form = document.getElementById('courseForm');
form.addEventListener('submit', CourseForm.addCourse);
