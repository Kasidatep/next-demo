import { Todo } from '@/interface/todo';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { todos } from '@/resources/todo';


export async function GET() {
    const response = todos.map(todo => {
        return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            expiredAt: todo.expiredAt,
            createAt: todo.createAt,
            tag: todo.tag,
            image: todo.image,
            description: todo.description,
        }})
    
    return NextResponse.json({
        data: response, updateAt: new Date(), metadata: { total: response.length},
    });
}

export async function POST(req: NextRequest) {
    const { title, expiredAt, tag, image, description } = await req.json();
    const newTodo: Todo = {
        id: uuidv4(),
        title,
        completed: false,
        createAt: new Date(),
        expiredAt: expiredAt ? new Date(expiredAt) : null,
        tag,
        image,
        description,
    };
    todos.push(newTodo);
    return NextResponse.json(newTodo, { status: 201 });
}

export async function PUT(req: NextRequest) {
    const { id, title, expiredAt, tag, image, description, completed } = await req.json();
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }
    const updatedTodo = {
        ...todos[todoIndex],
        title: title ?? todos[todoIndex].title,
        expiredAt: expiredAt ? new Date(expiredAt) : todos[todoIndex].expiredAt,
        tag: tag ?? todos[todoIndex].tag,
        image: image ?? todos[todoIndex].image,
        description: description ?? todos[todoIndex].description,
        completed: completed ?? todos[todoIndex].completed,
        doneAt: completed ? new Date() : todos[todoIndex].doneAt,
    };
    todos[todoIndex] = updatedTodo;
    return NextResponse.json(updatedTodo);
}

export async function PATCH(req: NextRequest) {
    const { id, completed } = await req.json();
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }
    todos[todoIndex].completed = completed;
    todos[todoIndex].doneAt = completed ? new Date() : null;
    return NextResponse.json(todos[todoIndex]);
}

