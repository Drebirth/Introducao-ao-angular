import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void{
            this.courses = [
                {
                    id: 1,
                    name: 'Angular: Forms',
                    imageUrl: '/assets/images/forms.png',
                    price: 99.99,
                    code: 'XPS-8796',
                    duration: 120,
                    rating: 4.5,
                    releaseDate: 'Dezembro, 2, 2019'
                },
                {
                    id: 2,
                    name: 'Angular: HTML5',
                    imageUrl: '/assets/images/http.png',
                    price: 79.99,
                    code: 'ZYS-9796',
                    duration: 120,
                    rating: 4,
                    releaseDate: 'Dezembro, 4, 2019'
                }
            ]
        
        }



}