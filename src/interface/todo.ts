export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    expiredAt?: Date | null;
    doneAt?: Date | null;
    createAt: Date;
    tag?: string[];
    image?: string | null;
    description?: string;
    metadata?: Record<string, any>;
}
