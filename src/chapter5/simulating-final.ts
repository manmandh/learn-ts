class MessageQueue {
    private constructor(private messages: string[]) {}

    static create(messages: string[]): MessageQueue {
        return new MessageQueue(messages);
    }
}

// Attempting to extend MessageQueue will result in a compilation error
// class BadQueue extends MessageQueue {} // Error TS2675: Cannot extend a class 'MessageQueue'.
// Class constructor is marked as private.

// Creating an instance of MessageQueue using the static create method
const queue = MessageQueue.create(['message1', 'message2']);

console.log(queue); // Output: MessageQueue { messages: ['message1', 'message2'] }
