// Decorators
{
  // Define the Payload class
  class Payload {
      // Constructor or other methods if needed
      constructor(private data: any) {}

      // toString method to serialize the payload
      toString() {
          return JSON.stringify(this.data);
      }
  }

  // Define the ClassConstructor type
  type ClassConstructor<T> = new (...args: any[]) => T;

  // Define the serializable decorator function
  function serializable<T extends ClassConstructor<{ getValue(): Payload }>>(Constructor: T) {
      return class extends Constructor {
          serialize() {
              return this.getValue().toString();
          }
      };
  }

  // Define the APIPayload class
  class APIPayload {
      getValue(): Payload {
          // Implementation of getValue method
          // You might need to replace this with actual implementation
          return new Payload({});
      }
  }

  // Apply the serializable decorator to APIPayload class using @serializable decorator
  const DecoratedAPIPayload = serializable(APIPayload);

  // Create an instance of the decorated class
  const payload = new DecoratedAPIPayload();

  // Call the serialize method on the decorated instance
  console.log(payload.serialize()); // Output: Serialized payload string
}
