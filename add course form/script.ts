class Course {
    constructor(
      public title: string,
      public price: number,
      public instructor: string,
      public description: string
    ) {}
  
    displayCourseInfo(): void {
      console.log(`Title: ${this.title}`);
      console.log(`Price: ${this.price}`);
      console.log(`Instructor: ${this.instructor}`);
      console.log(`Description: ${this.description}`);
    }
  }
  
  class CourseForm {
    static addCourse(event: Event): void {
      event.preventDefault();
  
      const titleInput = document.getElementById('title') as HTMLInputElement;
      const priceInput = document.getElementById('price') as HTMLInputElement;
      const instructorInput = document.getElementById('instructor') as HTMLInputElement;
      const descriptionInput = document.getElementById('description') as HTMLTextAreaElement;
  
      const title = titleInput.value;
      const price = parseFloat(priceInput.value);
      const instructor = instructorInput.value;
      const description = descriptionInput.value;
  
      const course = new Course(title, price, instructor, description);
      course.displayCourseInfo();
  
      CourseForm.addCourseToTable(course);
  
      // Reset the form
      (document.getElementById('courseForm') as HTMLFormElement).reset();
    }
  
    static addCourseToTable(course: Course): void {
      const tableBody = document.getElementById('courseTableBody') as HTMLTableSectionElement;
      const newRow = tableBody.insertRow();
  
      const titleCell = newRow.insertCell();
      titleCell.textContent = course.title;
  
      const priceCell = newRow.insertCell();
      priceCell.textContent = course.price.toString();
  
      const instructorCell = newRow.insertCell();
      instructorCell.textContent = course.instructor;
  
      const descriptionCell = newRow.insertCell();
      descriptionCell.textContent = course.description;
  
      const deleteCell = newRow.insertCell();
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        tableBody.removeChild(newRow);
      });
      deleteCell.appendChild(deleteButton);
    }
  }
  
  const form = document.getElementById('courseForm') as HTMLFormElement;
  form.addEventListener('submit', CourseForm.addCourse);