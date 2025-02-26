import { Todo } from '@/interface/todo';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { todos } from '@/resources/todo';


export async function POST(req: NextRequest) {
    const { id, tag } = await req.json();
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }
    if (!todos[todoIndex].tag) {
        todos[todoIndex].tag = [];
    }
    todos[todoIndex].tag.push(tag);
    return NextResponse.json(todos[todoIndex]);
}
