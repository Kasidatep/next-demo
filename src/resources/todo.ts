import { Todo } from "@/interface/todo";

export const todos: Todo[] = [
    {
        id: "1",
        title: 'Buy groceries',
        completed: false,
        createAt: new Date(),
        tag: ['shopping'],
        image: null,
        description: '<p>Remember to buy fruits and vegetables.</p>',
    },
    {
        id: "2",
        title: 'Walk the dog',
        completed: true,
        doneAt: new Date(),
        createAt: new Date(),
        tag: ['pets'],
        image: null,
        description: '<p>Take the dog to the park and spend at least 30 minutes.</p>',
    },
    {
        id: "3",
        title: 'Do laundry',
        completed: false,
        createAt: new Date(),
        tag: ['household'],
        image: null,
        description: '<p>Sort clothes by color and use appropriate detergent.</p>',
    },
];
