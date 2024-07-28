import { NextRequest, NextResponse } from 'next/server';

type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

const todos: Todo[] = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Walk the dog', completed: true },
    { id: 3, title: 'Do laundry', completed: false },
];

export async function GET() {
    return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
    const { title } = await req.json();
    const newTodo: Todo = { id: todos.length + 1, title, completed: false };
    todos.push(newTodo);
    return NextResponse.json(newTodo, { status: 201 });
}
