// Define the Emitter interface
interface Emitter {
    // Send an event
    emit(channel: string, value: unknown): void;
    // Do something when an event is sent
    on(channel: string, f: (value: unknown) => void): void;
}

// Define the Events type
type Events = {
    ready: void;
    error: Error;
    reconnecting: { attempt: number, delay: number };
}

// Define the RedisClient type using mapped types
type RedisClient = {
    on<E extends keyof Events>(event: E, f: (arg: Events[E]) => void): void;
    emit<E extends keyof Events>(event: E, arg: Events[E]): void;
}
