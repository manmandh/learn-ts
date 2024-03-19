type ClassConstructor<T> = new (...args: any[]) => T;

function withEZDebug<C extends ClassConstructor<{ getDebugValue(): object }>>(Class: C) {
    return class extends Class {
        debug() {
            return `${Class.name}(${JSON.stringify(this.getDebugValue())})`;
        }
    };
}

class HardToDebugUser {
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string
    ) {}

    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        };
    }
}

let User = withEZDebug(HardToDebugUser);
let user = new User(3, 'Emma', 'Gluzman');
console.log(user.debug()); // Output: User({"id":3,"name":"Emma Gluzman"})
